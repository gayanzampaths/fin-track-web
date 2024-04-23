import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FloatingAddIconProps {
    onClick: () => void; // Function to handle clicks
}

const FloatingAddIcon: React.FC<FloatingAddIconProps> = ({ onClick }) => {
    return (
        <React.Fragment>
            <Fab
                color="primary"
                aria-label="add"
                sx={{ position: 'fixed', bottom: 20, right: 20 }}
                onClick={onClick}
            >
                <AddIcon />
            </Fab>
        </React.Fragment>

    );
};

export default FloatingAddIcon;