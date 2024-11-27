from peewee import MySQLDatabase
from dotenv import load_dotenv
import os

# Carregar as variáveis do .env
load_dotenv()

# Configurando conexão database
db = MySQLDatabase(
    os.getenv('DATABASE_NAME'),
    user=os.getenv('DATABASE_USER'),
    password=os.getenv('DATABASE_PASSWORD'),
    host=os.getenv('DATABASE_HOST'),
    port=int(os.getenv('DATABASE_PORT'))
)