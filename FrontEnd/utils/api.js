const BASE_URL = "";

const getAccesToken = () => {
  return localStorage.getItem("accessToken");
};
const putAccesToken = (key, value) => {
  return localStorage.setItem(key, value);
};

const removeLocalStorage = (key) => {
  return localStorage.removeItem(key)
} 

// register
const register = async ({ username, password, email }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
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

    const result = await response.json();
    return {
      status: 'success',
      data: result
    };
  } catch (err) {
    return err;
  }
};

// login
const login = async ({ username, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = response.json();
    return result;
  } catch (err) {
    return err;
  }
};

const registerStudent = async (biodata) => {
  try {
    const response = await fetch(`${BASE_URL}/api/students`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAccesToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(biodata),
    });

    const result = response.json();
    return result;
  } catch (err) {
    return err;
  }
};

const getStudentByCredentials = async() => {
  try {
    const response = await fetch(`${BASE_URL}/api/students/my-registration`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAccesToken()}`,
        "Content-Type": "applications/json"
      }
    });
    const result = response.json();
    return result;
  } catch(err) {
    return err
  }

}

export { register, login, putAccesToken, removeLocalStorage, getAccesToken, registerStudent, getStudentByCredentials };
