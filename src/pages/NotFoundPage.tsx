import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Typography } from "@mui/material";

import page_not_found_image from '../assets/page_not_found.webp';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate('/dashboard');
    }

    return (
        <React.Fragment>

            <Navbar />

            <Box sx={{ border: '1px solid lightgrey', padding: 2, borderRadius: 2, margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box component='img' src={page_not_found_image} />
                <Typography variant="h4"> Page Not Found </Typography>
                <Button variant="contained" sx={{margin:2}} startIcon={< ArrowBack />} onClick={back}> Go Back to Dashboard </Button>
            </Box>

        </React.Fragment>
    )
}

export default NotFoundPage;