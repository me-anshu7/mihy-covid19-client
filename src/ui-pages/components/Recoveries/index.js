import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { mapDispatchToProps } from "../../../ui-utils/commons";
import { connect } from "react-redux";
import { Grid, Card, CardHeader, Typography, Divider } from "@material-ui/core";

const styles = {
  root: {
    height: "100vh",
    background: "#F8F8F8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    // padding:"10%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justify: "center",
    flexDirection: "column"
  },
  containerStyle: {
    margin: "1% 0% 0% 5%"
  }
};

class State extends React.Component {
  login = async () => {};

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.containerStyle}>
        <Card>
          <Grid item>
            <Typography>Recovered</Typography>
          </Grid>
          <Divider></Divider>
          <Grid container>
            <Card>
              <Grid item md={6}>
                <Typography>Confirmed: </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography>Active:</Typography>
              </Grid>
              <Grid item md={6}>
                <Typography>Recovered:</Typography>
              </Grid>
              <Grid item md={6}>
                <Typography>Deaths:</Typography>
              </Grid>
            </Card>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = ({ screenConfiguration = {} }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { login = {}, userInfo = {} } = preparedFinalObject;
  return { login, userInfo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(State));
