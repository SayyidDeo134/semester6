import { useEffect, useState } from "react";
import { GETDATA } from "../components/API";


const useGet = (url) => {
    const [isi, setIsi] = useState([]);

    useEffect(() => {
        let isGet = true;
        const fetchData = async () => {
            const data = await GETDATA(url);
            if (isGet) {
                setIsi(data);
            }
        }
        fetchData();
        return () => {
            isGet = false;
        }
    }, [isi]);

    return [isi];

}

export default useGet;