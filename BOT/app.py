from telegram.ext import Application, MessageHandler, filters
from dotenv import load_dotenv
import traceback
import requests
import os

load_dotenv()

TOKEN = os.getenv("TOKEN_BOT")
INFLUENCER = os.getenv("INFLUENCER")
URL_API = os.getenv("URL_API")

async def receber_mensagem(update, context):
    try:
        mensagem = update.message.text
        binaryId = mensagem.split("REGISTRO > ")[1].split(" ")[0]
        
        r = requests.post(
            f"{URL_API}/api/user", json={"idBinary": binaryId, "influencer": INFLUENCER}
        )

        if r.status_code == 200:
            log = f"id: {binaryId} adicionado ao banco!"
            await update.message.reply_text(log)
        else:
            log = f"id: {binaryId} erro ao adicionar ao banco!"
            await update.message.reply_text(log)
        
        print(log, r.status_code)

    except:
        traceback.print_exc()

def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(MessageHandler(filters.ALL, receber_mensagem))
    app.run_polling()

if __name__ == "__main__":
    print('Inicializando BOT...')
    main()