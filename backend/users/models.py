from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class CustomUserManager(BaseUserManager):
    
    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.model(email=email)
        user.set_password(password)
        user.is_superuser = True
        user.is_active = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField("Email", unique=True, max_length=255)
    username = models.CharField("User Name", unique=True, max_length=255, blank=True, null=True)
    first_name = models.CharField("First Name", max_length=100, blank=True, null=True)
    last_name = models.CharField("Last Name", max_length=100, blank=True, null=True)
    location = models.CharField("Location", max_length=100, blank=True, null=True)
    bio = models.TextField("Bio", max_length=500, blank=True, null=True)
    birth_date = models.DateField("Birth Date", blank=True, null=True)
    is_active = models.BooleanField('Active', default=True)
    is_staff = models.BooleanField('Staff', default=False)
    is_superuser = models.BooleanField('Super User', default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    class Meta:
        '''Doc string for meta'''
        verbose_name_plural = "Users"
        verbose_name = "User"
        db_table = "users"
        ordering = ['email']
        indexes = [models.Index(fields=['email'])]
        constraints = [models.UniqueConstraint(fields=['email'], name='unique_email')]
