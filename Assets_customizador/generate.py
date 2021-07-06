import numpy as np
from PIL import Image
import os

#data = {"genero" : "", "corpoF":"", "corpoM":"", "calcaF": "", "calcaM":"" , "blusaF":"", "blusaM": "", "calcadoF": "", "calcadoM":"", "boca":"", "nariz":"", "olho":"", "sobrancelha":"", "cabelo": "", "oculos":"", "brinco": ""}


def generateAvatar(data):
    keys = list(data)
    values = data.values()
    valuesList = list(values)
    
    if(data["genero"] == 'F'):
        background = Image.open(data['corpoF'])
        for i in range(3, 8, 2):
            img = Image.open(valuesList[i])
            background.paste(img, (0, 0), img)
        for i in range(9, 16):
            img = Image.open(valuesList[i])
            background.paste(img, (0, 0), img)
    else:
        background = Image.open(data['corpoM'])
        for i in range(4, 9, 2):
            img = Image.open(valuesList[i])
            background.paste(img, (0, 0), img)
        for i in range(9, 16):
            img = Image.open(valuesList[i])
            background.paste(img, (0, 0), img)
    
    background.save("teste.png")

    

    # for key, value in data.items():
        # print(key +" "+ value)
        # if(key == 'corpo'):
        #     continue
        # img = Image.open(value)
        # background.paste(img, (0, 0), img)
    
    # background.save(data["calca"].replace('.png', '') + data["blusa"].replace('.png', '') + data["bandana"].replace('.png', '') + data["chapeu"].replace('.png', '') + ".png")

# data = {"calca": "calca1.png", "blusa": "blusa1.png", "bandana":"bandana1.png", "chapeu": "chapeu1.png"}
# calcas = ["calca1.png", "calca2.png", "calca3.png"]
# blusas = ["blusa1.png", "blusa2.png", "blusa3.png"]
# bandanas = ["bandana1.png", "bandana2.png", "bandana3.png"]
# chapeus = ["chapeu1.png", "chapeu2.png", "chapeu3.png"]
# for calca in calcas:
#     for blusa in blusas:
#         for bandana in bandanas:
#             for chapeu in chapeus:
#                 data['calca']=calca
#                 data['blusa']=blusa
#                 data['bandana']=bandana
#                 data['chapeu']=chapeu
#                 generateAvatar(data)
                # os.remove(data["calca"] + data["blusa"] + data["bandana"] + data["chapeu"] + ".png")


brincos = ["brinco1_cor1.png", "brinco2_cor1.png"]

#cabelos***************
cabelos = []
for i in range(1,14):
    for j in range(1, 7):
        if(i<10):
            cabelos.append(f'cabelo0{i}_cor0{j}.png')
        else:
            cabelos.append(f'cabelo{i}_cor0{j}.png')
#***********************

# blusas***************
blusasF = []
for i in range(1,4):
    for j in range(1, 4):
        if(i < 4):
            blusasF.append(f'corpo_f_blusa{i}_cor{j}.png')
    

for i in range(4, 9):
    blusasF.append(f'corpo_f_blusa{i}.png')
# ***********************

#calças femininas
calcasF = []
for i in range(1, 4):
    for j in range(1, 4):
        calcasF.append(f'corpo_f_calca{i}_cor{j}.png')
#****************

#calçado feminino
calcadoF = []
for i in range(1, 3):
    for j in range(1,4):
        calcadoF.append(f'corpo_f_calcado{i}_cor{j}.png')
#***********************

corpoF = []
for i in range(1,6):
    corpoF.append(f'corpo_f_cor{i}.png')

#*********************
blusaM = []
for i in range(1, 3):
    for j in range(1,4):
        blusaM.append(f'corpo_m_blusa{i}_cor{j}.png')

for i in range(3, 9):
    blusaM.append(f'corpo_m_blusa{i}.png')            
#*********************
calcaM = []
for i in range(1, 4):
    for j in range(1, 4):
        calcaM.append(f'corpo_m_calca{i}_cor{j}.png')
#*********************
calcadoM = []
for i in range(1, 3):
    for j in range(1, 4):
        calcadoM.append(f'corpo_m_calcado{i}_cor{j}.png')
#*********************
corpoM = []
for i in range(1, 6):
    corpoM.append(f'corpo_m_cor{i}.png')
#*********************
oculos = []
for i in range(1, 7):
    oculos.append(f'oculos_{i}.png')
#*********************
boca = ["rosto_boca_01_normal.png", "rosto_boca_02_feliz.png", "rosto_boca_03_raiva.png", "rosto_boca_04_triste.png"]
#*********************

nariz = ["rosto_nariz01.png", "rosto_nariz02.png"]

#*********************
olho = []
for i in range(1, 5):
    olho.append(f'rosto_olho{i}.png')
#*********************
sobrancelha = ["rosto_sobrancelha_01_normal.png", "rosto_sobrancelha_02_feliz.png", "rosto_sobrancelha_03_raiva.png", "rosto_sobrancelha_04_triste.png"]


#2 brincos
#78 cabelos
#6 oculos
#4 bocas
#2 narizes
#4 olhos
#4 sobrancelhas
#119.808

#14 blusas f
#9 calças f
#6 calçados f
#5 corpos f
#452.874.240

#12 blusas M
#9 calças M
#6 calçados M
#5 corpos M
#388.177.920

# data = {"brinco": "", "cabelo": "", "blusaF":"", "calcaF": "", "calcadoF": "", "corpoF":"", "blusaM": "", "calcaM":"", "calcadoM":"", "corpoM":"", "oculos":"", "boca":"", "nariz":"", "olho":"", "sobrancelha":""}


data = {"genero" : "", "corpoF":"", "corpoM":"", "calcaF": "", "calcaM":"" , "blusaF":"", "blusaM": "", "calcadoF": "", "calcadoM":"", "boca":"", "nariz":"", "olho":"", "sobrancelha":"", "cabelo": "", "oculos":"", "brinco": ""}

data["genero"] = "M"
data["brinco"] = brincos[0]
data["cabelo"] = cabelos[0]
data["blusaF"] = blusasF[0]
data["calcaF"] = calcasF[0]
data["calcadoF"] = calcadoF[0]
data["corpoF"] = corpoF[0]
data["blusaM"] = blusaM[0]
data["calcaM"] = calcaM[0]
data["calcadoM"] = calcadoM[0]
data["corpoM"] = corpoM[0]
data["oculos"] = oculos[0]
data["boca"] = boca[0]
data["nariz"] = nariz[0]
data["olho"] = olho[0]
data["sobrancelha"] = sobrancelha[0]
generateAvatar(data)










# if(not context['form']['user_id'].value()):
#     data=request.GET
#     print(data)
#     data._mutable=True
#     data['user_id']=str(uuid.uuid4())


# user_id = forms.CharField(widget=forms.HiddenInput(), required=False)