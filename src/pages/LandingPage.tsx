import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/** Design canvas width from Figma — all absolute positions reference this. */
const DESIGN_WIDTH = 2014;

const heroImage = "https://www.figma.com/api/mcp/asset/c8542d34-1480-40bc-b9ea-53fb92db4dd2";
const logoShapeImage = "https://www.figma.com/api/mcp/asset/c0d05623-3c78-48cf-a30d-f1d9e289ee78";
const logoFillImage = "https://www.figma.com/api/mcp/asset/ec217cfa-99f4-4302-b2d2-ccb0bba2c1c9";
const cut2FrameImage = "https://www.figma.com/api/mcp/asset/8a46bee6-9b15-47d7-bcca-7578e157f3d7";
const cut2RectangleImage = "https://www.figma.com/api/mcp/asset/719d0dff-e1b8-43fd-b2c4-30865879a997";
const cut3PrismImage = "https://www.figma.com/api/mcp/asset/2e3f23d7-61b7-4146-b160-9549bf40d416";
/** Local export: hub + branches for roadmap (aligns with six 4-line text groups). */
const cut3RoadmapBranchesImage = "/cut3-roadmap-branches.png";

const cut3RoadmapLineStyle = {
  margin: 0,
  color: "white",
  fontSize: "21px",
  fontFamily: "Albert Sans, sans-serif",
  textTransform: "uppercase" as const,
  lineHeight: "20px",
  wordWrap: "break-word" as const
};

const cut3RoadmapGroups: [string, string][][] = [
  [
    ["AI memory capture", ": Recording and storing data through AI."],
    ["Decision advisory", ": Providing AI-driven guidance or recommendations."],
    ["Memory timeline", ": A chronological organization of captured data."],
    ["Voice (120s/day)", ": Daily voice interaction or recording limit."]
  ],
  [
    ["Voice extended", ": Expanded voice capabilities."],
    ["Image analysis", ": AI interpretation of visual data."],
    ["Advanced memory search", ": High-level retrieval of stored information."],
    ["Learning hub", ": A centralized space for system training and growth."]
  ],
  [
    ["AI employee co-pilot", ": An AI assistant tailored for workplace tasks."],
    ["Company knowledge graph", ": Mapping relationships between internal data."],
    ["Team brain sync", ": Synchronizing information across a collaborative group."],
    ["Task automation", ": Automating repetitive workflows."]
  ],
  [
    ["Robotics SDK", ": Software tools for robot integration."],
    ["Simulation lab", ": A virtual environment for testing."],
    ["RL training engine", ": Reinforcement Learning systems for advanced AI training."],
    ["Vision & motor", ": Combining visual processing with physical movement APIs."]
  ],
  [
    ["Autonomous stack", ": A full suite for independent AI operations."],
    ["Multi-agent orchestration", ": Coordinating multiple AI agents simultaneously."],
    ["Self-improving models", ": AI that refines its own algorithms over time."],
    ["Cross-domain reasoning", ": Applying intelligence across different subjects or industries."]
  ],
  [
    ["Distributed cognitive", ": Intelligence spread across multiple networks."],
    ["Autonomous research", ": AI capable of conducting independent investigations."],
    ["Global knowledge infra", ": Worldwide infrastructure for data and intelligence."],
    ["Foundation intelligence", ": The core, base-level AI layer for all global operations."]
  ]
];

const cut4CubeImage = "/cut4-cube.png";
const cut5PricingGlowImage = "https://www.figma.com/api/mcp/asset/9419f9d3-4748-439c-9964-7de66b192384";
const cut6PrismImage = "https://www.figma.com/api/mcp/asset/1001dda2-8fad-465f-96d8-dae201b0dd28";
const cut6BackgroundGlowImage = "https://www.figma.com/api/mcp/asset/1075d3bb-64ba-4d39-ad14-e695973e6a1e";
const cut6PricingGlowImage = "https://www.figma.com/api/mcp/asset/21e85e8e-69a3-4a46-8458-35998f22255a";
const cut7LaptopImage = "https://www.figma.com/api/mcp/asset/bb8bad99-d1a8-4637-ac36-4fe4cdfd5f64";
const cut7BackgroundGlowImage = "https://www.figma.com/api/mcp/asset/0d2d5c95-b16a-4c80-9b9b-d14c0043e35c";

/** Cut 8 (Innovation Across Every Sector) — CTA control, inlined for single-file homepage. */
const cut8SectorCtaShellStyle = {
  position: "absolute" as const,
  left: "50%",
  top: "calc(69% + 105px)",
  transform: "translate(-50%, -50%)",
  width: "350px",
  maxWidth: "calc(100% - 80px)",
  height: "75px",
  borderRadius: "37.5px",
  border: "1.56px solid #315EFF",
  background: "linear-gradient(90deg, #A9FCFD 0%, #305EFF 44.4%, rgba(17, 14, 33, 0) 100%)",
  overflow: "hidden" as const,
  cursor: "pointer" as const,
  padding: 0,
  margin: 0,
  display: "flex" as const,
  alignItems: "stretch" as const,
  justifyContent: "flex-start" as const,
  boxSizing: "border-box" as const,
  WebkitAppearance: "none" as const,
  appearance: "none" as const
};

const cut8SectorCtaLabelStyle = {
  flex: 1,
  minWidth: 0,
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  color: "#ffffff",
  fontSize: "32.8125px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600 as const,
  lineHeight: 1.1 as const,
  textAlign: "center" as const
};

export default function LandingPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // Dynamic viewport scaling — the design is authored at DESIGN_WIDTH (2014px).
  // On narrower viewports we zoom the content down so nothing is clipped.
  const [pageZoom, setPageZoom] = useState(1);

  const recalcZoom = useCallback(() => {
    const vw = window.innerWidth;
    setPageZoom(vw < DESIGN_WIDTH ? vw / DESIGN_WIDTH : 1);
  }, []);

  useEffect(() => {
    recalcZoom();
    window.addEventListener('resize', recalcZoom);
    return () => window.removeEventListener('resize', recalcZoom);
  }, [recalcZoom]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#000",
        overflowX: "hidden"
      }}
    >
      <main
        id="memora-home"
        style={{
          width: "100%",
          zoom: pageZoom,
          WebkitTextSizeAdjust: "100%",
        } as React.CSSProperties}
      >
      <section style={{ width: "100%", minHeight: "max(100vh, 1320px)", position: "relative", background: "radial-gradient(ellipse 120% 140% at 80% 100%, #0038B8 0%, #000915 38%, #000000 72%)", overflow: "visible" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 108.64% 225.95% at 78.70% 105.33%, rgba(0, 81, 255, 0.55) 0%, rgba(0, 0, 0, 0.9) 59%, #000000 66%)",
            pointerEvents: "none"
          }}
        />
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "2014px", height: "1320px", transform: "translate(calc(-50% + 25px), calc(-50% + 50px))" }}>
        <div
        style={{
          width: "100%",
          height: "1320px",
          left: "-14px",
          top: "-20px",
          position: "absolute",
          background: "radial-gradient(ellipse 108.64% 225.95% at 78.70% 105.33%, #0051FF 0%, black 59%, black 66%)"
        }}
        />

      <div
        style={{
          width: "762px",
          height: "595px",
          left: "1238px",
          top: "330px",
          position: "absolute",
          color: "transparent",
          fontSize: "120px",
          fontFamily: "Raleway, sans-serif",
          fontWeight: 800,
          lineHeight: "110.4px",
          wordWrap: "break-word",
          backgroundImage: "linear-gradient(-89.9deg, rgb(255, 255, 255) 32.651%, rgba(255, 255, 255, 0) 99.932%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text"
        }}
      >
        <span style={{ color: "transparent", fontSize: "120px", fontFamily: "Raleway, sans-serif", fontWeight: 800, lineHeight: "110.4px", wordWrap: "break-word" }}>{"  The "}</span>
        <span style={{ color: "transparent", fontSize: "120px", fontFamily: "Raleway, sans-serif", fontWeight: 800, lineHeight: "110.4px", wordWrap: "break-word" }}>Future</span>
        <span style={{ color: "transparent", fontSize: "120px", fontFamily: "Raleway, sans-serif", fontWeight: 800, lineHeight: "110.4px", wordWrap: "break-word" }}>{"  Runs On"}</span>
        <br />
        <span style={{ color: "transparent", fontSize: "120px", fontFamily: "Raleway, sans-serif", fontWeight: 800, lineHeight: "110.4px", wordWrap: "break-word", marginLeft: "60px" }}>{"   Memory  "}</span>
      </div>

        <img
        style={{ width: "874px", height: "1017px", left: "676px", top: "34px", position: "absolute", objectFit: "cover" }}
        src={heroImage}
        alt="Robot"
        className="animate-float"
        />

        <div style={{ width: "847px", left: "59px", top: "345px", position: "absolute" }}>
        <span style={{ color: "#49A9EE", fontSize: "48px", fontFamily: "'Oxanium', sans-serif", fontWeight: 400, fontStyle: "normal", textTransform: "uppercase", lineHeight: "normal", letterSpacing: "0px", wordWrap: "break-word" }}>
          memora
        </span>
        <span style={{ color: "white", fontSize: "48px", fontFamily: "'Oxanium', sans-serif", fontWeight: 400, fontStyle: "normal", textTransform: "uppercase", lineHeight: "normal", letterSpacing: "0px", wordWrap: "break-word" }}>
          {" "}the core layer of <br />
          future intelligence<br />
        </span>
        </div>

        <div style={{ left: "366px", top: "84px", position: "absolute", display: "inline-flex", alignItems: "center", gap: "47px", color: "white", fontSize: "19.19px", fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "19.19px", wordWrap: "break-word" }}>
        <div className="nav-link" style={{ lineHeight: "19.19px", cursor: "pointer" }} onClick={() => navigate('/')}>Home</div>
        <div className="nav-link" style={{ lineHeight: "19.19px", cursor: "pointer" }}>About</div>
        <div className="nav-link" style={{ lineHeight: "19.19px", cursor: "pointer" }}>Feature</div>
        <div className="nav-link" style={{ lineHeight: "19.19px", cursor: "pointer" }} onClick={() => navigate('/payment')}>Price</div>
        </div>

        {/* CTA Button next to the links */}
        <div style={{ left: "750px", top: "74px", position: "absolute", display: "inline-flex", alignItems: "center" }}>
          <button 
            className="premium-btn animate-glow"
            onClick={() => navigate(currentUser ? '/dashboard' : '/login')}
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              color: "white",
              background: "rgba(73, 169, 238, 0.1)",
              border: "1px solid #49A9EE",
              cursor: "pointer",
              transition: "all 0.3s",
              backdropFilter: "blur(8px)"
            }}
          >
            {currentUser ? 'Dashboard' : 'Login'}
          </button>
        </div>

        <div style={{ width: "286.81px", left: "35px", top: "34px", position: "absolute", display: "inline-flex", alignItems: "center" }}>
        <div style={{ width: "131.09px", height: "117.29px", position: "relative", overflow: "hidden" }}>
          <img
            src={logoShapeImage}
            alt=""
            style={{ position: "absolute", left: "-216.65%", top: "-13.85%", width: "116.48%", height: "142.27%", maxWidth: "none" }}
          />
          <img
            src={logoFillImage}
            alt=""
            style={{ width: "151px", height: "208px", left: "-12.64px", top: "-45.48px", position: "absolute", objectFit: "cover" }}
          />
        </div>
        <div style={{ width: "105.46px", height: "19.71px", textAlign: "center", color: "white", fontSize: "19.71px", fontFamily: "Orbitron, sans-serif", fontWeight: 400, textTransform: "uppercase", wordWrap: "break-word" }}>
          memora<br />
        </div>
        </div>

        <div
        className="animate-fade-in"
        style={{
          width: "770.75px",
          maxWidth: "770.75px",
          padding: "5.91px",
          left: "93px",
          top: "592px",
          position: "absolute",
          borderRadius: "19.71px",
          background: "linear-gradient(270deg, #787878 0.10557%, #FFFFFF 33.369%, #4B4B4B 51.489%, #49A9EE 93.071%)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
        <div style={{ padding: "15.77px", background: "black", borderRadius: "15.77px", display: "flex", flexDirection: "column", gap: "23.65px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}>
          <div
            style={{
              width: "100%",
              minHeight: "44px",
              borderRadius: "8px",
              border: "0.99px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.01)",
              display: "flex",
              alignItems: "center",
              padding: "10px 12px"
            }}
          >
            <input
              aria-label="Chat input"
              placeholder="Type your message..."
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "13.8px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "20.7px"
              }}
            />
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "14.92px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 0", display: "flex", gap: "7.98px", flexWrap: "wrap" }}>
              {["Chat", "Launch Workflow", "Data Analysis"].map((label) => (
                <div
                  key={label}
                  className="premium-btn"
                  style={{
                    padding: "7.88px 11.83px",
                    borderRadius: "7.88px",
                    border: "0.99px rgba(255,255,255,0.08) solid",
                    color: "white",
                    fontSize: "13.8px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    lineHeight: "20.7px",
                    wordWrap: "break-word",
                    background: "rgba(255,255,255,0.01)",
                    backdropFilter: "blur(2.96px)",
                    cursor: "pointer"
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
            <div style={{ width: "67px", borderRadius: "7.88px", background: "linear-gradient(158.785deg, white 28%, white 54%, black 68%, #0098F3 100%)", padding: "0.99px 1.22px 0.99px 0.98px", position: "relative" }}>
              <div style={{ background: "black", borderRadius: "7.88px", textAlign: "center", color: "var(--color-white-solid, white)", fontSize: "13.8px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "20.7px", wordWrap: "break-word", padding: "5.91px 11.83px", position: "relative", zIndex: 2 }}>
                Send
              </div>
              <div style={{ width: "66.76px", height: "12.81px", left: 0, top: "0.99px", position: "absolute", opacity: 0.6, background: "#00BFFB", borderRadius: "48.79px", filter: "blur(4.93px)", zIndex: 1 }} />
            </div>
          </div>
        </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "18%",
            bottom: "-260px",
            transform: "translateX(-50%)",
            width: "1400px",
            height: "620px",
            borderRadius: "9999px",
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(8, 64, 180, 0.45) 0%, rgba(8, 64, 180, 0) 100%)",
            pointerEvents: "none"
          }}
        />
        </div>

      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1397px)", position: "relative", background: "black", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "2014px", height: "1397px", transform: "translate(calc(-50% + 60px), calc(-50% + 100px))" }}>
        <div style={{ width: "1785px", height: "1418px", left: "-666px", top: "-386px", position: "absolute", background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(48.55, 93.66, 255, 0.25) 0%, rgba(48.55, 93.66, 255, 0) 100%)", borderRadius: "9999px" }} />

        <div style={{ width: "826.27px", height: "297.71px", left: "93.95px", top: "451px", position: "absolute", transform: "rotate(5deg)", transformOrigin: "top left", overflow: "hidden", borderRadius: "100px" }}>
          <img src={cut2FrameImage} alt="" style={{ width: "826.27px", height: "297.71px", objectFit: "cover" }} />
        </div>

        <img style={{ width: "522.09px", height: "551.62px", left: "274.55px", top: "217px", position: "absolute", transform: "rotate(5deg)", transformOrigin: "top left" }} src={cut2RectangleImage} alt="Memora avatar" />

        <p
          style={{
            position: "absolute",
            left: "1026px",
            top: "220px",
            width: "685px",
            height: "206px",
            margin: 0,
            color: "white",
            fontSize: "81.59px",
            fontFamily: "Raleway, sans-serif",
            fontWeight: 600,
            lineHeight: "88.93px",
            wordWrap: "break-word"
          }}
        >
          <span style={{ display: "block" }}>Innovating at the</span>
          <span style={{ display: "block", whiteSpace: "nowrap" }}>Edge of Possibility</span>
        </p>

        <div style={{ left: "1027px", top: "426px", position: "absolute", textAlign: "center" }}>
          <span style={{ color: "white", fontSize: "48px", fontFamily: "Oxanium, sans-serif", fontWeight: 400, textTransform: "uppercase", wordWrap: "break-word" }}>who is </span>
          <span style={{ color: "#49A9EE", fontSize: "48px", fontFamily: "Oxanium, sans-serif", fontWeight: 400, textTransform: "uppercase", wordWrap: "break-word" }}>memora</span>
          <span style={{ color: "white", fontSize: "48px", fontFamily: "Oxanium, sans-serif", fontWeight: 400, textTransform: "uppercase", wordWrap: "break-word" }}> !</span>
        </div>

        <div
          style={{
            width: "787px",
            height: "175px",
            left: "1026px",
            top: "503px",
            position: "absolute",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: 0,
            color: "white",
            fontSize: "31px",
            fontFamily: "Albert Sans, sans-serif",
            fontWeight: 200,
            textTransform: "uppercase",
            wordWrap: "break-word"
          }}
        >
          Memora is an intelligent AI system designed to remember, connect, and act on knowledge-so nothing valuable is ever lost
        </div>

        <div
          style={{
            width: "759px",
            position: "absolute",
            left: "1026px",
            top: "681px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: 0,
            color: "white",
            fontSize: "31px",
            fontFamily: "Albert Sans, sans-serif",
            fontWeight: 200,
            textTransform: "capitalize",
            wordWrap: "break-word"
          }}
        >
          In a world where tools forget context and data lives in fragments, Memora brings continuity. It understands information over time, learns from interactions, and transforms scattered knowledge into usable intelligence.
        </div>
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1397px)", position: "relative", background: "transparent", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "2014px", height: "1397px", transform: "translate(-50%, -50%)" }}>
        <div style={{ width: "1785px", height: "1785px", left: "837px", top: "-686px", position: "absolute", background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(48.55, 93.66, 255, 0.25) 0%, rgba(48.55, 93.66, 255, 0) 100%)", borderRadius: "9999px" }} />
        <div style={{ width: "1785px", height: "1785px", left: "-666px", top: "250px", position: "absolute", background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(48.55, 93.66, 255, 0.25) 0%, rgba(48.55, 93.66, 255, 0) 100%)", borderRadius: "9999px", zIndex: 0 }} />

        <img
          src={cut3RoadmapBranchesImage}
          alt=""
          style={{
            position: "absolute",
            left: "-673px",
            top: "448px",
            width: "min(1503px, 78.5vw)",
            height: "auto",
            maxHeight: "1214px",
            objectFit: "contain",
            objectPosition: "left center",
            mixBlendMode: "screen",
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        <div style={{ width: "780px", height: "206px", left: "50%", top: "57px", position: "absolute", transform: "translateX(-50%)", textAlign: "center", color: "white", fontSize: "81.59px", fontFamily: "Raleway, sans-serif", fontWeight: 600, lineHeight: "88.93px", wordWrap: "break-word" }}>
          Smart Systems for a Smarter Tomorrow
        </div>

        <div style={{ width: "1429px", left: "245px", top: "302px", position: "absolute", textAlign: "center" }}>
          <div style={{ whiteSpace: "nowrap", color: "white", fontSize: "40px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "60px" }}>
            Meet <span style={{ color: "#49A9EE" }}>Memora</span>: The Cognitive Evolution Roadmap
          </div>
          <div style={{ whiteSpace: "nowrap", color: "white", fontSize: "40px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "60px" }}>
            From Memory to Autonomy — Navigating the future of intelligence
          </div>
        </div>

        <div
          role="region"
          aria-label="Memora cognitive evolution roadmap stages"
          style={{ position: "absolute", left: "839px", top: "487px", width: "1120px", display: "flex", flexDirection: "column" }}
        >
          {cut3RoadmapGroups.map((group, groupIndex) => {
            const groupSpacingPx = [58, 54, 54, 53, 49, 0][groupIndex] ?? 0;
            const groupUpwardPx = [2, 4, 6, 8, 10, 10][groupIndex] ?? 0;
            return (
              <div
                key={`cut3-roadmap-group-${groupIndex}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transform: `translateY(-${groupUpwardPx}px)`,
                  marginBottom: `${groupSpacingPx}px`
                }}
              >
                {group.map(([bold, rest], lineIndex) => (
                  <p
                    key={`cut3-roadmap-${groupIndex}-${lineIndex}`}
                    style={{
                      ...cut3RoadmapLineStyle,
                      fontSize: groupIndex === 0 ? "20px" : "22px",
                      lineHeight: groupIndex === 0 ? "22px" : "22px"
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{bold}</span>
                    <span style={{ fontWeight: 400 }}>{rest}</span>
                  </p>
                ))}
              </div>
            );
          })}
        </div>


        <img style={{ width: "328.47px", height: "281.37px", left: "2038.48px", top: "298.16px", position: "absolute", transform: "rotate(149deg)", transformOrigin: "top left" }} src={cut3PrismImage} alt="" />
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1500px)", position: "relative", background: "black", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, transform: "translateY(125px)" }}>
        <div
          style={{
            width: "1600px",
            height: "1600px",
            left: "920px",
            top: "80px",
            position: "absolute",
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(90, 126, 255, 0.25) 0%, rgba(90, 126, 255, 0) 100%)",
            borderRadius: "9999px",
            zIndex: 0
          }}
        />

        {[
          { left: "calc(50% - 731px)", top: "204px", body: "linear-gradient(180deg, #16175B 0%, #141225 100%)" },
          { left: "calc(50% - 221px)", top: "204px", body: "linear-gradient(180deg, #15175A 0%, #141225 100%)" },
          { left: "calc(50% + 289px)", top: "204px", body: "linear-gradient(180deg, #15165A 0%, #151326 100%)" },
          { left: "calc(50% - 731px)", top: "646px", body: "linear-gradient(180deg, #16185C 0%, #141225 100%)" },
          { left: "calc(50% - 221px)", top: "646px", body: "linear-gradient(180deg, #15175A 0%, #151326 100%)" },
          { left: "calc(50% + 289px)", top: "646px", body: "linear-gradient(180deg, #16175B 0%, #151326 100%)" }
        ].map((card, idx) => (
          <div
            key={`cut4-card-shell-${idx}`}
            className="glass-card animate-fade-in"
            style={{
              width: "442px",
              height: "367px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
              left: card.left,
              top: card.top,
              position: "absolute",
              borderRadius: "15px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              display: "inline-flex",
              overflow: "hidden"
            }}
          >
            <div style={{ width: "402px", height: "61px", paddingTop: "37px", paddingBottom: "27px", paddingLeft: "33px", paddingRight: "33px", position: "relative", background: "rgba(153, 153, 153, 0)", overflow: "hidden", borderRadius: "15px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", display: "flex" }}>
              <div style={{ width: "402px", height: "61px", left: "0px", top: "0px", position: "absolute", borderRadius: "15px", border: "1px solid #49A9EE", boxSizing: "border-box" }} />
            </div>
            <div style={{ alignSelf: "stretch", height: "262px", padding: "2px", background: card.body, overflow: "hidden", borderRadius: "15px", justifyContent: "center", alignItems: "center", display: "inline-flex" }}>
              <div style={{ width: "534px", height: "468px", padding: "25px", background: "linear-gradient(180deg, rgba(73, 169, 238, 0.1) 0%, rgba(73, 169, 238, 0) 100%)", borderRadius: "15px" }} />
            </div>
          </div>
        ))}

        <div style={{ width: "402px", height: "61px", left: "calc(50% - 711px)", top: "213px", position: "absolute", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center", color: "white", fontSize: "20px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>Phase 0 — Foundation (Free Tier)</div>
        <div style={{ width: "402px", left: "calc(50% - 711px)", top: "292px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>This phase represents the entry layer of Memora.</div>
        <div style={{ width: "402px", left: "calc(50% - 711px)", top: "364px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "16px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>• AI-powered memory capture<br /><br />• Basic decision advisory<br /><br />• Memory timeline (chronological recall)<br /><br />• Limited daily voice interaction (120 seconds)</div>

        <div style={{ width: "402px", height: "61px", left: "calc(50% - 201px)", top: "213px", position: "absolute", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "20px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>
          <span>Phase 1 — Intelligence</span>
          <span>(Advanced Layer)</span>
        </div>
        <div style={{ width: "402px", left: "calc(50% - 201px)", top: "292px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>This phase introduces deeper cognitive capabilities.</div>
        <div style={{ width: "402px", left: "calc(50% - 201px)", top: "359px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "16px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>• Voice agent interaction<br /><br />• Image analysis engine<br /><br />• Advanced memory indexing & search<br /><br />• Structured learning via education hub</div>

        <div style={{ width: "402px", height: "61px", left: "calc(50% + 309px)", top: "213px", position: "absolute", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center", color: "white", fontSize: "20px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>Phase 2 — Collaboration</div>
        <div style={{ width: "402px", left: "calc(50% + 309px)", top: "292px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>AI-powered team collaboration and knowledge synchronization.</div>
        <div style={{ width: "402px", left: "calc(50% + 309px)", top: "359px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "16px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>• AI employee co-pilot<br /><br />• Company knowledge graph<br /><br />• Team brain sync<br /><br />• Task automation agent</div>

        <div style={{ width: "402px", height: "61px", left: "calc(50% - 711px)", top: "655px", position: "absolute", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "20px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>Phase 3 — Systems</div>
        <div style={{ width: "402px", left: "calc(50% - 711px)", top: "742px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>Advanced robotics integration with simulation, RL pipelines, and motor APIs.</div>
        <div style={{ width: "402px", left: "calc(50% - 711px)", top: "809px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "16px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>• Robotics SDK<br /><br />• Simulation lab<br /><br />• RL training engine<br /><br />• Vision & motor planning</div>

        <div style={{ width: "402px", height: "61px", left: "calc(50% - 201px)", top: "655px", position: "absolute", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "20px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>
          <span>Phase 4 — Autonomous</span>
          <span>Intelligence</span>
        </div>
        <div style={{ width: "402px", left: "calc(50% - 201px)", top: "742px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>Infrastructure for multi-agent coordination and self-improving AI.</div>
        <div style={{ width: "402px", left: "calc(50% - 201px)", top: "811px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "16px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>• Autonomous intelligence stack<br /><br />• Multi-agent orchestration<br /><br />• Self-improving models<br /><br />• Cross-domain reasoning systems</div>

        <div style={{ width: "402px", height: "61px", left: "calc(50% + 309px)", top: "655px", position: "absolute", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "20px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>Phase 5 — Global Intelligence</div>
        <div style={{ width: "402px", left: "calc(50% + 309px)", top: "742px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase" }}>A distributed intelligence layer for global autonomous networks.</div>
        <div style={{ width: "402px", left: "calc(50% + 309px)", top: "814px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "16px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "24px" }}>• Distributed cognitive systems<br /><br />• Autonomous research engines<br /><br />• Global knowledge infrastructure<br /><br />• Foundation intelligence layer</div>

        <img style={{ width: "417.74px", height: "425.40px", left: "-165px", top: "110.96px", position: "absolute", transform: "rotate(-38deg)", transformOrigin: "top left", zIndex: -1 }} src={cut4CubeImage} alt="" />
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1200px)", position: "relative", background: "black", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: 0, width: "1920px", height: "100%", transform: "translate(-50%, 100px)" }}>
        <div style={{ width: "1785px", height: "1785px", left: "-611px", top: "-441px", position: "absolute", background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(49, 94, 255, 0.30) 0%, rgba(49, 94, 255, 0) 100%)", borderRadius: "9999px" }} />

        <div style={{ width: "616px", left: "167px", top: "165px", position: "absolute", textTransform: "uppercase", color: "white", fontFamily: "Orienta, sans-serif", fontSize: "56.7px", fontWeight: 400, lineHeight: "76px" }}>
          <span style={{ color: "#6871E1", display: "block", fontSize: "58.4px" }}>Subscription</span>
          <span style={{ display: "block" }}>Phase Economics</span>
        </div>

        {[
          {
            top: "124px",
            phase: "Phase 0",
            price: "$FREE",
            button: "Get started Free",
            bulletWidth: "394px",
            bullets: [
              "AI-powered memory capture",
              "Basic decision advisory",
              "Memory timeline (chronological recall)",
              "Limited daily voice interaction (120 seconds)"
            ]
          },
          {
            top: "390px",
            phase: "Phase 1",
            price: "$14",
            suffix: "/Month",
            button: "Start with Phase 1",
            bulletWidth: "306px",
            bullets: [
              "Voice agent interaction",
              "Image analysis engine",
              "Advanced memory indexing & search",
              "Structured learning via education hub"
            ]
          },
          {
            top: "656px",
            phase: "Phase 2",
            price: "$45",
            suffix: "/Month",
            button: "Start with Phase 2",
            bulletWidth: "306px",
            bullets: [
              "AI employee co-pilot",
              "Company knowledge graph",
              "Team brain sync",
              "Task automation agent"
            ]
          }
        ].map((ticket, index) => (
          <div 
            key={`cut5-ticket-${ticket.phase}`} 
            className="glass-card animate-fade-in"
            style={{ 
              width: "898.06px", 
              left: "960px", 
              top: ticket.top, 
              position: "absolute", 
              display: "flex", 
              alignItems: "center", 
              gap: "9.99px", 
              paddingLeft: "67.03px", 
              boxSizing: "border-box",
              borderRadius: "24px",
              transition: "all 0.4s ease"
            }}
          >
            <div style={{ width: "441px", height: "224px", borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px", background: "radial-gradient(134% 106% at 0% 100%, rgba(22, 24, 101, 0.4) 0%, rgba(22, 22, 70, 0.3) 53%, rgba(21, 19, 38, 0.2) 100%)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 20px", boxSizing: "border-box" }}>
                <div style={{ textAlign: "center", color: "white", fontSize: "40px", fontFamily: "Orienta, sans-serif", fontWeight: 400, lineHeight: "48px", textTransform: "capitalize", marginBottom: "8px" }}>
                  {ticket.phase}
                </div>
                <div style={{ width: "100%", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, lineHeight: "22px", textTransform: "uppercase", textAlign: "center", boxSizing: "border-box" }}>
                  {ticket.bullets.map((item) => (
                    <div key={`${ticket.phase}-${item}`}>• {item}</div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ width: "313px", height: "224px", borderTopRightRadius: "24px", borderBottomRightRadius: "24px", position: "relative", overflow: "hidden", background: "rgba(38, 38, 38, 0.3)" }}>
              <img src={cut5PricingGlowImage} alt="" style={{ width: "414px", height: "293px", left: "-13px", top: "-24px", position: "absolute", objectFit: "cover", opacity: 0.8 }} />
              <div style={{ left: "37px", top: "76px", position: "absolute", color: "#EDEDED", fontFamily: "Inter, sans-serif", fontWeight: 500, letterSpacing: "-2.4px", lineHeight: "72px" }}>
                <span style={{ fontSize: "56px" }}>{ticket.price}</span>
                {ticket.suffix ? <span style={{ fontSize: "32px" }}>{ticket.suffix}</span> : null}
              </div>
              <div
                className="premium-btn"
                onClick={() => navigate('/register')}
                style={{ width: "264px", height: "48px", left: "24px", top: "150px", position: "absolute", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 13px 0 16px", color: "white", fontSize: "16px", fontFamily: "Inter, sans-serif", fontWeight: 400, cursor: "pointer" }}>
                <span>{ticket.button}</span>
                <span style={{ width: "30px", height: "30px", borderRadius: "999px", display: "inline-flex", alignItems: "center", justifyContent: "center", transform: "rotate(-45deg)" }}>↑</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1040px)", position: "relative", background: "black", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "40px", width: "1920px", height: "963px", transform: "translateX(-50%)" }}>
          <div style={{ width: "1785px", height: "1785px", left: "863px", top: "-375px", position: "absolute", borderRadius: "9999px", overflow: "hidden" }}>
            <img src={cut6BackgroundGlowImage} alt="" style={{ width: "1785px", height: "1785px", objectFit: "cover", opacity: 0.85 }} />
          </div>

          <img
            src={cut6PrismImage}
            alt=""
            style={{ width: "341.25px", height: "367.5px", left: "1810px", top: "262px", position: "absolute", transform: "rotate(149deg)", transformOrigin: "top left" }}
          />

          {[
            {
              top: "110px",
              phase: "Phase 3",
              price: "$500",
              suffix: "/Month",
              button: "Start with Phase 3",
              bullets: ["Robotics sdk", "Simulation lab", "RL training engine", "Vision & motor planning"]
            },
            {
              top: "379px",
              phase: "Phase 4",
              price: "$3500",
              suffix: "/Month",
              button: "Start with Phase 4",
              bullets: ["Autonomous intelligence stack", "Multi-agent orchestration", "Self- improving models", "Cross- domain reasoning systems"]
            },
            {
              top: "648px",
              phase: "Phase 5",
              price: "Contract",
              button: "Start with Phase 5",
              bullets: ["Distributed cognitive systems", "Autonomous research engines", "Global knowledge infrastructure", "Foundation intelligence layer"]
            }
          ].map((ticket) => (
            <div key={`cut6-ticket-${ticket.phase}`} style={{ width: "898.06px", left: "46px", top: ticket.top, position: "absolute", display: "flex", alignItems: "center", gap: "9.99px", paddingLeft: "67.03px", boxSizing: "border-box" }}>
              <div style={{ width: "441px", height: "224px", borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px", background: "radial-gradient(134% 106% at 0% 100%, #161865 0%, #161646 53%, #151326 100%)", border: "1px solid rgba(255,255,255,0.12)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 24px", boxSizing: "border-box" }}>
                  <div style={{ textAlign: "center", color: "white", fontSize: "42px", fontFamily: "Orienta, sans-serif", fontWeight: 400, lineHeight: "50px", textTransform: "capitalize", marginBottom: "8px" }}>
                    {ticket.phase}
                  </div>
                  <div style={{ width: "100%", color: "white", fontSize: "15px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, lineHeight: "22px", textTransform: "uppercase", textAlign: "center", boxSizing: "border-box" }}>
                    {ticket.bullets.map((item) => (
                      <div key={`${ticket.phase}-${item}`}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ width: "313px", height: "224px", borderTopRightRadius: "24px", borderBottomRightRadius: "24px", border: "1px solid rgba(255,255,255,0.12)", position: "relative", overflow: "hidden", background: "rgba(38, 38, 38, 0.4)" }}>
                <img src={cut6PricingGlowImage} alt="" style={{ width: "414px", height: "293px", left: "-13px", top: "0px", position: "absolute", objectFit: "cover", opacity: 0.8 }} />
                <div style={{ left: "37px", top: ticket.phase === "Phase 5" ? "76px" : "58px", position: "absolute", color: "#EDEDED", fontFamily: "Inter, sans-serif", fontWeight: 500, letterSpacing: "-2.4px", lineHeight: "72px" }}>
                  {ticket.phase === "Phase 5" ? (
                    <span style={{ fontSize: "55.8px" }}>{ticket.price}</span>
                  ) : (
                    <>
                      <span style={{ fontSize: "55.8px" }}>{ticket.price}/</span>
                      <span style={{ fontSize: "24px" }}>{ticket.suffix?.replace("/", "")}</span>
                    </>
                  )}
                </div>
                <div
                  className="premium-btn"
                  onClick={() => navigate('/register')}
                  style={{ width: "264px", height: "48px", left: "24px", top: "150px", position: "absolute", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 13px 0 16px", color: "white", fontSize: "16px", fontFamily: "Inter, sans-serif", fontWeight: 400, cursor: "pointer" }}>
                  <span>{ticket.button}</span>
                  <span style={{ width: "30px", height: "30px", borderRadius: "999px", display: "inline-flex", alignItems: "center", justifyContent: "center", transform: "rotate(-45deg)" }}>↑</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1535px)", position: "relative", background: "black", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "-125px", width: "1920px", height: "1535px", transform: "translateX(calc(-50% + 75px))" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
            <div data-layer="cut7-header" style={{ position: "absolute", inset: 0 }}>
              <img src={cut7LaptopImage} alt="" style={{ width: "871px", height: "537px", left: "-441px", top: "-26px", position: "absolute", objectFit: "cover" }} />
              <div style={{ width: "594px", height: "45px", left: "188px", top: "254px", position: "absolute" }}>
                <span style={{ color: "white", fontSize: "48px", fontFamily: "Orienta, sans-serif", fontWeight: 400, lineHeight: "21px", wordWrap: "break-word" }}>The Vision of </span>
                <span style={{ color: "#0098F3", fontSize: "48px", fontFamily: "Orienta, sans-serif", fontWeight: 400, lineHeight: "21px", wordWrap: "break-word" }}>Memora</span>
              </div>
            </div>

            <div data-layer="cut7-introduction" style={{ position: "absolute", inset: 0 }}>
              <div style={{ width: "1127px", left: "297px", top: "355px", position: "absolute", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "36px", fontFamily: "Albert Sans, sans-serif", fontWeight: 300, lineHeight: "47px", wordWrap: "break-word" }}>
                Memora envisions a future where intelligence never forgets.
                <br />
                We believe true intelligence is built over time-through memory, context, and continuity. Memora exists to become the persistent intelligence layer that captures knowledge, connects understanding, and compounds insight across people, systems, and machines.
              </div>
            </div>

            <div style={{ position: "absolute", inset: 0, transform: "translateX(75px)" }}>
              <div data-layer="cut7-content" style={{ position: "absolute", inset: 0, transform: "translateY(-85px)" }}>
              <div data-layer="cut7-our-host" style={{ maxWidth: "660px", minWidth: "660px", left: "138px", top: "809px", position: "absolute", overflow: "visible", paddingBottom: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", display: "inline-flex" }}>
            <div style={{ alignSelf: "stretch", overflow: "visible", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "32px", display: "flex" }}>
              <div style={{ width: "100%", maxWidth: "820px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }}>
                <div style={{ alignSelf: "stretch", height: "240px", position: "relative" }}>
                  <div style={{ width: "238px", height: "72px", left: "130.55px", top: "144px", position: "absolute", boxShadow: "0px 0px 0px", filter: "blur(0px)" }} />
                  <div style={{ left: "0px", top: "51px", position: "absolute", justifyContent: "flex-end", display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "white", fontSize: "52.8px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "capitalize", wordWrap: "break-word" }}>
                      Meet Our Hosts: the <br />
                      visionaries behind{" "}
                    </span>
                    <span style={{ color: "#0098F3", fontSize: "52.8px", fontFamily: "Orienta, sans-serif", fontWeight: 400, textTransform: "capitalize", wordWrap: "break-word" }}>memora</span>
                  </div>
                  <div style={{ width: "174px", left: "0px", top: "0px", position: "absolute", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex" }}>
                    <div style={{ alignSelf: "stretch", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "19.8px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "27.72px", wordWrap: "break-word" }}>Our Host</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }}>
              <div style={{ alignSelf: "stretch", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }}>
                <div style={{ alignSelf: "stretch", justifyContent: "center", display: "flex", flexDirection: "column", color: "#EDEDED", fontSize: "19.2px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, lineHeight: "28.8px", wordWrap: "break-word", transform: "translateY(10px)" }}>
                  Memora is built by a focused team of thinkers, builders, and designers united by one goal-creating intelligence that remembers..
                </div>
              </div>
            </div>
          </div>
              </div>

              <div data-layer="cut7-user-cards" style={{ position: "absolute", inset: 0, transform: "translate(-130px, -195px) scale(1.1)", transformOrigin: "top left" }}>
          <div style={{ width: "571px", left: "966px", top: "821px", position: "absolute", justifyContent: "flex-start", alignItems: "flex-start", gap: "13px", display: "inline-flex", flexWrap: "wrap", alignContent: "flex-start" }}>
            <div className="glass-card" style={{ width: "279px", height: "188px", padding: "1px", background: "linear-gradient(180deg, #1B1F2F 0%, rgba(27, 31, 47, 0.30) 100%)", overflow: "hidden", borderRadius: "16px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex" }}>
              <div style={{ alignSelf: "stretch", height: "187px", position: "relative", background: "#070B15", borderRadius: "16px", display: "flex", flexDirection: "column", justifyContent: "center" }} />
            </div>
            <div className="glass-card" style={{ width: "279px", height: "188px", position: "relative", background: "linear-gradient(180deg, #1B1F2F 0%, rgba(27, 31, 47, 0.30) 100%)", overflow: "hidden", borderRadius: "16px" }}>
              <div style={{ width: "277px", height: "187px", paddingTop: "40px", paddingLeft: "40px", left: "1px", top: "1px", position: "absolute", background: "#070B15", borderRadius: "16px" }} />
              <div style={{ position: "absolute", left: "17px", right: "17px", top: "18px", bottom: "18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                <div style={{ color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "18.4px", wordWrap: "break-word" }}>Vishwanath</div>
                <div style={{ color: "white", fontSize: "14px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "uppercase", lineHeight: "18.4px", wordWrap: "break-word" }}>CEO &amp; Director</div>
                <div style={{ color: "white", fontSize: "15px", fontFamily: "Albert Sans, sans-serif", fontWeight: 200, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>
                  Leads execution, strategy, and growth. Responsible for turning vision into scalable systems, market traction, and long-term organizational momentum.
                </div>
              </div>
            </div>
            <div className="glass-card" style={{ width: "279px", height: "188px", padding: "1px", background: "linear-gradient(180deg, #1B1F2F 0%, rgba(27, 31, 47, 0.30) 100%)", overflow: "hidden", borderRadius: "16px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex" }}>
              <div style={{ alignSelf: "stretch", height: "187px", position: "relative", background: "#070B15", borderRadius: "16px" }}>
                <div style={{ width: "250px", left: "24px", top: "18px", bottom: "18px", position: "absolute", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "13px", display: "inline-flex" }}>
                  <div style={{ alignSelf: "stretch", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 500, textTransform: "uppercase", lineHeight: "18.4px", wordWrap: "break-word" }}>Nandish s</div>
                  <div style={{ alignSelf: "stretch", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "14px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>Visual Systems</div>
                  <div style={{ alignSelf: "stretch", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "15px", fontFamily: "Albert Sans, sans-serif", fontWeight: 200, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>
                    Defines Memora&rsquo;s visual language, interface systems, and brand identity. Translates complex intelligence into clarity, trust, and elegance.
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card" style={{ width: "279px", height: "188px", padding: "1px", background: "linear-gradient(180deg, #1B1F2F 0%, rgba(27, 31, 47, 0.30) 100%)", overflow: "hidden", borderRadius: "16px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex" }}>
              <div style={{ alignSelf: "stretch", height: "187px", position: "relative", background: "#070B15", borderRadius: "16px" }}>
                <div style={{ position: "absolute", left: "19px", right: "19px", top: "18px", bottom: "18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                  <div style={{ color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 500, textTransform: "uppercase", lineHeight: "18.4px", wordWrap: "break-word" }}>Ajay S</div>
                  <div style={{ color: "white", fontSize: "14px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>Ai Engineer.</div>
                  <div style={{ color: "white", fontSize: "15px", fontFamily: "Albert Sans, sans-serif", fontWeight: 200, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>
                    Builds And Scales Memora&rsquo;s Backend Infrastructure. Focus On Intelligence Workflows, Ensures Performance, Reliability and System Integrity At Every Layer.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "230px", left: "991px", top: "849px", position: "absolute", transform: "translateY(-20px)", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "10px", display: "inline-flex" }}>
            <div style={{ alignSelf: "stretch", height: "22px", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 400, lineHeight: "57.96px", wordWrap: "break-word" }}>CHANDAN</div>
            <div style={{ alignSelf: "stretch", height: "14px", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "14px", fontFamily: "Albert Sans, sans-serif", fontWeight: 300, lineHeight: "57.96px", wordWrap: "break-word" }}>Founder</div>
            <div style={{ width: "249px", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "15px", fontFamily: "Albert Sans, sans-serif", fontWeight: 200, lineHeight: "18.4px", wordWrap: "break-word" }}>
              Visionary behind Memora&rsquo;s architecture and long-term intelligence roadmap. Drives product philosophy, system design, and the foundation of memory-first AI.
            </div>
          </div>

          <div style={{ left: "1275px", top: "926px", position: "absolute", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex" }}>
            <div style={{ width: "245px", height: "16px" }} />
          </div>

          <div style={{ width: "277px", height: "187px", left: "1121px", top: "1225px", position: "absolute", background: "#070B15", borderRadius: "16px" }}>
            <div style={{ position: "absolute", left: "19px", right: "19px", top: "18px", bottom: "18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
              <div style={{ color: "white", fontSize: "18px", fontFamily: "Albert Sans, sans-serif", fontWeight: 500, textTransform: "uppercase", lineHeight: "18.4px", wordWrap: "break-word" }}>Madan R</div>
              <div style={{ color: "white", fontSize: "14px", fontFamily: "Albert Sans, sans-serif", fontWeight: 300, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>Ai Engineer.</div>
              <div style={{ color: "white", fontSize: "15px", fontFamily: "Albert Sans, sans-serif", fontWeight: 200, textTransform: "capitalize", lineHeight: "18.4px", wordWrap: "break-word" }}>
                Develops Core Features, along with AI and code integrations. Focused On System Adaptability, Privacy, Security And Continuous Capability Expansion.
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1785px",
              height: "1785px",
              left: "2273px",
              top: "1010px",
              position: "absolute",
              zIndex: 0,
              borderRadius: "9999px",
              overflow: "hidden",
              opacity: 0.9,
              pointerEvents: "none",
              backgroundImage: `url(${cut7BackgroundGlowImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div
            style={{
              width: "1785px",
              height: "1785px",
              left: "42px",
              top: "57px",
              position: "absolute",
              zIndex: 0,
              borderRadius: "9999px",
              overflow: "hidden",
              opacity: 0.9,
              pointerEvents: "none",
              backgroundImage: `url(${cut7BackgroundGlowImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1397px)", position: "relative", background: "#000000", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "2014px", height: "1397px", transform: "translate(-50%, -50%)" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "calc(56% - 30px)",
              transform: "translate(-50%, -50%)",
              width: "2080px",
              height: "1170px",
              borderRadius: "9999px",
              background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(147, 240, 255, 0.88) 0%, rgba(82, 198, 255, 0.55) 30%, rgba(26, 89, 224, 0.36) 58%, rgba(8, 22, 71, 0.18) 76%, rgba(0, 0, 0, 0) 100%)",
              filter: "blur(1px)",
              pointerEvents: "none"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "calc(56% - 30px)",
              transform: "translate(-50%, -50%)",
              width: "2405px",
              height: "1404px",
              borderRadius: "9999px",
              background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(34, 95, 255, 0.42) 0%, rgba(22, 66, 194, 0.28) 45%, rgba(8, 20, 67, 0.18) 62%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none"
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "140px",
              top: "118px",
              color: "white",
              fontSize: "80.64px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              lineHeight: "1.08",
              letterSpacing: "-0.02em",
              textAlign: "left",
              textTransform: "capitalize",
              wordWrap: "break-word"
            }}
          >
            Innovation Across
            <br />
            Every Sector
          </div>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "calc(54% - 30px)",
              transform: "translate(-50%, -50%)",
              width: "1220px",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.52)",
              fontSize: "96.2px",
              fontFamily: "Albert Sans, sans-serif",
              fontWeight: 700,
              lineHeight: "1.06",
              letterSpacing: "-0.02em",
              wordWrap: "break-word"
            }}
          >
            From memory to
            <br />
            intelligence - evolving
            <br />
            with you at every phase.
          </div>

          <button 
            type="button" 
            data-layer="cut8-sector-cta" 
            style={{...cut8SectorCtaShellStyle, background: 'rgba(49, 169, 238, 0.2)', transition: 'all 0.3s ease'}} 
            className="premium-btn animate-glow"
            onMouseOver={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
          >
            <span data-layer="cut8-sector-cta-label" style={cut8SectorCtaLabelStyle}>
              Learn More
            </span>
          </button>
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(100vh, 1397px)", position: "relative", background: "#00030D", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "2014px", height: "1397px", transform: "translate(-50%, -50%)" }}>
          <div
            data-layer="cut9-background-glow"
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 100.8% 115.2% at calc(50% - 525px) 50%, rgba(22, 67, 209, 0.34) 0%, rgba(6, 25, 84, 0.26) 40%, rgba(0, 3, 13, 0) 100%)"
            }}
          />

          <div data-layer="cut9-left" style={{ position: "absolute", left: "305px", top: "430px", width: "610px", transform: "scale(1.21)", transformOrigin: "top left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(215, 226, 255, 0.72)", fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "999px", border: "1px solid rgba(215, 226, 255, 0.6)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", lineHeight: 1 }}>✓</span>
              <span>Data and Privacy</span>
            </div>

            <div style={{ width: "100%", height: "1px", marginTop: "14px", marginBottom: "26px", background: "linear-gradient(90deg, rgba(168, 195, 255, 0.45) 0%, rgba(168, 195, 255, 0) 100%)" }} />

            <div style={{ color: "#D8E5FF", fontSize: "64px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "1.02", letterSpacing: "-0.02em" }}>
              Multi-Layer Security
            </div>

            <div style={{ width: "560px", marginTop: "24px", color: "rgba(214, 227, 255, 0.62)", fontSize: "20px", fontFamily: "Albert Sans, sans-serif", fontWeight: 300, lineHeight: "1.55" }}>
              Protect your data with multi-layered AI security. From data encryption to behavior monitoring, every layer works together.
            </div>

            <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px", width: "560px" }}>
              {["Intelligent Protection", "Real-Time Threat Detection", "Seamless Compliance"].map((label, idx) => (
                <div
                  key={`cut9-item-${label}`}
                  className="glass-card animate-fade-in"
                  style={{
                    height: "56px",
                    borderRadius: "14px",
                    border: "1px solid rgba(124, 157, 232, 0.28)",
                    background: "linear-gradient(180deg, rgba(10, 20, 54, 0.42) 0%, rgba(7, 16, 41, 0.2) 100%)",
                    boxShadow: "inset 0 1px 0 rgba(182, 206, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 18px",
                    gap: "12px",
                    color: "rgba(228, 238, 255, 0.92)",
                    fontSize: "20px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    transition: "all 0.3s ease"
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      border: "1px solid rgba(185, 208, 255, 0.65)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(218, 232, 255, 0.9)",
                      fontSize: idx === 1 || idx === 2 ? "14.4px" : "12px",
                      lineHeight: 1
                    }}
                  >
                    {idx === 0 ? (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 3.1L14 5.1L12 7.1L10 5.1L12 3.1Z" fill="currentColor" />
                        <path d="M12 16.9L14 18.9L12 20.9L10 18.9L12 16.9Z" fill="currentColor" />
                        <path d="M3.1 12L5.1 10L7.1 12L5.1 14L3.1 12Z" fill="currentColor" />
                        <path d="M16.9 12L18.9 10L20.9 12L18.9 14L16.9 12Z" fill="currentColor" />
                        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
                      </svg>
                    ) : idx === 1 ? (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 3L18 5.3V10.7C18 15 15.3 18.3 12 20.2C8.7 18.3 6 15 6 10.7V5.3L12 3Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M9.1 11.8L11 13.7L14.9 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M3.5 9.2H20.5" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M7.2 13.1H10.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-layer="cut9-right" style={{ position: "absolute", left: "1100px", top: "527px", width: "620px", height: "620px", transform: "scaleX(-1)", transformOrigin: "center" }}>
            <div style={{ position: "absolute", left: "70px", top: "100px", width: "500px", height: "320px", borderRadius: "26px", background: "radial-gradient(circle at 35% 35%, rgba(255, 198, 116, 0.86) 0%, rgba(98, 160, 255, 0.5) 44%, rgba(6, 11, 29, 0.95) 100%)", filter: "blur(26px)", opacity: 0.6 }} />

            {[
              {
                left: "24px",
                top: "24px",
                w: "220px",
                h: "408px",
                o: 0.88,
                bg: "radial-gradient(115% 120% at 70% 52%, rgba(93, 160, 249, 0.58) 0%, rgba(32, 85, 191, 0.62) 45%, rgba(6, 18, 63, 0.94) 100%)"
              },
              {
                left: "148px",
                top: "8px",
                w: "220px",
                h: "418px",
                o: 0.84,
                bg: "radial-gradient(115% 120% at 62% 56%, rgba(106, 174, 255, 0.72) 0%, rgba(68, 138, 232, 0.66) 42%, rgba(8, 24, 73, 0.93) 100%)"
              },
              {
                left: "268px",
                top: "26px",
                w: "220px",
                h: "405px",
                o: 0.82,
                bg: "radial-gradient(115% 120% at 42% 58%, rgba(255, 194, 103, 0.72) 0%, rgba(243, 166, 63, 0.66) 48%, rgba(86, 130, 207, 0.44) 76%, rgba(8, 22, 69, 0.9) 100%)"
              },
              {
                left: "388px",
                top: "8px",
                w: "220px",
                h: "418px",
                o: 0.8,
                bg: "radial-gradient(115% 120% at 34% 60%, rgba(242, 153, 38, 0.88) 0%, rgba(214, 126, 25, 0.78) 36%, rgba(86, 117, 183, 0.42) 70%, rgba(8, 21, 68, 0.9) 100%)"
              }
            ].map((panel, i) => (
              <div
                key={`cut9-panel-${i}`}
                style={{
                  position: "absolute",
                  left: panel.left,
                  top: panel.top,
                  width: panel.w,
                  height: panel.h,
                  background: panel.bg,
                  opacity: panel.o,
                  mixBlendMode: "screen",
                  transform: "skewY(-14deg)",
                  transformOrigin: "left center",
                  filter: "drop-shadow(0 30px 80px rgba(0, 0, 0, 0.52))"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", minHeight: "max(52.5vh, 734px)", position: "relative", background: "#060B22", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "2014px", height: "734px", transform: "translate(-50%, -50%)" }}>
          <div
            data-layer="cut10-background-glow"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 210% 150% at 44% calc(95% - 200px), rgba(119, 194, 204, 0.525) 0%, rgba(64, 122, 204, 0.35) 40%, rgba(34, 61, 168, 0.238) 60%, rgba(6, 11, 31, 0) 100%)"
            }}
          />

          <div data-layer="cut10-foreground" style={{ position: "absolute", inset: 0, filter: "brightness(1.5)" }}>
          <div data-layer="cut10-brand" style={{ position: "absolute", left: "56px", top: "48px", display: "inline-flex", alignItems: "center", gap: "14px" }}>
            <div
              data-layer="cut10-brand-icon"
              role="img"
              aria-label="Memora"
              style={
                {
                  width: "265px",
                  height: "265px",
                  marginLeft: "-55px",
                  transform: "translateY(-90px)",
                  flexShrink: 0,
                  borderRadius: "31px",
                  backgroundColor: "#ffffff",
                  WebkitMaskImage: "url(/cut10-memora-mark.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSourceType: "luminance",
                  maskImage: "url(/cut10-memora-mark.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskMode: "luminance",
                } as React.CSSProperties
              }
            />
            <div data-layer="cut10-brand-text" style={{ color: "white", fontSize: "19.71px", fontFamily: "Orbitron, sans-serif", fontWeight: 400, textTransform: "uppercase", wordWrap: "break-word", lineHeight: "normal", marginLeft: "-50px", transform: "translateY(-75px)" }}>
              memora
              <br />
            </div>
          </div>

          <div
            data-layer="cut10-headline"
            style={{
              position: "absolute",
              left: "110px",
              top: "218px",
              fontSize: "100px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              lineHeight: "0.92",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 52%, rgba(255,255,255,0.825) 72%, rgba(255,255,255,0.18) 88%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Memora
            <br />
            The
            <br />
            Future
          </div>

          <div data-layer="cut10-right-panel" style={{ position: "absolute", right: "84px", top: "58px", width: "840px" }}>
            <div data-layer="cut10-subscribe-row" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div data-layer="cut10-email-icon" style={{ width: "42px", height: "42px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.52)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "18px" }}>
                ✉
              </div>
              <div data-layer="cut10-email-input" style={{ flex: 1, height: "52px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.52)", display: "flex", alignItems: "center", padding: "0 24px", color: "rgba(255,255,255,1)", fontSize: "24px", fontFamily: "Inter, sans-serif", fontWeight: 300, justifyContent: "space-between" }}>
                <span data-layer="cut10-email-placeholder">Enter Your Email...</span>
                <span data-layer="cut10-email-submit" style={{ color: "rgba(255,255,255,1)" }}>▷</span>
              </div>
            </div>

            <div data-layer="cut10-divider" style={{ width: "100%", height: "1px", marginTop: "34px", background: "rgba(255,255,255,0.45)" }} />

            <div data-layer="cut10-links-row" style={{ marginTop: "34px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", columnGap: "58px" }}>
              <div data-layer="cut10-quick-links">
                <div data-layer="cut10-quick-links-title" style={{ color: "white", fontSize: "26px", fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: "18px" }}>Quick links</div>
                <div data-layer="cut10-quick-links-items" style={{ color: "rgba(255,255,255,0.8)", fontSize: "24px", fontFamily: "Inter, sans-serif", fontWeight: 300, lineHeight: "1.8", display: "flex", flexDirection: "column" }}>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>About</span>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>Service</span>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>Benefits</span>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }} onClick={() => navigate('/payment')}>Pricing</span>
                </div>
              </div>
              <div data-layer="cut10-payment">
                <div data-layer="cut10-payment-title" style={{ color: "white", fontSize: "26px", fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: "18px" }}>Payment</div>
                <div data-layer="cut10-payment-items" style={{ color: "rgba(255,255,255,0.8)", fontSize: "24px", fontFamily: "Inter, sans-serif", fontWeight: 300, lineHeight: "1.8", display: "flex", flexDirection: "column" }}>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>Bank</span>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>Paypal</span>
                </div>
              </div>
              <div data-layer="cut10-follow-us">
                <div data-layer="cut10-follow-us-title" style={{ color: "white", fontSize: "26px", fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: "18px" }}>Follow Us</div>
                <div data-layer="cut10-follow-us-items" style={{ color: "rgba(255,255,255,0.8)", fontSize: "24px", fontFamily: "Inter, sans-serif", fontWeight: 300, lineHeight: "1.8", display: "flex", flexDirection: "column" }}>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>Instagram</span>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>Facebook</span>
                  <span className="nav-link" style={{ cursor: "pointer", width: "fit-content" }}>X</span>
                </div>
              </div>
            </div>

            <div data-layer="cut10-contact-row" style={{ marginTop: "26px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", columnGap: "58px" }}>
              <div data-layer="cut10-contact">
                <div data-layer="cut10-contact-title" style={{ color: "white", fontSize: "26px", fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: "10px" }}>Contact</div>
                <div data-layer="cut10-contact-items" style={{ color: "rgba(255,255,255,1)", fontSize: "24px", fontFamily: "Inter, sans-serif", fontWeight: 300, lineHeight: "1.8" }}>Office</div>
              </div>
              <div />
              <div data-layer="cut10-phone">
                <div data-layer="cut10-phone-title" style={{ color: "white", fontSize: "26px", fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: "10px" }}>Phone Number</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
