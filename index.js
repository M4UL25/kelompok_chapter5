const express = require('express');
const app = express();
const handler = require('./handler');
const middleware = require('./middleware');
const upload = require("./upload");
const path = require("path");
const multer = require('multer');

const PORT = 8000;

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

// Set format request
app.use(express.urlencoded({ extended: true }));

// Set PUBLIC_DIRECTORY sebagai static files di express
app.use(express.static(PUBLIC_DIRECTORY));

// Bilang ke express kalo kita mau pake EJS sebagai view engine
app.set("view engine", "ejs");

app.use(express.json())

//get root
app.get('/', handler.handleListCars);

//ke halaman list mobil dan api get mobil
app.get('/Cars', handler.handleListCars);

//ke halaman create mobil
app.get('/Cars/create', handler.handlePageCreateCar);

//api POST create data mobil
app.post('/Cars', upload.single("gambar"), handler.handleCreateCar);

//ke halaman detail dan api get detail mobil
app.get('/Cars/:id', middleware.setCar, handler.handleGetCar);

// ke halaman update mobil by id
app.get('/Cars/:id/update', middleware.setCar, handler.handlePageUpdateCar);

//api POST update mobil by id
app.post('/Cars/:id/update', upload.single("gambar"), middleware.setCar, handler.handleupdateCar);

//api GET delete mobil by id
app.get('/Cars/:id/delete', middleware.setCar, handler.handleDeleteCar);

// app.put("/Cars/:id/picture",upload.single("picture"),
//     (req, res) => {
//       const url = `/uploads/${req.file.filename}`;
//       res
//         .status(200)
//         .json({ message: "Foto berhasil di-upload, silahkan cek URL", url });
//     }
//   );

  // app.use('/images', express.static(path.join(process.cwd()+'/public/images')))
  // app.use('/css', express.static(path.join(process.cwd()+'/public/css')))

  

app.listen(PORT, () => {
    console.log("server berjalan!")
});