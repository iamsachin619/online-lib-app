import React from 'react'
import './login.css'
export default function LoginPage() {
  return (
    <div>
        <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Welcome to Books Library <br />
          Login Page
        </h2>
        {/* <p>Login or register from here to access.</p> */}
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form mx-3">
          <form>
            <div class="form-group mt-1">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="User Name" />
            </div>
            <div class="form-group mt-1">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group mt-1">
                <label for="exampleFormControlSelect1">Select Role :</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>User</option>
                    <option>Staff</option>
                    <option>Admin</option>
                </select>
            </div>
            <button class="btn btn-black my-3">Login</button>
            <button
              class="btn btn-secondary ms-2 my-3"

            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
