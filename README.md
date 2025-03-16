![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)
![Django Rest Framework](https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![jQuery](https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

# Crime-Management-Online-Portal-in-Django-Jquery-and-Bootstrap
An online complaint registration system for the crime related incidents that happened with you. 

This was my college project, now undergoing through some major transformations.

## Getting Started - Backend (Python and Django)

* Create a new virtual environment and install packages specified in the requirements.txt file.

* Hook in your database of choice, make necessary database changes in the settings.py file inside the project folder. Obviously, some familiarity with Django folder structures is required for this. By default this project uses MySQL as database.

* Make migrations when you're done with the database settings and migrate.
* Run python manage.py runserver, and the application should be running on port 8000 by default.

## Built With

* [Python Django](https://www.djangoproject.com/)
* [Django Rest Framework](https://www.django-rest-framework.org/)
* [Swagger Docs](https://swagger.io/)
* [Tailwind CSS](https://tailwindcss.com/)


## Features 

- User Registration

- Users can create groups and assign other users as moderators in the process flow.

- Audit log system is available to log important events in the system work-flow.

- Security: The application implements authentication and authorization mechanisms to ensure secure access to user data and prevent unauthorized actions.

- Responsive Design: The application is designed to be responsive and accessible on different devices, including desktops, tablets, and mobile phones.

## Potential Issue

- Not able to read env file

- Not able to load admin css and js files, need to configure static directory