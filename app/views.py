from django.shortcuts import render, redirect
from .models import Prato, Pedido
from .forms import PedidoForm

def index(request):
    data = {}
    data['db'] = Prato.objects.all()
    return render(request, 'home/index.html', data)

def promocao(request):
    return render(request, 'home/promocao.html')

def pedidos(request):
    return render(request, 'home/pedidos.html')

def addPedidos(request):
    if request.method == "POST":
        p = Pedido(cpf=request.POST['name'], prato=request.POST['age'], valor = request.POST['value'].replace(',','.'))
        p.save()
    return redirect('../../')
