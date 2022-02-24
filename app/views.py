from this import d
from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from .models import Prato, Pedido
from .forms import PedidoForm
import json

def index(request):
    db = {}
    db['pratos'] = Prato.objects.all()
    return render(request, 'home/index.html', db)

def promocao(request):
    return render(request, 'home/promocao.html')

def pedidos(request):
    return render(request, 'home/pedidos.html')

def addPedidos(request):
    if request.method == "POST":
        p = Pedido(cpf=request.POST['name'], prato=request.POST['age'], valor = request.POST['value'].replace(',','.'))
        p.save()
    return redirect('../../')



###############
##### API #####
###############
# def getAllPratos(request):
#     data = []
#     for p in Prato.objects.all():
#         print(p.image)
#         data.append({"id": p.id, "title": p.nome,"desc": p.descricao, "ingred": p.ingredients, "valor": p.valor, "image": str(p.image)})
#         print(p.image, "   teste")
#     return HttpResponse(json.dumps(data))