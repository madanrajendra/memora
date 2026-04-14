import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Main Background Image */}
      <img 
        src="https://s3-alpha-sig.figma.com/img/24de/fd58/da244d6828e8a18218e02e00dfc86e91?Expires=1776038400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W6DoJlMMsXvxVDl-oQTF~0m0EsDz5EFmV0ac78va~AMRrMPxMEWKTp48UCv~WCSekAhlS88YGZxnD9mdM73us8f~WaM2O6DntoLv-tKQFDzB3O9oOuJ9f0UZYMTK-YH1Z68KBih2y1ZgsIHDSo~pAE4MH-xpjHv9e43wSKhFrKpLBX2ZCkITnUrLE-2Jh~LAnFhVlYmdMh5doz62C2VgE8vmv1nnDPTi0e2eE~kueoqaagsiiPWBesqOWebP2Wajcx1uW6jpgy5~6ogz73MVvfgnpDgKcR57-cD7hdlgEEwuT454HjQohWBrsZa9nCMUezDBZTlwPcYi0qW5PZCoWw__" 
        alt="Space Background" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      
      {/* Gradient Overlays for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80" />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/8f53/9e6c/cebe2552fe1286f6b59b4981ff5176f3?Expires=1776038400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S2zRRWlRKoFzVy7wk8yVCR6UWBjPXm5SCFiDKkTcDTx5Bcqz27iUvvm8pEEl5PPsAGW69bGs1ZKbAx1ixoIbzX~La0t2Q2iFXpyFU5DRzfEzSRiNK~Za1vamqqgxtPYzScFFjNafAA20ggdY6aNlwvlThoVDi2HalfOVIwJMwvssdDU9cRz-SjB1HAmmo40grqOjgUyWU~YPTp3u-7LEqitbwreMRJV~8tRGZRc66vneKSCckhSYHWd8Wtq3zpVb3WTPKcDDnjLvvTeKOuAD~U3qSVlNczE60e8o-kTa2cqDsU2yyftS2VTMv8GuRA5AS1Ya31OepmI6ItknfMB6gw__')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />
    </div>
  );
};

export default Background;
