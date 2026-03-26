from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# In-memory data
customers = {
    1: {"name": "Aaryan", "orders": [101, 102]},
    2: {"name": "Rahul", "orders": [103]}
}

# Home route (optional but useful)
@app.route('/')
def home():
    return "Customer Service Running"

# API: Get customer orders
@app.route('/customers/<int:id>/orders', methods=['GET'])
def get_orders(id):
    if id in customers:
        return jsonify(customers[id]["orders"])
    return jsonify({"error": "Customer not found"}), 404


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)