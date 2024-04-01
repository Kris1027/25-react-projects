import { useState } from "react";
import QRCode from "react-qr-code";

export const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleGenerateQrCode() {
    setQrCode(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <h1 className="text-3xl text-center pb-4">QR Code Generator</h1>
      <div className="flex flex-col">
        <input
          className="px-4 py-2 bg-slate-200 rounded-lg mb-4"
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 active:scale-90"
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="pt-4">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};
