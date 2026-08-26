from flask import Blueprint, request, jsonify
from backend.chat_gpt_service import ChatGPTService
from backend.chat_gpt_model import MessageRequestDTO
chat_gpt_route_path = 'chat-gpt-ai'
chat_gpt_route = Blueprint(chat_gpt_route_path,__name__)


@chat_gpt_route.route('/message',methods=['POST'])
def get_ai_model_answer():
    body = request.json

    ai_string_response = ChatGPTService.get_ai_model_answer(MessageRequestDTO.new_instance_from_flask_body(body))

    return jsonify({"answer": ai_string_response})
