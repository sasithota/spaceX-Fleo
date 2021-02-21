import React from 'react';

import {Form} from 'react-bootstrap'

function Checkboxes({data}){
    console.log(data);
    return (
            <div style = {{height : '15vh',display : 'flex',justifyContent : 'space-around',flexWrap : 'wrap',padding:'10px'}}>
                {/* checkboxes */}
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Successful Launch" name="launching" defaultChecked={data.launching} onChange={(e)=>data.changeLaunching(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Successful Landing" name="landing" defaultChecked={data.landing} onChange={(e)=>data.changeLanding(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicInput">
                    <Form.Control placeholder="LauchYear" value={data.launchyear} onChange={(e) => data.changeLaunchyear(e)}/>
                </Form.Group>
            </div>
    )
}

export default Checkboxes;