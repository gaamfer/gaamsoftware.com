from django.db import models


class Projects(models.Model):
    id = models.AutoField(primary_key=True)
    header = models.CharField(max_length=20)
    info = models.Charfield(max_length=400)
    project_pic = models.ImageField(upload_to='project_pic/')
    timestamp = models.DateTimeField(auto_now_add=True)
    links = models.ManyToManyField('Link', related_name='projects')


class Link(models.Model):
    url = models.URLField(max_length=200)  # Store the link URL
    description = models.CharField(max_length=100, blank=True)  # Optional description for the link

    def __str__(self):
        return self.url
    

# Images That will be available for each project
class ProjImages(models.Model):
    ...

# Categories for the Projects 
class Category(models.Model):
    ...

# Model for Posts that will be submitted 
class Posts(models.Model):
    ...