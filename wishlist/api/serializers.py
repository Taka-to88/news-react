from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from api.models import News


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class NewsSerializer(serializers.HyperlinkedModelSerializer):

    published = serializers.DateTimeField(
        format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = News
        fields = ('id', 'title', 'link', 'published', 'image', 'body')
