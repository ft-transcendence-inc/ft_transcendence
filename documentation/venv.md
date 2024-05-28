A `venv` (short for virtual environment) is a tool in Python that allows you to create isolated environments for your Python projects. Each virtual environment has its own installation directories and can have different versions of Python and libraries installed, independent of other environments. This isolation helps manage project dependencies more effectively and avoids conflicts between them.

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

   ```bash
   source venv/bin/activate
   ```

4. **Navigate into Your Project Directory:**

   ```bash
   cd ft_transcendance_backend
   ```

5. **Apply Migrations:**
   Apply the initial migrations to set up your database schema.

   ```bash
   python manage.py migrate
   ```

6. **Run the Development Server:**
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
