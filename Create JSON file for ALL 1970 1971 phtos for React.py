
# using the "Pillow Image Open Tags"

import json
import os
import sys
from datetime import datetime
from PIL import Image
from PIL.ExifTags import TAGS
import re
from operator import attrgetter


os.chdir(r'C:\Users\Larry\OneDrive\Environments\USArmy Project\armyyears\public\photos')

# C:\Users\Larry\OneDrive\Environments\USArmy Project\BerlinYearsWeb\src\assets\images
# C:\Users\lawre\OneDrive\Environments\Filter Gallery\JS CSS with Army pics\images

cur_dir = os.getcwd()
print("Current dir: " + cur_dir)


f_tag = {}
img_file_names = []
# img_resized_names = []
alt_name = []
rec_id = 0
group_id = 0
caption = ''
url = ''
place = ''
group = ''
lastgroup = 'all'
datastr = ''
imgFileOpenBracket = '['
imgFileCloseBracket = '\n]'
imgStartString = '\n\t{'
imgEndString = '\n\t},'
place = ''
imageString = imgFileOpenBracket
imgFileOpenBracket = '['
imageDataOutString = imgFileOpenBracket


# Get list of file names and title in Top folder
# os.chdir(top_folder_name)
for fpi in os.listdir():
    # print("FPI = "+fpi)
    tfn, tfx = os.path.splitext(fpi)
    if tfx != "":
        # Get file description from metadata place in file_title
        img_file = fpi
        image = Image.open(img_file)
        for tag, value in image._getexif().items():
            # print(tag, value)
            if tag in TAGS:
                f_tag[TAGS[tag]] = value
                # print(tag)
        file_title = f_tag['ImageDescription']
        # print('File description = ' + file_title)
        img_file_names.append(fpi)
        # img_resized_names.append(tfn + '_small.JPG')
        alt_name.append(file_title)

# imageString = []


# print("Alt name size: " + str(len(alt_name)))
for i in range(0, len(alt_name)):
    rec_id = i
    group = '"' + alt_name[i] + '"'

    # if (lastgroup != group):
    #     print('Group changed from ' + lastgroup + ' to ' + group)
    #     lastgroup = group
    #     group_id = 0
    # else:
    #     group_id = group_id + 1

    url = img_file_names[i]
    url = '"photos/' + url + '"'

    s = img_file_names[i].split()
    firstWord = s[0]
    caplist = s[:(len(s)-1)]
    caption = ' '.join(str(e) for e in caplist)
    caption = '"' + caption + '"'

    # print('First word is: ' + firstWord)
    # if first file dis "Army" or "Armed ", or "Soldier" or "US Football" then place  is Berlin
    # i first word is Bremerhaven, place is English Channel
    # if first word is "Near Hoenfels", place is Germany
    # Otherwise, first word is Place

    # print('First word = ' + firstWord)
    match firstWord:
        case "Amsterdam":
            place = '"Amsterdam"'
        case "Army":
            place = '"Berlin"'
        case "Armed":
            place = '"Berlin"'
        case "Soldier":
            place = '"Berlin"'
        case "US":
            place = '"Berlin"'
        case "Bremerhaven":
            place = '"English Channel"'
        case "Near":
            place = '"Germany"'
        case "London":
            place = '"London"'
        case "Oxford":
            place = '"Oxford"'
        case _:
            place = '"Berlin"'

    # if (lastgroup != group):
    #     print('Group changed from ' + lastgroup + ' to ' + group
    #           lastgroup=group)

    imageString = f"\n\t\"id\": {rec_id},\n\t\"group_id\": {group_id}, \n\t\"caption\": {caption}, \n\t\"url\": {url}, \n\t\"place\": {place}, \n\t\"group\": {group}"
    imageDataOutString = imageDataOutString + \
        imgStartString + imageString + imgEndString


# for i in range(0, len(imageString)):
#     print(imageString[i:])


lastCharPos = len(imageDataOutString)
print('length of output file :' + str(len(imageDataOutString)))
imageDataOutString[lastCharPos-1]
imageDataOutString = imageDataOutString[:(lastCharPos-1)] + imgFileCloseBracket
print(imageDataOutString)
# print('Last char ' + imageDataOutString[lastCharPos-1:]


os.chdir(r'C:\Users\Larry\OneDrive\Environments\USArmy Project\armyyears\src')


# with open("imagedata.json", "w") as jf:
#     jf.write(imageDataOutString)


print('end')
