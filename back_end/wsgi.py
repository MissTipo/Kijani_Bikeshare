from api.v1 import create_app

if __name__ == "__main__":
    app = create_app()
    app.run()