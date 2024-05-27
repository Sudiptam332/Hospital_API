Project Overview -
This project provides RESTful APIs for patient registration and fetching psychiatrist details for a given hospital.

Libraries and Frameworks Used -
Express.js: A web application framework for Node.js, used for building the RESTful APIs.
Node.js: JavaScript runtime environment, used for executing the server-side code.
MongoDB: NoSQL database, used for storing the data.
Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js, used for database operations.

API Endpoints - /api/patients/register
Method - POST
Description: Register a new patient.
Request Body:
{
"name": "John Doe",
"address": "123 Main St, Springfield, IL",
"email": "john.doe@example.com",
"phone": "+1234567890",
"password": "Password123",
"photo": "file"
}

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
