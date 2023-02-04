from flask import Flask, request, render_template
app = Flask(__name__)

@app.route("/")
def home():
  return render_template('Homepage draft 1 (simone).html')

@app.route("/country")
def countryPage():
  return render_template('CountryPage.html')

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80)