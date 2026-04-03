const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ خادم رياضيات الصف الأول – مدرسة عاطوف المختلطة يعمل");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "✅ تم رفع الملف بنجاح",
    fileName: req.file.originalname
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running on port " + PORT);
});
