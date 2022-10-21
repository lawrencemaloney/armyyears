import json


def install_sort(imagerec):
    return imagerec['group']


with open('src\imagedata.json', 'r') as f:
    data = json.load(f)

# print(data)


data.sort(key=install_sort)

data_str = json.dumps(data, indent=2)
print(data_str)

# print(data)
# C:\Users\Larry\OneDrive\Environments\USArmy Project\armyyears\src\imagedata.json
