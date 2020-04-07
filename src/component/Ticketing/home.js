import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import Seating from './seating';

function MovieList({cd,name, rank}) {
    return (
        <article className={`movie m${cd}`}>
            <h2>{name}</h2>
            <p className={`rank rank${rank}`}>{rank}</p>
            <p className="date">{cd}</p>
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
        console.log(state.data === Array)
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
                !movieInfo.boxOfficeResult ? (
                    error
                ):(
                    movieInfo.boxOfficeResult.dailyBoxOfficeList.map(ele => (
                        <MovieList 
                            cd={ele.movieCd}
                            name={ele.movieNm}
                            rank={ele.rank}
                            key={ele.movieCd}
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