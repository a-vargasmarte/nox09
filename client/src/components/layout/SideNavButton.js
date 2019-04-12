import React from "react";
import { Button, Text, Box, Heading } from "grommet";
import { Link } from "react-router-dom";

const SideNavButton = ({ onClick }) => {
  return (
    <Box
      direction="row"
      border={{ color: "#E6EF7B", size: "medium", style: "solid", side: 'right' }}
      pad={{right: 'large', top: 'medium'}}
    >
      <Link to="/">
        <Button onClick={onClick} size="small" color="light-2">
          <Heading alignSelf="start" color="#95BC51" level={1}>
            Nox '09
          </Heading>
        </Button>
      </Link>
    </Box>
  );
};

export default SideNavButton;
