from flask import Flask, request, render_template, Blueprint

app = Flask(__name__)

@app.route("/")
def home():
  return render_template('Website.html')

@app.route("/country")
def countryPage():
  return render_template('CountryPageSimone.html')

@app.route("/Food.html", methods=['Get','POST'])
def translatePage():
    IMCRYING = request.form
    print(IMCRYING)
    return render_template('ContactInfo')

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80,debug=True)