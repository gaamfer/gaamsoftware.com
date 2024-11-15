from rest_framework import serializers
from .models import *

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['url']

class ProjectsSerializer(serializers.ModelSerializer):
    links = serializers.SerializerMethodField()
    
    class Meta:
        model = Projects
        fields = '__all__'

    def get_links(self, obj):
        return obj.links.url

class PostsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Posts
        fields = '__all__'

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'




