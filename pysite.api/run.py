# Import '__init__' to provide the base of this application
from flask_app import app


if __name__ == "__main__":
    # Lets start the flask application
    app.run(debug=True)
