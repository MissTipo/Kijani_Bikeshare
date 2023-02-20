#!/usr/bin/python3
"""
The module containing the FS engine
"""
import json
from models.base_model import BaseModel
from models.user import User
from models.city import City
from models.area import Area
from models.bike import Bike
from models.station import Station
from models.trip import Trip
from models.payment import Payment


classes = {'BaseModel':BaseModel, 'User':User, 'City':City, 'Area':Area, 'Bike':Bike, 'Station':Station, 'Trip':Trip, 'Payment':Payment}


class FileStorage():
    """
    Serializes instances to a JSON file and
    deserializes JSON file to instances
    """
    __file_path = "file.json"
    __objects = {}

    def all(self):
        """Returns the dictionary __objects"""
        return FileStorage.__objects
    def new(self, obj):
        """ets in __objects the obj with key <obj class name>.id"""
        key = obj.__class__.__name__ + "." + obj.id
        FileStorage.__objects[key] = obj
        
    def save(self):
        """serializes __objects to the JSON file (path: __file_path)"""
        with open(FileStorage.__file_path, 'w', encoding='utf-8') as file:
            new_dict = FileStorage.__objects.copy()
            for key, value in FileStorage.__objects.items():
                new_dict[key] = value.to_dict()
            json.dump(new_dict, file)

    def reload(self):
        """Deserializes the JSON file to __objects
        (only if the JSON file (__file_path) exists ; otherwise, do nothing.
        If the file doesn’t exist, no exception should be raised)
        """
        try:
            with open(FileStorage.__file_path, "r", encoding="utf-8") as file:
                new_obj = json.load(file)
                for key in new_obj.values():
                    name = key["__class__"]
                    del key["__class__"]
                    self.new(eval(name)(**key))

        except FileNotFoundError:
            return