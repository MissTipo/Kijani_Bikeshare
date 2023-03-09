from flask import Flask, request, jsonify
from geopy.geocoders import Nominatim
from api.v1.views import app_views

#app = Flask(__name__)

@app_views.route('/process-location', methods=['POST'])
def process_location():
    location = request.json.get('location')
    geolocator = Nominatim(user_agent="my-app")
    location_info = geolocator.geocode(location)
    if location_info:
        return jsonify(latitude=location_info.latitude, longitude=location_info.longitude)
    else:
        return jsonify(error='Location not found'), 404
