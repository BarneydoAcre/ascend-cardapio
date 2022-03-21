from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from . import models
from .forms import PedidoForm
import json
from datetime import datetime, timezone, timedelta

def index(request):
    db = {}
    db['time'] = int(datetime.now(timezone(timedelta(hours=-4))).strftime("%H:%M").split(':')[0])
    ger = {}
    for g in models.Gerencial.objects.all():
        ger['abertura'] = int(g.abertura)
        ger['fechamento'] = int(g.fechamento)
        ger['logo'] = g.logo
        ger['imagem'] = g.main_image
    db['gerencial'] = ger
    
        
    db['pratos'] = models.Prato.objects.all()
    return render(request, 'home/index.html', db)

def promocao(request):
    return render(request, 'home/promocao.html')

def pedidos(request):
    return render(request, 'home/pedidos.html')

def addPedidos(request):
    if request.method == "POST":
        p = models.Pedido( prato=request.POST['prato'], cpf=request.POST['name']).save()
    return redirect('/')



###############
##### API #####
###############
def getAllPratos(request):
    data = []
    for p in models.Prato.objects.filter(id=request.GET['id']):
        data.append({"id": p.id, "title": p.name,"desc": p.desc, "ingred": p.ingredients, "valor": p.value, "image": str(p.image)})
    return HttpResponse(json.dumps(data))

def createPedido(request):
    data = []

    return HttpResponse(json.dumps(data))


#https://api.whatsapp.com/send?phone=5567984540339&text=espaço%20quebra%0Avirgula%2C redirect