
import axios from 'axios';

var BaseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';

export default function Api({launchYear,landing,launching}){
    if(!launchYear && !landing && !launching){
        return new Promise(async (resove,reject)=>{
              const response = await axios.get(BaseURL);
              const data = response.data;
              resove(data);
        })
    }
}