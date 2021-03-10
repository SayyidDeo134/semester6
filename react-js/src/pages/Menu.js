import React, { useState } from 'react';
import Tabel from './Tabel'

function Menu() {
    const titel = "Daftar Menu Restoran";
    const [menus,setMenu]=useState(
        [
            { idmenu: 16, idkategori: 52, menu: "Sate Kambing", gambar: "FILE499.JPG", harga: 25000 },
            { idmenu: 18, idkategori: 54, menu: "Iced Tea", gambar: "FILE492.JPG", harga: 5000 },
            { idmenu: 19, idkategori: 54, menu: "Mineral Water", gambar: "FILE565.JPG", harga: 20000 },
            { idmenu: 23, idkategori: 52, menu: "Nasi Goreng", gambar: "FILE496.JPG", harga: 12000 },
            { idmenu: 27, idkategori: 52, menu: "Spagheti", gambar: "FILE495.JPG", harga: 25000 },  
            { idmenu: 22, idkategori: 54, menu: "Kopi Mocha", gambar: "FILE486.JPG", harga: 8000 },
        ]
    )
    return (
        <div>
           <Tabel menu={menus} titel={titel} />
           <Tabel menu={menus.filter((data)=>(data.idkategori===54))} titel= "Datar Minuman" />
        </div>
    )
}

export default Menu
