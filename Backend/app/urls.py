# backend/app/urls.py
from rest_framework.routers import DefaultRouter
from .views import ProjectsViewSet, PostsViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'projects', ProjectsViewSet)
router.register(r'posts', PostsViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = router.urls
