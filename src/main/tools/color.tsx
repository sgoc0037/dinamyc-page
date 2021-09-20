import React from 'react';
import { connect } from 'react-redux';
import { actionEditMode } from '../../other/toolsReducer';

const ToolsColor = (props:any) => {

    const putFillInStore = (event:any) => {
        props.actionEditMode('backgroundColor', event.target.value)
    };

    const putOutlineInStore = (event:any) => {
        props.actionEditMode('borderColor', event.target.value)
    };

    return <div className='color__tools'>
        <label htmlFor="backgroundColor">Color to fills.</label>
        <input
            onBlur={putFillInStore}
            id='backgroundColor'
            type="color"
            defaultValue='black' />
        <label htmlFor="borderColor">Color to outline.</label>
        <input
            onBlur={putOutlineInStore}
            id='borderColor'
            type="color"
            defaultValue='black' />
    </div>
}

export default connect(null, { actionEditMode })(ToolsColor);