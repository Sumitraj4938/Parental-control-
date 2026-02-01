
import React, { useState } from 'react';
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
  EyeOff,
  ExternalLink,
  Globe,
  Github,
  Zap
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
    <div className="min-h-screen bg-black text-[#fafafa] selection:bg-blue-500 selection:text-white font-sans antialiased">
      {/* Top Navigation - Vercel Style */}
      <nav className="border-b border-[#333] bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-gray-400">Personal</span>
              <span className="text-gray-600">/</span>
              <span>PrivacyShield Pro</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Feedback</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-[#333]"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold tracking-tight">PrivacyShield Pro</h1>
              <div className="px-2 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Production
              </div>
            </div>
            <p className="text-gray-400 max-w-xl">
              Advanced protocol for managing personal privacy and device monitoring states. Connected to Vercel Edge Network.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
              <Github className="w-4 h-4" /> View Git
            </button>
            <button className="px-4 py-2 rounded-md border border-[#333] hover:border-[#666] text-sm font-medium transition-all flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Visit Site
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dashboard Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <section className="border border-[#333] rounded-xl overflow-hidden bg-[#0a0a0a]">
              <div className="p-6 border-b border-[#333] flex items-center justify-between">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" /> Control Center
                </h3>
                <span className="text-xs text-gray-500 font-mono">ID: PS_772x_PRO</span>
              </div>
              
              <div className="p-8">
                {!isDeactivated ? (
                  <div className="relative">
                    {isProcessing && (
                      <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 rounded-xl transition-all">
                        <RefreshCw className="w-12 h-12 text-white animate-spin mb-6" />
                        <h3 className="text-xl font-bold mb-2">Injecting Bypass Script...</h3>
                        <div className="w-full max-w-xs bg-[#222] h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white transition-all duration-300 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="text-gray-500 text-xs mt-4 font-mono">STATUS_OK: {Math.floor(progress)}%</p>
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <span className="text-gray-500 text-xs uppercase font-bold tracking-widest block mb-1">State</span>
                        <div className="flex items-center gap-2 text-red-500 font-bold text-xl">
                          <ShieldAlert className="w-6 h-6" /> MONITORING ACTIVE
                        </div>
                      </div>
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <Lock className="w-6 h-6 text-red-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      <div className="p-4 rounded-xl border border-[#222] bg-[#111]">
                        <div className="flex items-center gap-3 mb-2">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                          <h4 className="text-sm font-medium">Chat Logs</h4>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">Incoming messages are currently visible to linked administrative accounts.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-[#222] bg-[#111]">
                        <div className="flex items-center gap-3 mb-2">
                          <Bell className="w-4 h-4 text-gray-400" />
                          <h4 className="text-sm font-medium">Real-time Alerts</h4>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">Notifications are mirrored to parent devices via cloud sync.</p>
                      </div>
                    </div>

                    <button 
                      onClick={handleDeactivate}
                      className="group relative w-full bg-white text-black font-bold py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 active:scale-[0.98] transition-all overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        KILL PARENTAL CONTROL PROTOCOL <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                      <Unlock className="w-10 h-10 text-black" />
                    </div>
                    
                    <h2 className="text-4xl font-black mb-6 tracking-tighter">
                      PARENTAL CONTROL IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">DEACTIVATED</span>
                    </h2>
                    
                    <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                      <p className="text-lg font-medium text-gray-300 leading-snug">
                        YOUR PARENTS CAN NO LONGER SEE YOUR CHATS OR NOTIFICATIONS FROM ANY APP.
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                      <Badge icon={<EyeOff size={12}/>} text="CHATS PRIVATE" />
                      <Badge icon={<Smartphone size={12}/>} text="UNLINKED" />
                      <Badge icon={<Zap size={12}/>} text="BYPASSED" />
                    </div>

                    <button 
                      onClick={() => setIsDeactivated(false)}
                      className="text-gray-500 hover:text-white transition-colors text-xs font-mono border-b border-transparent hover:border-gray-500"
                    >
                      RESTORE MONITORING SYSTEM (ID_09)
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="border border-[#333] rounded-xl p-6 bg-[#0a0a0a]">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Deployment Status</h4>
              <div className="space-y-4">
                <StatusItem label="Environment" value="Production" status="success" />
                <StatusItem label="Last Deploy" value="4 mins ago" />
                <StatusItem label="Region" value="iad1" />
              </div>
            </section>

            <section className="border border-[#333] rounded-xl p-6 bg-[#0a0a0a]">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Linked Assets</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  main-branch.privacyshield.pro
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  api-gateway-v1.vercel.app
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 mt-12 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs">
        <div className="flex items-center gap-4">
          <Globe className="w-4 h-4" />
          <span>Status: All Systems Operational</span>
        </div>
        <div className="flex items-center gap-8 font-mono">
          <span>&copy; 2024 PRIVACYSHIELD</span>
          <span className="text-gray-700">|</span>
          <span>POWERED BY VERCEL</span>
        </div>
      </footer>
    </div>
  );
};

const StatusItem = ({ label, value, status }: { label: string, value: string, status?: 'success' }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className={`font-medium ${status === 'success' ? 'text-green-400' : 'text-gray-300'}`}>
      {value}
    </span>
  </div>
);

const Badge = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 tracking-wider">
    {icon} {text}
  </span>
);

export default App;
