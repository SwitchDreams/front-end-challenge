import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import muiStyle from './muiStyle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useContext, useEffect, useState, Fragment } from 'react';
import { ClassesContext } from '../../Contexts/ClassesContexts';
import Token from '../../Utils/token';
import SubmitButton from '../Button';
import Loading from '../Loading';

export default function TemporaryDrawer() {
    const [ state, setState ] = useState({});
    const [ value, setValue ] = useState("");
    const { 
        getCategories, 
        categories, 
        setFilter 
    } = useContext(ClassesContext);

    const token = Token();

    useEffect(() => {
        getCategories(token, value);
    },[]);

    function OnSubmit(e) {
        setFilter(value);
        setState({ ...state, "right": false });

    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={muiStyle.SideBar}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={muiStyle.List}>
            <FormControl>
            <FormLabel 
                id="demo-controlled-radio-buttons-group"
                sx={muiStyle.Title}
            >
                Categorias
            </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {
                        categories.length > 0 ? 
                        (
                            categories.map((categorie) => {
                                return (
                                    <FormControlLabel 
                                        value={categorie.id} 
                                        control={
                                            <Radio sx={muiStyle.Check} 
                                        />} 
                                        label={categorie.name}
                                    />
                                )
                            })
                        )        
                        :
                        <Loading />
                    }
                    {
                        categories.length > 0 ? 
                        (
                            <FormControlLabel 
                                value="" 
                                control={
                                    <Radio sx={muiStyle.Check} 
                                />} 
                                label="Remover filtro"
                            />
                        )
                        :
                        <></>
                    }
                    </RadioGroup>
            </FormControl>
            </List>
            <div onClick={(e) => OnSubmit(e)}>
                <SubmitButton label="Filtrar" disabled={false}/>
            </div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
            <Fragment key={anchor}>
                <Button 
                onClick={toggleDrawer(anchor, true)}
                sx={muiStyle.Button}
                >
                Filtrar
                </Button>
                <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                >
                {list(anchor)}
                </Drawer>
            </Fragment>
            ))}
        </div>
    );
}

