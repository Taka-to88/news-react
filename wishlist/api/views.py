from django.shortcuts import render
from django.http import HttpResponse
import json
from rest_framework import generics, authentication, permissions
from api import serializers
from .models import User, News
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.exceptions import ValidationError
from rest_framework import status
from rest_framework.response import Response


class CreateUserView(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = serializers.NewsSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)
    #
    # def get_queryset(self):
    #     return self.queryset.filter(user=self.request.user)
