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
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};
