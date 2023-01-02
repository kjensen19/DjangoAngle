from django.shortcuts import get_object_or_404 ,render
from django.views import generic
from .models import Task

# Create your views here.

class IndexView(generic.ListView):
    template_name = 'todo/index.html'
    
    def get_queryset(self):
        """
        Return total ToDo list
        """
        return Task.objects.order_by('complete')



class DetailView(generic.DetailView):
    model = Task
    template_name = 'todo/detail.html'