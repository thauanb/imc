import os
print("#Builder")
print('[.] Executando Expo Build...')
os.system('expo build:android')
print('[+] Terminado')
input()