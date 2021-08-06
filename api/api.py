import time
from flask import Flask

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/time')
def get_current_time_v2():
    return {'time': time.time()}
