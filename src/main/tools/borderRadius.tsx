import React from 'react';
import { connect } from 'react-redux';
import { actionEditMode } from '../../other/toolsReducer';

const BorderRadius = (props:any) => {
    
    const putRadiusStore = (event:any) => {
        let value = event.target.value + 'px'
        props.actionEditMode('borderRadius', value)
    }

    return <div className="borderRadius">
        <label htmlFor="borderRadius">Change to frame.</label>
        <input
            onBlur={putRadiusStore}
            id='borderRadius'
            type="number"
            defaultValue='0' />
    </div>
}

export default connect(null, { actionEditMode })(BorderRadius);
