import React from 'react';
import {
  Terminal,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Monitor,
  Sparkles,
  HeartHandshake,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

const CONTACT_FORM_URL = 'https://share-na2.hsforms.com/2T1pQ6j2sQzajdd3AIDeWqgcy93d?utm_source=https://apptalenthub.co.jp';

const App = () => {

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20 selection:text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-xl shadow-lg shadow-primary/30">
              <HeartHandshake size={24} className="text-white" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight block leading-none">教えてツバサさん</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#anxiety" className="hover:text-primary transition-colors">お悩み</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">研修の特徴</a>
            <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-primary text-white px-6 py-2.5 rounded-full transition-all shadow-md inline-block">
              相談してみる
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-white to-transparent -z-10"></div>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold mb-10 animate-fade-in">
            <Sparkles size={14} /> <span>AI初心者のファウンダー様へ。世界一やさしい研修を。</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.2] mb-10 tracking-tight text-slate-950">
            「知ったふり」は、<br />
            <span className="text-primary underline decoration-primary/40 underline-offset-8 italic">今日で終わりにしましょう。</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            360度、全方位で戦う忙しいファウンダーのために。<br />
            AIを使って事業計画を立て、実際に「動くもの」を手にする感動を、<br className="hidden md:block" />
            専門用語なし・最短距離でお届けします。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30">
              まずは話を聞いてみる <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* Pain Points: Voice of Founders */}
      <section id="anxiety" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-400 uppercase tracking-widest mb-4">Voice of Founders</h2>
            <h3 className="text-3xl md:text-4xl font-black">こんな「焦り」を感じていませんか？</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 text-slate-100"><ShieldAlert size={64} /></div>
              <p className="text-lg font-bold mb-4">「ぶっちゃけ、AIって何なの？怖い…」</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                次々と新しい言葉が出てきて、ついていくのがやっと。本音では「置いていかれそう」な恐怖がある。
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-lg font-bold mb-4">「知ったふりをしなきゃいけないのが辛い」</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                経営者としてAIについて意見を求められるが、実は基本がわかっていない。誰かに今さら聞くのも恥ずかしい。
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-lg font-bold mb-4">「忙しすぎて、学ぶ時間がない」</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                360度経営を見ている自分には、一から技術を学ぶ余裕はない。でも社内の「AI格差」が広がるのが怖い。
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm bg-primary/10 border-primary/20">
              <p className="text-lg font-bold mb-4 text-primary underline">「この研修が、あなたの盾になります」</p>
              <p className="text-slate-600 text-sm leading-relaxed font-bold">
                難しい話は一切抜き。経営者が知っておくべき「AIの操り方」だけを濃縮してお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Claude Code? - Simple Comparison */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">なぜ「Claude Code」なのか？</h2>
            <p className="text-slate-500 text-xl font-medium italic">GeminiやGPTとの決定的な違い</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-200 rounded-lg"><MessageSquare size={24} className="text-slate-500" /></div>
                <h4 className="text-2xl font-black text-slate-500">これまでのAI (GPT / Gemini)</h4>
              </div>
              <p className="text-slate-600 mb-8 font-bold text-lg leading-relaxed">優秀な「相談相手」</p>
              <ul className="space-y-4 text-slate-500">
                <li className="flex gap-2 items-center"><CheckCircle size={16} /> アイデアを出すのは得意</li>
                <li className="flex gap-2 items-center"><CheckCircle size={16} /> 計画書の下書きは作れる</li>
                <li className="flex gap-2 items-center text-red-400 font-bold italic">× 実際に「動くもの」を作るには、エンジニアが必要</li>
              </ul>
            </div>

            <div className="p-10 rounded-[3rem] bg-primary text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg"><Zap size={24} className="text-white" /></div>
                <h4 className="text-2xl font-black">Claude Code</h4>
              </div>
              <p className="text-white/90 mb-8 font-black text-xl leading-relaxed italic">優秀な「実務担当エンジニア」</p>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center"><CheckCircle size={16} /> あなたの指示で直接ファイルを書き換える</li>
                <li className="flex gap-2 items-center"><CheckCircle size={16} /> エラーも自分で見つけて自分で直す</li>
                <li className="flex gap-2 items-center font-bold">✓ 経営者が「一言」命じるだけで、製品が立ち上がる</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Content: Special Lesson */}
      <section className="py-24 px-6 bg-slate-950 text-white rounded-[4rem] mx-4 my-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                研修で手に入れる<br />
                3つの「武器」
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0"><GraduationCap size={24} /></div>
                  <div>
                    <h4 className="text-xl font-black mb-2 italic">1. 「知ったふり」を卒業する基本知識</h4>
                    <p className="text-slate-400 text-sm">なぜ今、Claude Codeが世界中で流行っているのか？その本質を30分で理解します。</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0"><Terminal size={24} /></div>
                  <div>
                    <h4 className="text-xl font-black mb-2 italic">2. 魔法の「Skills（スキルズ）」の正体</h4>
                    <p className="text-slate-400 text-sm">AIに特定の役割を教え込む「Skills」。これを使いこなすだけで、あなたの分身が24時間働き始めます。</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0"><Monitor size={24} /></div>
                  <div>
                    <h4 className="text-xl font-black mb-2 italic">3. 事業計画を「動くサイト」へ</h4>
                    <p className="text-slate-400 text-sm">小難しい「デプロイ」なんて覚える必要はありません。「世の中に出す」方法をAIに丸投げするコツを伝授。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 p-1 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="p-8 font-mono text-sm space-y-4">
                  <div className="text-primary flex items-center gap-2">
                    <Sparkles size={16} /> <span>研修の実演イメージ：</span>
                  </div>
                  <p className="text-slate-300">ファウンダー: 「この事業計画書、ウェブで公開できるようにして」</p>
                  <div className="pl-4 border-l border-primary py-1 text-slate-500 italic">
                    Claude Code:
                    「承知しました。プランに基づき、最適なデザインで公開準備を完了しました。」
                  </div>
                  <div className="text-green-400 font-bold">✓ わずか3分で事業が「形」に</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA for Busy Founders */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
            AIは、あなたの「敵」ではなく<br />
            あなたの「最強の右腕」です。
          </h2>
          <p className="text-xl text-slate-500 mb-16 font-medium">
            360度、すべてを一人で抱える必要はありません。<br />
            まずはこの研修で、AIを味方につける「はじめの一歩」を一緒に踏み出しましょう。
          </p>

          <div className="bg-white border-[3px] border-slate-950 rounded-[3rem] p-10 md:p-16 relative shadow-[15px_15px_0px_0px_rgba(82,139,176,1)]">
            <h3 className="text-2xl font-black mb-4">ファウンダー向け無料カウンセリング</h3>
            <p className="text-slate-500 mb-12 font-bold">あなたのペースで、あなたのビジネスに合わせて進めます。</p>

            <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full py-6 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
              やさしい研修について詳しく聞く <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-lg">
              <HeartHandshake size={20} className="text-white" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900 italic">Founder's Academy</span>
          </div>
          <div className="flex gap-12 text-sm font-bold text-slate-400 uppercase tracking-[0.2em] text-[10px]">
            <a href="#" className="hover:text-primary transition-colors">Vision</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">© 2024 AI DRIVEN FOUNDERS. GENTLE & FAST.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
