"use client";
import { createTheme } from "@mui/material/styles";

const buttonTheme = createTheme({
    palette: {
        action: {
            disabledBackground: "#aaaaaa !important",
            disabled: "#eeeeee !important",
        },
    },
    typography: {
        button: {
            textTransform: "none",
        }
    },
});

export default buttonTheme;