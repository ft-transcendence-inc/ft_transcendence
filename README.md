# ft_transcendence

To create the venv, install django and apply migrations

# Navigate to your project directory

cd path/to/your/project

# Create and activate virtual environment

python3 -m venv venv
source venv/bin/activate # On macOS/Linux

# venv\Scripts\activate # On Windows

# Install Django

pip install django

# Create a Django project

django-admin startproject ft_transcendance_backend

# Navigate into the project directory

cd ft_transcendance_backend

# Apply migrations

python manage.py migrate

# Start the development server

python manage.py runserver

Starting fresh with a virtual environment is a good approach. Here are the steps to set up your Django project using a virtual environment from scratch:

### Step-by-Step Guide

1. **Navigate to Your Project Directory:**
   Go to the directory where you want to create your project.

   ```bash
   cd path/to/your/project
   ```

2. **Create a Virtual Environment:**

   ```bash
   python3 -m venv venv
   ```

3. **Activate the Virtual Environment:**

   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. **Install Django:**
   With the virtual environment activated, install Django.

   ```bash
   pip install django
   ```

5. **Create a Django Project:**
   Create a new Django project.

   ```bash
   django-admin startproject ft_transcendance_backend
   ```

6. **Navigate into Your Project Directory:**

   ```bash
   cd ft_transcendance_backend
   ```

7. **Apply Migrations:**
   Apply the initial migrations to set up your database schema.

   ```bash
   python manage.py migrate
   ```

8. **Run the Development Server:**
   Start the Django development server to ensure everything is set up correctly.
   ```bash
   python manage.py runserver
   ```

### Final Notes

1. **Deactivate the Virtual Environment:**
   When you are done working, you can deactivate the virtual environment by running:

   ```bash
   deactivate
   ```

2. **Reactivating the Virtual Environment:**
   Whenever you start working on your project again, reactivate the virtual environment:
   ```bash
   source venv/bin/activate
   ```
