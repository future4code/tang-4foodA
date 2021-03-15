import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e8222e"
    },
    secondary: {
      main: "#ff6158"
    }
  },
});


function Tema(props) {

  return (
    <ThemeProvider theme={theme}>
       {props.children}
    </ThemeProvider>
  );
}

export default Tema;
