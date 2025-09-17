# my-adminjs-app

A Node.js app with Docker support.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed

## How to Run

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/my-adminjs-app.git
   cd my-adminjs-app
   ```

2. **Build the Docker image:**
   ```
   docker build -t my-adminjs-app .
   ```

3. **Run the Docker container:**
   ```
   docker run -p 3000:3000 my-adminjs-app
   ```

4. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development (without Docker)

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start the app:**
   ```
   npm start
   ```
   or
   ```
   node index.mjs
   ```

---

**Feel free to contribute or open issues!**