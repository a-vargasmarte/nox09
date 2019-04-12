import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import { Box, Heading, Text, Button } from "grommet";
import { Mail } from "grommet-icons";

export default withAuth(
  class Home extends Component {
    state = {
      currentUser: {
        name: "",
        email: ""
      },
      authenticated: null,
      gridArea: "main",
      justify: "end",
      align: "start"
    };

    checkAuthentication = async () => {
      // console.log(this.props);
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    componentDidMount() {
      const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
      let currentUser = this.state.currentUser;
      // currentUser.name = idToken.idToken.claims.name;
      // currentUser.email = idToken.idToken.claims.email;

      console.log(currentUser);
      this.setState({
        currentUser: currentUser
      });
      // console.log(this.props);
      console.log(this.state.authenticated);
      this.checkAuthentication();
    }
    componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <Box
          gridArea={this.state.gridArea}
          justify={this.state.justify}
          align={this.state.align}
          pad={{ top: "xlarge" }}
          basis="xlarge"
        >
          <Heading color="#DA8CB4" level={2} alignSelf="start">
            Hola, {this.state.currentUser.name} abre tu tarjeta!
          </Heading>
          <Link to="/marie">
            <Button
              icon={<Mail color="#DA8CB4" size="large" />}
              onClick={() => {}}
            />
          </Link>

          <Button
            primary
            label="Logout"
            color="status-critical"
            margin="large"
            onClick={this.logout}
          />
        </Box>
      ) : (
        <Box
          gridArea={this.state.gridArea}
          justify={this.state.justify}
          direction={"row"}
          align="end"
        >
          <Button
            primary
            label="Login"
            color="dark-1"
            margin="large"
            onClick={this.login}
          />
        </Box>
      );

      return <div>{mainContent}</div>;
    }
  }
);
