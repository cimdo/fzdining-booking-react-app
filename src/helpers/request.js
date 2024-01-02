const HOST = "http://localhost:3100";

const handleResponse = async (response) => {
  if (response.status === 401 || response.status === 403) {
    window.location.href = "/sign-in";
  }

  return response;
};

const request = async (path, options = {}) => {
  const { headers, query = null, body, host = HOST, ...extraOpts } = options;

  const token = localStorage.getItem("accessToken");

  const reqOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    ...extraOpts,
  };

  if (body) {
    if (body instanceof FormData) { //không thiết lập Content-Type cho headers khi body là FormData
      reqOptions.body = body;
      delete reqOptions.headers['Content-Type'];
    } else {
      reqOptions.body = typeof body === "object" ? JSON.stringify(body) : body;
    }
  }

  let queryString = "";
  if (query) {
    // Convert to encoded string and prepend with ?
    queryString = new URLSearchParams(query).toString();
    queryString = queryString && `?${queryString}`;
  }

  return fetch(`${host}${path}${queryString}`, reqOptions).then((response) =>
    handleResponse(response)
  );
};

export default request;