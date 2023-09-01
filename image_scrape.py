import requests
from bs4 import BeautifulSoup
import os

# Set the search query and URL
search_query = "genshin albedo hot"
url = "https://www.google.com/search?q=albedo+fanart+genshin+wallpaper&tbm=isch&rlz=1C1ONGR_enUS943US943&hl=en&sa=X&ved=2ahUKEwifl67Q_8_-AhVpM94AHct9AzEQrNwCKAB6BQgBENcC&biw=1063&bih=1792"

# Send a GET request to the URL
response = requests.get(url)

# Use BeautifulSoup to parse the HTML content
soup = BeautifulSoup(response.content, "html.parser")

# Find all image tags on the page
image_tags = soup.find_all("img")

# Create a directory to store the images
if not os.path.exists(search_query):
    os.makedirs(search_query)

# Download each image and save it to the directory
for i, image_tag in enumerate(image_tags):
    i += 40
    try:
        image_url = image_tag["src"]
        response = requests.get(image_url)
        with open(f"{search_query}/image_{i}.jpg", "wb") as f:
            f.write(response.content)
    except:
        pass