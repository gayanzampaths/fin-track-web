import { Box, Button, Container, FormControl, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signIn, signUp } from "../handlers/auth/AuthHandler";
import Navbar from "../components/Navbar";

import login_logo from '../assets/login_logo.webp';
import asgardeo_logo from '../assets/asgardeo_logo.webp';

import { useAuthContext } from "@asgardeo/auth-react";

const AuthPage = () => {
    const navigate = useNavigate();

    const { state, signIn, signOut } = useAuthContext();
    const [isWaiting, setWaiting] = useState(false);

    const handleAuth = useCallback(() => {

        setWaiting( true )

        signIn()
            .catch((error) => console.log(error))
    }, [signIn, isWaiting]);

    useEffect(() => {

        if (state.isAuthenticated) {
            navigate('/');
        }
    }, [state.isAuthenticated])

    return (
        <React.Fragment>

            <Navbar />

            {!isWaiting && (
                <>
                    <Box sx={{ border: '1px solid lightgrey', padding: 2, borderRadius: 2, margin: 5 }}>
                        <Container maxWidth="sm">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box component='img' alt="Welcome to Stock Pilot" src={login_logo} sx={{ display: { width: '150px', padding: '10px' } }} />
                                        <Typography variant="h5" sx={{ my: 2 }}>
                                            FinTrack
                                        </Typography>
                                        <Typography variant="body1">Welcom to FinTrack - Smart Way to manage your finances.</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box component='img' alt="SignIn / SignUp with Asgardeo." src={asgardeo_logo} sx={{ display: { height: '100px', padding: '10px' } }} />
                                        <Button variant="contained" type="submit" fullWidth onClick={() => handleAuth()}>
                                            SignIn / SignUp with Asgardeo
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </>
            )}

            {isWaiting && (
                <>
                    <h1>waiting.</h1>
                </>
            )}
        </React.Fragment>
    )
}

export default AuthPage;