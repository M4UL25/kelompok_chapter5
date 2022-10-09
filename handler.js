const { Cars } = require('./models');
const fs = require('fs');

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
      res.status(201).send(
        '<script>window.location.href="/Cars";alert("Data Berhasil di Simpan");</script>'
      )   
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
        status: "success",
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
    let gambar;
    if (req.file == null) {
      gambar = car.gambar;
    }else{
      const filepath = `./public/uploads/${car.gambar}`;
      fs.unlinkSync(filepath);
      gambar = req.file.filename;
      
    };
    
    car.update({
        nama: req.body.nama,
        harga: req.body.harga,
        ukuran: req.body.ukuran,
        gambar: gambar
    }).then(()=>{
      res.status(201).send(
        '<script>window.location.href="/Cars";alert("Data Berhasil di Update");</script>'
      )   
    }).catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
}

function handleDeleteCar(req, res){
  const car = req.car;
  const filepath = `./public/uploads/${car.gambar}`;
  fs.unlinkSync(filepath);
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