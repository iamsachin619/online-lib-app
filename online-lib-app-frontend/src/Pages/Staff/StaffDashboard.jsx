import React from 'react'
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
  return (
    <>
    <div>
        <Toolbar/>
        <div className="addNewBook m-3 d-flex justify-content-end">
            <AddCircleIcon style={{fontSize:'38px'}} onClick={()=> handleClickOpen()}/>
        </div>
    </div>

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
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
