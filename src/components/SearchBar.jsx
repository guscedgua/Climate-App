import React from 'react';

import style from "./SearchBar.module.css";

const SearchBar = ({onSearch}) => {

  return (

   <nav>

  <ul class="menu navbar  rounded-5 col-sm-4" >
    
    <li class="item">
          <a class="MH" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <p>☁</p>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Climate</a></li>
            <li><a class="dropdown-item" href="#">About</a></li>
          </ul>
        </li>

    <li class="item3 col-sm-8">

   <form 
   className="d-flex" 
   onSubmit={(e) => {
   e.preventDefault();

   const input = document.getElementById("cityInput");

   onSearch(input.value);

   input.value= "";
   }}
   >
<input id="cityInput" className="form-control rounded-5" placeholder='Search & add cities...' />
<button className= "btn btn-outline-success rounded-5" type="submit">
🔎
</button>
   </form>
    </li>
    <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
  </ul>
  <h1 className='title'>Best Weather App</h1>
</nav>

  );
}
export default SearchBar;