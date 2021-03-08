import axios from "axios";
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async ( country ) => {
    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
        // We will just take the data we need
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${url}/daily`);

        
        const modifiedData = data.map((data) => ({
            confirmed: data.confirmed.total, 
            deaths: data.deaths.total,
            date: data.reportDate
        }) );

        return modifiedData

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error);
    }
}