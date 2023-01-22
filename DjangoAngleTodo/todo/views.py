from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from todo.models import Task
from todo.serializers import TaskSerializer
 
# from DjangoAngleTodo.todo.models import Task
# from DjangoAngleTodo.todo.serializers import TaskSerializer
from rest_framework.decorators import api_view
# Create your views here.




@api_view(['GET', 'POST', 'DELETE'])
def todo_list(request):
    if request.method == 'GET':
        todos = Task.objects.all()

        name = request.GET.get('name', None)
        if name is not None:
            todos = todos.filter(name__icontains=name)
        
        task_serializer = TaskSerializer(todos, many=True)
        return JsonResponse(task_serializer.data, safe=False)
    
    elif request.method == 'POST':
        todo_data = JSONParser().parse(request)
        task_serializer = TaskSerializer(data=todo_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse(task_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(task_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Task.objects.all().delete()
        return JsonResponse({'message': '{} Todos were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def todo_detail(request, pk):
    try:
        todo = Task.objects.get(pk=pk)
    except Task.DoesNotExist:
        return JsonResponse({'message': 'The todo does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        task_serializer = TaskSerializer(todo)
        return JsonResponse(task_serializer.data)

    elif request.method == 'PUT':
        todo_data = JSONParser().parse(request)
        task_serializer = TaskSerializer(todo, data=todo_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse(task_serializer.data)
        return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        todo.delete()
        return JsonResponse({'message': 'Todo was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def todo_list_complete(request):
    todo = Task.objects.filter(complete=True)

    if request.method == 'GET':
        task_serializer = TaskSerializer(todo, many=True)
        return JsonResponse(task_serializer.data, safe=False)
# class IndexView(generic.ListView):
#     template_name = 'todo/src/app/app.component.html'
#     # context_object_name = 'total_todo_list'
#     def get_queryset(self):
#         """
#         Return total ToDo list
#         """
#         return Task.objects.order_by('complete')



# class DetailView(generic.DetailView):
#     model = Task
#     template_name = 'todo/detail.html'
#     def get_queryset(self):
#         return Task.objects