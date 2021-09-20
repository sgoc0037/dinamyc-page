import React from 'react';
import { connect } from 'react-redux';
import { actionEditMode } from '../../other/toolsReducer';
import Slider from '../../reComponent/sliders/slider';

const ToolsBorder = (props:any) => {


    const [customValue, setCustomValue] = React.useState(false);

    const putToBorder = (event:any) => {
        let value = event.target.value + 'px'
        props.actionEditMode('borderWidth', value)
    }

    return <div className='border__tools'>
        <label
            onClick={(e) => setCustomValue(!customValue)}
            htmlFor="borderSize">
            Create to outline.</label>
        {
            customValue &&
            <Slider
                onBlur={putToBorder}
                type="range"
                name="borderSize"
                min="0"
                max="90"
                defaultValue="0"
                step="1" />
        }
    </div>
}

export default connect(null, { actionEditMode })(ToolsBorder);