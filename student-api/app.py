from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# ---------------- MYSQL CONFIG ----------------
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Aaryan06'   # 🔁 change if needed
app.config['MYSQL_DB'] = 'student_db'

mysql = MySQL(app)

# ---------------- HOME ROUTE ----------------
@app.route('/')
def home():
    return "Server is running"

# ---------------- CREATE ----------------
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    age = data.get('age')

    # Validation
    if not name or not email or not age:
        return jsonify({"error": "All fields required"}), 400

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO student(name,email,age) VALUES(%s,%s,%s)", (name, email, age))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student added successfully"})

# ---------------- READ ----------------
@app.route('/students', methods=['GET'])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student")
    rows = cur.fetchall()
    cur.close()

    result = []
    for row in rows:
        result.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "age": row[3]
        })

    return jsonify(result)

# ---------------- UPDATE ----------------
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    age = data.get('age')

    if not name or not email or not age:
        return jsonify({"error": "All fields required"}), 400

    cur = mysql.connection.cursor()
    cur.execute("UPDATE student SET name=%s,email=%s,age=%s WHERE id=%s",
                (name, email, age, id))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student updated successfully"})

# ---------------- DELETE ----------------
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM student WHERE id=%s", (id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student deleted successfully"})

# ---------------- RUN SERVER ----------------
if __name__ == '__main__':
    app.run(debug=True)