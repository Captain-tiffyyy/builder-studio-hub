import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Text */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="heading-hero text-brown mb-4">
                  Startup
                </h1>
                <div className="font-serif text-4xl lg:text-display leading-tight">
                  <span className="text-brown">Turn Your Expertise into a</span>
                  <span className="text-red-brand"> in 30 Days.</span>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-6 h-96 lg:h-[450px]">
                <div className="flex flex-col gap-6">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c7ddd7a73ba4d61f2866725104a123ce35148df1?width=217" 
                    alt="Startup expertise" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-brown text-lg">
                      We leverage our startup experience to build you a digital asset.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 pt-8">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fdb19933282127a6df6a358e7adc8af2970bdc25?width=268" 
                    alt="Digital transformation" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/45e47cb002d0d69644d921987ad92212cb265519?width=310" 
                    alt="Technology solutions" 
                    className="w-full h-36 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-gray-blue italic leading-tight mb-12">
              You've built credibility in your field. <br />
              Now convert that into a revenue-generating <br />
              <span className="font-luxurious text-6xl lg:text-7xl xl:text-8xl not-italic">Tech Product</span> <br />
              with paid users and global reach
            </h2>
            
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="w-28 h-10 border border-gray-medium rounded-full"></div>
              <p className="text-gray-blue text-xl lg:text-2xl font-light tracking-wider uppercase">
                so.... what are you waiting for?
              </p>
            </div>
            
            <button className="btn-primary text-lg px-12 py-6">
              Book a call with us
            </button>
          </div>
        </div>
      </section>

      {/* From Concept to Product */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-blue italic leading-tight mb-8">
                <span className="text-6xl lg:text-7xl not-italic">From Concept to Product</span> <br />
                We Do the Heavy Lifting
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-xl lg:text-2xl leading-relaxed">
                  Your expertise is valuable, but turning it into a revenue-generating tech product? That's where most get stuck.
                </p>
                <p className="text-brown text-xl lg:text-2xl leading-relaxed">
                  Well, we're here to smooth out those bumps and guide you towards a brand and product that truly reflects you.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7bee72d8eea8ade9620c372a301afdbfb60de909?width=726" 
                alt="Product development process" 
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-blue mb-12">
              /Our Services
            </h2>
            <div className="text-gray-blue text-2xl lg:text-3xl space-y-4 mb-16">
              <p>Market Research</p>
              <p>Product Design</p>
              <p>Websites</p>
              <p>App Development</p>
              <p>Web Extensions</p>
              <p>Workflow Automations</p>
              <p>AI Tools</p>
            </div>
            <button className="btn-primary text-lg px-12 py-6">
              Book A Free Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Co-Creators Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9ab98266a894c3b0bbb9e3b5eab888b3e6c50c1c?width=714" 
                alt="Collaboration approach" 
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl text-brown font-serif leading-tight mb-8">
                We're Different: <br />
                Co‑Creators, Not Contractors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-xl lg:text-2xl leading-relaxed">
                  Think of us not just as your developers, but as the co-creator of your online universe.
                </p>
                <p className="text-brown text-xl lg:text-2xl leading-relaxed">
                  We help you build a digital product where your knowledge can truly shine. Let's make some magic together, shall we?
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
                  We begin with your story and expertise. Who are you? What's your mission? We'll talk about your goals, values, passions – all the things that make you, well, you.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  This isn't just about understanding your project idea; it's about understanding the soul behind it.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2cf39809acdc5aa8b8ea9bdcfe0c756aa05a4947?width=796" 
                alt="Understanding your story" 
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d356b018a02cd106ba72408b979fd7da4bba980e?width=654" 
                alt="Building the blueprint" 
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl lg:text-4xl text-brown font-sans mb-8">
                2/ We Build the Blueprint: <br />
                Built Around You
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  Now that we know who you are, it's time to plan how we'll bring your product to life. We'll conduct a full market research and technical audit to bring your idea to life with the best tools and packaging.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  We'll build a clear project roadmap: what's happening, when, and why — with milestones that keep everything on track and moving forward.
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
                  Now it's time to roll up our sleeves and build. We'll take everything we've learned about you — your story, your values, the blueprint we've made — and start building your product.
                </p>
                <p className="text-brown text-lg lg:text-xl leading-relaxed">
                  Through agile development, weekly check-ins and user-testing, we'll make sure every step of the way feels easy and intentional.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/454576001c039f5108d997fdc28de4db1ef07e05?width=856" 
                alt="Building your product" 
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Launch Promise */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl lg:text-6xl text-red-brand mb-8">
            We'll launch your <span className="font-luxurious text-6xl lg:text-8xl">Startup</span> in 1 month
          </h2>
          
          <div className="max-w-4xl mx-auto bg-cream/45 border-2 border-gray-medium rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
            <p className="text-brown text-xl lg:text-2xl font-light mb-6">
              We promise it'll be the best investment you make this year.
            </p>
            <div className="text-brown text-xl lg:text-2xl leading-relaxed mb-8">
              <p className="font-bold mb-4">Here's what you'll get working with us:</p>
              <p>A super skilled team that's <span className="font-bold text-gray-blue">obsessed</span> with your success.</p>
              <p>Up to 4 rounds of <span className="font-bold text-gray-blue">thoughtful</span> revisions.</p>
              <p>A fully functional product in just <span className="font-bold text-gray-blue">30 days</span>.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Text Us
              </button>
              <button className="btn-secondary">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-cream/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="font-luxurious text-8xl lg:text-9xl text-gray-blue mb-2">28</div>
              <div className="font-luxurious text-4xl lg:text-5xl text-gray-blue mb-2">+</div>
              <div className="font-serif text-2xl lg:text-3xl text-brown">Startups Launched</div>
            </div>
            <div>
              <div className="font-luxurious text-8xl lg:text-9xl text-gray-blue mb-2">10</div>
              <div className="font-luxurious text-4xl lg:text-5xl text-gray-blue mb-2">+</div>
              <div className="font-serif text-2xl lg:text-3xl text-brown">Countries</div>
            </div>
            <div>
              <div className="font-luxurious text-8xl lg:text-9xl text-gray-blue mb-2">5</div>
              <div className="font-luxurious text-4xl lg:text-5xl text-gray-blue mb-2">million+</div>
              <div className="font-serif text-2xl lg:text-3xl text-brown">Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-4xl lg:text-6xl text-brown text-right mb-16">
            /Meet The Team
          </h2>
          
          <div className="space-y-16">
            {/* Tiffany */}
            <div className="bg-white/10 border border-brown/10 rounded-lg p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-1">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7c0a8210444773e4f08d558b0f05c7ed8459eb02?width=473" 
                    alt="Tiffany - Founder of Studio Cores" 
                    className="w-48 h-56 object-cover rounded-xl border border-brown mb-4"
                  />
                  <h3 className="font-mono text-lg text-brown font-medium mb-1">Tiffany</h3>
                  <p className="font-mono text-sm text-brown">
                    Founder of <em>Studio Cores</em>
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-brown text-lg lg:text-xl leading-relaxed">
                    Hey. I'm Tiffany. I'm someone who's always full of ideas and always chasing new ways to bring them to life. I've built and scaled 6 ventures, studied at one of the top business schools in the world, and worked in 5 different countries. Along the way, I've picked up a lot of experience and lessons in product and brand building. If want to create something that stands out in the world, I'd love to build it with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Julia */}
            <div className="bg-white/10 border border-brown/10 rounded-lg p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <p className="text-brown text-lg lg:text-xl leading-relaxed">
                    Hi! I'm Julia. I've founded 25 startups, exited 2 and bootstrapped a product to 150K+ users without any budget. I've started building tech products since I was 16 because I'm passionate about solving people's problems. I've been to 56 countries and lived in 13 :). I love entrepreneurship because it gives me the opportunity to create the biggest impact. My mission is to help other entrepreneurs launch their ideas faster.
                  </p>
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1d06e6076daf08dba081831d86a6dcd95f03e229?width=473" 
                    alt="Julia - Founder of Studio Cores" 
                    className="w-48 h-56 object-cover rounded-xl border border-brown mb-4"
                  />
                  <h3 className="font-mono text-lg text-brown font-medium mb-1">Julia</h3>
                  <p className="font-mono text-sm text-brown">
                    Founder of <em>Studio Cores</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-padding relative">
        <div className="container-custom">
          <h2 className="font-serif text-4xl lg:text-6xl text-brown text-right mb-16">
            /Subscribe to Our Newsletter
          </h2>
          
          <div className="flex justify-center">
            <div 
              className="relative w-full max-w-4xl h-96 bg-cover bg-center rounded-3xl overflow-hidden"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/d5be7445b44b2f6ef7cf5df7b8323b4ffcc1fa3e?width=1964')"
              }}
            >
              <div className="absolute inset-0 bg-brown/20"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <div className="bg-cream rounded-3xl p-8 lg:p-12 shadow-2xl max-w-md w-full text-center">
                  <h3 className="text-gray-blue text-2xl lg:text-3xl font-light tracking-wide uppercase mb-4">
                    Stay in the Loop
                  </h3>
                  <p className="text-brown text-sm lg:text-base mb-8">
                    We share startups ideas, case studies, tech news, tools and resources that will help you in your entrepreneurial journey.
                  </p>
                  <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/35 bg-gray-blue text-cream font-sans text-base font-bold tracking-wide uppercase transition-colors hover:bg-gray-medium w-full justify-center">
                    <Mail size={18} />
                    Subscribe
                  </button>
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
