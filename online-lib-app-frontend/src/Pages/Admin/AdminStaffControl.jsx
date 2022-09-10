import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import BookCardEdit from '../../Components/BookCardEdit';


export default function AdminStaffControl() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
    <div>
         <Toolbar/>
        <div className="addNewBook m-3 d-flex justify-content-end align-items-center font-weight-bold" style={{fontWeight:'bold'}}>
            <div className="btn" onClick={()=> handleClickOpen()}>
                <span className="font-weight-bold">Add Staff</span> <AddCircleIcon style={{fontSize:'38px'}}/>
            </div>
        </div>

    </div>

    {/* modal to add new staff */}
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add new Staff"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            All fields are mandatory.
          </DialogContentText>
          <div className="form">
            {/* userName: String
                firstName: string 
                lastName: string
                password: string
                email: string  */}
            
           <TextField id="filled-basic" label="Staff name" variant="filled" className='m-3'/> 
           <TextField id="filled-basic" label="First name" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Last name" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Password" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Email" variant="filled"  className='m-3'/> 
         
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} >
            Add Staff!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
