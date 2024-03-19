#Funções como Funciona?
# 1 - Preciso de um problema:
# Crie uma função que LEIA o nome e a idade de uma pessoa.
'''
def ler_dados():
    nome = input("Nome: ")
    idade = int("Nome: ")
ler_dados()


# 2 -Problema

# Crie uma função que RETORNE o nome e a idade de uma pessoa

def ler_dados():
    nome_local = input("Nome: ")
    idade_local = int(input("Idade: "))
    return nome_local, idade_local
nome, idade = ler_dados()
print(nome, idade)
'''