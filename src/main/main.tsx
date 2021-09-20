import React from 'react';
import Tools from './tools/tools';
import Workspace from './workspace/mainWorkspace';
import style from './main.module.css';

const Main = (props:any) => {

    return <div className={style.main}>
        <Workspace />
        <Tools />
    </div>
}

export default Main;