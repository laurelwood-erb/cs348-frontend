import axios from "axios";

const url = "http://localhost:8080/api"

export const getCountries = async (name) => {
    return await axios.get(url + "/airline-countries", {
        params:{
            airline: name
        }
    }).then((res) =>{
        console.log(res);
    });
}
