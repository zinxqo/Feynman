from dataclasses import dataclass

@dataclass
class MessageRequestDTO:
    question: str

    @staticmethod
    def new_instance_from_flask_body(data:dict)-> 'MessageRequestDTO':
        if 'question' not in data:
            raise Exception('question attribute is not found')

        return MessageRequestDTO(
            question=data['question']
        )