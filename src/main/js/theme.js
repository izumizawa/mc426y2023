import { createTheme } from "@mui/material/styles";
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette

const theme = createTheme({
  palette: {
    paperdark: { main: "#424242" },
    primary: {
      extralight: "#ece1f8",
      main: "#7300E7",
      dark: "#21006F",
    },
    secondary: {
      main: "#4ADB7A",
      dark: "#15AB46",
    },
    error: {
      extralight: "#FCEEEE",
      light: "#F5C7C7",
      main: "#F30858",
      dark: "#941C1C",
      contrastText: "#FFF",
    },
    warning: {
      extralight: "#FDF4E6",
      light: "#F9DAAC",
      main: "#F0A330",
      dark: "#A4670C",
      contrastText: "#FFF",
    },
    info: {
      extralight: "#E4F1F3",
      light: "#A5CFD9",
      main: "#1E879F",
      dark: "#125868",
    },
    success: {
      extralight: "#ECF5EC",
      light: "#BFDEC1",
      main: "#5FAD63",
      dark: "#3D5C3F",
      contrastText: "#FFF",
    },
    text: {
      primary: "rgba(55,65,81,.87)",
      secondary: "rgba(55,65,81,.54)",
    },
    background: {
      default: "#FAFBFF",
      paper: "#fff",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: {
    1: "0px 3px 30px rgba(160, 175, 255, 0.12)",
  },
  typography: {
    h1: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.143,
    },
    h2: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "1.375rem",
      fontWeight: 500,
      lineHeight: 1.091,
    },
    h3: {
      fontSize: "1.375rem",
      fontWeight: 300,
      lineHeight: 1.091,
    },
    h4: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.222,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 300,
      lineHeight: 1.222,
    },
    h6: {
      fontFamily: "'Roboto Condensed', 'Roboto'",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.222,
    },
    subtitle1: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.714,
    },
    subtitle2: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.429,
    },
    body2: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "0.75rem",
      lineHeight: 1.333,
    },
    button: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.667,
      letterSpacing: "0.06em",
    },
    caption: {
      fontFamily: "'Montserrat', 'Roboto'",
      fontSize: "0.75rem",
      lineHeight: "1.2",
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 600,
      letterSpacing: "0.06em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});

export default theme;
