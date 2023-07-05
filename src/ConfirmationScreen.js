import React from "react";

const ConfirmationScreen = ({ email, dismissMessage }) => {
  return (
    <div className="bg-charcolgrey flex justify-center items-center min-h-screen font-roboto">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div className="flex items-center mb-4">
          <img src="assets/images/icon-success.svg" alt="Ícone" className="w-9 h-9 mr-2" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Thanks for subscribing!</h1>
        <p className="mb-4 break-words text-base">
          A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
        </p>
        <button className="bg-darkslate text-white px-4 text-base py-2 rounded-lg w-full" onClick={dismissMessage}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
