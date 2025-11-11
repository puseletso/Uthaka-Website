import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import ComparisonTable from '@/components/sections/ComparisonTable'
import Testimonials from '@/components/sections/Testimonials'
import DemoForm from '@/components/sections/DemoForm'
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
        <ComparisonTable />
        <Testimonials />
        <DemoForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
