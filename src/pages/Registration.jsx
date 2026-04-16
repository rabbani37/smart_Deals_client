import { Link } from "react-router";


const Registration = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

                    <p className="text-2xl font-semibold text-center mb-2">Please Register</p>

                    <p className="text-sm text-center text-gray-500 mb-6">Already have account? <Link 
                    to={'/login'} className="text-primary cursor-pointer hover:underline">Login now</Link></p>

                    <form className="flex flex-col gap-4">

                        <input required type="text" placeholder="Name" className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-purple-400" />

                        <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-purple-400" />

                        <input type="url" placeholder="photo url" className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-purple-400" />

                        <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-purple-400" />

                        <button type="submit" className="w-full btn py-2 bg-primary text-white rounded font-semibold hover:opacity-90">Register</button>

                        <p className="text-center text-gray-400">or</p>

                        <button type="button" className="w-full btn py-2 border border-gray-300 rounded flex items-center justify-center gap-2 hover:bg-gray-50 hover:ring-1 hover:ring-purple-400">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />Sign up with Google</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;