import React, { Component } from "react";
import GrommetComponent from "./GrommetComponent";
import { grommet } from "grommet/themes";
import GrommetGrid from "./GrommetGrid";
import HeaderBox from "./HeaderBox";
import MainBox from "./MainBox";
import SideNavBox from "./SideNavBox";
import SideNavBoxButtons from "./SideNavBoxButtons";
import SideNavButton from "./SideNavButton";
import { Copy, Upload, Mail } from "grommet-icons";
import { Button, Text, Box, Distribution } from "grommet";
import { Link } from "react-router-dom";
class Layout extends Component {
  state = {
    sidebar: true,
    grid: {
      rows: ["auto", "flex"],
      columns: ["auto", "flex"],
      areas: [
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]
    },
    HeaderBox: {
      gridArea: "header",
      direction: "row",
      alignContent: "",
      justify: "between",
      pad: {
        horizontal: "medium"
        // vertical: '2px'
      },
      background: "light-1",
      border: {
        color: '#DA8CB4',
        size: 'large'
      }
    },
    MainBox: {
      gridArea: "main",
      direction: "row",
      alignContent: "",
      justify: "between",
      pad: {
        horizontal: "medium"
        // vertical: '2px'
      },
      background: "light-1",
      border: {
        color: '#95BC51',
        size: 'large'
      }
    }
  };

  render() {
    return (
      <GrommetComponent full theme={grommet}>
        <GrommetGrid
          fill
          rows={this.state.grid.rows}
          columns={this.state.grid.columns}
          areas={this.state.grid.areas}
        >
          <HeaderBox
            gridArea={this.state.HeaderBox.gridArea}
            direction={this.state.HeaderBox.direction}
            alignContent={this.state.HeaderBox.alignContent}
            justify={this.state.HeaderBox.justify}
            pad={this.state.HeaderBox.pad}
            background={this.state.HeaderBox.background}
            border={this.state.HeaderBox.border}
          >
            <SideNavButton />
            <Box direction="row">
              <Link to="/marie">
                <Button
                  icon={<Mail color="#95BC51" size="large" />}
                  onClick={() => {}}
                />
              </Link>

              <Link to="/upload">
                <Button
                  icon={<Upload color="#95BC51" size="large" />}
                  hoverIndicator
                  onClick={() => {}}
                />
              </Link>
            </Box>
            {/* </Box> */}

            {/* <Box gridArea="main" background="brand" /> */}
          </HeaderBox>
          <MainBox
            gridArea={this.state.MainBox.gridArea}
            direction={this.state.MainBox.direction}
            alignContent={this.state.MainBox.alignContent}
            justify={this.state.MainBox.justify}
            pad={this.state.MainBox.pad}
            background={this.state.MainBox.background}
            border={this.state.MainBox.border}
          >
            {this.props.children}
          </MainBox>
        </GrommetGrid>
      </GrommetComponent>
    );
  }
}

export default Layout;
