from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory storage
users = []

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    users.append(data)
    print("Current Users:", users)  # 👈 shows in terminal
    return jsonify({
        "message": "Data received successfully",
        "stored_data": users
    })

# ✅ New route to view all stored users
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Backend is running!",
        "stored_data": users
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
