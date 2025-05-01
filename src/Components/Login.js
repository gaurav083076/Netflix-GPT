import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen">
        <Header />
        <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
          alt="bg-logo"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
        <form className="absolute bg-black/80 top-1/2 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 text-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>
            <input className="w-full p-3 mb-4 rounded bg-gray-700" type="text" placeholder="Email"/>
            <input className="w-full p-3 mb-4 rounded bg-gray-700" type="text" placeholder="Password"/>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded mb-4">
               Sign In
            </button>
        </form>
    </div>
  );
};

export default Login;
