from tkinter import image_names
import cv2,time
import pandas as pd
from datetime import datetime
import requests
import base64

first_frame=None
list1=[None,None]
time1=[]
imagedata1 = None

# To record start and end time
df=pd.DataFrame(columns=["start","end"]) 

# To capture image using webcam
video=cv2.VideoCapture(0)
def send(start, end, frame):
    
	assert frame is not None
    
	payload = {
               'image': frame,
			   'start': str(start),
			   'end': str(end),
               
	           }

	requests.post('http://localhost:3001/camera', data=payload)


saved = False
def test_save(image_data):
	global saved
    
	if not saved:
		cv2.imshow('captured', image_data)
		saved = True




while True:

	check,frame=video.read()
	status=0

	gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
	gray=cv2.GaussianBlur(gray,(21,21),0)
	if first_frame is None:
		first_frame=gray
		continue

	#calculating the difference between frames to detect motion
	delta_frame=cv2.absdiff(first_frame,gray) 

	thresh_frame=cv2.threshold(delta_frame,120,255,cv2.THRESH_BINARY)[1]

	thresh_frame=cv2.dilate(thresh_frame,None,iterations=2)
	(cnts,_)=cv2.findContours(thresh_frame.copy(),cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE) 

	for contour in cnts:
		#If the value is small it can even detect small objects that 
		# are in motion contour means continuos area
		if cv2.contourArea(contour)<10000: 
			continue
		status=1

		(x,y,w,h)=cv2.boundingRect(contour)
		cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),3)

	list1.append(status)
	if list1[-1]==1 and list1[-2]==0:
		time1.append(datetime.now())
		ret, encoded = cv2.imencode('.jpg', frame)
		filename = datetime.now().strftime('%I-%M-%S-%p')
		cv2.imwrite(filename + '.jpg', frame)
		imagedata1 = encoded.tobytes()
		imagedata1 = base64.b64encode(imagedata1)


	if list1[-1]==0 and list1[-2]==1:
		assert imagedata1 is not None
		print(f"{datetime.now()} Motion end.")
		time1.append(datetime.now())
		print(len(imagedata1))
		send(time1[-2], time1[-1], imagedata1)
		imagedata1 = None


	cv2.imshow("Coloreframe",frame)
	key=cv2.waitKey(1)


	if key==ord('q'):
		if status==1:
			time1.append(datetime.now())
		break



video.release()
cv2.destroyAllWindows()