import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import Seating from './seating';

const Theater = [
    {
        rank : "1",
        exp : 200
    },
    {
        rank : "2",
        exp : 175
    },
    {
        rank : "3",
        exp : 150
    },
    {
        rank : "4",
        exp : 120
    },
    {
        rank : "5",
        exp : 120
    },
    {
        rank : "6",
        exp : 100
    },
    {
        rank : "7",
        exp : 80
    },
    {
        rank : "8",
        exp : 70
    },
    {
        rank : "9",
        exp : 60
    },
    {
        rank : "10",
        exp : 50
    }
]

function Ppp({idx, ss}) {
    useEffect(()=>{
        if(ss) {
            console.log(ss[0])
        }
    })
    const color = ()=>{
        if(ss) {
            let check = ss.find(ele=> ele === idx)
            if(check) {
                return "#ccc"
            }
        }
        return "#f00"
    }
    
    return (
        <span style={{backgroundColor: color(), width: `50px`, height : `50px`}}>{idx},</span>
    )
}

function MovieList({cd,name, rank, idx, seats}) {
    
    const ssss = ()=>{
        let ar = [1]
        for(let i = 0; i < Theater[idx].exp; i++) {
            let newAr
            if(ar[i]) {
                newAr = [ar];
            } else {
                newAr = [...ar, i+1];
            }
            ar = newAr;
        }
        return ar;
    }
    
    return (
        <article className={`movie m${cd}`}>
            <h2>{name}</h2>
            <p className={`rank rank${rank}`}>{rank}</p>
            <p className="date">{cd}</p>
            <p>{seats?(ssss().map(ele=>(
                <Ppp key={ele} ss={seats.seats} idx={ele}/>
            ))):(null)}</p>
        </article>
    )
}

function Ticketing({state, ADD_DATA, CALL_CHECK}) {
    const [ apikey, setKey ] = useState("5075b061cad8c046fd3b006ec8600d2e");
    const [ date, setDate ] = useState(new Date);
    const [ loading, setLoading ] = useState(true);
    const [ movieInfo, setInfo ] = useState();
    const Year = date.getFullYear();
    const Month = ()=>{
        if(date.getMonth() <= 9) {
            return `0${date.getMonth()+1}`
        }
            return date.getMonth()+1
        } 
    const Day = ()=>{
        if(date.getDate() <= 10) {
            if(date.getDate() <= 1) {
                return `30`
            } else {
                return `0${date.getDate()-1}`
            }
        }
            return date.getDate()-1
        } 
    

    const { data, error, isLoading, callData } = useFetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${Year}${Month()}${Day()}`,state.refresh);

    useEffect(()=>{
        console.log(state.seats)
        if(!state.refresh) {
            setLoading(false);
            setInfo(state.data)
            console.log(movieInfo, "movieInfo")
        } else {
            callData();
            setLoading(isLoading)
            setInfo(data)
            console.log(data, "data")
            ADD_DATA(data);
        }
    },[isLoading, data, state.refresh])

    return (
        
        <div className="ticketing">
            {loading ? (
                <div>
                    Loading...
                </div>
            ):(
                !movieInfo.boxOfficeResult? (
                    error
                ):(
                    movieInfo.boxOfficeResult.dailyBoxOfficeList.map((ele, idx) => (
                        <MovieList 
                            cd={ele.movieCd}
                            name={ele.movieNm}
                            rank={ele.rank}
                            key={ele.movieCd}
                            seats={state.seats[idx]}
                            idx={idx}
                        />
                    ))
                )
            )}
            <Seating />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ADD_DATA : data => dispatch(actionCreators.ADD_DATA(data)),
        CALL_CHECK : refresh => dispatch(actionCreators.CALL_CHECK(refresh))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticketing);