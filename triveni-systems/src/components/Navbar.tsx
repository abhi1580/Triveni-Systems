import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import styles from './Navbar.module.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/career', label: 'Career' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  // Split navLinks for logo placement
  const beforeLogo = navLinks.slice(0, 3);
  const afterLogo = navLinks.slice(3);

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <button
          className={styles.menuButton}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={handleToggle}
        >
          <span className={styles.menuIcon}>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          </span>
        </button>
        <div
          className={menuOpen ? `${styles.menu} ${styles.open}` : styles.menu}
          id="navbar-menu"
        >
          <ul className={styles.navLinks}>
            {beforeLogo.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                  }
                  onClick={handleLinkClick}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {/* Logo in the middle */}
            <li className={styles.logoNavItem} tabIndex={-1} aria-hidden="true">
              <NavLink to="/" className={styles.logo} tabIndex={0} onClick={handleLinkClick} aria-label="Home">
                <img src={logo} alt="Triveni Systems Logo" height={28} />
              </NavLink>
            </li>
            {afterLogo.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                  }
                  onClick={handleLinkClick}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${styles.loginBtn} ${styles.active}` : styles.loginBtn
                }
                onClick={handleLinkClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 