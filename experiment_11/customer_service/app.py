from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

customers = {
    1: {"name": "Aaryan", "orders": [101, 102]},
    2: {"name": "Rahul", "orders": [103]}
}

@app.route('/customers/<int:id>/orders', methods=['GET'])
def get_orders(id):
    if id in customers:
        return jsonify(customers[id]["orders"])
    return jsonify({"error": "Customer not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)