import os
import json


default = {"BOTS": [{"influencer": "zryyh", "group_id": -1002431019749}]}


# Função para inicializar o arquivo JSON
def inicializar_json(arquivo = "config.json"):
    # Verificar se o arquivo existe
    if not os.path.exists(arquivo):
        print(f"Arquivo {arquivo} não existe. Criando novo...")
        # Criar o arquivo com conteúdo inicial vazio
        with open(arquivo, "w") as f:
            json.dump(default, f, indent=4)
    else:
        print(f"Arquivo {arquivo} já existe.")


# Função para carregar dados do arquivo JSON
def carregar_dados(arquivo = "config.json"):
    try:
        with open(arquivo, "r") as f:
            return json.load(f)
    except json.JSONDecodeError:
        print("Erro ao carregar JSON. Criando arquivo limpo...")
        with open(arquivo, "w") as f:
            json.dump(default, f, indent=4)
        return default


# Função para salvar dados no arquivo JSON
def salvar_dados(dados, arquivo = "config.json"):
    with open(arquivo, "w") as f:
        json.dump(dados, f, indent=4)