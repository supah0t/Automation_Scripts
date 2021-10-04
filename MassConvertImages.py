#Mass changes type of image in current folder
from PIL import Image
import glob

images = glob.glob("*.jfif")

for image in images:
	img = Image.open(image)
	image = image.replace('.jfif', '.jpeg')
	img.save(image)

