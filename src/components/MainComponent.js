import React, {useState,useEffect} from 'react'

import Api from './ApiCalls';
import CardDisplay from './CardDisplay';

import {Form} from 'react-bootstrap'
import LoadingSpinner from './LoadingSpinner';


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
        height : '90%',
        display : 'flex',
        flexWrap : 'wrap',
        padding : '10px',
        justifyContent : 'flex-start',
        alignContent : 'space-between',
        alignItems : 'center'
    },
    spinner : {
        height : '100%',
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}

function MainComponent(){

    const [filters, setFilters] = useState({launchYear: false,landing : false, launching : false});
    const [render,setRender] = useState(false);
    const [missions, setMissions] = useState([]);

    const filterHandler = (event) =>{
       const name = event.target.name;
       var newState = filters;
       newState[name] = event.target.checked;
       setRender(!render);
       setFilters(newState);
    } 

    useEffect(()=>{
       Api(filters).then(data => setMissions(data));
    },[filters,render])
    
    return (
        <div style = {styles.container}>
            <div style = {styles.filter}>
                {/* checkboxes */}
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
                {
                    missions.length===0?
                    <div style={styles.spinner}><LoadingSpinner/></div>:
                    missions.map( e => <CardDisplay data={e}/>)
                }
            </div>
        </div>
    );
}

export default MainComponent