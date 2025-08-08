import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Projects() {
  const projects = [
    {
      title: "GOJI MARKETING",
      category: "Naming // Identity // SOFTWARE AS A SERVICE (SAAS)",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/20a3b730d5c71869a1bea3837f7958d6d17bf2c5?width=1813",
      size: "large"
    },
    {
      title: "SCRIPSY",
      category: "Identity // AI DEVELOPMENT // CHROME EXTENSION",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/add0f701fbdaea436b5e6a41ebb210ee3a7741d1?width=877",
      size: "medium"
    },
    {
      title: "TORTA CAKE MARKETPLACE",
      category: "identity // UX/UI design // WEBSITE",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/43731ab73858ba26e97f1f38582569b89e4d09bf?width=877",
      size: "medium"
    },
    {
      title: "KIMI - FINANCE APP",
      category: "identity // UI/UX design // Ai DEVELOPMENT // App",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f8005cc615075f65bffec00a53231920dfb084d4?width=877",
      size: "medium"
    },
    {
      title: "QR CODE GENERATOR",
      category: "UX Design // Chrome Extension",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/bcd88bcf91262ab56965f1e2b42351b198fd2a22?width=877",
      size: "medium"
    },
    {
      title: "DISABLE YOUTUBE SHORTS",
      category: "UX Design // Chrome Extension",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/33e2a77bd6f39ebb42794282554663ddfa81e9e8?width=877",
      size: "medium"
    },
    {
      title: "TASK MANAGEMENT CHATBOT",
      category: "UX/UI design // AI WIDGET // Website",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3a01e1d792fe97718c1d691d95a7cb143c7ba912?width=877",
      size: "medium"
    },
    {
      title: "OUTBOUND",
      category: "Identity // UX/UI design // AI CHATBOT // DIRECTORY",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/945c5f2770e157645e2687af6edea34c25d649d2?width=877",
      size: "medium"
    },
    {
      title: "TRACK YOUR SCREEN TIME",
      category: "UX DESIGN // CHROME EXTENSION",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/54f060552d34f3f6734653943e44315fe93ea81f?width=877",
      size: "medium"
    },
    {
      title: "PORTFOLIO NEXUS",
      category: "identity // UX/UI design // Website",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/32dc56ec09fff0abc862f403779ffb5bd1c13edc?width=877",
      size: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Header Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-gray-blue leading-tight tracking-tight mb-12">
              Our Projects
            </h1>
            <p className="text-gray-blue text-2xl lg:text-3xl leading-relaxed tracking-tight mb-8">
              We create websites of all complexity levels and consider each task comprehensively: from marketing and management to creating an intuitive user experience and using modern design trends.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group cursor-pointer transition-transform hover:scale-105 ${
                  project.size === 'large' && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-red-brand font-medium text-sm uppercase tracking-wide mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-light text-sm uppercase tracking-wide">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-blue text-xl lg:text-2xl mb-12 max-w-3xl mx-auto">
            Let's discuss how we can turn your expertise into a digital product that generates revenue and reaches a global audience.
          </p>
          <a href="https://calendly.com/juliacores/welcome-call-studio-cores" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-6">
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
