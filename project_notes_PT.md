Aqui está o arquivo de anotações do projeto em português:  

---

### **Anotações do Projeto**  

---

#### **28 de Novembro de 2024**  
Tenho testado diferentes abordagens e, até agora, esta é a configuração atual do meu portfólio:  

**Backend**  
- Container Docker → Google Cloud Run  

**Frontend**  
- Upload do projeto → Vercel (para Next.js)  

Atualmente, o problema está no **deploy do backend**, que é uma API REST em Django e precisa servir arquivos de mídia enviados ao projeto.  

Descobri que no **modo DEBUG**:  
```python
# Arquivo settings.py no projeto Django
DEBUG = True
```
Os arquivos de mídia podem ser servidos sem problemas.  

No entanto, ao fazer o deploy da API para produção:  
```python
# Arquivo settings.py para deploy do projeto
DEBUG = False
```
O frontend não consegue mais acessar as imagens.  

---

#### **Tentativas de Solução**  

**Opção 1**  
Tentei uma solução temporária usando `re_path` e `serve` do Django:  
```python
from django.contrib import admin
from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    # Suas rotas da API aqui
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]
```
Isso funcionou, mas é inseguro e não escalável.  

**Opção 2**  
Decidi usar o **Google Cloud Storage** com Buckets. A ideia é configurar o Django para enviar arquivos de mídia diretamente para o bucket.  

```python
# Arquivo settings.py
from google.oauth2 import service_account

GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
    os.path.join(BASE_DIR, '<nome-do-arquivo-de-credenciais>.json')
)

DEFAULT_FILE_STORAGE = 'django_blog_project.gcloud.GoogleCloudMediaFileStorage'
GS_PROJECT_ID = 'backend-gaamsoftware'
GS_BUCKET_NAME = 'bucket-django-mediafiles-serverfile'
MEDIA_URL = f'https://storage.googleapis.com/{GS_BUCKET_NAME}/'
```

---

#### **2 de Dezembro de 2024**  
A configuração acima estava incorreta. Segui um guia e atualizei meu setup:  
**Referência:** [Guia 2024: Configurando um Storage Bucket para Seu Projeto Django no Google Cloud Platform (GCP)](https://medium.com/@nnathanassefa/2024-guide-setting-up-a-storage-bucket-for-your-django-project-on-google-cloud-platform-gcp-372186366343)  

Criei um arquivo utilitário para o armazenamento de mídia:  
```python
# gcsUtil.py
from storages.backends.gcloud import GoogleCloudStorage

Media = lambda: GoogleCloudStorage(location='media')
Static = lambda: GoogleCloudStorage(location='static')

# Arquivo settings.py
from google.oauth2 import service_account

STORAGES = {
    "default": {
        "BACKEND": "storages.backends.gcloud.GoogleCloudStorage",
    },
    "staticfiles": {
        "BACKEND": "storages.backends.gcloud.GoogleCloudStorage",
    }
}
GS_BUCKET_NAME = '<nome-do-bucket>'
GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
    os.path.join(BASE_DIR, '<caminho-para-service-account>.json'),
)
```
Após os testes, os arquivos de mídia agora aparecem corretamente no frontend.  

---

#### **11 de Dezembro de 2024**  
Trabalhei na **funcionalidade de sidebar para dispositivos móveis**.  

Passos:  
1. Criei um `div` preto para sobreposição dos botões de navegação.  
2. Adicionei lógica para alternar a sidebar e a sobreposição.  
3. Usei `setTimeout` para atrasar o fechamento da sidebar ao clicar em um link.  

```tsx
allBlack?.addEventListener('click', () => {
    if (sidebarOpen) {
        setTimeout(() => {
            Clickbar();
        }, 400); // Ajuste o atraso conforme necessário
    }
});
```

---

#### **17 de Dezembro de 2024**  
Implementei **alternância para modo escuro** e listei arquivos do bucket GCS no frontend.  

**Alternância de Modo Escuro:**  
```tsx
// Footer.tsx
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
};
```

**Listagem de Arquivos do Bucket:**  
Criei uma API no backend para listar os arquivos do bucket GCS e buscá-los no frontend.  

```python
# views.py
from google.cloud import storage
from rest_framework.response import Response

def list_blobs(bucket_name):
    storage_client = storage.Client()
    blobs = storage_client.list_blobs(bucket_name)
    return [blob.name for blob in blobs]

class DocumentsViewSet(viewsets.ViewSet):
    def list(self, request):
        files = list_blobs('<nome-do-bucket>')
        return Response(files)
```

---

#### **18 de Dezembro de 2024**  
**Renderização de Markdown para Posts:**  
Atualizei o backend para permitir o upload de arquivos Markdown:  
```python
# models.py
class Post(models.Model):
    info = models.FileField(blank=True, upload_to='posts_md')
```
No frontend, criei um componente `PostLegacy` para renderizar arquivos Markdown:  
```tsx
import ReactMarkdown from 'react-markdown';

export function PostLegacy({ fileUrl }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(fileUrl).then(res => res.text()).then(setContent);
    }, [fileUrl]);

    return <ReactMarkdown>{content}</ReactMarkdown>;
}
```

---

#### **Tarefas Restantes**  
1. Adicionar funcionalidade de barra de pesquisa.  
2. Completar as páginas `/link-library` e `/inspiration`.  
3. Finalizar o design das páginas individuais.  

---