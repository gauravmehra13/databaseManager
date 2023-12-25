import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
   <header>
	<div className="overlay">
<h1>Database Manager</h1>
<h3>Your own database manager with CRUD features</h3>
{/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p> */}
	<br/>

	<Link className='btn btn-success' to={'/add'}>Add User</Link>
		</div>
</header>

  )
}

export default HeroSection
