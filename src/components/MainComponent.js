import React, {useState,useEffect} from 'react'

import Api from './ApiCalls';

import {Form} from 'react-bootstrap'


const styles = {
    container : {
        height : '100%'
    },
    filter : {
        height : '10%',
        display : 'flex',
        justifyContent : 'space-around'
    },
    dataview : {
        height : '90%'
    }
}

function MainComponent(){

    const [filters, setFilters] = useState({launchYear: false,landing : false, launching : false});
    const [missions, setMissions] = useState([]);
    const filterHandler = (event) =>{
       const name = event.target.name;
       var newState = filters;
       newState[name] = event.target.checked;
       setFilters(newState);
    } 

    useEffect(()=>{
       Api(filters).then(data => setMissions(data));
    },[])
    
    return (
        <div style = {styles.container}>
            <div style = {styles.filter}>
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Launch Year" name="launchYear" defaultChecked={filters.launchYear} onChange={filterHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Successful Launch" name="launching" defaultChecked={filters.launching} onChange={filterHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Successful Landing" name="landing" defaultChecked={filters.landing} onChange={filterHandler}/>
                </Form.Group>
            </div>
            <div style = {styles.dataview}>
                {missions.map(element => {
                    return <h1>{element.flight_number}</h1>;
                })}
            </div>
        </div>
    );
}

export default MainComponent