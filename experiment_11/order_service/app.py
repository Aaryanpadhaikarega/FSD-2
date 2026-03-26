from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# In-memory data
orders = {
    101: {"status": "Pending"},
    102: {"status": "Shipped"},
    103: {"status": "Delivered"}
}

# Home route (optional)
@app.route('/')
def home():
    return "Order Service Running"

# API: Update order status
@app.route('/orders/<int:id>', methods=['PUT'])
def update_order(id):
    if id in orders:
        data = request.get_json()
        orders[id]["status"] = data.get("status", orders[id]["status"])
        return jsonify({
            "message": "Order updated",
            "order": orders[id]
        })
    return jsonify({"error": "Order not found"}), 404


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5001))
    app.run(host='0.0.0.0', port=port)