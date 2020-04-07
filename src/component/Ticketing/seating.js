import React from 'react';
import seatingCount from './seatingCount';
import { connect } from 'react-redux';

function Seating({state}) {
    const count = seatingCount(state);

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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seating);