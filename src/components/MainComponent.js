import React, {useState,useEffect} from 'react'

import Api from './ApiCalls';
import CardDisplay from './CardDisplay';

import LoadingSpinner from './LoadingSpinner';
import Checkboxes from './Checkboxes';


const styles = {
    container : {
        height : '90vh',
    },
    dataview : {
        height : '85vh',
        display : 'flex',
        flexWrap : 'wrap',
        padding : '10px',
        justifyContent : 'center',
        alignContent : 'space-between',
        alignItems : 'center'
    },
}

function DataView({missions}){
    return (
        <div style={styles.dataview}>
           {
                
                missions.length===0 ? <p>No Data</p> : missions.map( e => <CardDisplay data={e}/>)
            }
        </div>
    )
}

const MainComponent = () => {

    const [launchyear, setLaunchyear] = useState("");
    const [launching , setLaunching] = useState(false);
    const [landing , setLanding] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [missions, setMissions] = useState([]);

    useEffect(()=>{
       setIsLoading(true);
       Api({launchyear,landing,launching}).
       then(data => {
             setMissions(data);
             setIsLoading(false);
       });
    },[launchyear,landing,launching])

    const changeLaunchyear = (e)=>{
        setLaunchyear(e.target.value);
    }
    const changeLaunching = (e)=>{
        setLaunching(e.target.checked);
    }
    const changeLanding = (e)=>{
        setLanding(e.target.checked);
    }

    const params = {
        launchyear,
        landing,
        launching,
        changeLaunchyear,
        changeLaunching,
        changeLanding
    }

    return (
        <div style = {styles.container}>
            <Checkboxes data={params}/>
            {
                isLoading ? <LoadingSpinner /> : <DataView missions={missions}/>
            }
        </div>
    );
}

export default MainComponent