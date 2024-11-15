from django.db import models


class Projects(models.Model):
    id = models.AutoField(primary_key=True)
    header = models.CharField(max_length=20)
    info = models.CharField(max_length=400)
    project_pic = models.ImageField(upload_to='project_pic/')
    timestamp = models.DateTimeField(auto_now_add=True)
    links = models.ForeignKey('Link', on_delete=models.CASCADE,related_name='projects',null=False,default=1)

    def __str__(self):
        return self.header


class Link(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(max_length=200)  # Store the link URL
    description = models.CharField(max_length=100, blank=True)  # Optional description for the link

    def __str__(self):
        return self.url
    

# Images That will be available for each project
class Images(models.Model):
    project = models.ForeignKey('Projects',on_delete=models.CASCADE, related_name='images', null=True)
    post = models.ForeignKey('Posts',on_delete=models.CASCADE, related_name='images', null=True)
    image = models.ImageField(upload_to='images/')
    image_ref=models.IntegerField(default=0)

    def __str__(self):
        return f'{self.post if self.post is not None else self.project}_{self.image_ref}'
    

# Categories for the Projects 
class Category(models.Model):
    name = models.CharField(max_length=100)
    project = models.ForeignKey('Projects', on_delete=models.CASCADE, related_name='category', blank=True,null=True, default=None)
    post = models.ForeignKey('Posts', on_delete=models.CASCADE, related_name='category', blank=True,null=True, default=None)

    def __str__(self):
        return self.name

# Model for Posts that will be submitted 
class Posts(models.Model):
    id = models.AutoField(primary_key=True)
    header = models.CharField(max_length=20)
    info = models.CharField(max_length=400)
    project_pic = models.ImageField(upload_to='project_pic/')
    timestamp = models.DateTimeField(auto_now_add=True)
    links = models.ForeignKey('Link', on_delete=models.CASCADE,related_name='posts',null=False,default=1)

    def __str__(self):
        return self.header
