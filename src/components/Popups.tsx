import { useState } from 'react';
import React from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { trackCompleteRegistration } from './MetaPixel';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExitIntentPopup({ isOpen, onClose }: PopupProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      origem: "Pagina_de_Vendas_FOX",
      data_captura: new Date().toISOString(),
      lead: {
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        interesse: "Residência Veterinária - Imagem"
      }
    };

    try {
      await fetch('https://automacao-n8n.w3lidv.easypanel.host/webhook/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setStatus('success');
      trackCompleteRegistration(); // Track registration
      setTimeout(onClose, 3000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="bg-[#FF6B00] p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Espere! 🦊</h3>
              <p className="font-medium">Ainda na dúvida se a sorte é suficiente?</p>
            </div>

            <div className="p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sucesso!</h4>
                  <p className="text-gray-600">Seu cronograma foi enviado.</p>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-6 text-center">
                    Baixe o <strong>Cronograma Estratégico de Estudos FOX</strong> e entenda o caminho da aprovação.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Seu Nome"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
                        value={formData.nome}
                        onChange={e => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Seu Melhor E-mail"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Seu WhatsApp"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#002B49] hover:bg-[#003d66] text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? 'Enviando...' : 'GARANTIR MINHA VAGA AGORA'}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-500 text-sm text-center flex items-center justify-center gap-1">
                        <AlertCircle size={16} /> Erro ao enviar. Tente novamente.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function LeadMagnetPopup({ isOpen, onClose }: PopupProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      origem: "Pagina_de_Vendas_FOX_Lateral",
      data_captura: new Date().toISOString(),
      lead: {
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        interesse: "Lista VIP - Aulas ao Vivo"
      }
    };

    try {
      await fetch('https://automacao-n8n.w3lidv.easypanel.host/webhook/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setStatus('success');
      trackCompleteRegistration(); // Track registration
      setTimeout(onClose, 3000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-40 max-w-sm w-full"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-l-4 border-[#FF6B00]">
            <div className="p-4 relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>

              <h3 className="text-lg font-bold text-[#002B49] mb-2 pr-6">Lista VIP FOX 🦊</h3>
              
              {status === 'success' ? (
                <div className="text-green-600 font-medium py-4 text-center">
                  Cadastro realizado com sucesso!
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    Quer ser avisado sobre as aulas ao vivo e novos simulados? Cadastre-se na nossa lista VIP.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Nome"
                      required
                      className="w-full px-3 py-2 text-sm rounded border border-gray-300 focus:ring-1 focus:ring-[#FF6B00] outline-none"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      required
                      className="w-full px-3 py-2 text-sm rounded border border-gray-300 focus:ring-1 focus:ring-[#FF6B00] outline-none"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                     <input
                      type="tel"
                      placeholder="WhatsApp"
                      required
                      className="w-full px-3 py-2 text-sm rounded border border-gray-300 focus:ring-1 focus:ring-[#FF6B00] outline-none"
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    />
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-2 rounded text-sm transition-colors"
                    >
                      {status === 'submitting' ? 'Cadastrando...' : 'QUERO ENTRAR NA LISTA VIP'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function CheckoutPopup({ isOpen, onClose }: PopupProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      origem: "Checkout_Popup_FOX",
      data_captura: new Date().toISOString(),
      lead: {
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        interesse: "Iniciou Checkout - Residência Veterinária"
      }
    };

    try {
      await fetch('https://automacao-n8n.w3lidv.easypanel.host/webhook/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setStatus('success');
      setTimeout(() => {
        window.location.href = 'https://foximagem.eadplataforma.app/curso/fox-imagem-2026';
      }, 1500);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white/50 rounded-full p-1"
            >
              <X size={24} />
            </button>

            <div className="bg-gradient-to-r from-[#002B49] to-[#00406b] p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h3 className="text-3xl font-bold mb-2 relative z-10 flex items-center justify-center gap-2">
                Quase lá! 
                <img 
                  src="https://automacao-piwigo.w3lidv.easypanel.host/upload/2026/02/20/20260220133104-a45343c5.webp" 
                  alt="Fox" 
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                />
              </h3>
              <p className="font-medium text-blue-100 relative z-10">Preencha seus dados para liberar seu acesso exclusivo à plataforma.</p>
            </div>

            <div className="p-8 bg-gray-50">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100/50">
                    <Check size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Redirecionando...</h4>
                  <p className="text-gray-600">Você está sendo levado para o ambiente seguro de pagamento.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all bg-white shadow-sm"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">E-mail</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all bg-white shadow-sm"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">WhatsApp</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all bg-white shadow-sm"
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-[#FF6B00]/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg mt-4"
                  >
                    {status === 'submitting' ? 'Processando...' : 'IR PARA O PAGAMENTO'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
