import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

class PongConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        async_to_sync(self.channel_layer.group_add)(
            "pong_group",
            self.channel_name
        )

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            "pong_group",
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        ball_position = data['ball_position']
        async_to_sync(self.channel_layer.group_send)(
            "pong_group",
            {
                'type': 'ball_position_update',
                'ball_position': ball_position
            }
        )

    def ball_position_update(self, event):
        ball_position = event['ball_position']
        self.send(text_data=json.dumps({
            'ball_position': ball_position
        }))
