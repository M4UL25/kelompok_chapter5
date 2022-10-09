# kelompok_chapter5

## Entity Relationship Diagram
(Kelompok 5) <br/>
- Tabel pertama list_mobil <br/>

![list_mobil](https://user-images.githubusercontent.com/55015792/194562584-5c55e3d3-66d5-44d1-8c2a-312c41584386.png)

- Tabel kedua create <br/>

![create](https://user-images.githubusercontent.com/55015792/194565435-04c0147e-9a18-4c5c-bb9a-4ea1549f7b18.png)

- Tabel ketiga upgrade <br/>

![update](https://user-images.githubusercontent.com/55015792/194565977-7d3fae5d-60d2-4ba0-b9ac-62ac70e29c8b.png)

- Tabel keempat delete <br/>

![delete](https://user-images.githubusercontent.com/55015792/194566237-a1668682-3c8f-4b74-8a74-76e3157ca3b4.png)

Tabel data pada tugas kali ini berisi seperti gambar diatas, kemudian dari keempat tabel tersebut dibentuk sebuah relasi seperti gambar dibawah ini <br/>

## Relasi Tabel
![relasi](https://user-images.githubusercontent.com/55015792/194566716-f7892e14-bba1-40b8-a2b8-403c9932aeda.png)

relasi diatas megambarkan bagaimana sistem akan bekerja

# BackEnd
## Setup Server
```
npm install
```
`npm install` untuk mendownload semua third party modules ke dalam project. <br/>
Sebelum lanjut, pastikan [PostgreSQL](https://www.postgresql.org/) sudah ter-install dan berjalan di komputer. <br/>
Selanjutnya jalankan perintah: <br/>
```
sequelize db:create
sequlize db:migrate

//OPTIONAL : untuk menambah data dummy ke Database
sequelize db:seed:all
sequlize db:seed:undo // menghapus data dummy
```

## Endpoint

- ***GET Method '/'*** <br/>
[Getting Root](http://127.0.0.1:8000)
![listCar](https://user-images.githubusercontent.com/103182853/194753866-dc7b6a4b-abbc-4d0b-83d8-301dd1d51cae.png)

- ***GET Method '/Cars'*** <br/>
[Dispay all the car list](http://127.0.0.1:8000)
![GetListCars](https://user-images.githubusercontent.com/103182853/194754713-32f29748-7b1d-4f4b-823c-c89d359283ca.png)

- ***GET Method '/Cars/create'*** <br/>
[Create new car](http://127.0.0.1:8000/Cars/create)
![createCar](https://user-images.githubusercontent.com/103182853/194754060-1327d7f2-0f66-4abc-bbfe-71c3c32140cb.png)

- ***GET Method '/Cars/update'*** <br/>
[Update existing car](http://127.0.0.1:8000/Cars/:id/update)
![image](https://user-images.githubusercontent.com/103182853/194754888-797f12b5-90da-4907-9d75-f0409008e246.png)
