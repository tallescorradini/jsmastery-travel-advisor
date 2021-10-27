import { makeStyles } from "@mui/styles";
import { alpha, createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export default makeStyles({
  title: {
    display: "none",
    [defaultTheme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: defaultTheme.shape.borderRadius,
    backgroundColor: alpha(defaultTheme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(defaultTheme.palette.common.white, 0.25),
    },
    marginRight: defaultTheme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [defaultTheme.breakpoints.up("sm")]: {
      marginLeft: defaultTheme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: defaultTheme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: defaultTheme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${defaultTheme.spacing(4)}) !important`,
    transition: defaultTheme.transitions.create("width"),
    width: "100%",
    [defaultTheme.breakpoints.up("md")]: { width: "20ch" },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});
