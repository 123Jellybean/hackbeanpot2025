import { useState, useRef, useEffect } from "react";
import { pixelateImage } from "./pixelate"; // Import pixelation function
import "./style.css";

const PaintSite = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [blockSize, setBlockSize] = useState(4); // Block size determines pixelation level
  const [colorCounts, setColorCounts] = useState<Map<string, number>>(
    new Map()
  ); // Track color counts
  const [behrColors, setBehrColors] = useState<{ name: string; hex: string }[]>(
    []
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Fetch Behr colors from JSON file
  useEffect(() => {
    fetch("/behr_colors.json")
      .then((response) => response.json())
      .then((data) => setBehrColors(data))
      .catch((error) => console.error("Error fetching Behr colors:", error));
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Convert RGB to Hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  };

  // Function to round RGB values to the nearest step
  const roundColor = (value: number, step: number) => {
    return Math.round(value / step) * step;
  };

  const extractColorsFromCanvas = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const colorMap = new Map<string, number>();

    const roundStep = 64; // Increase step for stronger rounding effect (Try 32 or 64)

    for (let y = 0; y < canvas.height; y += blockSize) {
      for (let x = 0; x < canvas.width; x += blockSize) {
        let r = 0,
          g = 0,
          b = 0,
          count = 0;

        for (let dy = 0; dy < blockSize && y + dy < canvas.height; dy++) {
          for (let dx = 0; dx < blockSize && x + dx < canvas.width; dx++) {
            const index = ((y + dy) * canvas.width + (x + dx)) * 4;
            r += pixels[index];
            g += pixels[index + 1];
            b += pixels[index + 2];
            count++;
          }
        }

        r = roundColor(r / count, roundStep);
        g = roundColor(g / count, roundStep);
        b = roundColor(b / count, roundStep);

        const hex = rgbToHex(r, g, b);
        colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
      }
    }

    setColorCounts(colorMap);
  };

  const handleImageLoad = () => {
    if (!imageSrc || !canvasRef.current) return;

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      pixelateImage(img, canvasRef.current!, blockSize);
      extractColorsFromCanvas();
    };
  };

  useEffect(() => {
    handleImageLoad();
  }, [blockSize]);

  return (
    <div id="wd-lab1">
        <br />
      <h1>Welcome to PaintSite!</h1>
      <h3>Creating pixel art from your images</h3>
      <br />
      <h3>Step 1: Upload an image</h3>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <br />
      <br />
      <h3>Step 2: Choose a block size</h3>
      <label>
        <h3>Block size: {blockSize}</h3>
        <input
          type="range"
          min="4"
          max="50"
          value={blockSize}
          onChange={(e) => setBlockSize(Number(e.target.value))}
        />
      </label>
      <br />
      <br />

      {/* Display Pixelated Image in Canvas */}
      {imageSrc && (
        <div>
          <h3>Pixelated Image:</h3>
          <canvas ref={canvasRef} />
        </div>
      )}

      {/* Extracted Colors and Closest Library Colors */}
      {colorCounts.size > 0 && (
        <div>
          <h3>Step 3: Find your colors!</h3>
          <h3>Total different colors: {colorCounts.size}</h3>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              padding: 0,
            }}
          >
            {Array.from(colorCounts.entries()).map(([hex, count], index) => {
              return (
                <li
                  key={index}
                  style={{
                    backgroundColor: hex,
                    width: "120px",
                    height: "150px",
                    margin: "5px",
                    padding: "10px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                  }}
                >
                  <div style={{ color: "#000" }}>
                    Hex: {hex}
                    <br />
                    <br />
                    {count} times
                    <span
                      style={{
                        backgroundColor: hex,
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                    ></span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {imageSrc && (
        <img src={imageSrc} alt="Uploaded" onLoad={handleImageLoad} hidden />
      )}

    </div>
  );
};

export default PaintSite;
