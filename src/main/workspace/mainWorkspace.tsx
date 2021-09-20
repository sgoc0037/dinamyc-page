import React from 'react';
import { connect } from 'react-redux';
import SquareWrapper from '../../reComponent/square/squareWrapper';

let Workspace = (props:any) => {

    // const moveMouse = (e)=> {
    //     console.log('da')
    // }

    return <div className='workspace'>
        {props.square &&
            props.square.map((item:any) => {
                return item?.name ? <SquareWrapper key={item.name} id={item.name} /> : '';
            })
        }
    </div>
}

const mapStateToProps = (state:any) => {
    return {
        square: state.squareState.square
    }
}

export default connect(mapStateToProps, {})(Workspace);