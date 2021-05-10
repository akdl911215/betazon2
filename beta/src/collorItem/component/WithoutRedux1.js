import React, { useState, useCallback } from 'react';
import '../style/withoutRedux.css';

const WithoutRedux1 = () => {
    const onChange = useCallback(() => {
        document.querySelector('#component_red').style.backgroundColor = 'red';
    });

    const [inputs, setInputs] = useState({});

    const onSubmit = useCallback(() => {});

    return (
        <>
            <body>
                <div className="containerCollrItem" id="component_red">
                    <h1>red</h1>
                    <input type="button" value="fire" onclick={() => setInputs((inputs.color = 'red'))} />
                </div>
            </body>
        </>
    );
};
export default WithoutRedux1;
