import { ArrowRight, CheckCircle2, Calendar, Clock, Award, Video, FileText, Users, HelpCircle, ChevronDown, ChevronUp, AlertCircle, ShieldCheck, Download, BookOpen, Star, Zap, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// --- Components ---

export const Hero = () => (
  <section className="relative overflow-hidden bg-[#002B49] text-white pt-12 pb-20 md:pt-20 md:pb-28">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://automacao-piwigo.w3lidv.easypanel.host/upload/2026/02/20/20260220133104-a45343c5.webp"
        alt="Veterinário realizando ultrassom"
        className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#002B49]/90 via-[#002B49]/70 to-[#002B49]/95"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/preparatorios%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL3ByZXBhcmF0b3Jpb3MgKDEpLnBuZyIsImlhdCI6MTc3MjE0NTAwMiwiZXhwIjoyMTgyMTEzMDAyfQ.yxlLnHaNOlqJTWfFPlpWyvx1VH3UlE6uhScKO2onG4M"
          alt="FOX IMAGEM Logo"
          className="h-24 md:h-36 lg:h-48 mx-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
        
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-4 text-[#FF6B00] font-bold text-xs md:text-sm shadow-xl hover:bg-white/15 transition-colors cursor-default">
          <Calendar size={14} className="md:w-[16px] md:h-[16px]" />
          <span>Início em Março de 2026 • 7 Meses de Imersão</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
          Mais de 100 aprovações <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#ff9e55]">em 6 anos.</span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          <strong className="block mt-2 text-white font-semibold text-lg md:text-xl">Domine as provas de residência.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#matricula"
            className="bg-[#FF6B00] hover:bg-[#e66000] text-white text-base md:text-lg font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-[0_10px_40px_rgba(255,107,0,0.4)] hover:shadow-[0_15px_50px_rgba(255,107,0,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-2 border-2 border-[#FF6B00] hover:border-[#e66000]"
          >
            QUERO MINHA VAGA <ArrowRight size={20} />
          </a>
        </div>
        
        <p className="mt-4 md:mt-6 text-xs text-gray-400 flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <ShieldCheck size={14} className="text-[#FF6B00] md:w-[16px] md:h-[16px]" /> Garantia incondicional de 7 dias
        </p>
      </motion.div>
    </div>
  </section>
);

export const PainPoints = () => (
  <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px]"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Estudar errado <span className="text-[#FF6B00]">custa a sua aprovação</span>.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Você sente que estuda horas e não sai do lugar? O excesso de conteúdo desorganizado gera ansiedade e insegurança. 
          <br className="hidden md:block" />
          Na <span className="font-bold text-white">FOX IMAGEM</span>, transformamos confusão em clareza estratégica.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {[
          { title: "Medo da Reprovação", desc: "A sensação constante de que, não importa o quanto estude, nunca será o suficiente.", icon: AlertCircle },
          { title: "Falta de Estratégia", desc: "Perder tempo precioso organizando resumos ao invés de dominar o que realmente cai na prova.", icon: Clock },
          { title: "Conteúdo Disperso", desc: "Informações soltas e contraditórias que impedem a construção de um raciocínio clínico sólido.", icon: FileText }
        ].map((item, idx) => (
          <div key={idx} className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]">
              <item.icon size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="#matricula" className="inline-flex items-center gap-2 text-[#FF6B00] font-bold hover:text-white transition-colors border-b-2 border-[#FF6B00] pb-1 hover:border-white">
          QUERO ACABAR COM ESSA INSEGURANÇA <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

export const Solution = () => (
  <section className="py-24 md:py-32 bg-[#002B49] relative border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide border border-[#FF6B00]/20">
          MÉTODO EXCLUSIVO
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          O Arsenal Completo da Aprovação
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Não é apenas um curso. É um ecossistema de alta performance desenhado para colocar você dentro da residência.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          { icon: Video, title: "Aulas Ao Vivo e Gravadas", desc: "Terças às 19:30. Acesso total às gravações até 31/01/2027 para rever quantas vezes precisar.", color: "text-blue-400" },
          { icon: Award, title: "4 Simulados Oficiais", desc: "Treine com ranking e meça seu desempenho real antes da prova oficial.", color: "text-[#FF6B00]" },
          { icon: BookOpen, title: "Material de Apoio", desc: "E-books, flashcards (Anki), cadernos de questões e slides completos.", color: "text-emerald-400" },
          { icon: Users, title: "Suporte no WhatsApp", desc: "Acompanhamento direto no WhatsApp. Você nunca estará estudando sozinho.", color: "text-purple-400" }
        ].map((feature, idx) => (
          <div key={idx} className="bg-[#001E33] p-8 rounded-3xl border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-1">
            <div className={`w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 ${feature.color}`}>
              <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
        {[
          { label: "Carga Horária", value: "+100h" },
          { label: "Módulos", value: "28" },
          { label: "Simulados", value: "4" },
          { label: "Acesso até", value: "Jan/27" },
        ].map((stat, idx) => (
          <div key={idx} className="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 text-white hover:bg-white/10 transition-colors">
            <div className="text-3xl md:text-5xl font-extrabold text-[#FF6B00] mb-1 md:mb-2">{stat.value}</div>
            <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <a href="#matricula" className="bg-white text-[#002B49] hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-3">
            QUERO ACESSO A TUDO ISSO <ArrowRight size={20} />
         </a>
      </div>
    </div>
  </section>
);

export const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("Ultrassom");

  const modules = {
    "Ultrassom": [
      "01 - Introdução ao US",
      "02 - Trato urinário",
      "03 - Sistema reprodutor masculino",
      "04 - Sistema reprodutor feminino",
      "05 - Adrenais e pâncreas",
      "06 - TGI",
      "07 - Baço, fígado e hepatobiliar",
      "20 - US emergencial (Bônus)",
      "21 - US linfonodos (Bônus)"
    ],
    "Radiologia": [
      "08 - Introdução ao RX",
      "09 - Esqueleto axial",
      "10 - Esqueleto apendicular",
      "11 - Cavidade abdominal",
      "12 - Cavidade torácica",
      "22 - Radiologia equina (Bônus)",
      "23 - Radiologia silvestres (Bônus)"
    ],
    "Avançada e SUS": [
      "13 - Tomografia e ressonância",
      "14 - Saúde pública e zoonoses"
    ],
    "Prática e Apoio": [
      "00 - Boas-vindas",
      "15 - Caderno de questões",
      "16 - Flashcards",
      "17 - Plantões de dúvidas",
      "18 - Discussões de casos",
      "19 - Editais e provas"
    ],
    "Simulados": [
      "24 - Simulado Ultrassom",
      "25 - Simulado RX + imagem avançada",
      "26 - Simulado SUS",
      "27 - Simulado geral"
    ]
  };

  return (
    <section className="py-32 bg-[#002B49] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00406b]/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
            <img 
              src="https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/raposa.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL3JhcG9zYS53ZWJwIiwiaWF0IjoxNzcyMTQ0MTg4LCJleHAiOjIxNTA1NzYxODh9.WQqPqf0Y8b665nq2PjOIHIlWk3OWjb8sKPsQNNRK4_E" 
              alt="Fox Symbol" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conteúdo Programático
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">
            Uma jornada completa dividida em 28 módulos estratégicos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(modules).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-full text-base font-bold transition-all border-2 ${
                activeTab === tab 
                  ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30 scale-105' 
                  : 'bg-transparent border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 min-h-[400px] shadow-2xl">
          <h3 className="text-3xl font-bold text-[#FF6B00] mb-10 flex items-center gap-4">
            <Zap className="fill-current" size={32} /> {activeTab}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modules[activeTab as keyof typeof modules].map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-5 bg-[#001E33]/60 rounded-2xl border border-white/5 hover:border-[#FF6B00]/50 transition-all hover:bg-[#001E33]/80 group">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center text-sm font-bold shrink-0 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                  {item.split(' - ')[0]}
                </div>
                <span className="text-gray-200 font-medium text-lg">{item.split(' - ').slice(1).join(' - ') || item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Timeline = () => (
  <section className="py-24 md:py-32 bg-[#0B1120] relative">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 md:mb-20">
        Sua Jornada até a <span className="text-[#FF6B00]">Aprovação</span>
      </h2>

      <div className="space-y-12 relative before:content-[''] before:absolute before:left-8 md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10">
        {[
          { date: "Março 2026", title: "Início das Aulas", desc: "Aula inaugural e liberação imediata dos primeiros conteúdos fundamentais." },
          { date: "Semanalmente", title: "Encontros Ao Vivo", desc: "Aulas expositivas e interativas todas as terças-feiras, 19:30. Tire dúvidas em tempo real." },
          { date: "Constante", title: "Simulados e Ranking", desc: "4 grandes simulados estratégicos para testar seu nível e corrigir rotas." },
          { date: "Jan 2027", title: "Reta Final", desc: "Revisão intensiva e encerramento do suporte. Você estará pronto." }
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full md:text-right pl-20 md:pl-0 relative">
              {idx % 2 === 0 && (
                <>
                  <div className="hidden md:block group hover:-translate-x-2 transition-transform duration-300">
                     <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                     <p className="text-gray-400 mt-2 text-lg">{item.desc}</p>
                  </div>
                  <div className="md:hidden">
                     <span className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1 rounded-full text-sm font-bold border border-[#FF6B00]/20 mb-2">{item.date}</span>
                     <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                     <p className="text-gray-400 mt-2 text-lg">{item.desc}</p>
                  </div>
                </>
              )}
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#FF6B00] rounded-full transform -translate-x-1/2 border-4 border-[#0B1120] shadow-[0_0_15px_rgba(255,107,0,0.5)] z-10 mt-1 md:mt-0"></div>
            
            <div className="flex-1 w-full pl-20 md:pl-0">
              {idx % 2 !== 0 ? (
                <div className="group hover:translate-x-2 transition-transform duration-300">
                   <div className="md:hidden mb-2">
                     <span className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1 rounded-full text-sm font-bold border border-[#FF6B00]/20">{item.date}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                   <p className="text-gray-400 mt-2 text-lg">{item.desc}</p>
                </div>
              ) : (
                <div className="md:text-right hidden md:block">
                   <span className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] px-6 py-2 rounded-full text-base font-bold border border-[#FF6B00]/20 hover:bg-[#FF6B00]/20 transition-colors">{item.date}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

interface InvestmentProps {
  onOpenCheckout: () => void;
}

export const Investment = ({ onOpenCheckout }: InvestmentProps) => (
  <section id="matricula" className="py-24 md:py-32 bg-[#002B49] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto bg-[#001E33] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row transform hover:scale-[1.01] transition-transform duration-500 group">
        
        <div className="bg-[#0B1120] p-10 md:p-12 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-white">Turma 2026</h3>
            <p className="text-gray-400 mb-10 text-lg">Garanta sua preparação completa com quem mais aprova no Brasil.</p>
            <ul className="space-y-6 text-base text-gray-300">
              <li className="flex items-center gap-4"><div className="bg-[#FF6B00]/20 p-2 rounded-full"><CheckCircle2 size={20} className="text-[#FF6B00]" /></div> Acesso até Jan/2027</li>
              <li className="flex items-center gap-4"><div className="bg-[#FF6B00]/20 p-2 rounded-full"><CheckCircle2 size={20} className="text-[#FF6B00]" /></div> +100h de Conteúdo</li>
              <li className="flex items-center gap-4"><div className="bg-[#FF6B00]/20 p-2 rounded-full"><CheckCircle2 size={20} className="text-[#FF6B00]" /></div> Certificado Incluso</li>
              <li className="flex items-center gap-4"><div className="bg-[#FF6B00]/20 p-2 rounded-full"><CheckCircle2 size={20} className="text-[#FF6B00]" /></div> Suporte VIP</li>
            </ul>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FF6B00] rounded-full blur-[100px] opacity-20"></div>
        </div>
        
        <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center bg-[#001E33] relative border-l border-white/5">
          <div className="text-center md:text-left mb-10">
            <div className="inline-block bg-[#FF6B00] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide shadow-lg shadow-[#FF6B00]/20 animate-pulse">
              OFERTA DE LANÇAMENTO
            </div>
            <div className="flex items-baseline gap-4 justify-center md:justify-start flex-wrap">
              <span className="text-gray-500 line-through text-xl">R$ 2.599,00</span>
              <span className="text-5xl md:text-6xl font-extrabold text-white">R$ 2.499,00</span>
            </div>
            <p className="text-gray-400 mt-3 text-lg">à vista ou em até <strong className="text-white">12x de R$ 208,25</strong></p>
          </div>

          <button 
            onClick={onOpenCheckout}
            className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white text-xl font-bold py-6 rounded-2xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,0,0.5)] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-3 group border border-[#FF6B00]"
          >
            GARANTIR MINHA VAGA <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-gray-500 text-sm mt-8 flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-[#FF6B00]" /> 7 dias de garantia incondicional
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const Testimonials = () => {
  const testimonials = [
    "https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/depo01.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL2RlcG8wMS53ZWJwIiwiaWF0IjoxNzcyMTQzNDU5LCJleHAiOjIwODc1MDM0NTl9.-HBuiceNXVK-Cv6rSVls8ACSk3l7pOj4lYQvyD1c16Y",
    "https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/depo02.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL2RlcG8wMi53ZWJwIiwiaWF0IjoxNzcyMTQzNDgxLCJleHAiOjIwODc1MDM0ODF9.DAijgu73z3Wlppi5G6wGLqBD05-u16UoxsD7FFp3kQs",
    "https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/depo03.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL2RlcG8wMy53ZWJwIiwiaWF0IjoxNzcyMTQzNDk3LCJleHAiOjIwODc1MDM0OTd9.8wugZHWU15B4Vz8Mvnw48xbKGHKrEfIYrdm0OejF7QE",
    "https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/depo04.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL2RlcG8wNC53ZWJwIiwiaWF0IjoxNzcyMTQzNTEyLCJleHAiOjIwODc1MDM1MTJ9.yiR1IOtLJYz-8FC4sLhxLhORK8c6OHXd6yRsHeAClU0"
  ];

  return (
    <section className="py-24 md:py-32 bg-[#001E33] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que dizem nossos alunos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de quem confiou no método e conquistou a aprovação.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-10"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
          >
            {testimonials.map((img, idx) => (
              <SwiperSlide key={idx} className="!w-[300px] md:!w-[350px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform transition-transform hover:scale-105">
                  <img 
                    src={img} 
                    alt={`Depoimento ${idx + 1}`} 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export const Faculty = () => (
  <section className="py-24 md:py-32 bg-[#0B1120] border-t border-white/5">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Coordenação e Corpo Docente
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16 md:mb-20">
        Aprenda com mestres e doutores que são referência na área.
      </p>

      <div className="grid md:grid-cols-1 gap-8 md:gap-10 max-w-2xl mx-auto">
        <div className="bg-[#001E33] p-10 rounded-[2rem] border border-white/5 hover:border-[#FF6B00]/30 transition-all hover:shadow-2xl hover:-translate-y-2 group">
          <div className="w-32 h-32 bg-white/5 rounded-full mx-auto mb-8 flex items-center justify-center text-white group-hover:bg-[#FF6B00] transition-colors shadow-inner">
             <Users size={48} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Prof. Dr. Antonio Lacreta Jr.</h3>
          <p className="text-[#FF6B00] font-bold mb-6 uppercase tracking-wide text-sm">UFLA</p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Referência em Ultrassonografia e Radiologia. Coordenador de módulos fundamentais do curso.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "As aulas ficam gravadas?", a: "Sim! Todas as aulas ao vivo (terças, 19:30) são gravadas e disponibilizadas na plataforma para você assistir quantas vezes quiser até 31/01/2027." },
    { q: "Qual a carga horária total?", a: "O curso possui mais de 100 horas de conteúdo, incluindo aulas teóricas, resolução de questões e discussões de casos." },
    { q: "Como funciona o certificado?", a: "Você receberá um certificado de conclusão emitido pela FOX IMAGEM ao obter média acima de 70% nos 4 simulados e concluir as atividades da plataforma." },
    { q: "Quais são os materiais de apoio?", a: "Você terá acesso a e-books, flashcards (Anki), cadernos de questões, banco de provas anteriores e slides das aulas." },
    { q: "Tenho suporte para dúvidas?", a: "Sim, suporte completo e acompanhamento durante todo o curso via WhatsApp diretamente com a equipe." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#002B49] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6B00]/10 rounded-full text-[#FF6B00] mb-4 border border-[#FF6B00]/20">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-400 text-lg">Tudo o que você precisa saber sobre a sua preparação.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden bg-[#001E33] shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 group">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-[#001E33] hover:bg-[#0B1120] transition-colors"
              >
                <span className={`font-bold text-lg md:text-xl transition-colors ${openIndex === idx ? 'text-[#FF6B00]' : 'text-white'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#FF6B00] text-white rotate-180' : 'bg-white/5 text-gray-400 group-hover:bg-[#FF6B00]/10 group-hover:text-[#FF6B00]'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 md:px-8 pb-8 bg-[#001E33]"
                  >
                    <p className="text-gray-400 pt-4 border-t border-white/5 mt-2 leading-relaxed text-lg">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-[#002B49] text-white py-20 border-t border-white/10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-col items-center justify-center gap-6 mb-10">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
            <img 
              src="https://muevsilsemjixmafhohh.supabase.co/storage/v1/object/sign/technedigital/raposa.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2IxMjQ0Ni0xZDk5LTQ3Y2YtYTI3Ny0zZDgxNjI5ZTc0MjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZWNobmVkaWdpdGFsL3JhcG9zYS53ZWJwIiwiaWF0IjoxNzcyMTQ0MTg4LCJleHAiOjIxNTA1NzYxODh9.WQqPqf0Y8b665nq2PjOIHIlWk3OWjb8sKPsQNNRK4_E" 
              alt="Fox Symbol" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>
      <p className="text-[#FF6B00] mb-10 text-base font-medium">
        © 2026 FOX IMAGEM. Todos os direitos reservados.
      </p>
      <div className="flex justify-center gap-10 text-base text-gray-400">
        <a href="#" className="hover:text-[#FF6B00] transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-[#FF6B00] transition-colors">Política de Privacidade</a>
      </div>
    </div>
  </footer>
);
