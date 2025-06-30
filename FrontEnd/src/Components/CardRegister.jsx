import { Link } from "react-router-dom";
import useInput from "../hooks/CustomHooks";
import { register } from "../../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardRegitser = () => {
  const navigate = useNavigate();
  const [username, onChangeUsername] = useInput();
  const [password, onChangePassword] = useInput();
  const [email, onChangeEmail] = useInput();
  const [confirmationPass, onChangeConfPass] = useInput();
  const [message, setMessage] = useState("");

  const submitHandler = async (ev) => {
    ev.preventDefault();
    console.log({ username, password, email });
    if (password !== confirmationPass) {
      setMessage("Password Tidak sesuai");
      return;
    }

    const result = await register({ username, password, email });
    console.log(result);

    if (result.error) {
      setMessage("Akun sudah terdaftar");
      return
    }
    navigate("/pendaftaran/login");
  };

  return (
    <div className="p-8 max-w-xl">
      <form
        onSubmit={submitHandler}
        className="px-4 md:px-8 py-8 bg-slate-100 rounded-md shadow-lg"
      >
        <p className="text-center mb-8 text-green-700 font-bold">
          Login untuk daftar
        </p>
        <input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="email"
          className="bg-white border-green-700 mb-4 w-full p-2 rounded-md focus:outline-green-600 font-semibold text-green-700"
        />
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
        <input
          type="password"
          value={confirmationPass}
          onChange={onChangeConfPass}
          placeholder="confirmation password"
          className="bg-white mb-2 w-full p-2 rounded-md focus:outline-green-600 font-semibold text-green-700"
        />
        <span className="text-red-600 text-xs font-semibold">{message}</span>
        <button
          className="block rounded-md border-2 border-transparent hover:bg-transparent hover:border-green-700 hover:text-green-700 w-full text-center py-2 mt-2 mb-4 bg-green-700 text-white transition-all duration-300 ease-in-out font-bold"
          type="submit"
        >
          daftar
        </button>
        <p className="text-green-700 font-bold">
          sudah punya akun?{" "}
          <Link className="text-yellow-600" to={"/pendaftaran/login"}>
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CardRegitser;
