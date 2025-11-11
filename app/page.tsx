import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Features />

        <section id="how-it-works" className="section bg-primary-50">
          <div className="container-custom">
            <h2 className="text-h2 font-bold text-center text-gradient mb-4">
              How It Works Coming Soon
            </h2>
          </div>
        </section>

        <section id="testimonials" className="section bg-white">
          <div className="container-custom">
            <h2 className="text-h2 font-bold text-center text-gradient mb-4">
              Testimonials Coming Soon
            </h2>
          </div>
        </section>

        <section id="faq" className="section bg-primary-50">
          <div className="container-custom">
            <h2 className="text-h2 font-bold text-center text-gradient mb-4">
              FAQ Coming Soon
            </h2>
          </div>
        </section>
      </main>
    </>
  )
}
