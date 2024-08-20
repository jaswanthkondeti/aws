from flask import Flask, jsonify, render_template
import json

application = Flask(__name__)

# Load the JSON data
with open('data.json', 'r') as f:
    restaurant_data = json.load(f)

@application.route('/')
def home():
    return render_template('index.html')  # Render the index.html template

@application.route('/api/restaurants', methods=['GET'])
def get_restaurants():
    return jsonify(restaurant_data)  # Return the restaurant data in JSON format

if __name__ == '__main__':
    application.run(port=5000, debug=True)  # Host defaults to '127.0.0.1'
