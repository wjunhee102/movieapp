import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

function useFetch( url ) {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState("");
    const [ isLoading, setLoading ] = useState(true);

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
        callData();
    },[]);
} 

const mapStateToProps = ()=> {

}
const mapDispatchToProps = ()=> {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(useFetch);