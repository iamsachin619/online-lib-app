import React,{useState} from "react";
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
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './bookCard.css'
export default function BookCardEdit() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //delete confirm modal
  const [openD, setOpenD] = React.useState(false)
  const handleOpenD = () => {
    setOpenD(true);
  };
  const handleCloseD = () => {
    setOpenD(false)
  }

  const [imageFile, setImageFile] = useState(null)
  return (
    <>
    <div className="book unread">
      <div className="cover">
          <div className="icons m-1" style={{position:'absolute'}}>
            <div className="edit btn me-2" style={{backgroundColor: 'white'}} onClick={()=>{handleClickOpen()}}>
              <BorderColorRoundedIcon/>
            </div>
            <div className="edit btn" style={{backgroundColor: 'white'}} onClick={()=> {handleOpenD()}}>
              <DeleteOutlineRoundedIcon/>
            </div>
          </div>
        <img src="http://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/028/28129-1.JPG" />
      </div>
      <div className="description">
        <p className="title">
          Roughing It
          <br />
          <span className="author">Mark Twain</span>
        </p>
      </div>
      {/* <div className="details">
        <p>publisher: string
    category: string
    yearOfPublishing: Int32  //number
    uploader: String  // users_id
    amountRate: Int32 // number</p>
  </div> */}
    </div>
     {/* modal to edit books */}
     <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Edit Book"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
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
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* modal to delete confirm */}
      <Dialog
        fullScreen={fullScreen}
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirm delete book"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
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
            
      <p className="content">Are you sure to delete this book? once confirmed it will be deleted from the Library</p>
           
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseD}>
            Cancel
          </Button>
          <Button onClick={handleCloseD} >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  </>
  );
}
