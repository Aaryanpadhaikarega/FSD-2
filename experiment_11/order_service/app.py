from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

orders = {
    101: {"status": "Pending"},
    102: {"status": "Shipped"},
    103: {"status": "Delivered"}
}

@app.route('/orders/<int:id>', methods=['PUT'])
def update_order(id):
    if id in orders:
        data = request.get_json()
        orders[id]["status"] = data.get("status", orders[id]["status"])
        return jsonify({"message": "Order updated", "order": orders[id]})
    return jsonify({"error": "Order not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)