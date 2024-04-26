// React
import * as React from 'react';
//import PropTypes from 'prop-types';
// MUI
import Button from '@mui/material/Button';
import {styled, useTheme} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <Stack direction={'row'} marginRight={8} justifyContent="space-between">
            <DialogTitle sx={{m: 0, p: 2}} {...other}>
                {children}
            </DialogTitle>
            {onClose ? (
                <Tooltip title={"Close"}>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 15,
                            top: 11,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                </Tooltip>
            ) : null}
        </Stack>
    );
};

/*
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};*/

export const ModalDialog = (props) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        props.setShowModal(false);
        props.onClose && props.onClose();
    };

    return (
        <div>
            <BootstrapDialog
                fullScreen={fullScreen}
                fullWidth={props.fullWidth}
                maxWidth={"md"}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.showModal}
                sx={props.showAsSideBar ? {
                    '& .MuiDialog-paper': {
                        'position': 'absolute',
                        'right': 0,
                        'top': 0,
                        'maxWidth': '300px',
                        'margin': '2px'
                    },
                } : null}
            >
                <BootstrapDialogTitle id="customized-dialog-title" sx={{
                    color: "#111928",
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontWeight: '600',
                }} onClose={handleClose}>
                    {props.title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {props.content}
                </DialogContent>
                {props.showOK &&
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            OK
                        </Button>
                    </DialogActions>
                }
            </BootstrapDialog>
        </div>
    );
}