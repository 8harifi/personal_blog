from django.shortcuts import render
from .models import Post
from django.http import Http404


def all_posts(request):
    latest_posts_list = Post.objects.order_by('-pub_date')[:10]
    context = {
        'latest_posts_list': latest_posts_list
    }

    return render(request, 'posts/all_posts.html', context=context)


def detail(request, id):
    try:
        post = Post.objects.get(pk=id)
    except Post.DoesNotExist:
        raise Http404("Post was not found!!")
    context = {
        'post': post,
    }
    return render(request, 'posts/detail.html', context=context)
