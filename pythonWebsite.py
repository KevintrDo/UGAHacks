<<<<<<< HEAD
from flask import Flask, request, render_template

from googletrans import Translator
import googletrans

translator = Translator()
=======
from flask import Flask, request, render_template, Blueprint
>>>>>>> a4a80a9 (Button to backend)

app = Flask(__name__)

@app.route("/")
def home():
<<<<<<< HEAD
  return render_template('Culture.html')

# @app.route("/culture", methods=['GET','POST'])
# def countryPage():
#   data = request.form
#   print(data)
#   return '<h1>test</h1>'

@app.route('/culture', methods=['GET','POST','DELETE'])
def defValue():
  if request.method == "POST":
    data = request.form.get("nm")
    language = request.form.get("trans")
    print(language)
    translated = translator.translate(data,dest=language)
    return render_template('Culture.html', words = translated.text)
  else:
    return render_template('Culture.html')
  

  

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80, debug=True)
=======
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
>>>>>>> a4a80a9 (Button to backend)
