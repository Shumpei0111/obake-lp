import React, { useState, useEffect } from 'react';
import _p5 from 'p5/lib/p5.min.js';

const P5Wrapper = props => {
    const [ p5, setP5 ] = useState(0);  // eslint-disable-line
    const wrapper = React.createRef();  // eslint-disable-line

    useEffect( () => {
        setP5( new _p5(props.sketch, wrapper.current) );    // eslint-disable-next-line
    }, [props.sketch] );

    return <div ref={wrapper} />;
};

export default P5Wrapper;