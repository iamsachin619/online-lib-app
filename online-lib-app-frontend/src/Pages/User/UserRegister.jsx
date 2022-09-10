import React from 'react'
import '../login.css'
export default function UserRegister() {
  return (
    <div>
        <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Welcome to Books Library <br />
          Login Page
        </h2>
       
      </div>
    </div>

    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form mx-3">
          <form>
            <div class="form-group mt-1">
              <label>User Name / Email</label>
              <input type="text" class="form-control" placeholder="User Name" />
            </div>

            <div class="form-group mt-1">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>

            <div class="form-group mt-1">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>

            <div class="form-group mt-1">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
           
            <button  class="btn btn-secondary my-3">Register</button>
            <button
             
              class="btn btn-secondary ms-2 my-3"
          
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
