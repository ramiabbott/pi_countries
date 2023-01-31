
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { BiWorld } from 'react-icons/bi'

function NavBar() {
	return (
		<header>
			<Link to='/'><div id={styles.appTitle}><BiWorld /><p>Henry Countries</p></div></Link>
			<Link to='/activities/create' className='btn btn-primary'>Add Activity</Link>
		</header>
	)
}

export default NavBar