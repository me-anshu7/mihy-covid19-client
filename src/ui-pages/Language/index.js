import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";
import {
  Grid,
  Card,
  Typography,
  Divider,
  Button,
  CardHeader
} from "@material-ui/core";

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
  },
  button: {
    // padding: "10%",
    // variant: "contained",
    // color: "primary"
    width: "100px",
    height: "40px",
    margin: "10px"
  },
  assetTypography: {
    fontWeight: "500",
    marginLeft: 22,
    marginRight: 15,
    marginTop: 10
  }
};

class Language extends React.Component {
  login = async () => {};

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-around"
            }}
          >
            <Typography>Language</Typography>
            <Button>&#10006;</Button>
          </div>
          <Divider></Divider>
          <Typography className={classes.assetTypography} gutterBottom>
            Please select your Language:
          </Typography>

          <Grid container direction="column" alignItems="center">
            {["English", "Hindi", "Kannada"].map(value => (
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {value}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Card>
        {/* <div className={classes.root}>
                    <div className={classes.container}>
                        Language screen
                    </div>
                </div> */}
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
)(withStyles(styles)(Language));
