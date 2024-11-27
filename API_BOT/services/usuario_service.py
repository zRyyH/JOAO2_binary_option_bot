from models import User
import traceback


def criar_user(
    idBinary: str,
    influencer: str):

    try:
        User.create(
            idBinary=idBinary,
            influencer=influencer)

        return {"result": None, "status": True}
    except:
        return {"result": None, "status": False, "error": traceback.format_exc()}


def obter_users():
    try:
        query = User.select()

        # Converter para dicionários:
        dados = list(query.dicts())

        return {"result": dados, "status": True}
    except:
        return {"result": None, "status": False, "error": traceback.format_exc()}


def obter_user(idBinary, influencer):
    try:
        User.get((User.idBinary == idBinary) & (User.influencer == influencer))
        return {"result": True, "status": True}
    except:
        return {"result": None, "status": False, "error": traceback.format_exc()}