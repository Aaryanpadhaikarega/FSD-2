from flask import Flask, request, jsonify

app = Flask(__name__)

students = []

@app.route('/students', methods=['POST'])
def add_student():
    data = request.json
    students.append(data)
    return jsonify({"message": "Student added"}), 201

@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    for student in students:
        if student['id'] == id:
            return jsonify(student)
    return jsonify({"message": "Student not found"}), 404

@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    for student in students:
        if student['id'] == id:
            student.update(request.json)
            return jsonify({"message": "Student updated"})
    return jsonify({"message": "Student not found"}), 404

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    for student in students:
        if student['id'] == id:
            students.remove(student)
            return jsonify({"message": "Student deleted"})
    return jsonify({"message": "Student not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)