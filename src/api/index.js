import axios from "axios";
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        // We will just take the data we need
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData
    } catch (error) {
        console.log("There is an error");
    }
}