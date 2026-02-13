import React, { useState } from 'react';
import { 
  Anchor, 
  Castle, 
  Flag, 
  History, 
  Milestone, 
  Sword, 
  Waves, 
  Building2, 
  Skull, 
  AlertTriangle,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const historyData = [
  {
    era: "Antiguidade Fenícia",
    period: "3000 a.C. - 333 a.C.",
    icon: <Anchor className="w-6 h-6" />,
    color: "bg-blue-500",
    events: [
      { year: "3000 a.C.", title: "Fundação de Biblos", desc: "Uma das cidades continuamente habitadas mais antigas do mundo." },
      { year: "1200 a.C.", title: "Expansão Marítima", desc: "Os Fenícios dominam o Mediterrâneo e criam o alfabeto fonético." },
      { year: "800 a.C.", title: "Era de Ouro de Tiro", desc: "Cidade-estado dominante famosa pela púrpura e comércio." }
    ]
  },
  {
    era: "Domínio Clássico",
    period: "333 a.C. - 634 d.C.",
    icon: <Building2 className="w-6 h-6" />,
    color: "bg-amber-600",
    events: [
      { year: "332 a.C.", title: "Conquista de Alexandre", desc: "O cerco de Tiro marca o fim da era puramente fenícia." },
      { year: "64 a.C.", title: "Pax Romana", desc: "Construção dos templos monumentais em Baalbek." },
      { year: "395 d.C.", title: "Império Bizantino", desc: "O Líbano torna-se um centro cristão importante." }
    ]
  },
  {
    era: "Idade Média e Cruzadas",
    period: "634 - 1516",
    icon: <Sword className="w-6 h-6" />,
    color: "bg-red-700",
    events: [
      { year: "634", title: "Conquista Árabe", desc: "Introdução do Islã na região." },
      { year: "1099", title: "Era das Cruzadas", desc: "Fundação do Condado de Trípoli; construção de castelos como o de Sídon." },
      { year: "1291", title: "Domínio Mameluco", desc: "Expulsão final dos cruzados da costa libanesa." }
    ]
  },
  {
    era: "Império Otomano",
    period: "1516 - 1918",
    icon: <History className="w-6 h-6" />,
    color: "bg-emerald-600",
    events: [
      { year: "1516", title: "Conquista Otomana", desc: "O Líbano integra o império sob o Sultão Selim I." },
      { year: "1590-1635", title: "Fakhreddine II", desc: "Príncipe que buscou autonomia e modernizou o Líbano." },
      { year: "1861", title: "Moutasarrifiya", desc: "Criação de uma província autônoma após conflitos sectários." }
    ]
  },
  {
    era: "Mandato e Independência",
    period: "1920 - 1974",
    icon: <Flag className="w-6 h-6" />,
    color: "bg-red-500",
    events: [
      { year: "1920", title: "Grande Líbano", desc: "Criação do Estado sob mandato francês após a 1ª Guerra Mundial." },
      { year: "1943", title: "Independência", desc: "Assinatura do Pacto Nacional dividindo o poder entre seitas." },
      { year: "1950s-60s", title: "Suíça do Oriente", desc: "Era de ouro econômica e cultural em Beirute." }
    ]
  },
  {
    era: "Guerra Civil e Ocupação",
    period: "1975 - 2005",
    icon: <Skull className="w-6 h-6" />,
    color: "bg-gray-800",
    events: [
      { year: "1975-1990", title: "Guerra Civil Libanesa", desc: "Conflito devastador envolvendo milícias e potências regionais." },
      { year: "1982", title: "Invasão de Israel", desc: "Israel invade o sul para expulsar a OLP de Arafat." },
      { year: "1990", title: "Acordo de Taif", desc: "Fim oficial da guerra e redistribuição política." },
      { year: "2005", title: "Revolução dos Cedros", desc: "Retirada das tropas sírias após o assassinato de Rafic Hariri." }
    ]
  },
  {
    era: "Era Contemporânea",
    period: "2006 - Presente",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "bg-purple-600",
    events: [
      { year: "2006", title: "Guerra de Julho", desc: "Conflito direto entre Israel e Hezbollah." },
      { year: "2019", title: "Revolução de Outubro", desc: "Protestos massivos contra a corrupção e crise econômica." },
      { year: "2020", title: "Explosão no Porto", desc: "Tragédia em Beirute que agravou a crise nacional." }
    ]
  }
];

export default function App() {
  const [activeEra, setActiveEra] = useState(0);

  return (
    <div className="min-h-screen bg-stone-50 p-4 md:p-8 font-sans text-stone-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-2 bg-red-100 rounded-full mb-4">
            <div className="w-16 h-10 bg-red-600 rounded flex items-center justify-center relative">
               <svg viewBox="0 0 100 60" className="w-12 h-8 fill-green-700">
                  <path d="M50,10 L35,50 L65,50 Z" />
               </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2">História do Líbano</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            De mercadores fenícios à "Suíça do Oriente": uma jornada por milênios de resiliência e cultura.
          </p>
        </header>

        {/* Mindmap / Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Menu Lateral - Mindmap Nodes */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Milestone className="text-red-600" /> Eras Históricas
            </h2>
            <div className="space-y-3">
              {historyData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => setActiveEra(index)}
                  className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 text-left border-l-4 ${
                    activeEra === index 
                    ? `bg-white shadow-md border-l-${data.color.split('-')[1]}-${data.color.split('-')[2]} scale-105` 
                    : 'bg-stone-100 border-l-transparent hover:bg-stone-200 opacity-70'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-4 text-white ${data.color}`}>
                    {data.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-wider text-stone-500">{data.period}</div>
                    <div className="font-bold text-lg">{data.era}</div>
                  </div>
                  {activeEra === index && <ChevronRight className="ml-auto text-stone-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Display */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-stone-100">
            <div className="mb-8 border-b border-stone-100 pb-6">
              <h3 className="text-3xl font-bold text-stone-800 flex items-center gap-3">
                <span className={`p-3 rounded-2xl text-white ${historyData[activeEra].color}`}>
                  {historyData[activeEra].icon}
                </span>
                {historyData[activeEra].era}
              </h3>
              <p className="text-stone-500 mt-2 font-medium">{historyData[activeEra].period}</p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200"></div>

              {/* Events */}
              <div className="space-y-12">
                {historyData[activeEra].events.map((event, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    {/* Circle on line */}
                    <div className={`absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ring-4 ring-stone-50 z-10 ${historyData[activeEra].color}`}></div>
                    
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 group-hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-black text-stone-500 mb-3 uppercase tracking-tighter">
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold text-stone-800 mb-2">{event.title}</h4>
                      <p className="text-stone-600 leading-relaxed italic">
                        "{event.desc}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Box */}
            <div className="mt-12 p-6 bg-red-50 rounded-2xl border-l-8 border-red-500">
              <h5 className="font-bold text-red-800 mb-2 uppercase text-xs tracking-widest">Importância da Era</h5>
              <p className="text-red-900 text-sm leading-snug">
                {activeEra === 0 && "Neste período, o Líbano definiu sua identidade como porta de entrada comercial do mundo, legando o alfabeto à humanidade."}
                {activeEra === 1 && "A fusão entre a cultura local e as civilizações grega e romana deixou monumentos arquitetônicos inigualáveis."}
                {activeEra === 2 && "A região tornou-se um caldeirão de fés, com castelos de pedra que ainda hoje guardam as memórias das batalhas medievais."}
                {activeEra === 3 && "Séculos de estabilidade imperial onde as comunidades religiosas começaram a se organizar em sistemas de autonomia local."}
                {activeEra === 4 && "O Líbano moderno floresce, tornando-se o epicentro cultural, educacional e financeiro do mundo árabe."}
                {activeEra === 5 && "Um período doloroso de redefinição nacional sob fogo, que testou a resiliência do povo libanês."}
                {activeEra === 6 && "O país enfrenta crises profundas, mas mantém a força de sua diáspora e sua importância estratégica global."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-16 text-center text-stone-400 text-sm pb-12 border-t border-stone-200 pt-8">
          <p>© Cronologia Educativa - História do Levante</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="flex items-center gap-1"><Waves size={14}/> Mediterrâneo</span>
            <span className="flex items-center gap-1"><History size={14}/> Resiliência</span>
            <span className="flex items-center gap-1"><Flag size={14}/> Soberania</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

