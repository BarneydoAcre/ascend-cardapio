from django.urls import path 
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('promocao/', views.promocao, name='promocao'),
    path('pedidos/', views.pedidos, name='pedido'),
    path('pedidos/addpedido/', views.addPedidos, name='addPedido'),
    ###############
    ##### API #####
    ###############
    path('api/produtos/', views.getAllProdutos, name="apiPratos"),
    path('api/whatsnum/', views.getWhatsNum, name="apiWhatsNum"),
]