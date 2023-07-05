import { useState } from "react";
import ConfirmationScreen from "./ConfirmationScreen";


function App() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setValidEmail(true);
  };

  const handleSubscribe = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    setValidEmail(isValidEmail);

    if (isValidEmail) {
      setShowConfirmation(true);
    }
  };

  const dismissMessage = () => {
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return <ConfirmationScreen email={email} dismissMessage={dismissMessage} />;
  }
  return (
    <div className="bg-charcolgrey flex justify-center items-center min-h-screen font-roboto">
      <div className="max-w-2/3 bg-white rounded-3xl p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 mt-12 ml-8 ">Stay updated!</h1>
            <p className="text-base mb-4 ml-8">Join 60.000+ product managers receiving monthly updates on:</p>
            <div className="flex items-center mb-4 ml-8">
              <img src="assets\images\icon-list.svg" alt="Item 1" className="w-6 h-6 mr-2" />
              <span>Product discovery and building what matters</span>
            </div>
            <div className="flex items-center mb-4 ml-8">
              <img src="assets\images\icon-list.svg" alt="Item 2" className="w-6 h-6 mr-2" />
              <span>Measuring to ensure updates are a success</span>
            </div>
            <div className="flex items-center mb-4 ml-8">
              <img src="assets\images\icon-list.svg" alt="Item 3" className="w-6 h-6 mr-2" />
              <span>And much more!</span>
            </div>
            <div className={`mb-4 ml-8 ${validEmail ? "" : "text-red-500"}`}>
              <div className="flex justify-between mb-2 items-center">
                <div className="font-bold text-sm">Email address</div>
                {!validEmail && <span className="text-sm font-bold text-red-500">Valid email required</span>}
              </div>
              <input
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={handleEmailChange}
                className={`w-full border ${validEmail ? "border-gray-500" : "border-red-500"} px-4 py-2 rounded-lg ${validEmail ? "" : "bg-red-100"}`}
              />
            </div>
            <div className="mb-4 ml-8">
              <button
                className="bg-darkslate text-white px-4 py-2 rounded-lg w-full"
                onClick={handleSubscribe}
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 ml-0 md:ml-12">
            <img src="assets\images\illustration-sign-up-desktop.svg" alt="Imagem" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
