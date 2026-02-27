import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Brain,
  Target,
  BarChart,
  BookOpen,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
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
      trackMetaEvent('Lead', {
        em: formData.email,
        ph: formData.phone,
        fn: formData.name
      });

      const response = await fetch(
        'https://automacao-n8n.w3lidv.easypanel.host/webhook/rotina',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch {
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans bg-[#0B1120] min-h-screen text-white">
      <Helmet>
        <title>Rotina de Estudos | FOX IMAGEM</title>
        <meta
          name="description"
          content="Descubra como é a rotina de estudos de quem passa na residência veterinária."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img
              src="https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/preparatorios%20(1).png"
              className="h-24 md:h-36 mx-auto mb-6"
            />

            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-full px-6 py-2 mb-6 text-[#FF6B00] font-bold text-sm uppercase">
              <Calendar size={16} />
              <span>17 e 18 de Março • Evento Online</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Como é a <span className="text-[#FF6B00]">rotina de estudos</span>{' '}
              de quem passa?
            </h1>

            <div className="bg-white/5 p-8 rounded-3xl max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    placeholder="Seu nome"
                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    required
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <input
                    required
                    placeholder="Seu WhatsApp"
                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />

                  <button
                    disabled={loading}
                    className="w-full bg-[#FF6B00] py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    {loading ? 'ENVIANDO...' : 'QUERO PARTICIPAR'}
                    {!loading && <ArrowRight size={20} />}
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle2 className="mx-auto text-green-500" size={40} />
                  <h3 className="text-2xl font-bold mt-4">
                    Inscrição Confirmada!
                  </h3>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="py-20 bg-[#001E33]">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
          {/* DIA 1 */}
          <div className="bg-[#0B1120] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B00]">
              DIA 1 - 17/03
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Análise de provas</li>
              <li>✔ 5 pilares da aprovação</li>
              <li>✔ Aula prática</li>
            </ul>
          </div>

          {/* DIA 2 */}
          <div className="bg-[#0B1120] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B00]">
              DIA 2 - 18/03
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✔ O método FOX</li>
              <li>✔ Correção da prova</li>
              <li>✔ Mapa da aprovação</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}