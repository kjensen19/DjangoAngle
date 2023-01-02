from django.urls import path
from . import views


app_name = 'todo'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:task_id>/', views.detail, name='detail')
]






# from django.conf.urls import url 
# from tutorials import views 
 
# urlpatterns = [ 
#     url(r'^api/tutorials$', views.tutorial_list),
#     url(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
#     url(r'^api/tutorials/published$', views.tutorial_list_published)
# ]