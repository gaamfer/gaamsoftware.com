from rest_framework import viewsets
from .models import Projects, Posts, Category
from .serializers import ProjectsSerializer, PostsSerializer, CategorySerializer
from rest_framework.response import Response

class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
