# my-adminjs-app

A Node.js app with PostgreSQL, ready to run with Docker Compose.

## Prerequisites

- [Git](https://git-scm.com/download/linux)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Step-by-Step Setup

### 1. Clone the Repository

Open your terminal and run:
```bash
git clone https://github.com/your-username/my-adminjs-app.git
cd my-adminjs-app
```

### 2. Change Database Credentials (Optional)

If you want to use a different PostgreSQL username, password, or database name:

- Open `docker-compose.yml`
- Edit these lines under the `db` service:
  ```yaml
  environment:
    - POSTGRES_USER=myadmin        # Change 'myadmin' to your desired username
    - POSTGRES_PASSWORD=mypassword # Change 'mypassword' to your desired password
    - POSTGRES_DB=mydatabase       # Change 'mydatabase' to your desired database name
  ```
- If your app connects to the database, update the connection string in your app’s config (e.g., `.env` or directly in your code) to match these values.

### 3. Build and Start the Services

Run the following command in your project directory:
```bash
docker-compose up --build
```
This will:
- Build your Node.js app image
- Start both the app and PostgreSQL database containers

### 4. Access the Application

Open your browser and go to:
```
http://localhost:3000
```

### 5. Stopping the Services

To stop the containers, press `Ctrl+C` in the terminal, then run:
```bash
docker-compose down
```

## Notes

- **Changing Ports:**  
  If you want to use different ports, edit the `ports` section in `docker-compose.yml` for both `app` and `db`.

- **Persisting Database Data:**  
  The database data is stored in a Docker volume (`postgres_data`).  
  To remove all data, run:
  ```bash
  docker-compose down -v
  ```

- **Environment Variables:**  
  You can add more environment variables to the `environment:` section in `docker-compose.yml` or use a `.env` file.

## Troubleshooting

- Make sure Docker and Docker Compose are installed and running.
- If you change database credentials, update your app’s database connection settings accordingly.

---

**Feel free to contribute or open issues!**