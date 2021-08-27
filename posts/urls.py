from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_posts, name='view all posts'),
    path('<int:id>/', views.detail, name='detail'),
]
