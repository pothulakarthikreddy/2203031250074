# **Full-Stack URL Shortener**

A simple and efficient **URL Shortener** service built with **Node.js**, **Express**, and **React**. This app allows users to submit long URLs and receive a shortened version. The shortened URLs will expire after a specified time.

---

## **📋 Features**

- **Shorten URLs**: Converts long URLs to short, easy-to-share links.
- **Expiry Time**: Shortened URLs automatically expire after a specified time (in minutes).
- **URL Redirection**: Redirect users from the short URL to the original long URL.
- **Error Handling**: Proper error messages for expired or invalid URLs.
- **Frontend Interface**: Built with **React.js** for easy interaction with the backend API.
- **In-memory Storage**: URL data is temporarily stored using JavaScript `Map`.

---

## **🛠 Technologies Used**

### **Backend**

- **Node.js** – JavaScript runtime for the server-side logic.
- **Express.js** – Framework for building APIs and handling HTTP requests.
- **NanoID** – Unique short code generator.
- **Moment.js** – For handling expiry date and time.
- **CORS** – For handling cross-origin requests in development.

### **Frontend**

- **React.js** – Library for building user interfaces.
- **Axios** – For making HTTP requests from the frontend.

---

## **🚀 Project Setup**

### **Backend Setup**

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd url-shortener-backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the server**:

    ```bash
    node server.js
    ```

   The backend will be accessible at `http://localhost:8000`.

### **Frontend Setup**

1. Navigate to the frontend directory:

    ```bash
    cd url-shortener-frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the frontend React app**:

    ```bash
    npm start
    ```

   The frontend will be accessible at `http://localhost:3000`.

---

## **🔗 API Endpoints**

### **POST `/shorturls`**

**Create a Shortened URL**.

#### **Request Body** (JSON):

```json
{
  "url": "https://www.example.com",
  "shortCode": "customshortcode", 
  "validity": 30
}
