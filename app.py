from flask import Flask, send_from_directory
import os

app = Flask(__name__)

GAME_DIR = os.path.dirname(os.path.abspath(__file__))


@app.route('/')
def index():
    return send_from_directory(GAME_DIR, 'index.html')


@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory(GAME_DIR, filename)


if __name__ == '__main__':
    print('=== Игра "23 Февраля — ЦАД" ===')
    print('Открой в браузере: http://localhost:5000')
    print('Для остановки нажми Ctrl+C')
    app.run(debug=True, host='0.0.0.0', port=5000)
