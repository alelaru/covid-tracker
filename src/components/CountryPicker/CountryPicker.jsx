import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api';
import styles from "./CountryPicker.module.css"


const CountryPicker = ( { handlerCountryChange }) => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        
        const fetchAPI = async () => {
            setCountryData(await fetchCountries())
        }
        console.log("Hey");
        fetchAPI();

    }, [setCountryData]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handlerCountryChange(e.target.value)}>
                <option value="global">Global</option>""
                {countryData
                ?
                countryData.map((country, i) => {
                    return <option key={i} value={`${country}`}>{country}</option>
                    })
                :
                    null
                }
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;