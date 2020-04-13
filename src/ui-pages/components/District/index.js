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
    // margin: "1% 0% 0% 5%"
    // minWidth: "575"
    // flexGrow: 1
    width: "20%",
    height: "100vh"
  }
};

class State extends React.Component {
  login = async () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Bengaluru:{" "}
            </Typography>
          </Grid>
          <Divider></Divider>
          <Grid container>
            <Card>
              <Grid item md={6}>
                <Typography>Confirmed: </Typography>
              </Grid>
            </Card>
          </Grid>
        </Card>
      </div>
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
