import { useState } from 'react'; // React import is needed if not already present
import styles from './Header.module.css';
import { Home, Users, Briefcase, HelpCircle, Mail, Zap, Menu, X, Info } from 'lucide-react';
// Ensure Button is imported if it's a separate component
import Button from './Button';
import { ReactComponent as WattWayzSideLogo } from '../assets/side-logo.svg';


const Header = ({ currentPage, setCurrentPage, showModal }) => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


 const navItems = [
   { name: 'Home', page: 'home', icon: <Home size={18} />, disabled: false},
   { name: 'For EV Drivers', page: 'drivers', icon: <Users size={18} />, disabled: true },
   { name: 'For Station Owners', page: 'owners', icon: <Briefcase size={18} />, disabled: true },
   { name: 'About Us', page: 'about', icon: <Info size={18} />, disabled: true },
   { name: 'FAQ', page: 'faq', icon: <HelpCircle size={18} />, disabled: false },
   { name: 'Contact Us', page: 'contact', icon: <Mail size={18} />, disabled: true },
 ];


 const handleNavClick = (page) => {
   setCurrentPage(page);
   setIsMobileMenuOpen(false);
 };


 return (
   <header className={styles.header}>
     <div className={`container ${styles.headerContainer}`}>
       <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className={styles.logoLink}>
         <WattWayzSideLogo className={styles.logo} />
       </a>
      
       <nav className={styles.desktopNav}>
         {navItems.map((item) => (
           <a
             key={item.name}
             href={!item.disabled ? `#${item.page}` : '#'}
             onClick={(e) => { 
              e.preventDefault(); 
              if(!item.disabled){
                handleNavClick(item.page);
              } 
            }}
             className={`${styles.navLink} ${currentPage === item.page ? styles.active : ''} ${item.disabled ? 'disabledLink' : ''}`}
           >
             {item.icon}
             <span>{item.name}</span>
           </a>
         ))}
       </nav>


       <div className={styles.desktopActions}>
         <Button onClick={showModal} className={styles.headerButton}>Download App</Button>
       </div>


       <div className={styles.mobileMenuButton}>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>
     </div>
    
     {isMobileMenuOpen && (
       <div className={styles.mobileMenu}>
         <nav>
           {navItems.map((item) => (
             <a
               key={item.name}
               href={ !item.disabled ? `#${item.page}` : '#'}
               onClick={(e) => { 
                e.preventDefault(); 
                if(!item.disabled){
                  handleNavClick(item.page);
                } 
              }}
               className={`${styles.mobileNavLink} ${currentPage === item.page ? styles.mobileActive : ''} ${item.disabled ? 'disabledLink' : ''}`}
             >
               {item.icon} <span>{item.name}</span>
             </a>
           ))}
           <div className={styles.mobileMenuActions}>
             <Button onClick={showModal} primary className={styles.mobileDownloadBtn}>Download App</Button>
           </div>
         </nav>
       </div>
     )}
   </header>
 );
};


export default Header;



