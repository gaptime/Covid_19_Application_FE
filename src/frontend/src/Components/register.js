import React from 'react';
import {Link} from 'react-router-dom';
import './register.css';
const register=()=> {
    return (
        <section class="container">
      <h1 class="large text-primary">Sign Up</h1>
      <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form class="form" action="create-profile.html">
        <div class="form-group">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" name="email" />
          
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
      <p class="my-1">
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </section>
    )
}

export default register
