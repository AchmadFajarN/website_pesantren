import { Link } from "react-router-dom";
import useInput from "../hooks/CustomHooks";

const CardLogin = () => {
  const [username, onChangeUsername] = useInput();
  const [password, onChangePassword] = useInput();
  return (
    <div className="p-8 max-w-xl">
      <form className="px-4 md:px-8 py-8 bg-slate-100 rounded-md shadow-lg">
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
