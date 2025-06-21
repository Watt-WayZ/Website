import styles_home from './HomePage.module.css'; // Renamed to avoid conflict
import {
 DownloadCloud, Briefcase, MapPin, CalendarClock, CreditCard, // Removed Route
 Eye, ListChecks, CalendarDays, ToggleRight, ChevronRight, Server,
 DollarSign, Users, Zap, Star, UserCircle, Navigation
} from 'lucide-react';
// Note: Button is already defined above and will be in scope if this is one file.
// If separating files, Button would need to be imported:
import Button from '../components/Button';


const HomePage = ({ setCurrentPage, showModal }) => {
 return (
   <>
     <HeroSection setCurrentPage={setCurrentPage} showModal={showModal}/>
     <DriversSection />
     <OwnersSection setCurrentPage={setCurrentPage} />
     <HowItWorksSection />
     {/* <TestimonialsSection /> */}
     <FinalCTASection setCurrentPage={setCurrentPage} />
   </>
 );
};


// --- Sub-components for HomePage ---
// adding a comment to test git

const FeatureCard = ({ icon, title, description }) => (
 <div className={styles_home.featureCard}>
   <div className={styles_home.featureIconWrapper}>{icon}</div>
   <h3 className={styles_home.featureTitle}>{title}</h3>
   <p className={styles_home.featureDescription}>{description}</p>
 </div>
);


const HeroSection = ({ setCurrentPage, showModal}) => (
 <section className={styles_home.hero}>
   <div className="container">
     <h1 className={styles_home.heroTitle}>WattWayZ: Charge Smarter, Drive Further.</h1>
     <p className={styles_home.heroSubtitle}>
       Welcome to the future of electric vehicle charging. WattWayZ makes it simple to find available stations, reserve your spot, and power your journey – for drivers and station owners alike.
     </p>
     <div className={styles_home.heroActions}>
       <Button onClick={showModal} primary className={styles_home.heroButton}>
         Download the App <DownloadCloud size={20} />
       </Button>
       <Button onClick={() => setCurrentPage('owners')} primary className={`${styles_home.heroButton}`} disabled>
         For Station Owners <Briefcase size={20} />
       </Button>
     </div>
   </div>
 </section>
);


const DriversSection = () => (
   <section className={styles_home.section}>
       <div className="container">
           <div className={styles_home.sectionHeader}>
               <h2>Power Your Drive with WattWayZ</h2>
               <p>Tired of charger hunting and range anxiety? WattWayZ provides a seamless charging experience for EV drivers.</p>
           </div>
           <div className={styles_home.featuresGrid}>
               <FeatureCard icon={<MapPin size={32} />} title="Find Stations Easily" description="Access a real-time map of available chargers near you or along your route." />
               <FeatureCard icon={<CalendarClock size={32} />} title="Reserve Your Spot" description="Book your charging slot in advance and skip the queues. (Partner stations)" />
               <FeatureCard icon={<Navigation size={32} />} title="Plan Your Journey" description="Intelligently plan longer trips with optimal charging stops identified." />
               <FeatureCard icon={<CreditCard size={32} />} title="Simple In-App Payments" description="Pay for your charging sessions securely and conveniently within the app." />
           </div>
       </div>
   </section>
);


const OwnersSection = ({ setCurrentPage }) => (
   <section className={`${styles_home.section} ${styles_home.bgWhite}`}>
       <div className="container">
           <div className={styles_home.sectionHeader}>
               <h2>Partner with WattWayZ & Grow Your Business</h2>
               <p>Maximize your station's visibility and utilization. WattWayZ empowers charging station owners with easy-to-use tools.</p>
           </div>
           <div className={styles_home.featuresGrid}>
               <FeatureCard icon={<Eye size={32} />} title="Increase Visibility" description="List your station on WattWayZ and reach thousands of EV drivers actively looking for charging." />
               <FeatureCard icon={<ListChecks size={32} />} title="Easy Station Management" description="Manage your station details, pricing, and more through our intuitive owner dashboard." />
               <FeatureCard icon={<CalendarDays size={32} />} title="View Incoming Reservations" description="Anticipate demand by viewing reservations made for your station(s) in real-time." />
               <FeatureCard icon={<ToggleRight size={32} />} title="Manual Status Updates" description="Quickly update the availability of your chargers to provide accurate info to drivers." />
           </div>
           <div className={styles_home.sectionAction}>
               <Button onClick={() => setCurrentPage('owners')} primary disabled>
                   List Your Station Today <ChevronRight size={20} />
               </Button>
           </div>
       </div>
   </section>
);


const HowItWorksSection = () => {
   const driverSteps = [
     { icon: <DownloadCloud size={36} />, title: "Download & Sign Up", description: "Get the WattWayZ app and create your account in minutes." },
     { icon: <MapPin size={36} />, title: "Find & Reserve", description: "Locate available stations and book your charging spot." },
     { icon: <Zap size={36} />, title: "Charge & Go", description: "Navigate to the station, charge your EV, and pay seamlessly." },
   ];
   const ownerSteps = [
     { icon: <Server size={36} />, title: "Register & List", description: "Sign up on our owner dashboard and add your station details." },
     { icon: <Users size={36} />, title: "Attract Drivers", description: "Get discovered by EV drivers and receive reservations." },
     { icon: <DollarSign size={36} />, title: "Manage & Grow", description: "Update status, view activity, and optimize your operations." },
   ];
    return (
       <section className={styles_home.section}>
           <div className="container">
               <div className={styles_home.sectionHeader}>
                   <h2>Getting Started is Easy</h2>
                   <p>Whether you're an EV driver or a station owner, WattWayZ offers a simple path to a smarter charging experience.</p>
               </div>
               <div className={styles_home.howItWorksGrid}>
                   <div>
                       <h3 className={styles_home.howItWorksTitle}>For EV Drivers</h3>
                       <div className={styles_home.stepsContainer}>
                           {driverSteps.map((step, index) => (
                               <div key={index} className={styles_home.stepCard}>
                                   <div className={styles_home.stepIcon}>{step.icon}</div>
                                   <div>
                                       <h4>{step.title}</h4>
                                       <p>{step.description}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
                   <div>
                       <h3 className={`${styles_home.howItWorksTitle} ${styles_home.ownerTitle}`}>For Station Owners</h3>
                       <div className={styles_home.stepsContainer}>
                           {ownerSteps.map((step, index) => (
                               <div key={index} className={styles_home.stepCard}>
                                   <div className={`${styles_home.stepIcon} ${styles_home.ownerIcon}`}>{step.icon}</div>
                                   <div>
                                       <h4>{step.title}</h4>
                                       <p>{step.description}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
       </section>
   );
};


const TestimonialCard = ({ quote, name, role, imageSrc, rating }) => (
   <div className={styles_home.testimonialCard}>
       {imageSrc ? (
           <img src={imageSrc} alt={name} className={styles_home.testimonialImage} />
       ) : (
           <div className={styles_home.testimonialImagePlaceholder}>
               <UserCircle size={40} />
           </div>
       )}
       <p className={styles_home.testimonialQuote}>"{quote}"</p>
       <div className={styles_home.testimonialRating}>
           {[...Array(rating)].map((_, i) => <Star key={i} size={18} className={styles_home.starFilled} />)}
           {[...Array(5 - rating)].map((_, i) => <Star key={i+rating} size={18} className={styles_home.starEmpty} />)}
       </div>
       <h4 className={styles_home.testimonialName}>{name}</h4>
       <p className={styles_home.testimonialRole}>{role}</p>
   </div>
);
 const TestimonialsSection = () => {
   const dummyTestimonials = [
     { quote: "WattWayZ has completely changed how I plan my road trips! Finding reliable chargers and reserving a spot is a breeze. No more range anxiety!", name: "Priya S.", role: "EV Driver, Bengaluru", imageSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=PS", rating: 5 },
     { quote: "Listing my charging station on WattWayZ was simple, and I've seen a noticeable increase in usage. The dashboard is intuitive!", name: "Rajesh K.", role: "Station Owner, Pune", imageSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=RK", rating: 5 },
     { quote: "The journey planning feature is a lifesaver for long drives. The app accurately suggests charging stops. Love it!", name: "Ananya M.", role: "EV Enthusiast, Delhi", imageSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=AM", rating: 4 },
     { quote: "As a new EV owner, WattWayZ gave me the confidence to explore more. User-friendly, and real-time availability is super accurate.", name: "Vikram C.", role: "New EV Driver, Hyderabad", imageSrc: "https://placehold.co/100x100/E2E8F0/A0AEC0?text=VC", rating: 5 }
   ];
    return (
       <section className={styles_home.section}>
           <div className="container">
               <div className={styles_home.sectionHeader}>
                   <h2>Loved by EV Drivers & Station Owners</h2>
                   <p>Hear what our growing community has to say about their WattWayZ experience.</p>
               </div>
               <div className={styles_home.testimonialsGrid}>
                   {dummyTestimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
               </div>
           </div>
       </section>
   );
};


const FinalCTASection = ({ setCurrentPage }) => (
   <section className={styles_home.finalCta}>
     <div className="container">
       <h2>Ready to Join the WattWayZ Revolution?</h2>
       <p>Download the WattWayZ app today for a smarter EV charging experience, or partner with us to connect your stations to a growing network of drivers.</p>
       <div className={styles_home.finalCtaActions}>
           <Button onClick={() => setCurrentPage('owners')} className={styles_home.finalCtaButton} disabled>
               Station Owner? List Your Station <ChevronRight size={18} />
           </Button>
       </div>
     </div>
   </section>
);




export default HomePage;



