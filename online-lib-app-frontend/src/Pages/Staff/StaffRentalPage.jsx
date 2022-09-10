import { Toolbar } from '@mui/material'
import React from 'react'
import RequestCard from '../../Components/RequestCard'

export default function StaffRentalPage() {
  return (
    <div>
        <Toolbar/>
        <div className="container">
            <h3 className="head">Requests </h3>
            <RequestCard/>
            <RequestCard/>
            <RequestCard/>
            <RequestCard/>
        </div>
    </div>
  )
}
