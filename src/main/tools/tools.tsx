import React from 'react';
import { connect } from 'react-redux';
import { getSquare } from '../../other/squareReducer';
import CreateButton from '../../reComponent/button/button';
import ToolsColor from './color';
import ToolsBorder from './border';
import style from './tools.module.css';
import ToolsBorderRadius from './borderRadius';

const Tools = (props:any) => {
    return <>
        <div className={style.tools}>
            <ToolsColor />
            <ToolsBorder />
            <ToolsBorderRadius />
            <CreateButton
                name='square'
                create={props.getSquare}
            />
        </div>
    </>
}

export default connect(null, { getSquare })(Tools)