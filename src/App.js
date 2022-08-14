import React from 'react'
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero,
} from './components';
import styles from './styles';

const App = () => {
  return (
     <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
           <div className={`${styles.boxWidth}`}>
            <Navbar />
           </div>
        </div>

        {/* HERO SECTION */}
        <div className={`bg-primary ${styles.flexStart}`}>
           <div className={`${styles.boxWidth}`}>
               <Hero />
           </div>
        </div>


         {/* OTHER SECTIONS */}
        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
           <div className={`${styles.boxWidth}`}>
            < Stats />
            < Business />
            < Billing />
            < CardDeal />
            < Testimonials />
            < Clients />
            < CTA />
            < Footer />
           </div>
        </div>
     </div>
  );
}

export default App

// 22.52