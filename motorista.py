idade = input('Qual é sua idade? ')


def carteira_motorista(idade):
    idade = int(idade)

    if idade >= 18:
        print('Pode tirar carteira de motorista')
    else:
        print('Não pode tirar carteira de motorista')


carteira_motorista(idade)
