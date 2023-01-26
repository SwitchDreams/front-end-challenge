import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import muiStyle from './muiStyle';

export default function MessageAlert(props) {
    const { 
        label, 
        disabled, 
        setDisabled, 
        severity 
    } = props;

    return (
        <Box sx={muiStyle.Box}>
            <Collapse in={disabled}>
            <Alert
                sx={muiStyle.Alert}
                severity={severity}
                action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                    setDisabled(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
                }
            >
                { label }
            </Alert>
            </Collapse>
        </Box>
    )
}