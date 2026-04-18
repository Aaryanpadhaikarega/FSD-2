# 📘 Experiment: Connect Backend with Database and Perform CRUD Operations

## 🔗 Project Overview

This project demonstrates how to build a backend server using **Flask (Python)**, connect it with a **MySQL database**, and perform **CRUD (Create, Read, Update, Delete)** operations with proper validations.

---

## 🎯 Aim

To create a backend server using Flask and connect it to a MySQL database to perform CRUD operations on student data and test APIs using Postman.

---

## 🛠️ Technologies Used

* Python (Flask)
* MySQL
* MySQL Workbench
* Postman
* VS Code

---

## 📂 Project Structure

```
student-api/
│── app.py
│── requirements.txt
│── README.md
```

---

## 🗄️ Database Setup

### Create Database:

```sql
CREATE DATABASE student_db;
USE student_db;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);
```

---

## ⚙️ Installation & Setup

### 1. Install Dependencies

```bash
pip install flask flask-mysqldb
```

### 2. Run Server

```bash
python app.py
```

Server will run on:

```
http://127.0.0.1:5000
```

---

## 🔌 API Endpoints

### ➕ CREATE Student

* **Method:** POST
* **URL:** `/students`
* **Body:**

```json
{
  "name": "Aaryan",
  "email": "aaryan@gmail.com",
  "age": 20
}
```

---

### 📖 READ Students

* **Method:** GET
* **URL:** `/students`

---

### ✏️ UPDATE Student

* **Method:** PUT
* **URL:** `/students/{id}`
* **Body:**

```json
{
  "name": "Updated",
  "email": "new@gmail.com",
  "age": 21
}
```

---

### ❌ DELETE Student

* **Method:** DELETE
* **URL:** `/students/{id}`

---

## ✅ Validations Implemented

* Required fields check (name, email, age)
* Basic email validation
* Proper error responses with status codes

---

## 🧪 Testing

All APIs were tested using **Postman**:

* POST request for adding student
* GET request for retrieving data
* PUT request for updating data
* DELETE request for removing data

---

## 📸 Output

* Screenshots of Postman responses
* Screenshot of MySQL database table

---

## 🚀 Conclusion

This experiment successfully demonstrates how to:

* Build a backend using Flask
* Connect Flask with MySQL database
* Perform CRUD operations
* Validate user input
* Test APIs using Postman

---

## 📚 Learning Outcomes

* Understanding of REST APIs
* Hands-on experience with Flask
* Database connectivity using MySQL
* API testing using Postman
* Error handling and validation

---
