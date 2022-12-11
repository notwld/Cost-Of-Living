import requests
from bs4 import BeautifulSoup
from flask import Flask,jsonify
from flask_cors import CORS

def get_data(req):
    if req.status_code==200:
        soup = BeautifulSoup(req.text, 'html.parser')
        table = soup.find('table', {'class': 'data_wide_table'})
        rows = table.find_all('tr')
        data = {}
        col = []
        for row in rows:
            cols = row.find_all('td')
            cols = [ele.text.strip() for ele in cols]
            col.append([ele for ele in cols if ele])
            
        for each in col:
            if each:
                data[each[0]] = each[1]

        return data

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    url = 'https://www.numbeo.com/cost-of-living/in/Karachi'
    req = requests.get(url)
    data = get_data(req)
    return jsonify(data)

if __name__ == '__main__':
    app.run(host="192.168.1.105", port=5000, debug=True)
