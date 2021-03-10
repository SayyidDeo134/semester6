import React from 'react';
import useGet from '../../Hook/useGet';
import useDelete from '../../Hook/useDelete';

function Pelanggan() {

    const [isi] = useGet('pelanggan');

    const { onDelete } = useDelete('pelanggan');

    return (
        <div>
            <div className="row">
                <h1>Pelanggan</h1>
            </div>
            <div className="row">
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pelanggan</th>
                            <th>Alamat</th>
                            <th>No Telpon</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isi.map((item, i) => (
                                <tr key={i} >
                                    <td> {i + 1} </td>
                                    <td> {item.pelanggan} </td>
                                    <td> {item.alamat} </td>
                                    <td> {item.telp} </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.idpelanggan)} >Hapus</button>
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

export default Pelanggan;