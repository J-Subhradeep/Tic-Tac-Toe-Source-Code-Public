# from channels.db import database_sync_to_async
from .models import SecondClient
# from asgiref.sync import async_to_sync


class DatabaseMangement:
    @database_sync_to_async
    def exist_group(self, group_name):
        group = SecondClient.objects.filter(group_name=group_name).first()
        if group:
            return True
        else:
            return False

    @database_sync_to_async
    def create_group(self, group_name, client_name):
        group = SecondClient(group_name=group_name, first_client=client_name)
        group.save()

    @database_sync_to_async
    def create_and_return_first_client(self, group_name, client_name):
        group = SecondClient.objects.get(group_name=group_name)
        group.second_client = client_name
        group.save()
        return group.first_client

    @database_sync_to_async
    def delete_group(self, group_name):
        print(async_to_sync(self.exist_group)(group_name))
        if SecondClient.objects.filter(group_name=group_name).first():
            SecondClient.objects.get(group_name=group_name).delete()

    @database_sync_to_async
    def both_user_joined(self, group_name):
        group = SecondClient.objects.get(group_name=group_name)
        if group.second_client:
            return True
        else:
            return False
