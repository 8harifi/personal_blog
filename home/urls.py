from django.urls import path
from . import views


urlpatterns = [
    path("", views.home, name="home"),
    path("home/", views.home_redirect, name="home redirect"),
    path("contact/", views.contact, name="contact"),
    path("search/", views.search, name="search"),
    path("about/", views.about, name="about"),
]
