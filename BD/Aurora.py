import mysql.connector

mydb = mysql.connector.connect(
    host='localhost', 
    user='course_w',
    password='2311sasha',
    database='AURORA'
)

mycursor = mydb.cursor()

blob_value = open("./diffuse/diffuse13.jpg",'rb').read()

import cv2
import numpy as np
from itertools import chain
img = cv2.imread("./diffuse/diffuse13.jpg")
b = img[:,:,0]
g = img[:,:,1]
r = img[:,:,2]
str(b)
newR = ''.join(str(ele) for sub in r for ele in sub)
newB = ''.join(str(ele) for sub in b for ele in sub)
newG = ''.join(str(ele) for sub in g for ele in sub)
handle1 = open('./diffuse/rgb/diffuse13g.txt', 'w')
handle1.write(newG)
handle1.close()
handle2 = open('./diffuse/rgb/diffuse13r.txt', 'w')
handle2.write(newR)
handle2.close()
handle3 = open('./diffuse/rgb/diffuse13b.txt', 'w')
handle3.write(newB)
handle3.close()


SqlParams = ("INSERT INTO aurora (type, date, time, latitude, longitude, place, r, g, b, originalImage) VALUES ('DIFFUSE','2020-11-22','23:44', 44.874899,-107.261693,'Dayton, Wyoming', %s, %s, %s, %s)")

mycursor.execute(SqlParams, ( '6348435151465748595146484849404949404144424049495258606145484946495452525450494849444140465348494547474849434753525449515556541046648514848505352475046585360535053535', '685447555552625669595153545345555748505350485454616767665053545454595757595554535449504954585354505252535549556160595357616164119745659565655585753565468636862595959615', '7154485858526559716154575456485559504952525057576672737053565756576260606258575657524948566156575355555655495763626256576164661227658615858586160535656696470', blob_value), multi=True)

#mydb.commit()













