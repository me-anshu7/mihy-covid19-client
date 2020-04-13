import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { mapDispatchToProps } from "../../../ui-utils/commons";
import { connect } from "react-redux";
import { Grid, Card, CardHeader } from "@material-ui/core";

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
    // width:"25%",
    display: "flex",
    alignItems: "center",
    justify: "center",
    flexDirection: "column"
  }
};

class State extends React.Component {
  login = async () => {};

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Card>
          <Grid item>
            <CardHeader>Karnataka</CardHeader>
          </Grid>
          <Grid item>
            <Card>
              <Typography>Confirmed</Typography>
              <Typography>Active</Typography>
              <Typography>Recovered</Typography>
              <Typography>Deaths</Typography>
            </Card>
          </Grid>
        </Card>
        <div className={classes.root}>
          <div className={classes.container}>State Component</div>
        </div>
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
