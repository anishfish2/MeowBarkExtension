
from PIL import Image
import os
from PIL import ImageFilter
# Define the input and output directories
input_dir = "C:/Users/anish/Projects/MeowBarkExtension/genshin albedo hot"
output_dir = "C:/Users/anish/Projects/MeowBarkExtension/genshin albedo hot enhanced"

# Create the output directory if it doesn't already exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Define the sharpening filter
sharpen_filter = ImageFilter.SHARPEN

# Iterate over each file in the input directory
for filename in os.listdir(input_dir):
    # Load the image file
    img = Image.open(os.path.join(input_dir, filename))
    
    # Sharpen the image
    sharpened_img = img.filter(sharpen_filter)
    
    # Define the output filename and save the sharpened image
    output_filename = os.path.splitext(filename)[0] + "_sharpened.jpg"
    sharpened_img.save(os.path.join(output_dir, output_filename))
