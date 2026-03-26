Objective

To develop and deploy a microservice-based backend system using Python (Flask), where different services handle specific functionalities independently.

Project Structure

experiment_11/
│
├── customer_service/
│ ├── app.py
│ ├── requirements.txt
│ └── Procfile
│
├── order_service/
│ ├── app.py
│ ├── requirements.txt
│ └── Procfile
│
├── screenshots/
└── README.md

Technologies Used
Python 3
Flask
Flask-CORS
Gunicorn
Postman (API Testing)
Render (Deployment)
Microservices Description
1. Customer Service

Fetches orders for a specific customer using in-memory data

Endpoint:
GET /customers/<id>/orders

Example:
http://127.0.0.1:5000/customers/1/orders

Response:
[101, 102]

2. Order Service

Updates the status of an order using in-memory data

Endpoint:
PUT /orders/<id>

Example:
http://127.0.0.1:5001/orders/101

Request Body:
{
"status": "Delivered"
}

Response:
{
"message": "Order updated",
"order": {
"status": "Delivered"
}
}

Running Locally

Step 1: Install dependencies
python -m pip install -r requirements.txt

Step 2: Run services

Customer Service:
cd customer_service
python app.py

Order Service:
cd order_service
python app.py

Testing with Postman
GET request for fetching customer orders
PUT request for updating order status
Screenshots are included in the screenshots folder
Deployment (Render)

Customer Service:
<PASTE_YOUR_CUSTOMER_RENDER_LINK>

Order Service:
<PASTE_YOUR_ORDER_RENDER_LINK>

Output Screenshots

Screenshots of API testing using Postman are included in the screenshots folder

Conclusion

This experiment demonstrates the implementation of a microservice-based architecture using Flask, where services are independently developed, tested, and deployed.
