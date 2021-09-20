import React from 'react';
import style from './slider.module.css';

const Slider = (props:any) => {

    const [sliderValue, setSliderValue] = React.useState(0);

    const outputUpdate = (event:any) => {
        setSliderValue(event.target.value)
    };

    return <div className={style.slider}>
        <output
            htmlFor={props.name}
        >{sliderValue}</output>
        <input className={style.frame} {...props} onInput={outputUpdate} />
    </div>
}

export default Slider;
