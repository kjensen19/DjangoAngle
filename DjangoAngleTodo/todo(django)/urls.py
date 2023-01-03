from django.urls import path
from . import views


app_name = 'todo'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail')
]






# from django.conf.urls import url 
# from tutorials import views 
 
# urlpatterns = [ 
#     url(r'^api/tutorials$', views.tutorial_list),
#     url(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
#     url(r'^api/tutorials/published$', views.tutorial_list_published)
# ]