### MyPortfolio Documentation  

#### [TO-DO List](MyPortfolio/TO-DO%20List.md)  

```scss
git clone https://github.com/your-repo/myportfolio.git
```

---

### 1. **Estrutura do Projeto e Configuração Inicial**  

Para organizar o projeto, o backend (Django) e o frontend (React) devem ser separados em diretórios diferentes, dentro da mesma estrutura de projeto.  

**Estrutura sugerida do diretório:**  
```plaintext
myportfolio/
├── backend/ (Django Backend)
│   ├── manage.py
│   ├── db.sqlite3
│   ├── app/
│   └── ...
├── frontend/ (React Frontend)
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   └── ...
├── .gitignore
└── README.md
```

- **Backend**: Crie um projeto Django dentro da pasta `backend`.  
- **Frontend**: Use `create-react-app` para configurar o frontend dentro da pasta `frontend`.  

---

### 2. **Configuração do Backend com Django**  

- **Configuração do Ambiente Virtual**  
  ```bash
  python3 -m venv env
  source env/bin/activate
  pip install django djangorestframework
  ```

- **Modelos e Serializadores**  
  Crie os modelos e serializers para as entidades principais, como `Post` e `Project`.  
  ```python
  # backend/app/models.py
  class Project(models.Model):
      title = models.CharField(max_length=200)
      description = models.TextField()
      image = models.ImageField(upload_to='projects/')
  ```

  ```python
  # backend/app/serializers.py
  from rest_framework import serializers
  from .models import Project

  class ProjectSerializer(serializers.ModelSerializer):
      class Meta:
          model = Project
          fields = '__all__'
  ```

- **Endpoints da API**  
  Use o Django REST Framework para expor as APIs que serão consumidas pelo frontend.  
  ```python
  # backend/app/views.py
  from rest_framework import viewsets
  from .models import Project
  from .serializers import ProjectSerializer

  class ProjectViewSet(viewsets.ModelViewSet):
      queryset = Project.objects.all()
      serializer_class = ProjectSerializer
  ```

---

### 3. **Frontend com React**  

- **Configuração Inicial**  
  ```bash
  npx create-react-app frontend
  cd frontend
  npm install axios react-router-dom
  ```

- **Estrutura de Componentes**  
  ```plaintext
  frontend/
  ├── src/
  │   ├── components/  # Componentes reutilizáveis (Navbar, Footer)
  │   ├── pages/       # Páginas (Home, About, Projects)
  │   ├── services/    # Funções para chamadas à API
  │   └── App.js
  ```

- **Exemplo de Consumo de API**  
  ```jsx
  // frontend/src/services/api.js
  import axios from 'axios';

  const API_URL = 'http://localhost:8000/api/';

  export const fetchProjects = async () => {
      const response = await axios.get(`${API_URL}projects/`);
      return response.data;
  };
  ```

---

### 4. **Configuração de Armazenamento de Mídia**  

Para hospedar arquivos de mídia enviados pelo backend, use Google Cloud Storage (GCS).  

- **Configuração no Django**  
  ```python
  # backend/settings.py
  from google.oauth2 import service_account

  GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
      os.path.join(BASE_DIR, '<arquivo-de-credenciais>.json')
  )

  DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
  GS_BUCKET_NAME = '<nome-do-bucket>'
  MEDIA_URL = f'https://storage.googleapis.com/{GS_BUCKET_NAME}/'
  ```

---

### 5. **Deploy do Projeto**  

#### **Backend**  
- Use o Google Cloud Run para o container do Django.  
- Exemplo de `Dockerfile`:  
  ```dockerfile
  FROM python:3.10
  WORKDIR /app
  COPY . .
  RUN pip install -r requirements.txt
  CMD ["gunicorn", "--bind", "0.0.0.0:8080", "backend.wsgi:application"]
  ```

#### **Frontend**  
- Hospede o React no Vercel.  
- Adicione configurações no `vercel.json`:  
  ```json
  {
    "rewrites": [
      { "source": "/api/(.*)", "destination": "http://127.0.0.1:8000/api/$1" }
    ]
  }
  ```

---

### 6. **Funcionalidades Adicionais**  

#### **Modo Escuro**  
```jsx
// frontend/src/components/Footer.js
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
};
```

#### **Renderização de Markdown**  
```jsx
// frontend/src/components/PostLegacy.js
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

### 7. **Segurança no Admin do Django**  

#### **Restrição por IP**  
```nginx
location /admin/ {
    allow 203.0.113.42;
    deny all;
    proxy_pass http://127.0.0.1:8000;
}
```

#### **Autenticação Básica**  
```nginx
auth_basic "Restricted Access";
auth_basic_user_file /etc/nginx/.htpasswd;
```

---

### Links Relacionados  

- [TO-DO List](MyPortfolio/TO-DO%20List.md)  
- [Credenciais](MyPortfolio/Credentials.md)  
- [Configuração de Storage](MyPortfolio/StorageSetup.md)  

--- 

Deixe-me saber se precisar de mais detalhes ou ajustes!