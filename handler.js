const { Cars } = require('./models');
const multer = require('multer');

/* function handleRoot(req, res){
    // res.send("Hello from express!");
    res.render("cars/index", {
      id: car.id,
      nama: car.nama,
      harga: car.harga,
      ukuran: car.ukuran,
      gambar: car.gambar
    });
} */

function handlePageCreateCar(req, res){
  res.render("Cars/create");
}

function handleCreateCar(req, res){

    Cars.create({
        nama : req.body.nama,
        harga : req.body.harga,
        ukuran : req.body.ukuran,
        gambar : req.file.filename
    }).then(car => {
      res.status(201).redirect("/Cars");     
    }).catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
}

function handleListCars(req, res){
  Cars.findAll().then(Cars => {
      res.status(200).render("Cars/index", {
        Cars: Cars,
      });
  }).catch((err) => {
      res.status(400).json({
        status: "FAIL",
        message: err.message,
      });
    });
}

function handleGetCar(req, res){
    const car = req.car;
    res.render("Cars/_id/index", {
      id: car.id,
      nama: car.nama,
      harga: car.harga,
      ukuran: car.ukuran,
      gambar: car.gambar
    });
}

function handlePageUpdateCar(req, res){
  const car = req.car;
  res.render("Cars/_id/update", {
    id: car.id,
    nama: car.nama,
    harga: car.harga,
    ukuran: car.ukuran,
    gambar: car.gambar
  });
}

function handleupdateCar(req, res){
    const car = req.car;
    car.update(req.body).then(()=>{
        res.status(200).redirect("/Cars");
    }).catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
}

function handleDeleteCar(req, res){
  const car = req.car;
  car.destroy().then(()=>{
    res.status(204).redirect("/Cars");
  }).catch((err) => {
      res.status(400).json({
        status: "FAIL",
        message: err.message,
      });
    });
}

module.exports = {
    // handleRoot,
    handleCreateCar,
    handleListCars,
    handleGetCar,
    handleDeleteCar,
    handleupdateCar,
    handlePageCreateCar,
    handlePageUpdateCar
}