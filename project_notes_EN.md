### **Project Annotations**  
#### **English Version**  

---

#### **November 28, 2024**  
I’ve been trying different approaches, and so far, here’s the current setup for my portfolio:  

**Backend**  
- Docker container → Google Cloud Run  

**Frontend**  
- Project upload → Vercel (for Next.js)  

Currently, the problem lies in deploying the backend, which is a Django REST API that needs to serve media files uploaded to the project.  

I discovered that in **DEBUG mode**:  
```python
# settings.py file in Django project
DEBUG = True
```
Media files can be served without any issues.  

However, when deploying the API for production:  
```python
# settings.py for project deployment
DEBUG = False
```
The frontend cannot fetch the images anymore.  

---

#### **Solution Attempts**  

**Option 1**  
I attempted a workaround using `re_path` and `serve` from Django:  
```python
from django.contrib import admin
from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    # Your API routes here
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]
```
This worked but is insecure and not scalable.  

**Option 2**  
I decided to use **Google Cloud Storage** with Buckets. The idea is to configure Django to upload media files directly to the bucket.  

```python
# settings.py
from google.oauth2 import service_account

GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
    os.path.join(BASE_DIR, '<name-of-credential-file>.json')
)

DEFAULT_FILE_STORAGE = 'django_blog_project.gcloud.GoogleCloudMediaFileStorage'
GS_PROJECT_ID = 'backend-gaamsoftware'
GS_BUCKET_NAME = 'bucket-django-mediafiles-serverfile'
MEDIA_URL = f'https://storage.googleapis.com/{GS_BUCKET_NAME}/'
```

---

#### **December 2, 2024**  
The configuration above was incorrect. I followed a guide and updated my setup:  
**Reference:** [2024 Guide: Setting Up a Storage Bucket for Your Django Project on Google Cloud Platform (GCP)](https://medium.com/@nnathanassefa/2024-guide-setting-up-a-storage-bucket-for-your-django-project-on-google-cloud-platform-gcp-372186366343)  

I created a utility file for media storage:  
```python
# gcsUtil.py
from storages.backends.gcloud import GoogleCloudStorage

Media = lambda: GoogleCloudStorage(location='media')
Static = lambda: GoogleCloudStorage(location='static')

# settings.py
from google.oauth2 import service_account

STORAGES = {
    "default": {
        "BACKEND": "storages.backends.gcloud.GoogleCloudStorage",
    },
    "staticfiles": {
        "BACKEND": "storages.backends.gcloud.GoogleCloudStorage",
    }
}
GS_BUCKET_NAME = '<bucket-name>'
GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
    os.path.join(BASE_DIR, '<path-to-service-account>.json'),
)
```
After testing, the media files now appear correctly on the frontend.  

---

#### **December 11, 2024**  
I worked on the **sidebar functionality for mobile devices**.  

Steps:  
1. Created a black overlay div for navigation buttons.  
2. Added logic to toggle the sidebar and overlay.  
3. Used `setTimeout` to delay the sidebar's closing when a link is clicked.  

```tsx
allBlack?.addEventListener('click', () => {
    if (sidebarOpen) {
        setTimeout(() => {
            Clickbar();
        }, 400); // Adjust delay as needed
    }
});
```

---

#### **December 17, 2024**  
I implemented **dark mode toggling** and listed files from the GCS bucket in the frontend.  

**Dark Mode Toggle:**  
```tsx
// Footer.tsx
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
};
```

**Listing Bucket Files:**  
I created a backend API to list files from the GCS bucket and fetch them in the frontend.  

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
        files = list_blobs('<bucket-name>')
        return Response(files)
```

---

#### **December 18, 2024**  
**Markdown Rendering for Posts:**  
I updated the backend to allow markdown file uploads:  
```python
# models.py
class Post(models.Model):
    info = models.FileField(blank=True, upload_to='posts_md')
```
In the frontend, I created a `PostLegacy` component to render markdown files:  
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

#### **Remaining Tasks**  
1. Add search bar functionality.  
2. Complete the `/link-library` and `/inspiration` pages.  
3. Finalize the look of individual pages.  

