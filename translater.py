from googletrans import Translator
import googletrans

translator = Translator()
# print(googletrans.LANGUAGES)
# print("test if work")

message = input("Please type the word or sentence you want to translate.\n")

transLang = input("Please type the language you want to translate it to!\n")

transLang = transLang.lower()

try:
    if transLang == "chinese":
        whatChinese = input("Please choose either traditional or simplified\n")
        if whatChinese == "simplified":
            whatChinese = "chinese (simplified)"
            transLang = whatChinese
        elif whatChinese == "traditional":
            whatChinese = "chinese (traditional)"
            transLang = whatChinese
        else:
            raise Exception("Not a valid argument")
except Exception as e:
    print(e)
    
try:
    if transLang not in googletrans.LANGCODES and transLang not in googletrans.LANGUAGES:
        raise Exception("This is not a valid language, please try again")


    word = translator.translate(message,dest=transLang)

    print(word.text)
except Exception as f:
    print(f)