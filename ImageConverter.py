#Changes type of image
from PIL import Image

img = Image.open('0006.jfif')
img.save('0006.jpeg')