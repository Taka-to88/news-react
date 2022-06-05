from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register('news', views.NewsViewSet)

urlpatterns = [
    path('user/create/', views.CreateUserView.as_view(), name='create'),
    path('', include(router.urls)),
]
