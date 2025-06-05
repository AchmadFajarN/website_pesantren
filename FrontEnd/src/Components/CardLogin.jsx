import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/CustomHooks";
import { login, putAccesToken } from "../../utils/api";
import { useState } from "react";


const CardLogin = () => {
  const navigate = useNavigate();
  const [username, onChangeUsername] = useInput();
  const [password, onChangePassword] = useInput();
  const [errorMessage, setErrorMesage] = useState('')

  const submitLogin = async (ev) => {
    ev.preventDefault();
    const result = await login({username, password})
    const { error, data } = result
    if (error) {
      setErrorMesage(error);
    } 
    
    if (error === 'Invalid request format'){
      setErrorMesage('Kolom tidak boleh kosong');
    }
    
    if (data !== undefined) {
      putAccesToken(JSON.stringify(data));
      navigate('/pendaftaran/me')
    }
  };
  return (
    <div className="p-8 max-w-xl">
      <form
        onSubmit={submitLogin}
        className="px-4 md:px-8 py-8 bg-slate-100 rounded-md shadow-lg"
      >
        <p className="text-center mb-8 text-green-700 font-bold">
          Login untuk daftar
        </p>
        <input
          type="text"
          value={username}
          onChange={onChangeUsername}
          placeholder="username"
          className="bg-white border-green-700 mb-4 w-full p-2 rounded-md focus:outline-green-600 font-semibold text-green-700"
        />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="password"
          className="bg-white mb-4 w-full p-2 rounded-md focus:outline-green-600 font-semibold text-green-700"
        />
        <span className="text-xs font-semibold text-red-600">
          {errorMessage}
        </span>
        <button
          className="block rounded-md border-2 border-transparent hover:bg-transparent hover:border-green-700 hover:text-green-700 w-full text-center py-2 mt-2 mb-4 bg-green-700 text-white transition-all duration-300 ease-in-out font-bold"
          type="submit"
        >
          Login
        </button>
        <p className="text-green-700 font-bold">
          Belum punya akun?{" "}
          <Link className="text-yellow-600" to={"/pendaftaran/register"}>
            Daftar
          </Link>
        </p>
      </form>
    </div>
  );
};


export default CardLogin;
