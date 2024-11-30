from services import criar_event, obter_events, obter_event
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/pri_registro", methods=["GET"])
def pri_registro():
    trader_id = request.args.get("trader_id")
    influencer = request.args.get("postback_name")

    response = criar_event(
        trader_id=trader_id, influencer=influencer, event_type="PRI_REGISTRO"
    )

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


@app.route("/registro", methods=["GET"])
def registro():
    trader_id = request.args.get("trader_id")
    influencer = request.args.get("postback_name")

    response = criar_event(
        trader_id=trader_id, influencer=influencer, event_type="REGISTRO"
    )

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


@app.route("/deposito", methods=["GET"])
def deposito():
    trader_id = request.args.get("trader_id")
    influencer = request.args.get("postback_name")

    response = criar_event(
        trader_id=trader_id, influencer=influencer, event_type="DEPOSITO"
    )

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


@app.route("/events", methods=["GET"])
def events():
    response = obter_events()

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500


@app.route("/event", methods=["GET"])
def event():
    trader_id = request.args.get("trader_id")
    influencer = request.args.get("postback_name")
    event_type = request.args.get("event_type")

    response = obter_event(
        trader_id=trader_id, influencer=influencer, event_type=event_type
    )

    if response["status"] == True:
        return jsonify({"mensagem": response["result"]}), 200
    else:
        return jsonify({"mensagem": response["error"]}), 500
    

if __name__ == "__main__":
    app.run(debug=True, port=7000)