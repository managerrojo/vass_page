import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footter'
import Section from '@/components/seccion/Section'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <view>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </view>
  )
}
