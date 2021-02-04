from django.db import models
import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery,MeQuery
from graphene_django import DjangoObjectType, fields
from .models import ExtendUser
from .models import *

class Users(DjangoObjectType):
    class Meta:
        model = ExtendUser
        fields = ('email','id',)

class Products(DjangoObjectType):
    class Meta:
        model= Product
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

    def resolve_all_users(root,info):
        return ExtendUser.objects.all()
    def resolve_all_products(root,info):
        return Product.objects.all()

class Mutation(AuthMutation,graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query,mutation=Mutation)