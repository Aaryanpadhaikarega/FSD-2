from flask import Flask, request, jsonify
import jwt
import datetime
from functools import wraps

app = Flask(__name__)

SECRET_KEY = "secret123"

USERNAME = "admin"
PASSWORD = "password"


# JWT Token Verification
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):

        token = None

        if "Authorization" in request.headers:
            auth_header = request.headers["Authorization"]
            token = auth_header.split(" ")[1]

        if not token:
            return jsonify({"message": "Token missing"}), 401

        try:
            jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except:
            return jsonify({"message": "Invalid Token"}), 401

        return f(*args, **kwargs)

    return decorated


# Home Route
@app.route("/")
def home():
    return "Experiment 9 - Token Authentication API Running"


# 1️⃣ Authorization Header (Basic Auth)
@app.route("/auth-header")
def auth_header():

    auth = request.authorization

    if auth and auth.username == USERNAME and auth.password == PASSWORD:
        return jsonify({"message": "Authorization Header Auth Successful"})

    return jsonify({"message": "Authentication Failed"}), 401


# 2️⃣ Custom Header Authentication
@app.route("/custom-header")
def custom_header():

    username = request.headers.get("X-Username")
    password = request.headers.get("X-Password")

    if username == USERNAME and password == PASSWORD:
        return jsonify({"message": "Custom Header Auth Successful"})

    return jsonify({"message": "Authentication Failed"}), 401


# 3️⃣ JWT Login Route
@app.route("/login", methods=["POST"])
def login():

    data = request.json

    if data["username"] == USERNAME and data["password"] == PASSWORD:

        token = jwt.encode(
            {
                "user": USERNAME,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
            },
            SECRET_KEY,
            algorithm="HS256"
        )

        return jsonify({"token": token})

    return jsonify({"message": "Invalid Credentials"}), 401


# Protected JWT Route
@app.route("/jwt-protected")
@token_required
def jwt_protected():
    return jsonify({"message": "JWT Authentication Successful"})


if __name__ == "__main__":
    app.run(debug=True)