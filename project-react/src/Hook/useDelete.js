
import { DELETEDATA } from '../components/API';

const useDelete = (url) => {

    const onDelete = async (id) => {
        if (window.confirm('Apakah anda yakin ingin menghapus data ini?')) {
            let deleteData = await DELETEDATA(url + '/' + id);
            alert(deleteData);
        }
    }

    return { onDelete }

}

export default useDelete;

