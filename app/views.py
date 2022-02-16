from this import d
from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from .models import Prato, Pedido
from .forms import PedidoForm
import json

def index(request):
    return render(request, 'home/index.html')

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
def getAllPratos(request):
    data = []
    for p in Prato.objects.all():
        data.append({"title": p.nome,"desc": p.descricao, "ingred": p.ingredients, "valor": p.valor})
    return HttpResponse(json.dumps(data))