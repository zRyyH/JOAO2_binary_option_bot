from peewee import Model, CharField, AutoField
from config import db

# Account Model
class User(Model):
    key = AutoField()
    idBinary = CharField(unique=True, null=False)
    influencer = CharField(null=False)

    class Meta:
        database = db  # Associa o modelo ao banco de dados
        
# Criar a tabela 'Usuario' apenas se ela não existir
db.connect()
db.create_tables([User], safe=True)
db.close()