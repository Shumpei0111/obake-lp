import React, { useState, useEffect } from 'react';
import _p5 from 'p5/lib/p5.min.js';

const P5Wrapper = props => {
    const [ p5, setP5 ] = useState(0);
    const wrapper = React.createRef();

    useEffect( () => {
        setP5( new _p5(props.sketch, wrapper.current) );
    }, [props.sketch] );

    return <div ref={wrapper} />;
};

export default P5Wrapper;