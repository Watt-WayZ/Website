import placeholder_styles from './PlaceholderPage.module.css'; // Renamed to avoid conflict


const PlaceholderPage = ({ title, content }) => (
   <div className={`container ${placeholder_styles.pageContainer}`}>
     <header className={placeholder_styles.header}>
       <h1 className={placeholder_styles.title}>{title}</h1>
     </header>
     <div className={placeholder_styles.content}>
       {content || (
         <>
           <p>This is a placeholder page for "{title}". Detailed content will be developed later.</p>
         </>
       )}
     </div>
   </div>
);


export default PlaceholderPage;

