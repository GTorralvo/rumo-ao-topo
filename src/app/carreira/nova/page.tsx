"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const POSITIONS = [
  { id: "ZAG", label: "ZAG" },
  { id: "ALA", label: "ALA" },
  { id: "VOL", label: "VOL" },
  { id: "MC", label: "MC" },
  { id: "MEI", label: "MEI" },
  { id: "PON", label: "PON" },
  { id: "SA", label: "SA" },
  { id: "ATA", label: "ATA", popular: true },
];

export default function NovaCarreiraPage() {
  const [name, setName] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("ATA");
  const [shirtNumber, setShirtNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Por favor, digite o nome do craque.");
      return;
    }
    if (!shirtNumber.trim()) {
      alert("Por favor, escolha o número da sua camisa.");
      return;
    }
    alert(`Carreira iniciada para ${name} (${selectedPosition}, #${shirtNumber})!`);
  };

  return (
    <div className="min-h-screen bg-[#0E0D0B] text-white flex flex-col justify-between relative overflow-x-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/6 -left-20 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header / Nav */}
      <header className="w-full px-8 py-5 flex items-center justify-between z-20 border-b border-purple-950/80 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-950 via-purple-800/40 to-purple-950 pointer-events-none" />

        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-purple-600/80 bg-[#140b24]/90 hover:bg-purple-900/40 transition-colors text-purple-300 font-semibold tracking-wider text-xs shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer">
          <svg className="w-3.5 h-3.5 fill-purple-400" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          APOIAR
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 top-3 z-30">
          <Link href="/">
            <Image
              src="/logo-oficial.png"
              alt="Rumo ao Topo Logo"
              width={210}
              height={75}
              priority
              className="object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer"
            />
          </Link>
        </div>

        <button className="px-7 py-2 rounded-full border border-purple-600/80 bg-[#140b24]/90 hover:bg-purple-900/40 transition-colors text-purple-200 font-semibold tracking-wider text-xs cursor-pointer">
          ENTRAR
        </button>
      </header>

      {/* Main Content - Long vertical scrolling page */}
      <main className="w-full max-w-7xl mx-auto px-8 pt-12 pb-24 z-10 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Left Column: Form & Titles */}
          <div className="flex flex-col w-full lg:max-w-2xl z-10">
            <span className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-purple-500 inline-block"></span>
              SIMULADOR DE MODO CARREIRA
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              <span className="text-white">ROUBE ATRIBUTOS DE</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                GRANDES JOGADORES E VIVA A EXPERIÊNCIA!
              </span>
            </h1>

            <p className="text-zinc-400 text-sm md:text-base mb-8">
              Escolha as características do seu jogador!
            </p>

            {/* Record / Score Card */}
            <div className="w-full rounded-xl border border-purple-600/50 bg-[#120a1f]/80 p-5 mb-10 shadow-[0_0_25px_rgba(147,51,235,0.15)]">
              <span className="text-[10px] tracking-widest text-purple-400 font-semibold uppercase block mb-1">
                SEU RECORDE
              </span>
              <div className="text-xl md:text-2xl font-black text-purple-300 tracking-wide uppercase">
                JOGUE PARA SABER SEU NÍVEL!
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
              {/* Nome do Craque */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold tracking-wider uppercase text-white">
                  NOME DO CRAQUE
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como o mundo vai te chamar"
                  maxLength={40}
                  className="w-full px-5 py-4 rounded-xl border border-purple-800/60 bg-[#120822]/90 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 transition-colors shadow-inner"
                />
              </div>

              {/* Escolha sua Posição */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold tracking-wider uppercase text-white">
                  ESCOLHA SUA POSIÇÃO
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {POSITIONS.map((pos) => {
                    const isSelected = selectedPosition === pos.id;
                    return (
                      <div key={pos.id} className="relative">
                        {pos.popular && (
                          <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider z-10 shadow-[0_0_10px_rgba(147,51,235,0.5)]">
                            EM ALTA
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => setSelectedPosition(pos.id)}
                          className={`w-full py-4 px-4 rounded-xl border text-center font-black tracking-wider text-sm transition-all cursor-pointer flex items-center justify-center ${
                            isSelected
                              ? "border-purple-500 bg-purple-950/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] scale-[1.02]"
                              : "border-purple-900/50 bg-[#120822]/70 text-zinc-300 hover:border-purple-700 hover:bg-purple-950/20"
                          }`}
                        >
                          {pos.label}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Escolha Número da Sua Camisa */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold tracking-wider uppercase text-white">
                  ESCOLHA NÚMERO DA SUA CAMISA
                </label>
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={shirtNumber}
                  onChange={(e) => setShirtNumber(e.target.value)}
                  placeholder="O número que todos vão lembrar de você!"
                  className="w-full px-5 py-4 rounded-xl border border-purple-800/60 bg-[#120822]/90 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 transition-colors shadow-inner"
                />
              </div>

              {/* Começar Carreira Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-black text-base tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(147,51,235,0.4)] cursor-pointer active:scale-[0.99]"
                >
                  COMEÇAR CARREIRA
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Cauldron Mascot */}
          <div className="hidden lg:flex flex-col items-center justify-center sticky top-24">
            <div className="relative">
              <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
              <Image
                src="/mascote-caldeirao.png"
                alt="Mascote com Caldeirão Mágico"
                width={520}
                height={620}
                priority
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] relative z-10"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="w-full bg-[#08060d] border-t border-purple-950/80 py-6 text-center text-zinc-500 text-xs">
        Rumo ao Topo © 2026 — Simulador de Modo Carreira de Futebol
      </footer>
    </div>
  );
}
