import { useEffect, useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleGenerateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    setColor(hexColor);
  }
  function handleGenerateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleGenerateRgbColor();
    else handleGenerateHexColor();
  }, [typeOfColor]);

  return (
    <div>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="flex gap-4 justify-center p-4">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="bg-slate-300 text-red-500 px-4 py-2 hover:bg-slate-200 active:scale-90 rounded-lg font-bold"
          >
            Generate HEX color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="bg-slate-300 text-red-500 px-4 py-2 hover:bg-slate-200 active:scale-90 rounded-lg font-bold"
          >
            Generate RGB color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleGenerateHexColor
                : handleGenerateRgbColor
            }
            className="bg-slate-300 text-red-500 px-4 py-2 hover:bg-slate-200 active:scale-90 rounded-lg font-bold"
          >
            Generate random color
          </button>
        </div>
        <div className="flex gap-4 justify-center mt-96 text-3xl font-bold">
          <h3>{typeOfColor === "hex" ? "HEX COLOR" : "RGB COLOR"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};
