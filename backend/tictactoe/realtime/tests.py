# from django.test import TestCase
import os
from dotenv import load_dotenv
load_dotenv()
# Create your tests here.
print(os.environ.get('ip'))