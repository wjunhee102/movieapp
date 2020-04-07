import { useState } from "react";
import axios from "axios";

function useFetch( url, refresh) {
    const [ data, setData ] = useState([1]);
    const [ error, setError ] = useState("");
    const [ isLoading, setLoading ] = useState(true);
    console.log(refresh);

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

    return ({ data, error, isLoading, callData })
} 

export default useFetch;