import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
import styles from "./cards.module.css"
import cx from "classnames"

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return "loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={1} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={1} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={1} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;