
import axios from 'axios';

var BaseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';

export default function Api({launchYear,landing,launching}){
    var newURL = BaseURL;
    if(launching){
        console.log("launching")
        newURL = newURL + "&launch_success=true";
    }
    if(landing){
        console.log("landing")
        newURL = newURL + "&land_success=true";
    }
    if(launchYear){
        console.log("launch year")
        newURL = newURL + "&launch_year=2014";
    }
    return new Promise(async (resove,reject)=>{
            const response = await axios.get(newURL);
            const data = response.data;
            resove(data);
    });
    
}