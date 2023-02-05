from google_images_search import GoogleImagesSearch

api_key = "AIzaSyCEBHgGH-TqzTjJQY3js4kECMU0cjJT_3U" 
gis = GoogleImagesSearch(api_key, '72050606ba65f43f5')


userInput = input("What images do you want to find?\n")
_search_params = {
    'q': userInput,
    'num': 3,
    'fileType': 'png',
    'safe': 'active', 
    'imgType': 'photo', 
    'imgSize': 'imgSizeUndefined', 
}

gis.search(search_params=_search_params, path_to_dir='static/imgs')
