import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0D0B] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Nav */}
      <header className="w-full px-8 py-5 flex items-center justify-between z-20 border-b border-purple-950/80 relative">
        {/* Horizontal line across header with logo break */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-950 via-purple-800/40 to-purple-950 pointer-events-none" />

        {/* Apoiar Button */}
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-purple-600/80 bg-[#140b24]/90 hover:bg-purple-900/40 transition-colors text-purple-300 font-semibold tracking-wider text-xs shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer">
          <svg
            className="w-3.5 h-3.5 fill-purple-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          APOIAR
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3 z-30">
          <Image
            src="/logo-oficial.png"
            alt="Rumo ao Topo Logo"
            width={210}
            height={75}
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          />
        </div>

        {/* Entrar Button */}
        <button className="px-7 py-2 rounded-full border border-purple-600/80 bg-[#140b24]/90 hover:bg-purple-900/40 transition-colors text-purple-200 font-semibold tracking-wider text-xs cursor-pointer">
          ENTRAR
        </button>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-8 pt-8 pb-16 flex flex-col md:flex-row items-center justify-between z-10 my-auto relative">
        <div className="flex flex-col items-start max-w-xl z-10">
          <span className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-purple-500 inline-block"></span>
            SIMULADOR DE MODO CARREIRA
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-5">
            <span className="text-white block">RUMO AO</span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] block">
              SEU TALENTO!
            </span>
          </h1>

          <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed max-w-md">
            Roube atributos de craques e viva uma carreira de verdade!
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Link href="/carreira/nova">
              <button className="px-6 py-2.5 rounded-full border border-purple-500/80 bg-[#140b24]/90 hover:bg-purple-900/40 text-white font-bold text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(147,51,235,0.2)] cursor-pointer">
                NOVA CARREIRA
              </button>
            </Link>
            <button className="px-6 py-2.5 rounded-full border border-purple-500/80 bg-[#140b24]/90 hover:bg-purple-900/40 text-white font-bold text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(147,51,235,0.2)] cursor-pointer">
              CONTINUAR CARREIRA
            </button>
            <button className="px-6 py-2.5 rounded-full border border-purple-500/80 bg-[#140b24]/90 hover:bg-purple-900/40 text-white font-bold text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(147,51,235,0.2)] cursor-pointer">
              HISTÓRICO
            </button>
          </div>
        </div>

        {/* Mascot */}
        <div className="mt-12 md:mt-0 relative flex justify-center items-center md:-mr-8">
          <div className="absolute w-80 h-80 bg-purple-600/25 rounded-full blur-[90px] pointer-events-none" />
          <Image
            src="/mascote-hangloose.png"
            alt="Mascote Rumo ao Topo"
            width={460}
            height={560}
            priority
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] relative z-10 max-h-[460px] w-auto translate-y-4"
          />
        </div>
      </main>

      {/* Footer Banner */}
      <div className="w-full bg-[#0B0A08] border-t border-b border-purple-950/80 py-3.5 overflow-hidden relative z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="animate-marquee items-center select-none">
          <div className="flex shrink-0 items-center">
            <span className="text-3xl md:text-4xl font-black tracking-wider text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,235,0.6)] mx-4">
              VENHA SER UM BRUXO!
            </span>
            <span className="text-3xl md:text-4xl font-black tracking-wider text-stroke-purple mx-4">
              VENHA SER UM BRUXO!
            </span>
            <span className="text-3xl md:text-4xl font-black tracking-wider text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,235,0.6)] mx-4">
              VENHA SER UM BRUXO!
            </span>
            <span className="text-3xl md:text-4xl font-black tracking-wider text-stroke-purple mx-4">
              VENHA SER UM BRUXO!
            </span>
          </div>
          <div className="flex shrink-0 items-center">
            <span className="text-3xl md:text-4xl font-black tracking-wider text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,235,0.6)] mx-4">
              VENHA SER UM BRUXO!
            </span>
            <span className="text-3xl md:text-4xl font-black tracking-wider text-stroke-purple mx-4">
              VENHA SER UM BRUXO!
            </span>
            <span className="text-3xl md:text-4xl font-black tracking-wider text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,235,0.6)] mx-4">
              VENHA SER UM BRUXO!
            </span>
            <span className="text-3xl md:text-4xl font-black tracking-wider text-stroke-purple mx-4">
              VENHA SER UM BRUXO!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
