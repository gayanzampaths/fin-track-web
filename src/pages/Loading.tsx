import { Backdrop, Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {

    const { state } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {

        if( state.isAuthenticated ) {
            navigate('/');
        }

    }, [state.isAuthenticated]);

    return (
        <React.Fragment>

            <Navbar />

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </React.Fragment>
    )
}

export default LoadingPage;