import axios from "axios";

const url = "http://localhost:8080/api"

export const getCountries = async (airline) => {
    return await axios.get(url + `/airline-countries/${airline}`).then((res) =>{
        console.log(res);
    });
}
