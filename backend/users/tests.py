from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model

from .models import User

class UserTest(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username='testuser',
            

# Create your tests here.
