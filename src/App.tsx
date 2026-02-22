import { Hero, PainPoints, Solution, Curriculum, Timeline, Investment, Faculty, FAQ, Footer } from './components/Sections';
import { ExitIntentPopup, CheckoutPopup } from './components/Popups';
import { useExitIntent } from './hooks/usePopups';
import { useState } from 'react';

export default function App() {
  const { isVisible: showExitPopup, setIsVisible: setShowExitPopup } = useExitIntent();
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <PainPoints />
      <Solution />
      <Curriculum />
      <Timeline />
      <Investment onOpenCheckout={() => setShowCheckoutPopup(true)} />
      <Faculty />
      <FAQ />
      <Footer />

      <ExitIntentPopup 
        isOpen={showExitPopup} 
        onClose={() => setShowExitPopup(false)} 
      />

      <CheckoutPopup 
        isOpen={showCheckoutPopup} 
        onClose={() => setShowCheckoutPopup(false)} 
      />
    </div>
  );
}
