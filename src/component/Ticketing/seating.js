import React, { useEffect } from 'react';
import SeatingCount from './seatingCount';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

function Seating({state, ADD_SEATS}) {
    const { theaterSeat, TheaterCheck } = SeatingCount();
    useEffect(()=>{
        console.log("예매현황", theaterSeat);
        ADD_SEATS(theaterSeat);
    },[theaterSeat])
    return (
        <article className="seating">

        </article>
    )
}

const mapStateToProps = state => {
    return {
        state : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ADD_SEATS : seats => dispatch(actionCreators.ADD_SEATS(seats))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seating);