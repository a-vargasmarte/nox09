import React from 'react';
import { Box } from 'grommet';

const MainBox = ({ gridArea, direction, align, justify, pad, background, border, children }) => {
    return (
        <Box
            gridArea={gridArea}
            direction={direction}
            align={align}
            justify={justify}
            pad={pad}
            background={background}
            border={border}
        >

            {children}

        </Box>
    );
}

export default MainBox;