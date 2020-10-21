import React from 'react';
import {Link} from 'react-router-dom';
import './register.css';
const reset=()=> {
    return (
        <section class="container">
      <h1 class="large text-primary">Reset Your Password</h1>
      <p class="lead"><i class="fas fa-user"></i> Request a reset link</p>
      <form class="form" action="create-profile.html">
     
        <div class="form-group">
          <input type="email" placeholder="Email Address" name="email" />
          
        </div>
        
        <input type="submit" class="btn btn-primary" value="Reset" />
      </form>
      <p class="my-1">
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </section>
    )
}

export default reset
