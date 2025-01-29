import sharp from "sharp";
import path from "path";
import fs from "fs";

export const mergeImages = async (baseImagePath: string, overlayImagePath: string): Promise<string> => {
  try {
    const outputFolder: string = "public/custom-images";
    
    const outputImageName: string = `custom_image_${Date.now()}.jpg`;
    const outputImagePath: string = path.join(outputFolder, outputImageName);

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    const x: number = 200; 
    const y: number = 200; 

    const overlayImageBuffer: Buffer = await sharp(overlayImagePath)
      .resize(100, 100) 
      .toBuffer();

    await sharp(baseImagePath)
      .composite([
        {
          input: overlayImageBuffer,
          top: y, 
          left: x, 
        },
      ])
      .toFile(outputImagePath); 

    const imageUrl: string = `${process.env.BACKEND_URL}/public/custom-images/${outputImageName}`;

    return imageUrl;
  } catch (error) {
    throw error;
  }
};

