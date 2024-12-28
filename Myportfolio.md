### MyPortfolio Documentation  

---

#### [TO-DO List](MyPortfolio/TO-DO%20List.md)  

```scss
git clone https://github.com/your-repo/myportfolio.git
```

---

### 1. **Project Structure and Initial Setup**  

To keep the project organized, separate the backend (Django) and frontend (React) into different directories within the same project folder.  

**Suggested directory structure:**  
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

- **Backend**: Create a Django project inside the `backend` folder.  
- **Frontend**: Use `create-react-app` to set up the frontend inside the `frontend` folder.  

---

### 2. **Backend Configuration with Django**  

- **Set up a Virtual Environment**  
  ```bash
  python3 -m venv env
  source env/bin/activate
  pip install django djangorestframework
  ```

- **Models and Serializers**  
  Create models and serializers for key entities like `Post` and `Project`.  
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

- **API Endpoints**  
  Use Django REST Framework to expose APIs that the frontend will consume.  
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

### 3. **Frontend with React**  

- **Initial Setup**  
  ```bash
  npx create-react-app frontend
  cd frontend
  npm install axios react-router-dom
  ```

- **Component Structure**  
  ```plaintext
  frontend/
  ├── src/
  │   ├── components/  # Reusable components (Navbar, Footer)
  │   ├── pages/       # Pages (Home, About, Projects)
  │   ├── services/    # Functions for API calls
  │   └── App.js
  ```

- **Example API Integration**  
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

### 4. **Media Storage Setup**  

To host media files uploaded via the backend, use Google Cloud Storage (GCS).  

- **Django Configuration**  
  ```python
  # backend/settings.py
  from google.oauth2 import service_account

  GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
      os.path.join(BASE_DIR, '<credentials-file>.json')
  )

  DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
  GS_BUCKET_NAME = '<bucket-name>'
  MEDIA_URL = f'https://storage.googleapis.com/{GS_BUCKET_NAME}/'
  ```

---

### 5. **Deploying the Project**  

#### **Backend**  
- Use Google Cloud Run to deploy the Django container.  
- Example `Dockerfile`:  
  ```dockerfile
  FROM python:3.10
  WORKDIR /app
  COPY . .
  RUN pip install -r requirements.txt
  CMD ["gunicorn", "--bind", "0.0.0.0:8080", "backend.wsgi:application"]
  ```

#### **Frontend**  
- Deploy the React app on Vercel.  
- Add configuration in `vercel.json`:  
  ```json
  {
    "rewrites": [
      { "source": "/api/(.*)", "destination": "http://127.0.0.1:8000/api/$1" }
    ]
  }
  ```

---

### 6. **Additional Features**  

#### **Dark Mode**  
```jsx
// frontend/src/components/Footer.js
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
};
```

#### **Markdown Rendering**  
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

### 7. **Securing Django Admin**  

#### **Restrict by IP Address**  
```nginx
location /admin/ {
    allow 203.0.113.42;
    deny all;
    proxy_pass http://127.0.0.1:8000;
}
```

#### **Basic Authentication**  
```nginx
auth_basic "Restricted Access";
auth_basic_user_file /etc/nginx/.htpasswd;
```

---

### Related Links  

- [TO-DO List](MyPortfolio/TO-DO%20List.md)  
- [Credentials](MyPortfolio/Credentials.md)  
- [Storage Configuration](MyPortfolio/StorageSetup.md)  

--- 

Let me know if you need further details or adjustments!