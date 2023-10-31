# Importing the Flask framework, needs to be installed
from flask import Flask
from flask_cors import CORS

# Defining 'app', "app is an instance of Flask, ..."
app = Flask(__name__)

# Configure CORS for what it is allowed to do
cors = CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:3000"}})

# Importing the routes to be used with the instance 'app'
from flask_app import routes