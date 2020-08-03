import React, { useState } from "react";
import NoteIcon from "@material-ui/icons/Note";
import { Switch, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavigationContainer ,DarkTheme} from '@react-navigation/native';

function Header() {
  // const [darkMode, setDarkMode] = useState(false);

  // const darkTheme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       light: lightGreen[300],
  //       main: lightGreen[500],
  //       dark: lightGreen[700]
  //     },
  //     secondary: {
  //       light: blueGrey[300],
  //       main: blueGrey[500],
  //       dark: blueGrey[700]
  //     },
  //     type: "dark"
  //   }
  // });

  // const lightTheme = createMuiTheme({});

  return (
    <>
    <NavigationContainer theme={DarkTheme}>
    <ThemeProvider >
      <Paper>
      <header>
      <h1><NoteIcon/>Google Keep</h1>
      {/* <Switch checked={darkMode} onchange={() => setDarkMode(!darkMode)} /> */}
      <Switch/>
    </header>
      </Paper>
    </ThemeProvider>
    </NavigationContainer>

    {/* <div>
      <header>
        <h1>
          <NoteIcon />
          Google Keep
        </h1>
      </header>
    </div> */}
    </>
  );

}

export default Header;

