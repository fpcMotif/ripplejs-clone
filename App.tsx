
import React from 'react';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import Features from './components/Features';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden starry-background">
      <ParticleBackground />
      <main className="relative z-10 w-full">
        <div className="text-center max-w-[720px] px-4 md:px-8 mx-auto backdrop-blur-[1px]">
          <Header />
          <CodeEditor />
          <Features />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
