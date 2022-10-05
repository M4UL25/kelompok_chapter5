const express = require('express');
const app = express();
const handler = require('./handler');
const middleware = require('./middleware');
const upload = require("./upload");
const path = require("path");

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

//ke halaman list buku dan api get buku
app.get('/Cars', handler.handleListCars);

//ke halaman create buku
app.get('/Cars/create', handler.handlePageCreateCar);

//api POST create data buku
app.post('/Cars', handler.handleCreateCar);

//ke halaman detail dan api get detail buku
app.get('/Cars/:id', middleware.setCar, handler.handleGetCar);

// ke halaman update buku by id
app.get('/Cars/:id/update', middleware.setCar, handler.handlePageUpdateCar);

//api POST update buku by id
app.post('/Cars/:id/update', middleware.setCar, handler.handleupdateCar);

//api GET delete buku by id
app.get('/Cars/:id/delete', middleware.setCar, handler.handleDeleteCar);

app.put("/Cars/:id/picture",
    upload.single("picture"),
    (req, res) => {
      const url = `/uploads/${req.file.filename}`;
      res
        .status(200)
        .json({ message: "Foto berhasil di-upload, silahkan cek URL", url });
    }
  );
/* 
  app.use('/images', express.static(path.join(process.cwd()+'/public/images')))
  app.use('/css', express.static(path.join(process.cwd()+'/public/css')))
   */
  

app.listen(PORT, () => {
    console.log("server berjalan!")
});