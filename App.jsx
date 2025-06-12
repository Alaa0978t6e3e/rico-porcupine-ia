import React from "react";
import logo from "./assets/rico-logo.png"; // تأكد من وجود الصورة في المسار الصحيح

export default function RicoThePorcupineIA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <img src={logo} alt="Rico The Porcupine Logo" className="mx-auto mb-6 w-40 h-40 rounded-full shadow-lg" />

        <h1 className="text-5xl font-bold mb-4">Rico The Porcupine IA</h1>
        <p className="text-lg text-gray-300 mb-10">
          The first AI-powered porcupine meme coin on Solana. Spiky. Smart. Ready to moon.
        </p>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why $RICO?</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>🤖 AI-Themed Meme Vibes</li>
            <li>🦔 Built on Solana for lightning-fast speed</li>
            <li>🔥 No taxes. No nonsense. 100% chaos.</li>
            <li>🔒 Liquidity locked & Mint disabled</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
          <p className="text-gray-300">
            Total Supply: <strong>1,000,000,000</strong><br />
            Ticker: <strong>$RICO</strong><br />
            Network: <strong>Solana</strong><br />
            Mint Address: <em>coming soon</em>
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Join the Spike</h2>
          <p className="text-gray-300 mb-4">
            Follow Rico on his mission to spike wallets and shake up the memecoin world.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
