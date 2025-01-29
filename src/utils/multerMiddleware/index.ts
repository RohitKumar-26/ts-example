import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    cb(null, true); 
  } else {
    cb(new Error("Only image files are allowed!"), false); 
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, 
});

export const uploadImage = upload.single("image"); 

