import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, AlertCircle, ArrowRight, Brain, Target, BarChart, BookOpen, HelpCircle, ShieldCheck } from 'lucide-react';
import { Footer } from '../components/Sections';

import { trackMetaEvent } from '../components/MetaPixel';

export default function StudyRoutine() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Track Lead Event (Pixel + CAPI)
      // Note: In a real scenario, hash PII (email, phone) before sending if required by your privacy policy or Meta's best practices.
      // The server-side implementation should handle hashing if raw data is sent securely.
      trackMetaEvent('Lead', {
        em: formData.email, // Meta expects hashed, but accepts raw if sent via secure channel (HTTPS) and hashed on server or by Meta if configured.
        ph: formData.phone,
        fn: formData.name,
      });

      const response = await fetch('https://automacao-n8n.w3lidv.easypanel.host/webhook/rotina', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        console.log('Form submitted successfully:', formData);
      } else {
        console.error('Failed to submit form');
        alert('Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-[#0B1120] min-h-screen text-white">
      <Helmet>
        <title>Rotina de Estudos | FOX IMAGEM</title>
        <meta name="description" content="Descubra como é a rotina de estudos de quem passa na residência veterinária. Evento gratuito e online." />
        <meta property="og:title" content="Rotina de Estudos | FOX IMAGEM" />
        <meta property="og:description" content="Descubra como é a rotina de estudos de quem passa na residência veterinária. Evento gratuito e online." />
        <meta property="og:image" content="https://automacao-piwigo.w3lidv.easypanel.host/upload/2026/02/20/20260220133104-a45343c5.webp" />
        <meta property="twitter:title" content="Rotina de Estudos | FOX IMAGEM" />
        <meta property="twitter:description" content="Descubra como é a rotina de estudos de quem passa na residência veterinária. Evento gratuito e online." />
        <meta property="twitter:image" content="https://automacao-piwigo.w3lidv.easypanel.host/upload/2026/02/20/20260220133104-a45343c5.webp" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#002B49] to-[#0B1120] opacity-90 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/preparatorios%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL3ByZXBhcmF0b3Jpb3MgKDEpLnBuZyIsImlhdCI6MTc3MjE0NTAwMiwiZXhwIjoyMTgyMTEzMDAyfQ.yxlLnHaNOlqJTWfFPlpWyvx1VH3UlE6uhScKO2onG4M"
              alt="FOX IMAGEM Logo"
              className="h-24 md:h-36 mx-auto mb-6 drop-shadow-2xl"
            />
            
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-full px-6 py-2 mb-6 text-[#FF6B00] font-bold text-sm uppercase tracking-wider">
              <Calendar size={16} />
              <span>17 de Março • Evento Online e Gratuito</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Como é a <span className="text-[#FF6B00]">rotina de estudos</span> de quem passa na residência veterinária?
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Descubra o método exato para estudar com inteligência, ganhar tempo e conquistar sua aprovação em 2027.
            </p>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 max-w-md mx-auto shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Garanta sua vaga gratuita</h3>
                  <div>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      required
                      className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      required
                      className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp"
                      required
                      className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'ENVIANDO...' : 'QUERO PARTICIPAR'} {!loading && <ArrowRight size={20} />}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Inscrição Confirmada!</h3>
                  <p className="text-gray-400">Fique atento ao seu e-mail e WhatsApp para receber o link das aulas.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-[#001E33] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Você se identifica com isso?</h2>
            <p className="text-gray-400 text-lg">A maioria dos estudantes trava nestes obstáculos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Falta de Tempo", desc: "Como estudar tudo em tão pouco tempo?" },
              { icon: Brain, title: "Memorização", desc: "Como memorizar tanto conteúdo complexo?" },
              { icon: Target, title: "Foco Errado", desc: "Quais temas eu preciso focar mais?" },
              { icon: BarChart, title: "Evolução", desc: "Como saber se estou realmente evoluindo?" },
              { icon: HelpCircle, title: "Insegurança", desc: "Eu sou capaz de me tornar residente?" },
              { icon: BookOpen, title: "Direção", desc: "Não saber por onde começar a estudar." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0B1120] p-8 rounded-2xl border border-white/5 hover:border-[#FF6B00]/30 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 bg-[#0B1120]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Cronograma do Evento</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#001E33] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FF6B00]/30 transition-all group">
              <div className="bg-[#FF6B00] p-6 text-center">
                <h3 className="text-2xl font-bold text-white">DIA ÚNICO - 17/03</h3>
                <p className="text-white/90 font-medium">O Choque de Realidade & A Virada de Chave</p>
              </div>
              <div className="p-8 space-y-6">
                <ul className="space-y-4 text-gray-300 grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FF6B00] shrink-0 mt-1" size={20} />
                    <span>Análise de perguntas reais de provas anteriores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FF6B00] shrink-0 mt-1" size={20} />
                    <span>Por que a FOX aprova tanto? O segredo do método</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FF6B00] shrink-0 mt-1" size={20} />
                    <span>Os 5 pilares da aprovação: Constância, Estratégia, Evolução, Correção e Foco</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FF6B00] shrink-0 mt-1" size={20} />
                    <span>Correção da prova e análise de desempenho</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FF6B00] shrink-0 mt-1" size={20} />
                    <span>Aula prática de 30min: Aprenda a ganhar tempo estudando certo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#FF6B00] shrink-0 mt-1" size={20} />
                    <span>Mapa da Aprovação: Onde você precisa focar mais</span>
                  </li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-[#FF6B00]/10 p-4 rounded-xl border border-[#FF6B00]/20">
                    <p className="text-[#FF6B00] font-bold text-sm uppercase mb-2">🎁 Premiação Exclusiva</p>
                    <p className="text-gray-300 text-sm">As melhores notas na prova do dia receberão uma <strong className="text-white">Sessão Individual de Mentoria</strong>.</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                    <p className="text-green-400 font-bold text-sm uppercase mb-2">💎 Condição Especial</p>
                    <p className="text-gray-300 text-sm">Abertura de vagas com <strong className="text-white">bônus exclusivo</strong> apenas para participantes ao vivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#001E33] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Não deixe sua aprovação para depois</h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FF6B00] hover:bg-[#e66000] text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-3"
          >
            QUERO ME INSCREVER AGORA <ArrowRight size={24} />
          </button>
          <p className="mt-6 text-gray-400 text-sm flex items-center justify-center gap-2">
            <ShieldCheck size={16} /> Evento 100% Online e Gratuito
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
