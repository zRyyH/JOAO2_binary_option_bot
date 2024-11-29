from models import Events
import traceback



def criar_event(trader_id: str, influencer: str, event_type: str):
    try:
        Events.create(trader_id=trader_id, influencer=influencer, event_type=event_type)

        return {"result": True, "status": True}
    except:
        return {"result": None, "status": False, "error": traceback.format_exc()}



def obter_events():
    try:
        query = Events.select()
        dados = list(query.dicts())

        return {"result": dados, "status": True}
    except:
        return {"result": None, "status": False, "error": traceback.format_exc()}



def obter_event(trader_id, influencer, event_type):
    try:
        Events.get((Events.trader_id == trader_id) & (Events.influencer == influencer) & (Events.event_type == event_type))

        return {"result": True, "status": True}
    except:
        return {"result": None, "status": False, "error": traceback.format_exc()}