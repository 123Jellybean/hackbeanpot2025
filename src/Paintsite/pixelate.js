export const pixelateImage = (img, canvas, blockSize) => {
  const ctx = canvas.getContext("2d");

  // Set canvas size to match image
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw the original image on the canvas
  ctx.drawImage(img, 0, 0, img.width, img.height);

  // Create a temporary canvas to scale down the image
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");

  // Lower blockSize means higher resolution (less pixelation)
  const pixelSize = Math.max(blockSize, 1); // Ensure pixel size is at least 1

  // Set the temporary canvas size based on the pixel size
  tempCanvas.width = Math.ceil(canvas.width / pixelSize);
  tempCanvas.height = Math.ceil(canvas.height / pixelSize);

  // Draw the image in low resolution
  tempCtx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);

  // Scale the pixelated image back up to full size
  ctx.imageSmoothingEnabled = false; // Disable smoothing to keep blocky effect
  ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
};
