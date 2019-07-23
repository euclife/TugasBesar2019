# Tugas Besar P.WEB 3 Kelompok 2

Merupakan Program Node JS menggunakan framework Express JS


## Anggota Kelompok :

* Andri Ardiansyah - 
* Chandra Ramdhan Purnama - 160613024
* Fahrisal Fadlu Rohman - 160613004

## IP Address

```
45.13.132.233:3102
```

## Persiapan

Buatlah Akun terlebih dahulu dengan API Register

```url
45.13.132.233:3102/user/register
```

* Method : POST
* Parameter

```
* username (string)
* email (string)
* password (string)
* roles (string)
```

Untuk Roles terdapat 2 pilihan yaitu 
* admin 
* user

### Lalu Login Menggunakan API Login

Untuk Mendapatkan Access Token

```url
45.13.132.233:3102/user/login
```

* Method : POST
* Parameter

```
* username
* password
```

Username di isikan sesuai yang pernah di buat pada saat register

## List API

Berikut merupakan List API Untuk User Tidak Perlu Login Terlebih Dahulu

###
Lihat Semua Buku
```url
45.13.132.233:3102/buku
```
* Mehtod : GET

###
Add Buku
```url
45.13.132.233:3102/buku
```
* Mehtod : POST
Parameter : 
* name
* halaman
* harga
* categoryId

###
Update Buku
```url
45.13.132.233:3102/buku
```
* Mehtod : PUT
Parameter : 
* id
* name
* halaman
* harga
* categoryId

###
Hapus Buku
```url
45.13.132.233:3102/buku
```
* Mehtod : DELETE
Parameter : 
* id




