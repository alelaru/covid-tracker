import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from "./Chart.module.css"


const Chart = ( { data: {confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData.length // If its 0 then dont do it
            ? ( <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: '#3333ff',
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: 'red',
                    backgroundColor: "rgbd(255,0,0,0.5)",
                }],
                }
            }
        ></Line>) : null
    );
    console.log("Hey");
    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed 
        ? (
            <Bar 
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        labels: "People",
                        backgroundColor: ["rgba(0,0,255,0.5)", "rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }],
                }}
                options={{
                    legend: { display:false},
                    title: { display: true, text:`Current state in ${country}`},

                }}
            ></Bar>
        ) : null
    )

    // const fetchDailyData = await fetchDailyData();

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart;