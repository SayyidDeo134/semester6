import React from 'react';
import { useParams } from 'react-router';
import Kategori from './pages/Kategori';
import Menu from './pages/Menu';
import Pelanggan from './pages/Pelanggan';

function Content() {

    const { isi } = useParams();
    let tampil;

    if (isi === 'kategori') {
        tampil = <Kategori />
    }
    if (isi === 'menu') {
        tampil = <Menu />
    }
    if (isi === 'pelanggan') {
        tampil = <Pelanggan />
    }

    return tampil
}

export default Content;