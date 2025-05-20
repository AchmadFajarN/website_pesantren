const BASE_URL = "http://localhost:8080";

const getAccesToken = () => {
  return localStorage.getItem("accesToken");
};

const putAccesToken = (token) => {
  return localStorage.setItem("accesToken", token);
};

// fetch with token
const fetchWithToken =  async(url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccesToken}`
    }
  })
}

// register
const register = async ({ username, password, email }) => {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  });
  const result = await res.json();
  const { error } = result
  if (!error) {
    return { result, error: false }
  }
  return {error: true, message: error}
};


// login
const login = async ({ username, password }) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const { token } = await res.json();
  if (token !== undefined) {
    return { error: false, data: token }
  }

  return { error: true }
};


export {register}
