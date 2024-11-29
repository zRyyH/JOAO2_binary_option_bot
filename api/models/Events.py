from peewee import Model, CharField, AutoField
from config import db

# Account Model
class Events(Model):
    key = AutoField()
    trader_id = CharField(null=False)
    influencer = CharField(null=False)
    event_type = CharField(null=False)

    class Meta:
        database = db  # Associa o modelo ao banco de dados
        
# Criar a tabela 'Usuario' apenas se ela não existir
db.connect()
db.create_tables([Events], safe=True)
db.close()