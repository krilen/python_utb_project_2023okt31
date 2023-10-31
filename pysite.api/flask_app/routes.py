# Import '__init__' to provide the base of this application
from flask_app import app
from flask import jsonify, request

users = [
    {
        "user_id": 1,
        "user_name": "john",
    },
    {
        "user_id": 2,
        "user_name": "mary",
    },
    {
        "user_id": 11,
        "user_name": "karl",
    },

]

fruits = {
    "apples": {"Granny Smith": {"color": "freen"}},
    "bananas": {"Chiqita": {"color": "yellow"}}
}


# The root of the website
@app.route("/")
def index() -> str:
    """
    The root route "/" in this application
    """
    return "<h1>Hello from Python</h1>"


@app.route("/api/items", methods=["GET"])
def items() -> str:
    """
    The api route for "/api/items"
    """
    my_object = {"user_name": "john", "age": 21}
    return jsonify(my_object)


# Get all users
@app.route("/api/users", methods=["GET", "POST"])
def get_users() -> str:
    """
    Returns all of our current user names with their IDs
    """
    return jsonify(users)


# Add a user
@app.route("/api/user", methods=["POST"])
def add_user() -> str:
    """
    This method add a user. We only take in the user name and get next 
    free ID from our current users.
    """
    data = request.get_json()

    if users:
        new_id = max(users, key=lambda user: user["user_id"])["user_id"] + 1
    else:
        new_id = 1

    name = data["user_name"].lower()

    users.append({"user_id": new_id, "user_name": name})

    return jsonify({"user_id": new_id, "user_name": name}), 201


# Delete a user
@app.route("/api/user", methods=["DELETE"])
def del_user() -> str:
    """
    Deletes a user based on its ID.
    """
    del_id = request.get_json()

    # Wrong to call a global variable but OK in this case
    global users
    users = [user for user in users if user['user_id'] != del_id]

    return jsonify(del_id), 200


# Modify a user
@app.route("/api/user", methods=["PUT"])
def mod_user() -> str:
    """
    Modifies a current user, only changes its name keeps its ID
    """
    data = request.get_json()

    id = data['user_id']
    name = data["user_name"].lower()

    # Wrong to call a global variable but OK in this case
    # Quick and dirty remove the user and then add the user
    global users
    users = [user for user in users if user['user_id'] != id]

    users.append({"user_id": id, "user_name": name})

    return jsonify({"user_id": id, "user_name": name}), 200







# Get all Fruits
# From the class nr 11
@app.route("/api/fruits", methods=["GET", "POST"])
def get_fruits() -> str:
    if request.method == "GET":
        return jsonify(fruits)
    
    if request.method == "POST":
        data = request.get_json()
        return jsonify({"message": "OK"}), 200