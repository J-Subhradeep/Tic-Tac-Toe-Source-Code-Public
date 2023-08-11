from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import SecondClientSerializer
from .models import SecondClient
from rest_framework.response import Response
import uuid
# Create your views here.


class JoinView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        values = SecondClient.objects.filter(
            group_name=data.get('group_name')).first()

        serializers = SecondClientSerializer(values)
        is_first = False

        if not values:
            is_first = True
        if serializers.data.get('first_client') and serializers.data.get('second_client'):
            bothClientPresent = True

        else:
            bothClientPresent = False

        return Response(dict(data=serializers.data, both=bothClientPresent, is_first=is_first))


class GenerateRoom(APIView):
    def get(self, request, *args, **kwargs):
        unique_id = str(uuid.uuid4()).replace("-","")
        return Response({'room': unique_id})


class SecondClientView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        group_name = data.get('grp_name')
        first_client = data.get('name')
        get_grp_data = SecondClient.objects.filter(group_name=group_name)
        if get_grp_data:
            grp = get_grp_data.first()
            serializers = SecondClientSerializer(grp)
            is_first = False
            if serializers.data.get('first_client') and serializers.data.get('second_client'):
                bothClientPresent = True
                return Response(dict(data=serializers.data, both=bothClientPresent, is_first=is_first))
            bothClientPresent = False

            newgrp = SecondClient(id=grp.id, group_name=grp.group_name,
                                  first_client=grp.first_client, second_client=first_client)
            newgrp.save()
            serializers = SecondClientSerializer(newgrp)
            return Response(dict(data=serializers.data, both=bothClientPresent, is_first=is_first))
        else:
            grp = SecondClient.objects.create(
                group_name=group_name, first_client=first_client)
            # grp = SecondClient.objects.filter(group_name=group_name).first()
            serializers = SecondClientSerializer(grp)
            is_first = True
            bothClientPresent = False
            return Response(dict(data=serializers.data, both=bothClientPresent, is_first=is_first))


class GroupDeleteView(APIView):
    def post(self, request, format=None):
        print(request.data)
        first = SecondClient.objects.filter(
            group_name=request.data.get('grp_name')).first()
        if first:
            first.delete()
        return Response({})
