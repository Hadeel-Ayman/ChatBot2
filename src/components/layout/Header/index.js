import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './style.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import SignupModal from '../../signup';
import { headerVariants } from '../../../utils/motion';
import useHeaderShadow from '../../../hooks/inside';

const Header = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('lang', newLanguage)
    };

    return (
        <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            style={{ boxShadow: useHeaderShadow }}
        >
            <Navbar expand="lg" className='nav'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img src={logo} className='logo' alt='Logo' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navv d-lg-flex justify-content-between w-100">
                            <Nav className="ml-auto ">
                                <Nav.Link
                                    as={Link}
                                    to="/"
                                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('home')}
                                >
                                    {t('home')}
                                </Nav.Link>
                                <a
                                    as={Link}
                                    href="/#services"
                                    className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('services')}
                                >
                                    {t('service')}
                                </a>
                                <a
                                    as={Link}
                                    href="/#Features"
                                    className={`nav-link ${activeLink === 'features' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('features')}
                                >
                                    {t('features')}
                                </a>
                                <a
                                    as={Link}
                                    href="/#Subscription"
                                    className={`nav-link ${activeLink === 'packages' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('packages')}
                                >
                                    {t('packages')}
                                </a>
                                <Nav.Link
                                    as={Link}
                                    to="/business"
                                    className={`nav-link ${activeLink === 'business' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('business')}
                                >
                                    {t('business')}
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/conditions"
                                    className={`nav-link ${activeLink === 'conditions' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('conditions')}
                                >
                                    {t('conditions')}
                                </Nav.Link>
                                <a
                                    as={Link}
                                    href="/#contact"
                                    className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('contact')}
                                >
                                    {t('contact')}
                                </a>
                            </Nav>
                            <Nav className=''>
                                <Button size='sm'
                                    onClick={changeLanguage}
                                    className="nav-text ms-1 border border-secondary mt-3 justify-content-center rounded-circle bg-secondary lang">
                                    <HiOutlineLanguage className='icon' />
                                </Button>
                                <Button
                                    size="sm"
                                    className="nav-text position-relative border border-secondary d-flex mt-3 justify-content-center rounded-pill bg-secondary signup" data-bs-toggle="modal" data-bs-target="#ModalForm"
                                    style={{ fontSize: '18px' }}
                                >
                                    {t('sign1')}
                                </Button>
                                <SignupModal />
                                {/* <PaymentModal /> */}
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
};

export default Header;
