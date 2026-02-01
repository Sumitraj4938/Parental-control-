
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Unlock, 
  MessageCircle, 
  Bell, 
  Smartphone, 
  ArrowRight,
  RefreshCw,
  EyeOff
} from 'lucide-react';

const App: React.FC = () => {
  const [isDeactivated, setIsDeactivated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDeactivate = () => {
    setIsProcessing(true);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setIsDeactivated(true);
        }, 500);
      }
      setProgress(Math.min(p, 100));
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full"></div>
      </div>

      <header className="mb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-blue-600/20 p-3 rounded-2xl border border-blue-500/30">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">PrivacyShield <span className="text-blue-400">Pro</span></h1>
        <p className="text-slate-400 mt-2">Personal Privacy Management Dashboard</p>
      </header>

      <main className="w-full max-w-lg">
        {!isDeactivated ? (
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {isProcessing && (
              <div className="absolute inset-0 z-20 bg-slate-900/90 flex flex-col items-center justify-center p-8 transition-opacity duration-300">
                <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mb-6" />
                <h3 className="text-xl font-semibold mb-2">Bypassing Protocols...</h3>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300 ease-out" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-slate-500 text-sm mt-4 font-mono">ENCRYPTING_LAYER_{Math.floor(progress)}</p>
              </div>
            )}

            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Current Status</span>
                <span className="text-red-400 font-bold flex items-center gap-2 mt-1">
                  <ShieldAlert className="w-4 h-4" /> MONITORING ACTIVE
                </span>
              </div>
              <Lock className="text-slate-600 w-6 h-6" />
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <MessageCircle className="text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Chat Visibility</h4>
                  <p className="text-xs text-slate-500 italic">Parents can see incoming & outgoing messages</p>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Bell className="text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Notifications</h4>
                  <p className="text-xs text-slate-500 italic">Push alerts are mirrored to linked devices</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleDeactivate}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-blue-900/20"
            >
              DISABLE PARENTAL CONTROL <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-slate-500 text-xs mt-6 px-4">
              Clicking the button will initiate a private bypass protocol. This action is irreversible for this session.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-10 text-center shadow-2xl shadow-green-900/10 animate-in fade-in zoom-in duration-500">
              <div className="flex justify-center mb-6">
                <div className="bg-green-500 p-4 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                  <Unlock className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
                YOUR PARENTAL CONTROL IS <span className="text-green-400 underline decoration-green-500/50">OFF</span>
              </h2>
              
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 inline-block">
                <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-relaxed uppercase tracking-tight">
                  NOW YOUR PARENT CAN'T SEE YOUR CHATS OR NOTIFICATION OF ANY APP
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-900/30 border border-green-700/30 rounded-full text-xs text-green-400 font-medium">
                  <EyeOff className="w-3 h-3" /> CHATS HIDDEN
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-900/30 border border-green-700/30 rounded-full text-xs text-green-400 font-medium">
                  <Smartphone className="w-3 h-3" /> NO DEVICE LINK
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-900/30 border border-green-700/30 rounded-full text-xs text-green-400 font-medium">
                  <Lock className="w-3 h-3" /> PRIVATE PROTOCOL
                </span>
              </div>
            </div>

            <button 
              onClick={() => {
                setIsDeactivated(false);
                setProgress(0);
              }}
              className="w-full py-4 text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium"
            >
              RE-ENABLE SECURE MONITORING
            </button>
          </div>
        )}
      </main>

      <footer className="mt-12 text-slate-600 text-xs font-mono">
        &copy; 2024 PRIVACYSHIELD ENCRYPTION SERVICES • AES-256
      </footer>
    </div>
  );
};

export default App;
