import React from 'react'
import BookCard from '../../Components/BookCard'
import NavBar from '../../Components/NavBar'

import Toolbar from '@mui/material/Toolbar';
export default function UserLandingPage() {
  return (
    <div>
       
        <Toolbar/>
        <div className="container ">
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </div>
    </div>
  )
}
