- **What is `requirements.txt`:**

  - A text file containing a list of Python packages required for a project.
  - Each line specifies a package name and optionally its version.
  - Facilitates easy installation of dependencies for a project.

- **Steps to create a virtual environment and install packages from `requirements.txt`:**

  2. **Create a virtual environment:**
     ```sh
     python3 -m venv venv
     ```
  3. **Activate the virtual environment:**
     ```sh
     source venv/bin/activate
     ```
  4. **Install the packages from `requirements.txt`:**
     ```sh
     pip install -r requirements.txt
     ```

- **Deactivating the virtual environment:**
  ```sh
  deactivate
  ```
