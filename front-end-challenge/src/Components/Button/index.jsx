import muiStyle from "./muiStyle";
import Button from '@mui/material/Button';
import theme from "../../GlobalStyles/muiGlobalStyle";
import { ThemeProvider } from "@mui/material";


export default function SubmitButton(props) {
    const { label } = props;
    
    return (
        <ThemeProvider theme={theme}>
            <Button 
                variant="contained"
                color="disabled"
                disabled={false}
                sx={muiStyle.Button}
                type="submit"
            >
                {label}
            </Button>
        </ThemeProvider>
    )
}