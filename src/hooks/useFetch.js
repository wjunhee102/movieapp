import { useState, useEffect } from "react";
import axios from "axios";

function useFetch( url, state ) {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState("");
    const [ isLoading, setLoading ] = useState(true);
    console.log(state)

    const callData = async() => {
        try {
            const { data } = await axios.get(url)
            console.log(new Date, "작동함");
            setData(data);
        } catch {
            setError("데이터가 없습니다.");
            console.log("error");
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        callData()
    },[]);
    return ({ data, error, isLoading, callData })
} 

export default useFetch;