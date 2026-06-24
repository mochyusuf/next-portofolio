'use client'

import Image from "next/image";
import Aurora from "./components/Aurora/Aurora";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-neutral-50 via-slate-50/80 to-zinc-50/90 selection:bg-neutral-200/40">
      {/* Aurora Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <Aurora
          colorStops={["#ffe2e2","#d0e5ff","#ddecff"]}
          blend={1.2}
          amplitude={0}
          speed={0.2}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <AnimatedContent 
              distance={30}
              direction="horizontal"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-800 to-rose-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">MY</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">Mochamad Yusuf</span>
              </div>
            </AnimatedContent>
            
            <AnimatedContent 
              distance={30}
              direction="horizontal"
              reverse={true}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="hidden md:flex items-center gap-8">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Let's Talk
                </button>
              </div>
            </AnimatedContent>

            <button className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="home" className="relative z-10 container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[calc(100vh-160px)] items-center">

          {/* Left Content */}
          <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Decorative Background */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-neutral-500/5 to-slate-500/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-zinc-500/5 to-neutral-500/5 rounded-full blur-lg"></div>
              
              {/* TiltedCard */}
              <div className="w-[250px] h-auto scale-75 lg:scale-90">
                <TiltedCard
                  imageSrc="assets/titled-card/Foto_1_x_1.jpg"
                  altText="Mochamad Yusuf - Programmer"
                  captionText="Mochamad Yusuf - Programmer"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="flex flex-col gap-8 max-w-4xl">
              {/* Status Badge */}
              <AnimatedContent 
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200/60 text-neutral-700 font-medium w-fit shadow-lg">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-sm"></div>
                  Available for opportunities
                </div>
              </AnimatedContent>

              {/* Main Heading */}
              <AnimatedContent 
                distance={120}
                direction="vertical"
                reverse={false}
                initialOpacity={0.3}
                animateOpacity
                scale={1.01}
                threshold={0.2}
              >
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-neutral-800 via-slate-700 to-neutral-600 bg-clip-text text-transparent">
                      Hello I'am Mochamad Yusuf
                    </span>
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <RotatingText
                      texts={['Programmer', 'Full-Stack Developer', 'Mobile Developer']}
                      mainClassName="px-8 py-4 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-2xl text-3xl lg:text-4xl font-bold inline-flex transition-all shadow-2xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-[1.02] border border-white/10"
                      staggerFrom={"center"}
                      initial={{ y: "120%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.03}
                      splitLevelClassName="overflow-hidden pb-1"
                      transition={{ type: "spring", damping: 35, stiffness: 500 }}
                      rotationInterval={4000}
                    />
                  </div>
                </div>
              </AnimatedContent>

              {/* Description */}
              <div className="max-w-3xl">
                <BlurText
                  text="My name is Mochamad Yusuf, a graduate of Kuningan University. I have experience as a programmer at ASTEX Solution from 2018 to 2020, creating MLM websites, 10x query optimization, and MLM mobile applications. I am currently a freelance programmer working on the SPMB website for SMK Muhamadiyyah 2 Kuningan and a tracer study for ​​University Siber Syekh Nurjati."
                  delay={80}
                  animateBy="words"
                  direction="top"
                  className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-black"
                />
              </div>

              {/* CTA Buttons */}
              <AnimatedContent 
                distance={80}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                threshold={0.3}
              >
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-10 py-5 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-2xl font-semibold shadow-2xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-zinc-700 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Explore My Journey</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <button className="px-10 py-5 border-2 border-neutral-300 text-neutral-700 rounded-2xl font-semibold hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all duration-300 backdrop-blur-sm bg-white/60">
                    Download Resume
                  </button>
                </div>
              </AnimatedContent>

              {/* Social Media */}
              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="flex gap-4 pt-4">
                  {[
                    { 
                      name: 'GitHub', 
                      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                      color: 'hover:bg-neutral-800'
                    },
                    { 
                      name: 'LinkedIn', 
                      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                      color: 'hover:bg-blue-600'
                    },
                    { 
                      name: 'Instagram', 
                      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                      color: 'hover:bg-rose-500'
                    },
                    { 
                      name: 'Email', 
                      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      color: 'hover:bg-emerald-600'
                    }
                  ].map((social, index) => (
                    <a 
                      key={social.name}
                      href="#" 
                      className={`group w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-white/60 ${social.color} hover:text-white`}
                      title={social.name}
                    >
                      <svg className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}/>
                      </svg>
                    </a>
                  ))}
                </div>
              </AnimatedContent>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <AnimatedContent 
            distance={80}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">Featured Projects</h2>
            </div>
          </AnimatedContent>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Portfolio Website",
                  description: "Modern, responsive portfolio with smooth animations, 3D object, and interactive components showcasing contemporary web development.",
                  tech: ["Next.js", "Three.js", "Framer Motion", "CSS3"],
                  status: "Live",
                  statusColor: "bg-green-100 text-green-800 border-green-200",
                  type: "Personal Project"
                },
                {
                  title: "Congklak Game",
                  description: "Traditional congklak game mobile with 2D graphic, simple gameplay created using Unity Game Engine.",
                  tech: ["2D game", "Simple gameplay", "Unity Game Engine", "Android"],
                  status: "Completed",
                  statusColor: "bg-amber-100 text-amber-800 border-amber-200",
                  type: "Mobile Game"
                }
              ].map((project, index) => (
                <AnimatedContent 
                  key={index}
                  distance={60}
                  direction="vertical"
                  reverse={false}
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.4}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.statusColor}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 duration-300">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                        <button className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 duration-300">
                          <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <AnimatedContent 
            distance={80}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">Let's Connect</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Ready to collaborate or just want to say hello?
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-slate-800">Get in Touch</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    I'm always open to new opportunities, projects, or just chat about technology.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: "Email",
                        content: "mochyusuf100@gmail.com",
                        color: "from-red-500 to-rose-500"
                      },
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        title: "Location",
                        content: "Kuningan, Indonesia",
                        color: "from-violet-500 to-purple-500"
                      },
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        ),
                        title: "LinkedIn",
                        content: "/in/mocha-yusuf",
                        color: "from-blue-600 to-blue-700"
                      },
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        ),
                        title: "Phone",
                        content: "+6285221120369",
                        color: "from-stone-600 to-mist-800"
                      }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group">
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{contact.title}</h4>
                          <p className="text-slate-600">{contact.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContent>

              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={true}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm"
                        placeholder="Tell me about your project or just say hello!"
                      ></textarea>
                    </div>
                    
                    <button className="w-full px-8 py-4 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-xl font-semibold shadow-xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">MY</span>
              </div>
              <span className="text-xl font-bold">Mochamad Yusuf</span>
            </div>
            
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/mochyusuf",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/mocha-yusuf/",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                {
                  name: "Email",
                  href: "mailto:mochyusuf100@gmail.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  name: "Telp",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  href: "tel:+6285221120369"
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}  
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-300">© {currentYear} Mochamad Yusuf</p>
              <p className="text-slate-400 text-sm">Created using React & Next.js</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Simplified Background Elements & Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Reduced Animated Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-slate-500/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-zinc-500/10 rounded-full animate-pulse delay-500"></div>
        
        {/* Lighter Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-neutral-500/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-slate-500/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-red-400 to-red-800 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
