const BASE_URL = "";

const getAccesToken = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};
const putAccesToken = (token) => {
  return localStorage.setItem("accessToken", token);
};

// fetch with token
const fetchWithToken = async (url, options = {}) => {
  const tokenObj = getAccesToken();
  const token = tokenObj.token
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${ token }`,
    },
  });
};

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
  const { error } = result;

  if (!error) {
    return {
      result 
    };
  }
  return { error: true, message: error };
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

  const result = await res.json();
  const { error, token, user } = result;

  if (!error) {
    return {
      data: {
        token,
        user: user.username
      }
    };
  }

  return { error: error };
};

const registerStudent = async (biodata) => {
  try {
    const req = await fetchWithToken(`${BASE_URL}/api/students`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(biodata),
    });

    const res = await req.json();
    return res
  } catch (err) {
    return { error: err.message }
  }
};

export { register, login, putAccesToken, getAccesToken, registerStudent };

