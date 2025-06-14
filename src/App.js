import React, { useState } from 'react'; // Already imported
import { useEffect } from 'react'; // React import for hooks
// Pages - These would be actual imports if files are separated
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';
import PlaceholderPage from './pages/PlaceholderPage';


// Shared Components - These would be actual imports if files are separated
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button'; // Button is now defined above
import Modal  from './components/Modal';




function App() {
 const [currentPage, setCurrentPage] = useState('home');

 const [isModalOpen, setIsModalOpen] = useState(false);


 useEffect(() => {
   window.scrollTo(0, 0);
 }, [currentPage]);


 const renderPage = () => {
   switch (currentPage) {
     case 'home':
       return <HomePage setCurrentPage={setCurrentPage} showModal={() => setIsModalOpen(true)} />;
      //  return <HomePage setCurrentPage={setCurrentPage} />;
     case 'faq':
       return <FAQPage setCurrentPage={setCurrentPage} />;
     case 'drivers':
       return <PlaceholderPage title="For EV Drivers" content={<p>Feature details for EV drivers, including real-time maps, reservation benefits, and journey planning tools will be showcased here.</p>} />;
     case 'owners':
       return <PlaceholderPage title="For Station Owners" content={<p>Information on how station owners can partner with WattWayZ, list their stations, manage availability, and view analytics will be detailed on this page.</p>} />;
     case 'about':
         return <PlaceholderPage title="About Us" content={<p>Learn about WattWayZ's mission to simplify EV charging, our vision for a sustainable future, and the team driving our innovation.</p>} />;
     case 'contact':
       return <PlaceholderPage title="Contact Us" content={<p>Reach out to us! This page will feature a contact form, email addresses for support and inquiries, and potentially our office address.</p>} />;
     case 'privacy':
       return <PlaceholderPage title="Privacy Policy" content={<p>Our commitment to your privacy: This section will detail how we collect, use, and protect your personal information when you use WattWayZ services.</p>} />;
     case 'terms':
       return <PlaceholderPage title="Terms of Service" content={<p>The terms and conditions for using the WattWayZ platform and services will be outlined here. Please read them carefully.</p>} />;
     default:
       return <PlaceholderPage title="404 - Page Not Found" content={<p>Oops! The page you're looking for doesn't seem to exist. Please check the URL or navigate back to Home.</p>}/>;
   }
 };


 return (
   <div className="app-container"> {/* This class comes from global.css */}
     {/* <Header currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
     <Header currentPage={currentPage} setCurrentPage={setCurrentPage} showModal={() => setIsModalOpen(true)} />
     <main>
       {renderPage()}
     </main>
     {/* <Footer setCurrentPage={setCurrentPage} /> */}
     <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} showModal={() => setIsModalOpen(true)} />

     <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
      <h2>Coming Soon!</h2> 
      <p>Our mobile apps are under development and will be available on the App Store and Google Play shortly. Stay tuned!</p> 
      <Button primary onClick={() => setIsModalOpen(false)}>Got it!</Button> 
     </Modal>

   </div>
 );
}


export default App;

