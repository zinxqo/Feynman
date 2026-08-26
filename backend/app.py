from flask import Flask
from flask_cors import CORS
import backend.chatgptcontroller as chatgptcontroller


def bootstrap():
    app = Flask(__name__)

    CORS(app)

    app.register_blueprint(
        chatgptcontroller.chat_gpt_route,
         url_prefix=f'/{chatgptcontroller.chat_gpt_route_path}'
    )


    app.run(port=3000, debug=True)

app = bootstrap()

if __name__ == '__main__':
    app.run(port=3000)
