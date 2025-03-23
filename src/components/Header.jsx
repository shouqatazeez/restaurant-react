import { useEffect, useState } from 'react';
import logo from './logo-img.jpg';
import { Link } from 'react-router-dom';
const Header = () =>{

  const [btnName,setbtnName] = useState("Login");
 
  return(
    <nav className='header'>

<img className='logoimg'src={logo} alt='reslogo' />

<ul className='list'>
<li><Link to ="/">Home</Link> </li>
<li> <Link to ="/about">About Us</Link></li>
<li><Link to ="/contact">Contact Us</Link></li>
<li>Cart</li>



 <button className='login-btn' 
 onClick={() =>{
   btnName == "Login" 
    ?setbtnName("Logout")
    :setbtnName("Login")   }} >
  {btnName}
 </button>


</ul>
     
   
    

    </nav>
  );
}; 

export default Header;


