import { Helmet } from 'react-helmet-async';
import { Hero, PainPoints, Solution, Curriculum, Timeline, Investment, Faculty, FAQ, Footer, Testimonials } from '../components/Sections';
import { ExitIntentPopup, CheckoutPopup } from '../components/Popups';
import { useExitIntent } from '../hooks/usePopups';
import { useState } from 'react';

export default function Home() {
  const { isVisible: showExitPopup, setIsVisible: setShowExitPopup } = useExitIntent();
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Helmet>
        <title>FOX IMAGEM | Residência não é sorte. É estratégia.</title>
        <meta name="description" content="Domine o Diagnóstico por Imagem Veterinário com o método que é referência nacional." />
        <meta property="og:title" content="FOX IMAGEM | Residência não é sorte. É estratégia." />
        <meta property="og:description" content="Domine o Diagnóstico por Imagem Veterinário com o método que é referência nacional." />
        <meta property="og:image" content="https://automacao-piwigo.w3lidv.easypanel.host/upload/2026/02/20/20260220133104-a45343c5.webp" />
        <meta property="twitter:title" content="FOX IMAGEM | Residência não é sorte. É estratégia." />
        <meta property="twitter:description" content="Domine o Diagnóstico por Imagem Veterinário com o método que é referência nacional." />
        <meta property="twitter:image" content="https://automacao-piwigo.w3lidv.easypanel.host/upload/2026/02/20/20260220133104-a45343c5.webp" />
      </Helmet>
      <Hero />
      <PainPoints />
      <Solution />
      <Curriculum />
      <Timeline />
      <Testimonials />
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
