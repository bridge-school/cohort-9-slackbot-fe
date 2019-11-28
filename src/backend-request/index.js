export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8001"
    : `https://slackbot-backend.herokuapp.com`;

export const request = (endpoint, method = "GET", body) =>
  fetch(`${API_BASE_URL}/${endpoint}`, {
    method,
    headers: {
      "content-type": "application/json",
      method,
      body
    }
  });
