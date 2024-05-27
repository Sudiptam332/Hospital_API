Project Overview -
This project provides RESTful APIs for patient registration and fetching psychiatrist details for a given hospital.

Libraries and Frameworks Used - <br />
Express.js: A web application framework for Node.js, used for building the RESTful APIs. <br />
Node.js: JavaScript runtime environment, used for executing the server-side code. <br />
MongoDB: NoSQL database, used for storing the data. <br />
Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js, used for database operations. <br />
<br />
API Endpoints - /api/patients/register <br />
Method - POST<br />
Description: Register a new patient.<br />
Request Body:<br />
{<br />
"name": "John Doe",<br />
"address": "123 Main St, Springfield, IL",<br />
"email": "john.doe@example.com",<br />
"phone": "+1234567890",<br />
"password": "Password123",<br />
"photo": "file"<br />
}<br />
<br />
API Endpoints - /api/hospitals/details<br />
Method - POST<br />
Description: Fetch all psychiatrists and patient details for a hospital.<br />
Request Body:<br />
{<br />
"hospitalId": "66519e0847b068fbfdb48cd6"<br />
}<br />
Response:<br />
{<br />
"hospitalName": "Apollo Hospitals",<br />
"totalPsychiatristCount": 5,<br />
"totalPatientsCount": 9,<br />
"psychiatristDetails": [<br />
{<br />
"id": "66519e0847b068fbfdb48cdb",<br />
"name": "Dr. Smith",<br />
"patientsCount": 6<br />
},<br />
{<br />
"id": "66519e0847b068fbfdb48cdc",<br />
"name": "Dr. John",<br />
"patientsCount": 1<br />
},<br />
{<br />
"id": "66519e0847b068fbfdb48cdd",<br />
"name": "Dr. Clark",<br />
"patientsCount": 1<br />
},<br />
{<br />
"id": "66519e0847b068fbfdb48cde",<br />
"name": "Dr. Emma",<br />
"patientsCount": 1<br />
},<br />
{<br />
"id": "66519e0847b068fbfdb48cdf",<br />
"name": "Dr. Olivia",<br />
"patientsCount": 0<br />
}<br />
]<br />
}<br />
<br />
Postman Collection Link via API: https://api.postman.com/collections/35169450-46a9de86-eef4-4ec9-ab8e-b1b7e1c2c33b?access_key=PMAT-01HYWFEVNV0J6NZFSMKF8T1MFY<br />
<br />
Setup and Installation<br />
Clone the repository: git clone https://github.com/Sudiptam332/Hospital_API<br />
Install dependencies: npm install<br />
Run Project - node index.js or nodemon index.js<br />
