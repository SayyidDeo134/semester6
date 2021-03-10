import React, { useState } from 'react';
import { GETDATA, POSTDATA } from '../../components/API';
import { useForm } from 'react-hook-form';
import useGet from '../../Hook/useGet';
import useDelete from '../../Hook/useDelete';

function Menu() {

    const [isi] = useGet('menu')
    const [dataKate] = useGet('kategori');
    const [gambar, setGambar] = useState('');
    const [ID, setID] = useState(0);
    const { register, handleSubmit, reset, errors, setValue } = useForm();
    const { onDelete } = useDelete('pelanggan');

    const onSubmit = async (data) => {
        let url;
        let body = new FormData();
        if (ID == 0) {
            url = 'menu';
            body.append('idkategori', data.kategori);
            body.append('menu', data.menu);
            body.append('harga', data.harga);
            body.append('gambar', data.gambar[0]);
        } else {
            url = 'menu/' + ID;
            body.append('idkategori', data.kategori);
            body.append('menu', data.menu);
            body.append('harga', data.harga);
            if (data.gambar.length > 0) {
                body.append('gambar', data.gambar[0]);
            }
        }

        let postdata = await POSTDATA(url, body);
        alert(postdata.pesan);
        setGambar('');
        reset();

    }

    const onEdit = async (id) => {
        const data = await GETDATA('menu/' + id);
        setID(data[0].idmenu);
        setValue('menu', data[0].menu);
        setValue('harga', data[0].harga);
        setValue('kategori', data[0].idkategori);
        setGambar(data[0].gambar);
    }

    return (
        <div>
            <div className="row">
                <h1>Menu</h1>
            </div>
            <form className="my-2" onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <select name="kategori" id="" ref={register({ required: true })} className="form-select form-select-sm">
                            <option value=""> ----- PILIH KATEGORI ----- </option>
                            {
                                dataKate.map((item, i) => (
                                    <option key={i} value={item.idkategori} >
                                        {item.kategori}
                                    </option>
                                ))
                            }
                        </select>
                        <small className="text-danger"> {errors.kategori && "*nama menu harus di isi"} </small>
                    </div>
                    <div className="col-md-4 mb-3">
                        <input type="text" name="menu" id="" className="form-control form-control-sm" placeholder="Input nama menu" ref={register({ required: true })} />
                        <small className="text-danger"> {errors.menu && "*nama menu harus di isi"} </small>
                    </div>
                    <div className="col-md-4 mb-3">
                        <input type="number" name="harga" id="" className="form-control form-control-sm" placeholder="Input harga menu" ref={register({ required: true })} />
                        <small className="text-danger"> {errors.harga && "*harga menu harus di isi"} </small>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src={gambar} className="mb-2" alt="" width={70} />
                        <input type="file" name="gambar" onChange={(e) => setGambar(URL.createObjectURL(e.target.files[0]))} id="" className="form-control form-control-sm" ref={register} />
                        <small className="text-danger"> {errors.gambar && "*gambar menu harus di isi"} </small>
                    </div>
                    <div className="col-md-12 mb-3">
                        <button className="btn btn-sm btn-primary" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
            <div className="row">
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Gambar</th>
                            <th>Kategori</th>
                            <th>Menu</th>
                            <th>Harga</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isi.map((item, i) => (
                                <tr key={i} >
                                    <td> {i + 1} </td>
                                    <td> <img src={item.gambar} alt="" width="100" /> </td>
                                    <td> {item.kategori} </td>
                                    <td> {item.menu} </td>
                                    <td> {item.harga} </td>
                                    <td>
                                        <button className="btn btn-sm btn-success me-2" onClick={() => onEdit(item.idmenu)}>Edit</button>
                                        <button className="btn btn-sm btn-danger me-2" onClick={() => onDelete(item.idmenu)} >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Menu;