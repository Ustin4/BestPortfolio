import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/icons8-telegram.svg'
import navIcon3 from '../assets/img/icons8-github.svg'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = value => {
		setActiveLink(value)
	}

	return (
		<Router>
			<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href='/'></Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={
									activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('home')}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href='#skills'
								className={
									activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('skills')}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className={
									activeLink === 'projects'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('projects')}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className='navbar-text'>
							<div className='social-icon'>
								<a href='https://www.linkedin.com/in/%D1%83%D1%81%D1%82%D0%B8%D0%BD-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-a75a83271/'>
									<img src={navIcon1} alt='Icon' />
								</a>
								<a href='https://t.me/Ustin4'>
									<img src={navIcon2} alt='Icon' />
								</a>
								<a href='https://github.com/Ustin4'>
									<img src={navIcon3} alt='Icon' />
								</a>
							</div>
							<HashLink to='#connect'>
								<button className='vvd'>
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	)
}
