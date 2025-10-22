import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding w-full overflow-x-hidden">
        <div className="container-custom w-full max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-full overflow-hidden">
            {/* Hero Text */}
            <div className="order-1 lg:order-1">
              <div className="mb-8 lg:mb-0">
                <div className="font-serif leading-tight text-center lg:text-left px-2 sm:px-0 lg:pl-[50px] w-full overflow-hidden">
                  {/* Line 1: Turn Your Expertise */}
                  <div className="text-[30px] leading-[36px] sm:text-3xl sm:leading-[32px] md:text-4xl lg:text-6xl xl:text-7xl italic text-brown mb-2 break-words hero-turn-expertise">
                    Turn Your Expertise
                  </div>
                  {/* Line 2: into a + Startup */}
                  <div className="flex items-baseline gap-1 sm:gap-2 lg:gap-4 mb-2 justify-center lg:justify-start">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl italic text-brown hero-into-a">
                      into a
                    </span>
                    <span className="font-luxurious text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-brown hero-startup">
                      Startup
                    </span>
                  </div>
                  {/* Line 3: in 30 Days. */}
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-brown break-words hero-30-days">
                    in <span className="text-red-brand">30 Days</span>.
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="order-2 lg:order-2 relative">
              {/* Desktop layout */}
              <div className="hidden lg:flex flex-col gap-2 max-w-[522px] mx-auto">
                {/* Top - Forest desk image */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c7ddd7a73ba4d61f2866725104a123ce35148df1?width=217"
                  alt="Forest desk workspace"
                  className="w-24 h-24 object-cover ml-auto mr-0"
                  style={{ margin: "0 auto 0 250px" }}
                />

                <div className="flex justify-end"></div>

                {/* Middle - Man in field */}
                <div className="flex justify-start">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fdb19933282127a6df6a358e7adc8af2970bdc25?width=268"
                    alt="Man in field"
                    className="w-24 h-24 object-cover"
                  />
                </div>

                {/* Text block */}
                <div className="relative text-center mb-2.5">
                  <span className="text-brown text-lg font-sans text-center bg-cream">
                    <span className="text-center bg-cream">
                      We leverage our startup <br />
                      experience to build <br />
                      you a digital asset.
                    </span>
                  </span>
                </div>

                {/* Bottom - iMac on rock */}
                <div className="flex justify-end items-start">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/45e47cb002d0d69644d921987ad92212cb265519?width=310"
                    alt="iMac on rock"
                    className="w-24 h-24 object-cover mr-[60px]"
                  />
                </div>
              </div>

              {/* Mobile/Tablet layout - Centered vertical stack */}
              <div className="lg:hidden w-full max-w-md mx-auto">
                <div className="flex flex-col items-center space-y-8 py-8">
                  {/* Top image - Forest desk workspace, centered */}
                  <div className="flex justify-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c7ddd7a73ba4d61f2866725104a123ce35148df1?width=217"
                      alt="Forest desk workspace"
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
                    />
                  </div>

                  {/* Centered text */}
                  <div className="text-center text-sm sm:text-base leading-relaxed text-brown px-4">
                    We leverage our startup <br />
                    experience to build you <br />a digital asset.
                  </div>

                  {/* Bottom row - Two images evenly spaced */}
                  <div className="flex justify-between items-center w-full max-w-xs sm:max-w-sm">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/45e47cb002d0d69644d921987ad92212cb265519?width=310"
                      alt="iMac on rock"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fdb19933282127a6df6a358e7adc8af2970bdc25?width=268"
                      alt="Man in field"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="section-padding bg-cream/80 overflow-visible"
        style={{
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
          marginTop: "80px",
        }}
      >
        <div className="w-full overflow-visible">
          <div className="container-custom text-center mb-0">
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-blue mb-2 launching-heading">
              /We Make Launching Feel Easy
            </h2>
          </div>
          <div className="stats-container" style={{ marginTop: '10px' }}>
            {/* Startups Launched */}
            <div
              className="flex flex-col items-center max-w-full"
              style={{ maxWidth: "100%" }}
            >
              <div className="mb-4 whitespace-nowrap">
                <span
                  className="font-luxurious not-italic text-gray-blue"
                  style={{
                    display: "inline",
                    color: "rgb(94, 101, 123)",
                    textWrap: "nowrap",
                    "@media (max-width: 640px)": {
                      fontSize: "90px",
                    },
                    font: '400 120px/108px "Luxurious Script", cursive ',
                  }}
                >
                  28
                </span>
                <sup
                  className="font-luxurious not-italic text-gray-blue"
                  style={{
                    display: "inline",
                    color: "rgb(94, 101, 123)",
                    marginLeft: "10px",
                    textWrap: "nowrap",
                    top: "-20px",
                    verticalAlign: "super",
                    font: '400 40px/0px "Luxurious Script", cursive ',
                  }}
                >
                  +
                </sup>
              </div>
              <div
                className="font-serif text-brown text-center"
                style={{ font: '400 40px/60px "Instrument Serif", serif' }}
              >
                Startups Launched
              </div>
            </div>

            {/* Countries */}
            <div
              className="flex flex-col items-center max-w-full"
              style={{ maxWidth: "100%" }}
            >
              <div className="mb-4 whitespace-nowrap">
                <span
                  className="font-luxurious not-italic text-gray-blue"
                  style={{
                    display: "inline",
                    color: "rgb(94, 101, 123)",
                    textWrap: "nowrap",
                    "@media (max-width: 640px)": {
                      fontSize: "90px",
                    },
                    font: '400 120px/108px "Luxurious Script", cursive ',
                  }}
                >
                  10
                </span>
                <sup
                  className="font-luxurious not-italic text-gray-blue"
                  style={{
                    display: "inline",
                    color: "rgb(94, 101, 123)",
                    marginLeft: "10px",
                    textWrap: "nowrap",
                    top: "-20px",
                    verticalAlign: "super",
                    font: '400 40px/0px "Luxurious Script", cursive ',
                  }}
                >
                  +
                </sup>
              </div>
              <div
                className="font-serif text-brown text-center"
                style={{ font: '400 40px/60px "Instrument Serif", serif' }}
              >
                Countries
              </div>
            </div>

            {/* Users */}
            <div
              className="flex flex-col items-center max-w-full"
              style={{ maxWidth: "100%" }}
            >
              <div className="mb-4 whitespace-nowrap">
                <span
                  className="font-luxurious not-italic text-gray-blue"
                  style={{
                    display: "inline",
                    color: "rgb(94, 101, 123)",
                    textWrap: "nowrap",
                    "@media (max-width: 640px)": {
                      fontSize: "90px",
                    },
                    font: '400 120px/108px "Luxurious Script", cursive ',
                  }}
                >
                  5
                </span>
                <span
                  className="font-luxurious not-italic text-gray-blue ml-2"
                  style={{
                        display: "inline",
                        color: "rgb(94, 101, 123)",
                        "@media (max-width: 640px)": {
                          fontSize: "50px",
                        },
                        font: '400 60px/54px "Luxurious Script", cursive ',
                      }}
                >
                  million
                </span>
                <sup
                  className="font-luxurious not-italic text-gray-blue"
                  style={{
                    display: "inline",
                    color: "rgb(94, 101, 123)",
                    marginLeft: "10px",
                    textWrap: "nowrap",
                    top: "-20px",
                    verticalAlign: "super",
                    font: '400 40px/0px "Luxurious Script", cursive ',
                  }}
                >
                  +
                </sup>
              </div>
              <div
                className="font-serif text-brown text-center"
                style={{ font: '400 40px/60px "Instrument Serif", serif' }}
              >
                Users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding" style={{ marginTop: '30px' }}>
        <div className="container-custom flex flex-col">
          <h2 className="font-serif text-4xl lg:text-6xl text-brown text-right mb-16 self-center">
            /Meet The Team
          </h2>

          <div className="space-y-16">
            {/* Tiffany */}
            <div className="bg-white/10 border border-brown/10 rounded-lg p-6 sm:p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-1 text-center lg:text-left">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7c0a8210444773e4f08d558b0f05c7ed8459eb02?width=473"
                    alt="Tiffany - Founder of Studio Cores"
                    className="w-40 h-48 sm:w-48 sm:h-56 object-cover rounded-xl border border-brown mb-4 mx-auto lg:mx-0"
                  />
                  <h3 className="font-mono text-lg text-brown font-medium mb-1">
                    Tiffany
                  </h3>
                  <p className="font-mono text-sm text-brown">
                    Co‑founder of <em>Studio Cores</em>
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-brown text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                    Hey. I'm Tiffany. I'm someone who's always full of ideas and
                    always chasing new ways to bring them to life. I've built
                    and scaled 6 ventures, studied at one of the top business
                    schools in the world, and worked in 5 different countries.
                    Along the way, I've picked up a lot of experience and
                    lessons in product and brand building. If want to create
                    something that stands out in the world, I'd love to build it
                    with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Julia */}
            <div className="bg-white/10 border border-brown/10 rounded-lg p-6 sm:p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <p className="text-brown text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                    Hi! I'm Julia. I've founded 25 startups, exited 2 and
                    bootstrapped a product to 150K+ users without any budget.
                    I've started building tech products since I was 16 because
                    I'm passionate about solving people's problems. I've been to
                    56 countries and lived in 13 :). I love entrepreneurship
                    because it gives me the opportunity to create the biggest
                    impact. My mission is to help other entrepreneurs launch
                    their ideas faster.
                  </p>
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2 text-center lg:text-left">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1d06e6076daf08dba081831d86a6dcd95f03e229?width=473"
                    alt="Julia - Founder of Studio Cores"
                    className="w-40 h-48 sm:w-48 sm:h-56 object-cover rounded-xl border border-brown mb-4 mx-auto lg:mx-0"
                  />
                  <h3 className="font-mono text-lg text-brown font-medium mb-1">
                    Julia
                  </h3>
                  <p className="font-mono text-sm text-brown">
                    Co‑founder of <em>Studio Cores</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-gray-blue italic mb-12 sm:mb-16 vision-copy">
              {/* Responsive typography with mobile 3-line layout */}
              <div className="hero-text-line-1 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed sm:leading-tight mb-3 sm:mb-4">
                Most founders have great ideas,
              </div>

              <div className="hero-text-line-2 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed sm:leading-tight mb-3 sm:mb-4">
                But they procrastinate on the launch <span className="mobile-break">or lack technical skills,</span>
              </div>

              <div className="hero-text-line-3 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed sm:leading-tight">
                <span className="hero-with-paid-users block sm:inline mt-1 sm:mt-0 text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  That's where we come in.
                </span>
              </div>
            </h2>

            {/* Mobile-optimized CTA section */}
            <style>{`@media (max-width: 640px) { .hero-cta-section { display:flex; align-items:center; font-size:12px; font-weight:400; gap:5.50645px; justify-content:center; line-height:18px; margin-top:8px; margin-bottom:18px; white-space:nowrap; padding:0 16px; } .hero-cta-section .cta-text { display:block; color: rgb(94,101,123); font-weight:300; letter-spacing:0.72px; margin-right:8px; text-transform:uppercase; white-space:nowrap; } .hero-cta-section .desktop-text { display:none; } .hero-cta-section .pill { display:flex; align-items:center; border-color: rgb(94,101,121); border-radius:9999px; border-width:1px; font-weight:400; justify-content:center; margin:0 6px; padding:4px 5.6px; } .hero-cta-section .cta-text-ap { display:block; color: rgb(94,101,123); font-weight:300; letter-spacing:0.72px; margin-left:8px; text-transform:uppercase; white-space:nowrap; } .hero-cta-section .cta-text-mobile-mr { margin-right:-1px; } .hero-cta-section .pill-mobile-mr { margin-right:-3px; } }`}</style>

            <div className="hero-cta-section flex items-center justify-center gap-0 mb-6 sm:mb-12 px-4 sm:px-6 whitespace-nowrap">
              {/* Mobile text */}
              <span className="cta-text cta-text-mobile-mr block sm:hidden text-gray-blue text-[11px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl font-light tracking-normal uppercase">
                LET'S TURN YOUR IDEAS INTO
              </span>

              {/* Desktop text */}
              <span className="desktop-text hidden sm:inline text-gray-blue text-[11px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl font-light tracking-wider uppercase mr-1">
                WE HELP TURN YOUR IDEAS INTO
              </span>

              <div className="pill pill-mobile-mr border border-gray-medium rounded-full px-1 sm:px-3 py-1 inline-flex items-center justify-center">
                <span className="text-gray-blue text-[11px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl font-bold uppercase">
                  GREAT
                </span>
              </div>

              <span
                className="cta-text-ap block sm:inline text-gray-blue text-[11px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl font-light tracking-wider uppercase ml-2 sm:ml-3"
                style={{ marginLeft: "3px" }}
              >
                APPS
              </span>
            </div>

            {/* CTA Button with proper mobile spacing */}
            <div className="mt-8 mb-8 sm:mt-8 sm:mb-8">
              <a
                href="https://calendly.com/juliacores/welcome-call-studio-cores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-red-brand bg-button-base text-red-brand font-sans text-sm font-light tracking-widest uppercase transition-colors hover:bg-button-hover"
              >
                Book a call with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* From Concept to Product */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ml-5">
            <div className="order-2 lg:order-1">
              {/* Main heading - keep on one line */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-blue italic leading-tight mb-4">
                From Concept to Product
              </h2>

              {/* Subtitle */}
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-blue italic leading-tight mb-8">
                We Do the Heavy Lifting
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-start items-center">
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  You know your market better than anyone, but turning it into a
                  revenue-generating tech product? That's where most get stuck.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  Well, we're here to smooth out those bumps and bridge that gap
                  with strategy, design, and development that move your idea
                  forward fast.
                </p>
              </div>
            </div>

            {/* Image - right on desktop, below text on mobile/tablet */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7bee72d8eea8ade9620c372a301afdbfb60de909?width=726"
                alt="Product development process"
                className="w-full max-w-sm object-cover overflow-hidden text-center mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="section-padding py-24 bg-cream">
        <div className="container-custom text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-blue mb-6">
              /We're your product partner
            </h2>
            <p className="text-gray-blue text-xl lg:text-2xl mb-12">
              Our process is simple: build products your users love.
            </p>

            <div className="text-gray-blue mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 items-stretch">
                <div className="p-10 md:p-12 bg-white/5 border border-brown/10 rounded-lg min-h-[260px] flex flex-col justify-start items-center">
                  <h4 className="font-serif text-2xl md:text-2xl text-brown mb-4">
                    1. Plan
                  </h4>
                  <p className="text-gray-blue text-lg md:text-xl">
                    You start with a clear plan of what to build, who it’s for,
                    and how it should work.
                  </p>
                </div>

                <div className="p-10 md:p-12 bg-white/5 border border-brown/10 rounded-lg min-h-[260px] flex flex-col justify-start items-center">
                  <h4 className="font-serif text-2xl md:text-2xl text-brown mb-4">
                    2. Design
                  </h4>
                  <p className="text-gray-blue text-lg md:text-xl">
                    Your product looks beautiful and makes sense to real users.
                  </p>
                </div>

                <div className="p-10 md:p-12 bg-white/5 border border-brown/10 rounded-lg min-h-[260px] flex flex-col justify-start items-center">
                  <h4 className="font-serif text-2xl md:text-2xl text-brown mb-4">
                    3. Build
                  </h4>
                  <p className="text-gray-blue text-lg md:text-xl">
                    Your idea becomes real and people can actually use it.
                  </p>
                </div>

                <div className="p-10 md:p-12 bg-white/5 border border-brown/10 rounded-lg min-h-[260px] flex flex-col justify-start items-center">
                  <h4 className="font-serif text-2xl md:text-2xl text-brown mb-4">
                    4. Launch
                  </h4>
                  <p className="text-gray-blue text-lg md:text-xl">
                    Your product is shared with users and keeps growing.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://calendly.com/juliacores/welcome-call-studio-cores"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-6 strategy-call-button"
            >
              Book A Free Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Co-Creators Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mr-5">
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9ab98266a894c3b0bbb9e3b5eab888b3e6c50c1c?width=714"
                alt="Collaboration approach"
                className="w-full max-w-sm object-cover overflow-hidden"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl text-brown font-serif leading-tight mb-8 co-creators-heading">
                We're Different: <br />
                Co‑Creators, Not Contractors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-xl lg:text-2xl leading-relaxed">
                  We think beyond deliverables. Our team dives into your market,
                  users, and goals, so what we build together
                  <br />
                  doesn’t just work,
                  <br />
                  it wins.
                </p>
                <p className="text-brown text-xl lg:text-2xl leading-relaxed">
                  You bring the vision - we bring the design, tech, and momentum
                  to make it real. Because great things don’t come from briefs,
                  they come from collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-cream">
        <div className="container-custom space-y-24">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl text-brown font-sans mb-8">
                1/ We Start with You: <br />
                Who You Are Matters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  We believe great products carry the personality of their
                  founders. That’s why we begin with your story — what you stand
                  for, why you care, and what you want the world to feel when
                  they use what you’ve built.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  This isn't just about understanding your project idea; it's
                  about understanding the soul behind it.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2cf39809acdc5aa8b8ea9bdcfe0c756aa05a4947?width=796"
                alt="Understanding your story"
                className="w-full max-w-md object-cover overflow-hidden"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d356b018a02cd106ba72408b979fd7da4bba980e?width=654"
                alt="Building the blueprint"
                className="w-full max-w-sm object-cover overflow-hidden"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl lg:text-4xl text-brown font-sans mb-8">
                2/ We Build the Blueprint: <br />
                Built Around You
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  Now that we know your goals, it’s time to map out how we��ll
                  bring your product to life. We combine strategy, research, and
                  technical planning to design a roadmap built around you.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  You’ll see every milestone before we move, so the path forward
                  always feels certain.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl text-brown font-sans mb-8">
                3/ We Make It Happen: <br />
                Your Expertise, Turned Digital
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  Now it's time to roll up our sleeves and build. We turn
                  everything we’ve learned — your story, values, and vision into
                  a real, working product.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  Our process is agile and transparent, with continuous feedback
                  to ensure your product grows in the right direction from day
                  one.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/454576001c039f5108d997fdc28de4db1ef07e05?width=856"
                alt="Building your product"
                className="w-full max-w-md object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Launch Promise */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl lg:text-6xl text-red-brand mb-8">
            We'll launch your{" "}
            <span className="font-luxurious text-6xl lg:text-8xl">Startup</span>{" "}
            in 1 month
          </h2>

          <div className="max-w-4xl mx-auto bg-cream/45 border-2 border-gray-medium rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
            <p className="text-brown text-xl lg:text-2xl font-light mb-6">
              We promise it'll be the best investment you make this year.
            </p>
            <div className="text-brown text-xl lg:text-2xl leading-relaxed mb-8">
              <p className="font-bold mb-4">
                Here's what you'll get working with us:
              </p>
              <p>
                1. A super skilled team that's{" "}
                <span className="font-bold text-gray-blue">obsessed</span> with
                your success.
              </p>
              <p>
                2. Up to 4 rounds of{" "}
                <span className="font-bold text-gray-blue">thoughtful</span>{" "}
                revisions.
              </p>
              <p>
                3. A fully functional product in just{" "}
                <span className="font-bold text-gray-blue">30 days</span>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/coreslab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Text Us
              </a>
              <a
                href="https://calendly.com/juliacores/welcome-call-studio-cores"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-padding relative">
        <div className="container-custom flex flex-col">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-brown text-right mx-auto mb-16">
            /Subscribe to Our Newsletter
          </h2>

          <div className="flex justify-center">
            <div
              className="relative w-full max-w-4xl h-80 sm:h-96 bg-cover bg-center rounded-3xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/d5be7445b44b2f6ef7cf5df7b8323b4ffcc1fa3e?width=1964')",
              }}
            >
              <div className="absolute inset-0 bg-brown/20"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-4 sm:p-8">
                <div className="bg-cream rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl max-w-sm sm:max-w-md w-full text-center">
                  <h3 className="text-gray-blue text-xl sm:text-2xl lg:text-3xl font-light tracking-wide uppercase mb-4">
                    Stay in the Loop
                  </h3>
                  <p className="text-brown text-xs sm:text-sm lg:text-base mb-6 sm:mb-8">
                    We share startups ideas, case studies, tech news, tools and
                    resources that will help you in your entrepreneurial
                    journey.
                  </p>
                  <a
                    href="https://studiocores.substack.com/?r=68rebb&utm_campaign=pub-share-checklist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/35 bg-gray-blue text-cream font-sans text-sm sm:text-base font-bold tracking-wide uppercase transition-colors hover:bg-gray-medium w-full justify-center"
                  >
                    <Mail size={16} className="sm:w-5 sm:h-5" />
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
