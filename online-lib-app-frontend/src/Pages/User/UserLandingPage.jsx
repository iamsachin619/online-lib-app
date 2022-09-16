import React, { useEffect, useState } from 'react'
import BookCard from '../../Components/BookCard'
import NavBar from '../../Components/NavBar'

import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import apiHost from '../../env';
export default function UserLandingPage({user}) {

  const [books, setBooks ] = useState([])
  useEffect(()=>{

    getBooks()
    
  
  },[])
  function getBooks(){
    let config = {
      method: 'get',
      url: apiHost + 'book/listofbooks',
      
    };
    
    axios(config)
    .then((response) => {
      setBooks(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
       
        <Toolbar/>
        <div className="container ">
           {books.map((book)=>{
            return <BookCard book={book} user={user}/>
           })}
        </div>
    </div>
  )
}
