import React, { Component } from "react";
import { Box, Heading, Text, Button, Grid } from "grommet";
import { Copy, Edit } from "grommet-icons";
class Marie extends Component {
  state = {
    currentUser: {
      name: "",
      email: ""
    },

    venueStats: {
      place:
        "Mezzanine Sports Hall, Colegio Bilingue New Horizons, Avenida Sarasota No. 51, Bella Vista, Santo Domingo, Republica Dominicana",
      day: "7/27/2019",
      time: "06:00PM - 12:00 AM"
    }
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    let currentUser = this.state.currentUser;
    currentUser.name = idToken.idToken.claims.name;
    currentUser.email = idToken.idToken.claims.email;
    this.setState({
      currentUser: currentUser
    });
  }
  render() {
    const { name, email } = this.state.currentUser;
    return (
      <Grid
        areas={[
          { name: "nav", start: [0, 0], end: [0, 0] },
          { name: "main", start: [1, 0], end: [1, 0] },
          { name: "side", start: [2, 0], end: [2, 0] },
          { name: "foot", start: [0, 1], end: [2, 1] }
        ]}
        columns={["small", "flex", "medium"]}
        rows={["medium", "small"]}
        gap="small"
      >
        <Box gridArea="nav" background="brand" />
        <Box gridArea="main" background="brand" />
        <Box gridArea="side" background="brand" />
        <Box gridArea="foot" background="accent-1" />
      </Grid>
      // <Box align="stretch" animation='fadeIn'>

      //   {/* <Box direction="row-responsive" pad='medium' align="stretch"> */}
      //   <Heading textAlign='start' level={5}>
      //   Estimado {name}, apuesto a que ni te acordabas que en unos meses van a hacer 10 años desde que te
      //   graduaste del colegio!
      //   </Heading>

      //   {/* </Box> */}
      //   <Box direction="row-responsive" pad='medium'>
      //   <Text textAlign='start'>
      //   Seguro que mucho ha cambiado desde la ultima vez que nos
      //   reunimos todos a celebrar y compartir.</Text>
      //   </Box>

      //   <Box direction="row-responsive" pad='medium'>
      //   <Text textAlign='start'>
      //    Por esta y mas razones, nos da el placer
      //   de invitarte a ti y a tus acompañantes a nuestra reunión de 10 años de nuestra promoción
      //   Nox '09.
      //   </Text>
      //   </Box>

      //   <Box direction="row-responsive">
      //   <Heading alignSelf='start' level={3}>Donde</Heading>
      //   <Text alignSelf='center' textAlign='start'>{this.state.venueStats.place}</Text>
      //   </Box>

      //   <Box direction="row-responsive">
      //   <Heading level={3}>Cuando</Heading>
      //   <Text>{this.state.venueStats.day}</Text>
      //   <Text>{this.state.venueStats.time}</Text>
      //   </Box>

      // </Box>
    );
  }
}

export default Marie;
