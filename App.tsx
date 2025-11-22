import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Users, 
  Clock, 
  TrendingUp, 
  Lock,
  Play,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/Button';
import { AccordionItem, FeatureCard, Testimonial, BonusItem } from './types';

// --- CONSTANTS & DATA ---

const FAQ_ITEMS: AccordionItem[] = [
  {
    question: "E se meus gerentes não tiverem capacidade para liderar sozinhos?",
    answer: "O Protocolo foi criado justamente para times imaturos. Em vez de confiar em “talentos naturais”, ele instala um sistema que ensina a equipe a pensar e decidir com critérios claros, passo a passo."
  },
  {
    question: "Os resultados em 15 dias são reais ou é só marketing?",
    answer: "Não é promessa vazia. Líderes reportam clareza estratégica e alívio da agenda já nas primeiras semanas. Resultados equivalentes a 6 meses em até 15 dias é o padrão dos cases que aplicam com rigor."
  },
  {
    question: "Essa mentoria não vai tomar o pouco tempo que me resta?",
    answer: "A falta de tempo é exatamente o problema que o Protocolo resolve. Em vez de adicionar tarefas, ele reorganiza sua liderança para devolver 10 a 15 horas semanais ao seu calendário."
  },
  {
    question: "Funciona para qualquer tamanho de equipe?",
    answer: "Sim. O método já foi aplicado em empresas de diferentes portes e segmentos, sempre com foco na arquitetura do sistema, não no tamanho da estrutura."
  },
  {
    question: "Se minha equipe ficar autônoma demais, eu não fico dispensável?",
    answer: "O que o mercado mais valoriza hoje é o líder que constrói sistemas, não o que apaga incêndios. Líder bombeiro é substituível; arquiteto da liderança é promovido."
  },
  {
    question: "Qual é o investimento?",
    answer: "O preço de referência desta mentoria é de R$ 15.000, considerando o valor de todos os componentes e bônus (R$ 17.279 em valor percebido). Nesta turma, você terá uma condição especial abaixo desse valor."
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fernanda",
    role: "Coordenadora de Vendas, Unicesumar",
    text: "O método me deu clareza. Conquistei a promoção que buscava há anos e, pela primeira vez, sinto que lidero uma equipe que realmente voa sozinha.",
    image: "https://picsum.photos/id/1011/100/100"
  },
  {
    name: "Marcelo",
    role: "Diretor Comercial, Grupo de Varejo Nacional",
    text: "Eu era o gargalo de tudo. Em menos de um mês com o Protocolo, meus gerentes passaram a tomar decisões que antes paravam na minha mesa. Hoje tenho agenda para pensar expansão.",
    image: "https://picsum.photos/id/1027/100/100"
  },
  {
    name: "Carla",
    role: "Head de Operações, Indústria Alimentícia",
    text: "Já tinha feito treinamentos, cursos, coaching… aqui, pela primeira vez, vi um sistema que muda o comportamento da equipe, não só a motivação do dia.",
    image: "https://picsum.photos/id/1014/100/100"
  },
  {
    name: "Rogério",
    role: "Gerente Regional, Rede de Serviços",
    text: "Saí do modo bombeiro e fui convidado para participar das discussões estratégicas do board. O sentimento é de finalmente ser reconhecido como arquiteto de crescimento.",
    image: "https://picsum.photos/id/1025/100/100"
  }
];

// --- COMPONENTS ---

const Section: React.FC<{ 
  className?: string; 
  id?: string; 
  children: React.ReactNode 
}> = ({ className = '', id, children }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const CtaBlock: React.FC<{ text?: string }> = ({ text = "Texto abaixo do botão" }) => (
  <div className="flex flex-col items-center mt-10 gap-3">
    <Button variant="primary" className="shadow-brown-800/20 text-xl px-10 py-5">
      Quero ser o líder que o mercado procura
    </Button>
    <p className="text-sm text-brown-600 opacity-80 font-medium">{text}</p>
  </div>
);

const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-brown-400/20 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="font-bold text-lg text-brown-800">{item.question}</span>
            {openIndex === idx ? <ChevronUp className="text-peach-500" /> : <ChevronDown className="text-brown-400" />}
          </button>
          <div 
            className={`px-6 text-brown-600 leading-relaxed transition-all duration-300 overflow-hidden ${
              openIndex === idx ? 'max-h-96 py-5 border-t border-brown-100' : 'max-h-0 py-0'
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- MAIN APP ---

function App() {
  return (
    <div className="min-h-screen font-sans bg-cream selection:bg-peach-200">
      
      {/* BLOCO 01 - BARRA DE ALERTA */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold text-sm uppercase tracking-wide shadow-lg relative z-50">
        O método de liderança comercial mais fácil e rápido do mercado!
      </div>

      {/* BLOCO 02 - HERO */}
      <header className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-cream to-peach-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-block bg-peach-100 text-peach-500 font-bold px-4 py-2 rounded-full text-sm tracking-wider mb-2">
              MÉTODO COMPROVADO
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-800 leading-[1.1] tracking-tight">
              Rompa o teto de vidro do operacional e <span className="text-peach-500">acelere sua ascensão</span> ao C-Level.
            </h1>
            <p className="text-lg md:text-xl text-brown-600 leading-relaxed">
              Recupere de 10 a 15 horas por semana, saia da rotina de “líder bombeiro” e passe a comandar o crescimento estratégico da empresa — sem trabalhar mais horas.
            </p>
            
            {/* Video placeholder */}
            <div className="w-full aspect-video bg-brown-800 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              <div className="w-20 h-20 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110">
                <Play fill="white" className="text-white w-8 h-8 ml-1" />
              </div>
              <p className="absolute top-6 left-6 text-white/80 text-sm font-medium px-3 py-1 bg-black/30 rounded-full backdrop-blur-md">
                Veja o vídeo antes que saia do ar
              </p>
            </div>

            <Button variant="primary" fullWidth className="md:w-auto text-xl shadow-peach-500/30">
              Quero ser o líder que o mercado procura
            </Button>
          </div>

          <div className="relative lg:h-[800px] hidden lg:block">
             {/* Abstract organic shapes background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-sage-300/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl animate-pulse-slow"></div>
             
             {/* Human Image */}
             <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 transition-transform hover:rotate-0 duration-700">
               <img 
                src="https://picsum.photos/id/1059/800/1000" 
                alt="Líder Estratégico" 
                className="object-cover w-full h-full"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-800/90 to-transparent p-10">
                 <p className="text-white font-hand text-3xl">"Liderança é arquitetura, não esforço."</p>
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* BLOCO 03 - REFLEXÃO */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-peach-500 font-hand text-3xl font-bold block mb-4">Identificação</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-6">Você já passou por isso?</h2>
          <p className="text-brown-600 text-lg">Estas são algumas questões que sempre recebemos aqui:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Você sente que se tornou indispensável demais, ao ponto de ser o gargalo da própria equipe?",
              "Já cancelou férias, jantares ou momentos com a família porque “se você sair, a operação desmorona”?",
              "Tem a sensação incômoda de que é visto como bombeiro operacional, enquanto outros são promovidos?",
              "Deita à noite pensando se não está preso num teto de vidro invisível, vendo a janela da promoção se fechar?",
              "Já se perguntou: “Será que sou eu que não sei delegar, ou é minha equipe que nunca vai dar conta sozinha?”"
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 p-6 rounded-2xl ${i === 4 ? 'md:col-span-2 bg-peach-50' : 'bg-cream'} border border-brown-400/10`}>
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-brown-800 font-medium text-lg">{item}</p>
              </div>
            ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center space-y-6 bg-sage-100 p-10 rounded-3xl border border-sage-300/50">
          <p className="text-brown-800 text-lg leading-relaxed">
            Se você se viu em pelo menos uma dessas perguntas, <span className="font-bold">não é falta de competência, esforço ou caráter.</span>
          </p>
          <p className="text-brown-600 text-lg leading-relaxed">
            Você está preso na <strong className="text-brown-800">Armadilha do Herói Operacional</strong>. Esse ciclo foi construído para te manter ocupado demais no operacional e ocupado de menos no estratégico. A boa notícia é que não é um problema de “pessoas fracas”, e sim de arquitetura de liderança.
          </p>
          <p className="text-brown-800 font-bold text-xl">
             A partir daqui, vou te mostrar como o Protocolo Líder Comercial Estratégico pode te tirar dessa prisão operacional em semanas.
          </p>
          <div className="pt-6">
            <CtaBlock />
          </div>
        </div>
      </Section>

      {/* BLOCO 04 - ERROS */}
      <Section className="bg-brown-800 text-cream">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Os erros silenciosos que travam a sua promoção – mesmo com resultados altos.
            </h2>
            <p className="text-brown-400 text-lg mb-8">
              Talvez não falte competência. Falta parar de repetir estes padrões:
            </p>
            <div className="space-y-6">
              {[
                "Tentar resolver a sobrecarga simplesmente colocando mais horas na agenda.",
                "Apostar em treinamentos genéricos de soft skills que motivam só por alguns dias.",
                "Tentar criar processos “na unha” que ninguém segue na prática.",
                "Acreditar que um software mágico vai resolver o problema de cultura.",
                "Confundir ser indispensável com ser estratégico."
              ].map((erro, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-peach-500 rounded-full shrink-0"></div>
                  <p className="text-cream/90 text-lg">{erro}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-peach-500/20 rounded-full blur-3xl"></div>
             <div className="relative bg-brown-600/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h3 className="font-hand text-3xl text-peach-400 mb-4">O problema real</h3>
                <p className="text-xl leading-relaxed">
                  Nenhum desses caminhos é estúpido. O problema é que eles não tocam na raiz: a <strong className="text-white">Arquitetura do Sistema de Liderança</strong>.
                </p>
                <p className="mt-4 text-lg text-cream/80">
                   É a forma como decisões, responsabilidades e autonomia são distribuídas na sua empresa que o Protocolo reorganiza.
                </p>
                <div className="mt-8">
                  <Button variant="secondary" fullWidth>Quero ser o líder que o mercado procura</Button>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 05 - SOLUÇÃO E DIFERENCIAIS */}
      <Section className="bg-cream">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Por que este método é diferente?</h2>
          <p className="text-brown-600">Esqueça consultorias de PowerPoint. Isto é um Protocolo de Desacoplamento Estratégico.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Mecanismo Único", desc: "Protocolo de Desacoplamento que instala o piloto automático na equipe.", icon: <TrendingUp /> },
            { title: "Facilidade", desc: "Ferramentas, planilhas e templates prontos para aplicação imediata.", icon: <CheckCircle2 /> },
            { title: "Benefício Extra", desc: "Resultados de 6 meses em até 15 dias de aceleração extrema.", icon: <Clock /> },
            { title: "Sistema Desacoplado", desc: "Sua equipe resolve 80% dos problemas sem depender de você.", icon: <Users /> },
            { title: "Validado", desc: "Usado por +2.000 líderes em grupos como Gazin, STIHL e SEBRAE.", icon: <ShieldCheck /> },
            { title: "Experiência Real", desc: "Conteúdo construído “do chão de fábrica à diretoria”, sem academicismo.", icon: <Star /> },
            { title: "Liberdade", desc: "Sair da armadilha do Herói Operacional e viver a própria vida.", icon: <Lock /> },
            { title: "Satisfação", desc: "98,7% de aprovação dos participantes.", icon: <Users /> },
          ].map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-brown-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-700 mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold text-brown-800 text-lg mb-2">{card.title}</h3>
              <p className="text-brown-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-brown-800 max-w-2xl mx-auto mb-8">
            Na prática, você para de empurrar o carro sozinho e instala um motor V8 na sua equipe. A promoção deixa de ser política e passa a ser consequência.
          </p>
          <CtaBlock />
        </div>
      </Section>

      {/* BLOCO 06 - PARA QUEM É */}
      <Section className="bg-sage-700 text-white rounded-t-[3rem] -mt-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Para quem é?</h2>
              <ul className="space-y-4">
                {[
                  "Líderes comerciais e gestores que sentem a janela do C-Level se fechando.",
                  "Executivos cansados de serem “Diretores Acorrentados” com times imaturos.",
                  "Quem quer construir equipes com senso de dono e previsibilidade.",
                  "Profissionais ambiciosos, focados em escala e legado."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 bg-sage-500/20 p-4 rounded-xl items-center">
                    <CheckCircle2 className="text-peach-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-red-200">Para quem NÃO é:</h2>
              <ul className="space-y-4 opacity-80">
                <li className="flex gap-3 items-center">
                  <X className="w-5 h-5" /> Quem ainda não tem time sob responsabilidade.
                </li>
                <li className="flex gap-3 items-center">
                  <X className="w-5 h-5" /> Quem procura um curso passivo sem aplicação.
                </li>
                <li className="flex gap-3 items-center">
                  <X className="w-5 h-5" /> Quem prefere terceirizar a culpa à equipe.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white text-brown-800 p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">O perfil do "Carlos"</h3>
            <p className="text-lg mb-6 leading-relaxed text-brown-600">
              Se você é como o Carlos, Diretor Acorrentado – entre 38 e 52 anos, sênior, com orçamento na mão, mas com um medo silencioso de não chegar ao topo – este Protocolo foi desenhado cirurgicamente para você.
            </p>
            <Button variant="primary" fullWidth>Quero ser o líder que o mercado procura</Button>
          </div>
        </div>
      </Section>

      {/* BLOCO 07 - FRASE MARCANTE */}
      <section className="py-24 bg-brown-800 text-center px-6">
        <h2 className="font-hand text-4xl md:text-6xl text-cream max-w-4xl mx-auto leading-tight">
          "Empresas não promovem bombeiros.<br/>
          <span className="text-peach-500">Promovem arquitetos da liderança.</span>"
        </h2>
      </section>

      {/* BLOCO 08 - COMO FUNCIONA */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="relative">
               <div className="absolute -left-4 top-4 w-full h-full bg-sage-100 rounded-3xl -z-10"></div>
               <img src="https://picsum.photos/id/445/800/1000" alt="Mentoria" className="rounded-3xl shadow-xl object-cover w-full h-[600px]" />
             </div>
           </div>
           <div className="order-1 lg:order-2 space-y-8">
             <div>
               <h2 className="text-3xl font-bold text-brown-800 mb-4">Como funciona?</h2>
               <p className="text-brown-600">O protocolo mais rápido e estruturado para sua ascensão.</p>
             </div>
             
             <div className="space-y-6">
               {[
                 { step: "01", title: "Aplicação Rigorosa", desc: "Garantimos que seu momento é compatível com a turma." },
                 { step: "02", title: "Conversa Estratégica", desc: "Alinhamento de 30min para adaptar o Protocolo à sua realidade." },
                 { step: "03", title: "Diagnóstico & Implementação", desc: "4 semanas de instalação do Sistema de Liderança Desacoplada." },
                 { step: "04", title: "Aceleração", desc: "Resultados iniciais em até 15 dias com ferramentas plug-and-play." }
               ].map((s, i) => (
                 <div key={i} className="flex gap-6">
                   <div className="text-3xl font-hand font-bold text-peach-500 pt-1">{s.step}</div>
                   <div>
                     <h3 className="text-xl font-bold text-brown-800">{s.title}</h3>
                     <p className="text-brown-600 text-sm mt-1">{s.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
             <div className="pt-4">
                <Button variant="primary">Garantir minha vaga</Button>
             </div>
           </div>
        </div>
      </Section>

      {/* BLOCO 09 - COMPARATIVO */}
      <Section className="bg-peach-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brown-800">A diferença brutal</h2>
          <p className="text-brown-600">Veja o impacto de usar o Protocolo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sem o protocolo */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-red-100 opacity-90 hover:opacity-100 transition-opacity">
            <div className="bg-red-100 inline-block px-4 py-1 rounded-full text-red-600 font-bold text-sm mb-6">Sem o Protocolo</div>
            <ul className="space-y-4">
              {["Vive apagando incêndios.", "Trabalha 12h+ por dia.", "Depende de gerentes imaturos.", "Sente a janela do C-Level fechando.", "Teoria sem transformação."].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brown-600">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></div>
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Com o protocolo */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-peach-500 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-peach-500 text-white px-4 py-1 rounded-bl-xl text-xs font-bold">RECOMENDADO</div>
            <div className="bg-sage-100 inline-block px-4 py-1 rounded-full text-sage-700 font-bold text-sm mb-6">Com o Protocolo</div>
            <ul className="space-y-4">
              {["Equipe autônoma (80% resolvido).", "Recupera 15h semanais.", "Sistema claro de decisões.", "Resultados previsíveis para o board.", "Caminho visível para VP/C-Level."].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brown-800 font-medium">
                   <CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0" />
                   {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
            <CtaBlock />
        </div>
      </Section>

      {/* BLOCO 10 - BÔNUS */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span className="text-peach-500 font-bold tracking-widest uppercase text-sm">Oferta Especial</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mt-2">Bônus Exclusivos</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Masterclass: 7 Erros Fatais", desc: "Aula cirúrgica para destravar sua ascensão.", val: "R$ 797", img: "https://picsum.photos/id/1/400/300" },
            { title: "Comunidade Elite (1 ano)", desc: "Networking de alto nível com líderes estratégicos.", val: "R$ 997", img: "https://picsum.photos/id/2/400/300" },
            { title: "Kit Ferramentas Vitalício", desc: "Dashboards, planilhas e templates prontos.", val: "R$ 1.497", img: "https://picsum.photos/id/3/400/300" }
          ].map((b, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src={b.img} alt={b.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-xl text-brown-800 mb-2">{b.title}</h3>
              <p className="text-brown-600 text-sm mb-3">{b.desc}</p>
              <p className="text-peach-500 font-bold">Custaria: {b.val}</p>
            </div>
          ))}
        </div>

        {/* Extra Bonus */}
        <div className="mt-12 bg-brown-800 text-cream p-8 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="bg-peach-500 p-4 rounded-full shrink-0 animate-pulse">
            <Star className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Bônus Extra (Apenas 3 primeiros)</h3>
            <p className="text-cream/80">Sessão de Diagnóstico de Carreira 1:1 com Edvaldo Eliezer. Mapeamento individual do seu gargalo.</p>
          </div>
          <div className="text-right shrink-0">
            <span className="block text-sm opacity-60 line-through">R$ 1.497</span>
            <span className="block text-2xl font-bold text-peach-400">GRÁTIS</span>
          </div>
        </div>
        
        <div className="mt-10">
           <CtaBlock />
        </div>
      </Section>

      {/* BLOCO 11 - DEPOIMENTOS */}
      <Section className="bg-sage-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brown-800">Quem viveu, aprovou</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-brown-800 leading-tight">{t.name}</p>
                  <p className="text-xs text-brown-500 leading-tight">{t.role}</p>
                </div>
              </div>
              <p className="text-brown-600 text-sm italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 12 - GARANTIA */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto bg-cream border-2 border-brown-100 p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-peach-200 rounded-full blur-3xl opacity-50"></div>
          <ShieldCheck className="w-16 h-16 text-brown-800 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-brown-800 mb-4">Garantia Total de Resultado</h2>
          <p className="text-brown-600 text-lg mb-8 max-w-2xl mx-auto">
            Se aplicar o Protocolo de forma rigorosa e não experimentar os resultados prometidos, devolvemos 100% do seu investimento. O risco é todo nosso.
          </p>
          <Button variant="primary">Quero testar sem riscos</Button>
        </div>
      </Section>

      {/* BLOCO 13/14 - RESUMO E CTA FINAL */}
      <Section className="bg-brown-800 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Resumo da sua entrega</h2>
            <ul className="space-y-4">
              {[
                "Mentoria Estratégica (4 semanas)",
                "Arsenal completo de ferramentas (Scripts, Dashboards)",
                "Masterclass 'Os 7 Erros Fatais'",
                "Comunidade Elite (1 ano)",
                "Garantia Risco Zero",
                "Bônus Diagnóstico 1:1 (3 primeiros)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-cream/90 border-b border-white/10 pb-2">
                  <CheckCircle2 className="text-peach-500 w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white text-brown-800 p-8 md:p-12 rounded-3xl text-center shadow-2xl">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-bold text-sm mb-4">VAGAS LIMITADAS</span>
            <h3 className="text-3xl font-bold mb-2">É hora de avançar</h3>
            <p className="text-brown-500 mb-8">Garanta o acesso com condição especial.</p>
            <Button variant="primary" fullWidth className="text-xl py-6 shadow-peach-500/50">
              INSCREVER AGORA
            </Button>
            <div className="mt-4 flex justify-center gap-2 text-xs text-brown-400 uppercase tracking-widest">
               <span>Compra Segura</span> • <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 15 - FAQ */}
      <Section className="bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-10">Perguntas Frequentes</h2>
          <Accordion items={FAQ_ITEMS} />
          <div className="text-center mt-10">
             <a href="https://wa.me/554432242143" className="text-peach-500 font-bold hover:underline">Falar com a equipe no WhatsApp</a>
          </div>
        </div>
      </Section>

      {/* BLOCO 16 - EXPERT */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-sage-100 shadow-xl">
              <img src="https://picsum.photos/id/1005/600/800" alt="Edvaldo Eliezer" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-4xl font-bold text-brown-800">Sobre o Expert</h2>
            <h3 className="font-hand text-3xl text-peach-500">"Eu construo líderes que vencem sem depender de heróis."</h3>
            <p className="text-brown-600 leading-relaxed text-lg">
              Com mais de 28 anos de campo de batalha, sou <strong>Edvaldo Eliezer</strong>. Meu propósito é tirar líderes de alta performance da Armadilha do Herói Operacional.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-cream p-4 rounded-xl">
                 <strong className="block text-2xl text-brown-800">+2.000</strong>
                 <span className="text-sm text-brown-500">Líderes Treinados</span>
               </div>
               <div className="bg-cream p-4 rounded-xl">
                 <strong className="block text-2xl text-brown-800">+150</strong>
                 <span className="text-sm text-brown-500">Empresas Atendidas</span>
               </div>
            </div>
            <p className="text-brown-600">
              Vamos arquitetar esse sucesso juntos.
            </p>
          </div>
        </div>
      </Section>

      {/* BLOCO 17 - RODAPÉ */}
      <footer className="bg-brown-800 text-brown-400 py-12 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-4">© 2025 Protocolo Líder Comercial Estratégico. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="https://wa.me/554432242143" className="hover:text-white transition-colors">Atendimento</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;