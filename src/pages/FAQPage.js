import React, { useState } from 'react'; // Already imported
import faq_styles from './FAQPage.module.css'; // Renamed to avoid conflict
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
// Ensure Button is imported if it's a separate component
import Button from '../components/Button';


const FAQItem = ({ question, answer }) => {
   const [isOpen, setIsOpen] = useState(false);
    return (
     <div className={faq_styles.faqItem}>
       <button onClick={() => setIsOpen(!isOpen)} className={faq_styles.faqQuestion}>
         <h3>{question}</h3>
         {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
       </button>
       {isOpen && (
         <div className={faq_styles.faqAnswer}>
           {typeof answer === 'string' ? <p>{answer}</p> : answer}
         </div>
       )}
     </div>
   );
};


const FAQPage = ({ setCurrentPage }) => {
   const [searchTerm, setSearchTerm] = useState('');
   const [activeTab, setActiveTab] = useState('drivers');
    const driverFAQs = [
       { q: "How do I sign up for WattWayZ?", a: "You can download the WattWayZ app from the App Store or Google Play Store and follow the simple on-screen instructions to create your account using your email or social login." },
       { q: "How does the real-time map work?", a: "Our map displays charging stations with their current availability (Available, Occupied, Out of Service) based on data from our network partners and station owners. Availability is updated frequently." },
       { q: "How do I reserve a charging spot?", a: "Select a reservable station on the map or in your journey plan. If spots are available for reservation, you can choose a time slot and duration, then confirm your booking via the app." },
       { q: "How is charging cost calculated?", a: "Charging costs are set by the station owners and can be based on per kWh, per minute, or a session fee. Pricing is displayed on the station details screen before you start charging." },
   ];
    const ownerFAQs = [
       { q: "How do I list my charging station on WattWayZ?", a: "Register for a Station Owner account on our web dashboard. Once logged in, you can click 'Add New Station' and fill in the required details including location, connector types, pricing, and photos." },
       { q: "How do I update my station's availability status?", a: "Through the 'Manage Status' option for your station on the owner dashboard, you can quickly mark individual connectors or the entire station as 'Available', 'Occupied', or 'Out of Service'." },
       { q: "How do I see reservations made for my station?", a: "The 'Reservations' section in your owner dashboard displays a list of all upcoming and past reservations for your stations, including driver ID, time, and duration." },
       { q: "Is there a fee to list my station on WattWayZ?", a: "For our initial launch, listing your station on WattWayZ is free. We want to help you connect with as many EV drivers as possible!" },
   ];
   const allFAQs = { drivers: driverFAQs, owners: ownerFAQs };
    const filteredFAQs = (tab) =>
     allFAQs[tab].filter(faq =>
       faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
       (typeof faq.a === 'string' && faq.a.toLowerCase().includes(searchTerm.toLowerCase()))
     );
    return (
       <div className={faq_styles.pageContainer}>
           <div className="container">
               <header className={faq_styles.pageHeader}>
                   <h1>Frequently Asked Questions</h1>
                   <div className={faq_styles.searchWrapper}>
                       <input
                           type="search"
                           placeholder="Search FAQs..."
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           className={faq_styles.searchInput}
                       />
                       <Search size={20} className={faq_styles.searchIcon} />
                   </div>
               </header>


               <div className={faq_styles.tabs}>
                   <button
                       onClick={() => setActiveTab('drivers')}
                       className={activeTab === 'drivers' ? faq_styles.activeTab : ''}
                   >
                       For EV Drivers
                   </button>
                   <button
                       onClick={() => setActiveTab('owners')}
                       className={activeTab === 'owners' ? faq_styles.activeTab : ''}
                   >
                       For Station Owners
                   </button>
               </div>
          
               <div className={faq_styles.faqList}>
                   {filteredFAQs(activeTab).length > 0 ? (
                       filteredFAQs(activeTab).map((faq, index) => (
                       <FAQItem key={index} question={faq.q} answer={faq.a} />
                       ))
                   ) : (
                       <p className={faq_styles.noResults}>No FAQs found matching your search term.</p>
                   )}
               </div>


               <section className={faq_styles.contactCta}>
                   <h2>Still Need Help?</h2>
                   <p>Can't find the answer you're looking for in our FAQs?</p>
                   <Button onClick={() => setCurrentPage('contact')} primary disabled>
                       Contact Our Support Team
                   </Button>
               </section>
           </div>
     </div>
   );
};


export default FAQPage;

