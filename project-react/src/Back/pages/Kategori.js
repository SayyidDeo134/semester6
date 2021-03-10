import React, { useState } from 'react';
import { GETDATA, POSTDATA } from '../../components/API';
import { useForm } from 'react-hook-form';
import useGet from '../../Hook/useGet';
import useDelete from '../../Hook/useDelete';

function Kategori() {

    const [isi] = useGet('kategori');
    const [ID, setID] = useState(0);
    const { register, handleSubmit, reset, errors, setValue } = useForm();
    const { onDelete } = useDelete('kategori');

    const onSubmit = async (data) => {

        let url;
        if (ID == 0) {
            url = 'kategori';
        } else {
            url = 'kategori/' + ID;
        }
        let postdata = await POSTDATA(url, data);
        alert(postdata.pesan);
        reset();

    }

    const onEdit = async (id) => {
        const data = await GETDATA('kategori/' + id);
        setID(data[0].idkategori);
        setValue('kategori', data[0].kategori);
    }

    return (
        <div>
            <div className="row">
                <h1>Kategori</h1>
            </div>
            <form className="my-2" onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <input type="text" name="kategori" id="" className="form-control form-control-sm" placeholder="Input nama kategori" ref={register({ required: true })} />
                        <small className="text-danger"> {errors.kategori && "*nama kategori harus di isi"} </small>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button className="btn btn-sm btn-primary" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
            <div className="row">
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isi.map((item, i) => (
                                <tr key={i} >
                                    <td> {i + 1} </td>
                                    <td> {item.kategori} </td>
                                    <td>
                                        <button className="btn btn-sm btn-success me-2" onClick={() => onEdit(item.idkategori)}>Edit</button>
                                        <button className="btn btn-sm btn-danger me-2" onClick={() => onDelete(item.idkategori)} >Delete</button>
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

export default Kategori;

