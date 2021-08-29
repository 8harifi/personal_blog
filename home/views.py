# from django.http.response import HttpResponseRedirect
from django.shortcuts import render, redirect

def home (request):
    return render(request, "home/home.html")

def contact (request):
    return render(request, "home/contact.html")

def search (request):
    return render(request, "home/search.html")

def about (request):
    return render(request, "home/about.html")

def home_redirect (request):
    return redirect("/")
