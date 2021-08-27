from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import User


class Post (models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = RichTextField()
    pub_date = models.DateTimeField()

    def __str__(self):
        return f"{self.author} | {self.title}"
