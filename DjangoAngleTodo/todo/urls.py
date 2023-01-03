# from django.urls import path
# from . import views


# app_name = 'todo'
# urlpatterns = [
#     path('', views.IndexView.as_view(), name='index'),
#     path('<int:pk>/', views.DetailView.as_view(), name='detail')
# ]






from django.urls import re_path 
from todo import views 
 
urlpatterns = [ 
    re_path(r'^todo$', views.todo_list),
    re_path(r'^todo/(?P<pk>[0-9]+)$', views.todo_detail),
    re_path(r'^todo/complete$', views.todo_list_complete)
]