import React from 'react';
import { connect } from 'react-redux';
import { actionEditMode } from '../../other/toolsReducer';
import style from './button.module.css';

const CreateButton = (props:any) => { //<-control button to create and remove

    const creator = () => {
        props.create(Math.floor(Math.random() * 10000))
    }

    const remove = () => {
        props.actionEditMode('remove','')
    }

    return <>
        <button onClick={creator} className={style.btn}>Create to {props.name}</button>
        <button onClick={remove} className={style.btn}>Remove to {props.name}</button>
    </>
}

export default connect(null, { actionEditMode })(CreateButton);