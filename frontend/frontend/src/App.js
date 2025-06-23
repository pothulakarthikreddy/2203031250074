import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Import your styles here


function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState(30); // Default to 30 minutes
  const [shortlink, setShortlink] = useState('');
  const [expiry, setExpiry] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/shorturls', {
        url: longUrl,
        shortcode: shortcode,
        validity: validity,
      });
      setShortlink(response.data.shortlink);
      setExpiry(response.data.expiry);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/shorturls/${shortcode}`);
      setStats(response.data);
    } catch (err) {
      setError('URL not found or has expired.');
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter shortcode"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Validity (minutes)"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <button type="submit">Create Short URL</button>
      </form>

      {error && <p className="error">{error}</p>}

      {shortlink && (
        <div>
          <p>Your short link:</p>
          <a href={shortlink} target="_blank" rel="noopener noreferrer">
            {shortlink}
          </a>
          <p>Expires at: {expiry}</p>
        </div>
      )}

      <hr />

      <h2>Get Short URL Stats</h2>
      <input
        type="text"
        placeholder="Enter shortcode to get stats"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      <button onClick={fetchStats}>Get Stats</button>

      {stats && (
        <div>
          <p>URL: {stats.longUrl}</p>
          <p>Shortcode: {stats.shortcode}</p>
          <p>Expiry: {stats.expiry}</p>
          <p>Access Count: {stats.accessCount}</p>
        </div>
      )}
    </div>
  );
}

export default App;
