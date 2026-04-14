import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 z-10 relative">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src="https://s3-alpha-sig.figma.com/img/c9d7/9453/b0a88ce5e9e2878fe6a8146b8972b94d?Expires=1776038400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GsR8wlvZ2sERYJNGKisf950oDt~X7AUNNLTrM3kiv41qQLNKx6EQV8SyXc7xsncFqZPy~8uS1Nc1kC~qCJTcU84E2UZc47KInVp67N3Q~4V~bDg1Dl20~1EURC9oTFdSfrRDGfkrp5VVhT~W6dDIKOyQJugloAEKgwD6bLKH8KQwiCjud52npQdUTL0d7fH75G50CB9U49U24eWdPXqtfAEInhWq5WJ4vGgx0PE~2MXX25Ejeq8l8DR5LMNcIZhRL7J76tbqwis3Tcs47KIUBUoHFdo2UGuv5LfVUadBtDPIlCfiH5VHdPvjSso4qyI6Sm1Lc2whZ-HTzJaMQvPbRw__" 
          alt="Memora Logo Icon" 
          className="w-16 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
        <h1 className="font-orbitron text-2xl tracking-widest text-white uppercase font-medium">
          Memora
        </h1>
      </div>
      
      <div className="text-center font-orbitron text-lg md:text-xl tracking-wide uppercase leading-relaxed">
        <span className="text-[#38bdf8] font-medium">Memora</span> <span className="text-white/90">the core layer of</span><br />
        <span className="text-white/90">future intelligence</span>
      </div>
    </div>
  );
};

export default Logo;
