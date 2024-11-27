from telethon import TelegramClient, events
from dotenv import load_dotenv
from gerenciador_json import carregar_dados, inicializar_json
import traceback
import requests
import asyncio
import os



inicializar_json()
load_dotenv()

CONFIGS = carregar_dados()['BOTS']

URL_API = os.getenv("URL_API")  # Endpoint do servidor API
API_ID = os.getenv("API_ID")  # Insira sua API ID do Telegram
API_HASH = os.getenv("API_HASH")  # Insira sua API Hash do Telegram


client = TelegramClient("monitor", API_ID, API_HASH)



@client.on(events.NewMessage)
async def capturar_id(event):
    try:
        idBinary = event.text.split("REGISTRO > ")[1].split(" ")[0]
        group_id = event.chat_id

        bot_config = [item for item in CONFIGS if item["group_id"] == group_id][0]

        response = requests.post(
            f"{URL_API}/api/user",
            json={"idBinary": idBinary, "influencer": bot_config["influencer"]},
        )

        if response.status_code == 200:
            log = f"ID: {idBinary} adicionado com sucesso!"
            print(log)
            await event.reply(log)

        elif response.status_code == 500:
            log = f"Duplicação do ID: {idBinary}"
            print(log)
            await event.reply(log)
            
    except:
        await event.reply(f"Falha no servidor")
        traceback.print_exc()



async def main():
    print("Iniciando monitoramento...")
    await client.start()
    print("Monitoramento iniciado. Pressione Ctrl+C para parar.")
    await client.run_until_disconnected()

if __name__ == "__main__":
    asyncio.run(main())
