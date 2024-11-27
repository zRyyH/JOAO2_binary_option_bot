from services import criar_user, obter_users, obter_user
from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route("/api/user", methods=["POST"])
def user_post():
    # Obtendo json
    dados = request.get_json()

    # Criar account
    response = criar_user(**dados)

    if response["status"] == True:
        return jsonify({"mensagem": "Usuario criado com sucesso!"}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


@app.route("/api/user/<int:item_id>/<string:influencer>", methods=["GET"])
def user_get_by_id(item_id, influencer):
    # Obter accounts
    response = obter_user(item_id, influencer)

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


@app.route("/api/users", methods=["GET"])
def user_get():
    # Obter accounts
    response = obter_users()

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)