import React from 'react';
import { connect } from 'react-redux';
import { actionSquare, actionRemove } from '../../other/squareReducer';
import style from './square.module.css';

const SquareWrapper = (props:any) => {

    const squareRef:any = React.useRef();

    let stylees = {
        width: 200 + 'px',
        height: 200 + 'px',
        backgroundColor: 'black'
    }

    React.useEffect(() => {
        props.actionSquare(squareRef.current)
    }, []);

    const styleChange = (mode:string, value:string) => {
        if (mode === 'remove') {
            props.actionRemove(+(squareRef.current.id))
        }
        squareRef.current.style[mode] = value;
    };

    const changeLayout = (event:any) => {

        const coords = getPoint(squareRef.current);
        let shiftX = event.pageX - coords.left;
        let shiftY = event.pageY - coords.top;

        squareRef.current.style.position = "absolute"
        squareRef.current.style.zIndex = 55


        const mouseMove = (e:any) => {
            squareRef.current.style.left = e.pageX - shiftX + 'px';
            squareRef.current.style.top = e.pageY - shiftY + 'px';
        };

        function getPoint(elem:any) {
            let box = elem.getBoundingClientRect();
            return {
                top: box.top + window.scrollY,
                left: box.left + window.scrollX
            };
        }

        document.onmousemove = (e) => mouseMove(e);
    }

    const stopMouseMove = (e:any) => document.onmousemove = null;

    return <div
        onClick={() => styleChange(props.tools.mode, props.tools.value)}
        onMouseDown={changeLayout}
        onMouseUp={stopMouseMove}
        onDragStart={() => false}
        ref={squareRef} className={style.square}
        id={props.id}
        style={stylees}
    ></div>
}

const mapStateToProps = (state:any) => {
    return {
        tools: state.toolsState.tools
    }
}

export default connect(mapStateToProps, { actionSquare, actionRemove })(SquareWrapper);
