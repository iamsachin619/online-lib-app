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

export default function StaffDashboard() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [imageFile, setImageFile] = useState(null)
  return (
    <>
    <div>
        <Toolbar/>
        <div className=" addNewBook m-3 d-flex justify-content-end  align-items-center font-weight-bold">
           <div className="btn"  style={{fontWeight:'bold'}} onClick={()=> handleClickOpen()}>

            Add new book <AddCircleIcon style={{fontSize:'38px'}}/>
           </div>
        </div>
    <div className="container">

        <BookCardEdit/>
        <BookCardEdit/>
        <BookCardEdit/>
        <BookCardEdit/>
    </div>
    </div>
   
    {/* modal to add books */}
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add a new Book"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            All fields are mandatory.
          </DialogContentText>
          <div className="form">
            {/* image: string   (multer npm lib for uploading imgs to backend)
    title: string 
    author: string
    publisher: string
    category: string
    yearOfPublishing: Int32  //number
    uploader: String  // users_id
    amountRate: */}
            <div className="container d-flex justify-content-center align-items-start">

            {imageFile?<img src={ URL.createObjectURL(imageFile)} width='177px'/>:<img src='./assets/bookPlaceholder.png'/>}
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={(e)=> setImageFile(e.target.files[0])}/>
                <PhotoCamera />
            </IconButton>
            </div>
           <TextField id="filled-basic" label="Book title" variant="filled" className='m-3'/> 
           <TextField id="filled-basic" label="Book author" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Book publisher" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Book category" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Year of Publishing" variant="filled"  className='m-3'/> 
           <TextField id="filled-basic" label="Rate to rent per day" variant="filled"  className='m-3'/> 
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add Book!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
