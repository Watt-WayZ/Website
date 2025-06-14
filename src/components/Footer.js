import React from 'react'; // Already imported by Header, but good practice if separate file
import styles from './Footer.module.css';
import { Linkedin, Twitter, Facebook, Zap, DownloadCloud } from 'lucide-react';
// Ensure Button is imported if it's a separate component
import Button from './Button';
import { ReactComponent as WattWayzSideLogo} from '../assets/side-logo.svg';


const Footer = ({ setCurrentPage, showModal }) => {
 const quickLinks = [
   { name: 'About Us', page: 'about' },
   { name: 'Contact Us', page: 'contact' },
   { name: 'FAQ', page: 'faq' },
 ];
 const legalLinks = [
   { name: 'Privacy Policy', page: 'privacy' },
   { name: 'Terms of Service', page: 'terms' },
 ];
 const socialLinks = [
   { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
   { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
   { name: 'Facebook', icon: <Facebook size={20} />, url: '#' },
 ];


 const AppStoreBadge = () => (
   <a href="#" onClick={(e) => { e.preventDefault(); showModal(); }} className={styles.storeBadge}>
     <DownloadCloud size={20} />
     <div>
       <p className={styles.badgeTextSmall}>Download on the</p>
       <p className={styles.badgeTextLarge}>App Store</p>
     </div>
   </a>
 );
  const GooglePlayBadge = () => (
   <a href="#" onClick={(e) => { e.preventDefault(); showModal(); }} className={styles.storeBadge}>
     <DownloadCloud size={20} />
     <div>
       <p className={styles.badgeTextSmall}>GET IT ON</p>
       <p className={styles.badgeTextLarge}>Google Play</p>
     </div>
   </a>
 );


 return (
   <footer className={styles.footer}>
     <div className="container">
       <div className={styles.grid}>
         <div className={styles.aboutColumn}>
           <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className={styles.logoLink}>
             <WattWayzSideLogo className={styles.logo} />
           </a>
           <p className={styles.footerText}>
             Powering your EV journey, seamlessly. WattWayZ simplifies finding, reserving, and paying for electric vehicle charging.
           </p>
           <div className={styles.badgeContainer}>
             <AppStoreBadge />
             <GooglePlayBadge />
           </div>
         </div>


         <div>
           <h5 className={styles.heading}>Quick Links</h5>
           <ul className={styles.linkList}>
             {quickLinks.map(link => (
               <li key={link.name}>
                 {/* <a href={`#${link.page}`} onClick={(e) => { e.preventDefault(); setCurrentPage(link.page); }}>{link.name}</a> */}
                 <a 
                 href='#' 
                 onClick={(e) =>  e.preventDefault()}
                 className="disabledLink"
                 >
                  {link.name}
                  </a>
               </li>
             ))}
           </ul>
         </div>


         <div>
           <h5 className={styles.heading}>Legal</h5>
           <ul className={styles.linkList}>
             {legalLinks.map(link => (
               <li key={link.name}>
                 {/* <a href={`#${link.page}`} onClick={(e) => { e.preventDefault(); setCurrentPage(link.page); }}>{link.name}</a> */}
                 <a 
                 href='#' onClick={(e) => e.preventDefault()}
                 className="disabledLink"
                 >
                  {link.name}
                  </a>
               </li>
             ))}
           </ul>
         </div>


         <div>
           <h5 className={styles.heading}>Connect With Us</h5>
           <div className={styles.socialLinks}>
             {socialLinks.map(link => (
               <a key={link.name} href={link.url} onClick={(e) => e.preventDefault()} className="disabledLink" target="_blank" rel="noopener noreferrer">{link.icon}</a>
             ))}
           </div>
           <p className={styles.contactEmail}>
             Email: <a href="mailto:info@wattwayz.com">info@wattwayz.com</a>
           </p>
         </div>
       </div>


       <div className={styles.copyright}>
         <p>&copy; {new Date().getFullYear()} WattWayZ. All rights reserved.</p>
       </div>
     </div>
   </footer>
 );
};


export default Footer;



