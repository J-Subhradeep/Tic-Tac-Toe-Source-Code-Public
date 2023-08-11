
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from asgiref.sync import async_to_sync, sync_to_async
import json
from channels.db import database_sync_to_async
import requests
# from . import datamanage
# from .models import SecondClient
class SecondUserConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        print("Webbsocket Connected...")
        await self.accept()
        self.kwargs = self.scope["url_route"]["kwargs"]
        # exist = await self.exist_group(self.kwargs.get('grp_name'))
        # if not exist:
        #     print("first")
        #     await self.create_group(self.kwargs.get('grp_name'), self.kwargs.get('client_name'))
        # else:
        #     if await self.both_user_joined(self.kwargs.get('grp_name')):
        #         await self.send_json({'allowed': False})
        #         await self.close()
        #         return
        #     first_client = await self.create_and_return_first_client(self.kwargs.get('grp_name'), self.kwargs.get('client_name'))
        #     await self.channel_layer.group_add(self.kwargs.get('grp_name'), self.channel_name)
        #     await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': {'first_client': first_client, 'second_client': self.kwargs.get('client_name')}})
        # await self.channel_layer.group_add(self.kwargs.get('grp_name'), self.channel_name)
        data = await sync_to_async(requests.post)("http://localhost:8001/api/",
                                                  data={"grp_name": self.kwargs["grp_name"], 'name': self.kwargs["client_name"]})
        # print(data.json())
        if data.json().get('both'):
            await self.send_json({'allowed': False})
            await self.close(3001)
            return
        await self.channel_layer.group_add(self.kwargs.get('grp_name'), self.channel_name)
        # if data.json().get('is_first'):
        await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': data.json().get('data')})

    async def receive(self, text_data=None, bytes_data=None):
        print("receive...")

    async def disconnect(self, close_code):
        print("Webbsocket disconnect...")

        await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': {'second_client': False}})
        await self.channel_layer.group_discard(self.kwargs.get('grp_name'), self.channel_name)
        if close_code != 3001:
            await sync_to_async(requests.post)("http://localhost:8001/api/", {"grp_name": self.kwargs["grp_name"]})

    async def chat_message(self, event):
        # print(event)
        await self.send_json(event['msg'])


class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        print("chat websocket connected")
        await self.accept()
        self.kwargs = self.scope["url_route"]["kwargs"]
        await self.channel_layer.group_add(self.kwargs.get('grp_name'), self.channel_name)

    async def chat_message(self, event):
        # print(event)
        await self.send_json(event['msg'])

    async def receive(self, text_data=None, bytes_data=None):
        # print("receive...", text_data)
        await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': json.loads(text_data)})
        # await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': })

    async def disconnect(self, close_code):
        # print("Webbsocket disconnect...")
        await self.channel_layer.group_discard(self.kwargs.get('grp_name'), self.channel_name)


class BoardConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        # print("chat websocket connected")
        await self.accept()
        self.kwargs = self.scope["url_route"]["kwargs"]
        await self.channel_layer.group_add(self.kwargs.get('grp_name'), self.channel_name)

    async def chat_message(self, event):
        # print(event)
        await self.send_json(event['msg'])

    async def receive(self, text_data=None, bytes_data=None):
        # print("receive...", text_data)
        await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': json.loads(text_data)})
        # await self.channel_layer.group_send(self.kwargs.get('grp_name'), {'type': 'chat.message', 'msg': })

    async def disconnect(self, close_code):
        # print("Webbsocket disconnect...")
        await self.channel_layer.group_discard(self.kwargs.get('grp_name'), self.channel_name)
