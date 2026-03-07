# Experiment 9: Token-Based Authentication using Flask

## Aim

To implement token-based authentication using a Python Flask backend server and test the APIs using Postman.

---

## Objective

The objective of this experiment is to understand and implement different authentication techniques in a backend server. The application demonstrates how to secure APIs using:

1. Authorization Header (Basic Authentication)
2. Custom Header Authentication
3. JWT (JSON Web Token) Authentication

---

## Technologies Used

* Python
* Flask Framework
* PyJWT Library
* Postman (for API testing)
* Render (for deployment)

---

## Project Structure

```
experiment_9
│
├── app.py
├── requirements.txt
├── README.md
└── screenshots
```

---

## Installation and Setup

### Step 1: Clone or Download the Project

Place the project folder on your system.

### Step 2: Install Required Libraries

Run the following command:

```
python -m pip install flask pyjwt gunicorn
```

Or install using requirements file:

```
python -m pip install -r requirements.txt
```

---

## Running the Application

Run the Flask server using:

```
python app.py
```

The application will run at:

```
http://127.0.0.1:5000
```

---

## API Endpoints

### 1. Authorization Header Authentication

Endpoint:

```
GET /auth-header
```

Authentication Type: **Basic Auth**

Credentials:

```
Username: admin
Password: password
```

---

### 2. Custom Header Authentication

Endpoint:

```
GET /custom-header
```

Headers required:

```
X-Username : admin
X-Password : password
```

---

### 3. JWT Token Generation

Endpoint:

```
POST /login
```

Request Body (JSON):

```
{
  "username": "admin",
  "password": "password"
}
```

Response:

```
{
  "token": "JWT_TOKEN"
}
```

---

### 4. Access Protected Route using JWT

Endpoint:

```
GET /jwt-protected
```

Header:

```
Authorization: Bearer JWT_TOKEN
```

Response:

```
{
  "message": "JWT Authentication Successful"
}
```

---

## Testing using Postman

All APIs were tested using Postman by sending HTTP requests and verifying authentication responses.

Screenshots of successful API responses are included in the `screenshots` folder.

---

## Deployment

The project was deployed using the Render platform. The deployed API link can be accessed through the demo URL provided in the submission.

---

## Conclusion

In this experiment, token-based authentication was successfully implemented using Flask. Different authentication techniques including Basic Authentication, Custom Header Authentication, and JWT-based authentication were tested using Postman. This experiment helps in understanding how backend APIs can be secured using tokens and headers.
