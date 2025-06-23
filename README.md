Full-Stack URL Shortener
A simple and efficient URL Shortener service built with Node.js, Express, and React. Users can submit long URLs, receive a shortened version, and the shortened URLs will expire after a specified time.

Features
Shorten URLs: Accepts long URLs and generates unique short URLs.

Expiry Time: Each shortened URL has an expiration time, in minutes.

Redirect: Redirect users to the original long URL from the short URL.

Error Handling: Returns appropriate error messages for expired or invalid links.

Frontend: React-based interface for interacting with the backend API.

In-Memory Storage: Simple in-memory storage using JavaScript Map.

Technologies Used
Backend
Node.js

Express.js

NanoID – for generating unique short codes

Moment.js – for handling expiry time

CORS – for handling cross-origin requests

Frontend
React.js

Axios – for making HTTP requests

Project Setup
Backend Setup
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
cd url-shortener-backend
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node server.js
The backend will be accessible at http://localhost:8000.

Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd url-shortener-frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend React app:

bash
Copy
Edit
npm start
The frontend will be accessible at http://localhost:3000.

API Endpoints
POST /shorturls
Create a shortened URL.

Request Body (JSON):

json
Copy
Edit
{
  "url": "https://www.example.com",
  "shortCode": "customshortcode", 
  "validity": 30
}
url: The long URL to be shortened.

shortCode: A custom shortcode (optional).

validity: The time in minutes after which the short URL expires.

Response (JSON):

json
Copy
Edit
{
  "shortLink": "http://localhost:8000/5zCNh2",
  "expiry": "2025-06-23T08:36:50.046Z"
}
GET /shorturls/:shortcode
Redirects to the original long URL.

Request Parameters:

shortcode: The shortened URL's unique code.

Response:

Redirects the user to the original URL.

Frontend Usage
Creating a Shortened URL:
Enter the long URL, a custom shortcode (optional), and the validity period (in minutes).

Click Create Short URL to generate the shortened URL.

The response will display the shortened URL and its expiry time.

Accessing the Shortened URL:
You can click the shortened URL to be redirected to the original long URL.

Error Handling:
If the short URL is invalid or expired, an error message will appear.

Example Request & Response
Request (Postman or HTTP Request):
POST /shorturls

Request Body:

json
Copy
Edit
{
  "url": "https://www.linkedin.com/in/vasanth-kumar-reddy-1988b5249/",
  "validity": 30,
  "shortCode": "Vasanth-kumar-reddy"
}
Response:

json
Copy
Edit
{
    "shortLink": "http://localhost:8000/5zCNh2",
    "expiry": "2025-06-23T08:36:50.046Z"
}
Testing the Shortened URL
After generating the short URL, you can visit it in your browser (e.g., http://localhost:8000/5zCNh2) to be redirected to the original URL.

Troubleshooting
Common Issues
CORS Issues:
If you encounter CORS errors, ensure the backend server is running, and CORS is properly enabled.

Backend Not Running:
Ensure that the backend server is running at port 8000.

Invalid Short URL:
If the short URL is expired or not found, you will receive a 404 or 410 error.

License
This project is licensed under the MIT License.

Conclusion
This project demonstrates how to create a full-stack URL shortener service using Node.js, Express, and React. It is a simple but powerful tool for generating temporary short links that expire after a given time.
