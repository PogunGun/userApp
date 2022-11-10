import * as React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button, { ButtonProps } from "@mui/material/Button";
import {purple, red} from '@mui/material/colors';
import {Modal, TextField} from "@mui/material";
import {Controller, useForm, useFormState} from "react-hook-form";
import {nameValidation, usernameValidation} from "./validation";
import { style } from './ModalUser';
import {useState} from "react";
import { ISignInForm } from '../type/types';
import ModalBlock from "./Modal";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[700],
    '&:hover': {
        backgroundColor: red[700],
    },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function SearchAppBar({setSet,setOpen,open,create,setUserTitle,setTitle,handleOpen}:any) {
    return (
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar>
        <IconButton
            size="large"
    edge="start"
    color="inherit"
    aria-label="open drawer"
    sx={{ mr: 2 }}
>
    <MenuIcon />

    </IconButton>
    <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
>
    User List
    </Typography>
        <ColorButton variant="contained" onClick={(e)=> handleOpen(e)}>Create User</ColorButton>
        <ModalBlock setOpen={setOpen} open={open} setUserTitle={setUserTitle} setTitle={setTitle} updateUser={create}/>
    <Search>
    <SearchIconWrapper>
        <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
        onChange={(e: any) => setSet(e.target.value)}
    placeholder="Search…"
    inputProps={{ 'aria-label': 'search' }}
    />
    </Search>
    </Toolbar>
    </AppBar>
    </Box>
        </ThemeProvider>
);
}