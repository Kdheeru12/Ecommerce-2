from django.db import models
import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery,MeQuery
from graphene_django import DjangoObjectType, fields
from .models import ExtendUser
from .models import *
from .utils import cookieCart,cartData,guestOrder

class Users(DjangoObjectType):
    class Meta:
        model = ExtendUser
        fields = ('email','id',)

class Products(DjangoObjectType):
    class Meta:
        model= Product
        fields: ('__all__')
class OrderItems(DjangoObjectType):
    class Meta:
        model = OrderItem
        fields: ('__all__') 

class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    verify_token = mutations.VerifyToken.Field()
    refresh_token = mutations.RefreshToken.Field()
    revoke_token = mutations.RevokeToken.Field()

class Query(UserQuery,MeQuery,graphene.ObjectType):
    all_users = graphene.List(Users)
    all_products = graphene.List(Products)
    all_cartItems = graphene.List(OrderItems)
    def resolve_all_users(root,info):
        return ExtendUser.objects.all()
    def resolve_all_products(root,info):
        return Product.objects.all()
    def resolve_all_cartItems(root,info):
        if info.context.user.is_authenticated:
            print('ddd')
            customer = info.context.user.customer
            order,created = Order.objects.get_or_create(customer=customer,complete=False)
            print(order)
            print(created)
            items = order.orderitem_set.all()
            cartItems = order.get_cart_items
            return cartItems
        # if info.context.user.is_authenticated:
        #     return Product.objects.all()
        # else:
        #     return Product.objects.none()
class AddMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        action = graphene.String()

    items = graphene.String()
    @classmethod
    def mutate(cls,root,info,id,action):
        product = Product.objects.get(pk=id)
        customer = info.context.user.customer
        order,created = Order.objects.get_or_create(customer=customer,complete=False)
        orderItem,created = OrderItem.objects.get_or_create(order=order,product=product)
        if action == 'add':
            orderItem.quantity = (orderItem.quantity + 1)
        elif action == 'remove':
            orderItem.quantity = (orderItem.quantity - 1)
        orderItem.price=float(product.price)
        orderItem.total_price=float(orderItem.quantity*product.price)
        orderItem.save()
        if orderItem.quantity <= 0:
            orderItem.delete()
        print(orderItem)
        return AddMutation(items='Success')


class Mutation(AuthMutation,graphene.ObjectType):
    update_order = AddMutation.Field()

schema = graphene.Schema(query=Query,mutation=Mutation)