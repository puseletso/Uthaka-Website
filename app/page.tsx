import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItWorks />

        {/* Testimonials placeholder */}
        <section id="testimonials" className="section bg-primary-50">
          <div className="container-custom">
            <h2 className="text-h2 font-bold text-center text-gradient mb-4">
              Testimonials Coming Soon
            </h2>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  )
}
