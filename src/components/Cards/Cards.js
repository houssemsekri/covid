import React, { useContext } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import { DataContext } from "../../contexts/DataContext";
import CountUp from "react-countup";
import cx from "classnames";
function Cards() {
  const { confirmed, lastUpdate, recovered, deaths } = useContext(
    DataContext
  ).data;
  if (!confirmed) {
    return "loading ...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {" "}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.test, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary">Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              number of active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.test, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary">Recovered</Typography>

            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              number of recovred from covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.test, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary">Deaths</Typography>

            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              number of Deaths caused by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
