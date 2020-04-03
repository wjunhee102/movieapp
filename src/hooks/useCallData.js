import { useState, useEffect } from 'react';
import axios from 'axios';

function useCallDate( url ) {
    const [ data, setDate ] = useState([]);
    const [ error, setError ] = useState("");
    const [ isLoading, setLoading ] = useState(true);

    const callUrl = async() => {
        try {
            const { data } = await axios.get(url)
            console.log("작동함")
            setDate(data)
            localStorage.setItem("moviesInfo",JSON.stringify(data))
        } catch {
            setError("데이터가 없습니다.")
            console.log("error");
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(localStorage.getItem("moviesInfo")) {
            const getDate = JSON.parse(localStorage.getItem("moviesInfo"))
            setDate(getDate)
            setLoading(false);
        } else {
            callUrl();
        }
    },[])
    useEffect(()=>{
        console.log(localStorage.getItem("moviesInfo"))
        console.log(JSON.parse(localStorage.getItem("moviesInfo")))
    },[data])

    return ( { data, error, isLoading, callUrl } );
}

export default useCallDate;