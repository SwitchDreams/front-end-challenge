import muiStyle from "./muiStyle";
import Button from '@mui/material/Button';
import theme from "../../GlobalStyles/muiGlobalStyle";
import { ThemeProvider } from "@mui/material";


export default function SubmitButton(props) {
    const { label, disabled } = props;
    
    return (
        <ThemeProvider theme={theme}>
            <Button 
                variant="contained"
                color="disabled"
                disabled={disabled}
                sx={muiStyle.Button}
                type="submit"
            >
                {label}
            </Button>
        </ThemeProvider>
    )
}