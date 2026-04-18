import { Link, useLocation, useNavigate, useNavigation } from 'react-router';
import { AuthContext } from '../context/ContextCreateComponent';
import useAuthH from '../hooks/useAuthH';


const Login = () => {
    const { googleLoginIn, } = useAuthH();

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        googleLoginIn()
            .then((result) => {
                const user = result.user;
                navigate(location.state ? location.state : "/")
                console.log(user)

            }).catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

                    <p className="text-2xl font-semibold text-center mb-2">Please Login </p>

                    <p className="text-sm text-center text-gray-500 mb-6">Haven't an account? <Link
                        to="/registration" className="text-primary cursor-pointer hover:underline">Registration</Link></p>

                    <form className="flex flex-col gap-4">
                        <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-purple-400" />

                        <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-purple-400" />

                        <p className='text-gray-500 hover:underline cursor-pointer'>
                            <small>Forgate password ?</small>
                        </p>

                        <button type="submit" className="w-full btn pt-2 bg-primary text-white rounded font-semibold    hover:opacity-90">Login</button>
                        <p className="text-center text-gray-400">OR</p>

                        <button onClick={handleGoogleLogin} type="button" className="w-full btn pb-2 border border-gray-300 rounded flex
                        items-center justify-center gap-2 hover:bg-gray-50 hover:ring-1 hover:ring-purple-400">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />Sign up with Google</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;