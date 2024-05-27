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
API Endpoints - /api/hospitals/details
Method - POST
Description: Fetch all psychiatrists and patient details for a hospital.
Request Body:
{
"hospitalId": "66519e0847b068fbfdb48cd6"
}
Response:
{
"hospitalName": "Apollo Hospitals",
"totalPsychiatristCount": 5,
"totalPatientsCount": 9,
"psychiatristDetails": [
{
"id": "66519e0847b068fbfdb48cdb",
"name": "Dr. Smith",
"patientsCount": 6
},
{
"id": "66519e0847b068fbfdb48cdc",
"name": "Dr. John",
"patientsCount": 1
},
{
"id": "66519e0847b068fbfdb48cdd",
"name": "Dr. Clark",
"patientsCount": 1
},
{
"id": "66519e0847b068fbfdb48cde",
"name": "Dr. Emma",
"patientsCount": 1
},
{
"id": "66519e0847b068fbfdb48cdf",
"name": "Dr. Olivia",
"patientsCount": 0
}
]
}

Postman Collection Link via API: https://api.postman.com/collections/35169450-46a9de86-eef4-4ec9-ab8e-b1b7e1c2c33b?access_key=PMAT-01HYWFEVNV0J6NZFSMKF8T1MFY

Setup and Installation
Clone the repository: git clone https://github.com/Sudiptam332/Hospital_API
Install dependencies: npm install
Run Project - node index.js or nodemon index.js
