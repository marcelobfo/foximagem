import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Upload, Users, Play, Gift, Trash2, Download, Lock } from 'lucide-react';

interface Participant {
  name: string;
  email: string;
}

interface Winner extends Participant {
  prize: string;
  date: Date;
}

export default function Raffle() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [winners, setWinners] = useState<Winner[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [displayedName, setDisplayedName] = useState<string>('Aguardando sorteio...');
  const [prize, setPrize] = useState<string>('Bolsa 100%');
  const [customPrize, setCustomPrize] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'Fox@2026') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Senha incorreta.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center p-4 font-sans">
        <Helmet>
          <title>Acesso Restrito | FOX IMAGEM</title>
        </Helmet>
        <div className="bg-[#001E33] p-8 rounded-3xl border border-white/10 max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#FF6B00]/20">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-2">Acesso Restrito</h2>
            <p className="text-gray-400 text-center mb-8 text-sm">Digite a senha para acessar o painel de sorteios.</p>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="password"
                  placeholder="Senha de acesso"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors text-center text-lg tracking-widest"
                />
              </div>
              {authError && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-red-400 text-sm text-center font-medium"
                >
                  {authError}
                </motion.p>
              )}
              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
              >
                ACESSAR PAINEL
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split('\n');
      
      const parsedParticipants: Participant[] = [];
      
      // Skip header if exists, or just parse all lines
      lines.forEach((line, index) => {
        if (!line.trim()) return;
        
        // Handle basic CSV splitting (comma or semicolon)
        const parts = line.split(/[,;]/);
        if (parts.length >= 2) {
          const name = parts[0].trim().replace(/^["']|["']$/g, '');
          const email = parts[1].trim().replace(/^["']|["']$/g, '');
          
          // Basic validation to skip headers like "Nome,Email"
          if (index === 0 && name.toLowerCase().includes('nome') && email.toLowerCase().includes('email')) {
            return;
          }
          
          if (name && email) {
            parsedParticipants.push({ name, email });
          }
        }
      });

      if (parsedParticipants.length > 0) {
        setParticipants(parsedParticipants);
        alert(`${parsedParticipants.length} participantes carregados com sucesso!`);
      } else {
        alert('Não foi possível ler os participantes. Certifique-se de que o CSV tem as colunas Nome e Email separadas por vírgula ou ponto e vírgula.');
      }
    };
    reader.readAsText(file);
  };

  const drawWinner = () => {
    const eligibleParticipants = participants.filter(
      p => !winners.some(w => w.email === p.email)
    );

    if (eligibleParticipants.length === 0) {
      alert('Não há mais participantes elegíveis para sorteio.');
      return;
    }

    const actualPrize = prize === 'Outro' ? customPrize : prize;
    if (!actualPrize) {
      alert('Por favor, defina o prêmio do sorteio.');
      return;
    }

    setIsDrawing(true);
    let counter = 0;
    const duration = 3000; // 3 seconds of suspense
    const intervalTime = 50; // Change name every 50ms
    const maxIterations = duration / intervalTime;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * eligibleParticipants.length);
      setDisplayedName(eligibleParticipants[randomIndex].name);
      counter++;

      if (counter >= maxIterations) {
        clearInterval(interval);
        
        // Final Winner
        const finalWinnerIndex = Math.floor(Math.random() * eligibleParticipants.length);
        const finalWinner = eligibleParticipants[finalWinnerIndex];
        
        setDisplayedName(finalWinner.name);
        setWinners(prev => [{ ...finalWinner, prize: actualPrize, date: new Date() }, ...prev]);
        setIsDrawing(false);
      }
    }, intervalTime);
  };

  const removeWinner = (email: string) => {
    if (window.confirm('Tem certeza que deseja remover este ganhador? Ele voltará para a lista de elegíveis.')) {
      setWinners(prev => prev.filter(w => w.email !== email));
    }
  };

  const clearAll = () => {
    if (window.confirm('Tem certeza que deseja limpar todos os dados?')) {
      setParticipants([]);
      setWinners([]);
      setDisplayedName('Aguardando sorteio...');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Sorteio Ao Vivo | FOX IMAGEM</title>
      </Helmet>

      {/* Header */}
      <header className="bg-[#001E33] border-b border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#FF6B00] p-2 rounded-lg">
              <Trophy size={28} className="text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Sorteio <span className="text-[#FF6B00]">FOX IMAGEM</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Users size={18} className="text-gray-400" />
              <span className="font-medium">
                {participants.length} Participantes
              </span>
            </div>
            <button 
              onClick={clearAll}
              className="text-gray-400 hover:text-red-400 transition-colors p-2"
              title="Limpar tudo"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Controls */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Upload Card */}
          <div className="bg-[#001E33] p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Upload size={20} className="text-[#FF6B00]" />
              1. Carregar Planilha
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Faça upload de um arquivo CSV contendo "Nome" e "Email" separados por vírgula.
            </p>
            
            <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              id="csv-upload"
            />
            <label
              htmlFor="csv-upload"
              className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/20 border-dashed rounded-xl py-8 cursor-pointer transition-colors"
            >
              <Upload size={24} className="text-gray-400" />
              <span className="font-medium text-gray-300">Selecionar arquivo .CSV</span>
            </label>
          </div>

          {/* Prize Selection */}
          <div className="bg-[#001E33] p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gift size={20} className="text-[#FF6B00]" />
              2. Definir Prêmio
            </h2>
            
            <div className="space-y-3">
              {['Bolsa 100%', 'Bolsa 50%', 'Outro'].map((p) => (
                <label key={p} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${prize === p ? 'border-[#FF6B00]' : 'border-gray-500 group-hover:border-gray-400'}`}>
                    {prize === p && <div className="w-3 h-3 bg-[#FF6B00] rounded-full" />}
                  </div>
                  <input
                    type="radio"
                    name="prize"
                    value={p}
                    checked={prize === p}
                    onChange={(e) => setPrize(e.target.value)}
                    className="hidden"
                  />
                  <span className={prize === p ? 'text-white font-medium' : 'text-gray-400'}>{p}</span>
                </label>
              ))}
              
              {prize === 'Outro' && (
                <input
                  type="text"
                  placeholder="Digite o prêmio..."
                  value={customPrize}
                  onChange={(e) => setCustomPrize(e.target.value)}
                  className="w-full mt-2 bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Draw Area & Winners */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Draw Screen */}
          <div className="bg-gradient-to-br from-[#001E33] to-[#0B1120] p-8 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
            
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center w-full">
              <p className="text-[#FF6B00] font-bold uppercase tracking-widest mb-6">
                {isDrawing ? 'Sorteando...' : 'Ganhador'}
              </p>
              
              <div className="h-32 flex items-center justify-center mb-8">
                <h2
                  className={`text-4xl md:text-6xl font-black text-center leading-tight transition-all duration-300 ${
                    !isDrawing && winners.length > 0 && displayedName === winners[0].name 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-yellow-400 scale-110' 
                      : 'text-white'
                  }`}
                >
                  {displayedName}
                </h2>
              </div>

              {!isDrawing && winners.length > 0 && displayedName === winners[0].name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] px-6 py-2 rounded-full font-bold text-lg mb-8"
                >
                  Prêmio: {winners[0].prize}
                </motion.div>
              )}

              <button
                onClick={drawWinner}
                disabled={isDrawing || participants.length === 0}
                className={`mx-auto flex items-center gap-3 px-10 py-5 rounded-full font-black text-xl transition-all transform ${
                  isDrawing || participants.length === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-[#FF6B00] hover:bg-[#e66000] text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]'
                }`}
              >
                <Play fill="currentColor" size={24} />
                {isDrawing ? 'SORTEANDO...' : 'SORTEAR AGORA'}
              </button>
            </div>
          </div>

          {/* Winners List */}
          {winners.length > 0 && (
            <div className="bg-[#001E33] rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-500" />
                  Ganhadores Anteriores
                </h3>
                <span className="bg-white/10 text-sm px-3 py-1 rounded-full">
                  {winners.length} sorteados
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {winners.map((winner, idx) => (
                  <div key={idx} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                    <div>
                      <h4 className="font-bold text-lg">{winner.name}</h4>
                      <p className="text-gray-400 text-sm">{winner.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 px-3 py-1 rounded-lg font-medium text-sm whitespace-nowrap">
                        {winner.prize}
                      </span>
                      <button
                        onClick={() => removeWinner(winner.email)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-2"
                        title="Remover ganhador"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
