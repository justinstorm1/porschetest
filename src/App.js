import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Model from './components/Model'
import porscheImage1 from './components/porsche.jpg'

const carModels = {
  car911: {
    model: '911',
    powerType1: 'Gasoline',
    powerType2: '',
    description: 'The iconic, rear engine sports car with exeptional preformance.',
    startingPrice: '121,100',
    image: 'https://images-porsche.imgix.net/-/media/DE9B7F8D1C6948F1AF6B4114B75C3F3A_BFE418B8F6AA4A52A3270ACB49455A86_Nevada---Desktop?iar=0&w=590&ar=3%3A4&q=85&auto=format',
  },
  car718: {
    model: '718',
    powerType1: 'Gasoline',
    powerType2: '',
    description: 'The mid-engine sports car for two made for pure driving pleasure.',
    startingPrice: '72,800',
    image: 'https://images-porsche.imgix.net/-/media/BCE0DDD35E7E4D9CA16F7DA7480B8E92_76B645B61F5244E08438DFDD4F360BF6_BX24I3HOX0040_desktop?iar=0&w=590&ar=3%3A4&q=85&auto=format',
  },
  carTaycan: {
    model: 'Taycan',
    powerType1: 'Electric',
    powerType2: '',
    description: 'The pure expression of can electric sports car.',
    startingPrice: '99,400',
    image: 'https://images-porsche.imgix.net/-/media/D9BCCD47AD06466B9983590E273D5DE8_4EC11FECCEB1402FA010F344C028CE77_NEW-Taycan---Mobile?iar=0&w=645&ar=9%3A16&q=85&auto=format',
  },
  carPanamera: {
    model: 'Panamera',
    powerType1: 'Hybrid', 
    powerType2: 'Gasoline',
    description: 'The sports car sedan for an active lifestyle with highest comfort.',
    startingPrice: '102,800',
    image: 'https://images-porsche.imgix.net/-/media/B768914D594948D5A6F6D413CA4F68BC_B4EB530014D7472DAEF0F91CA2120334_NEW-Panamera---Mobile?iar=0&w=645&ar=9%3A16&q=85&auto=format',
  },
  carMacan: {
    model: 'Macan',
    powerType1: 'Electric',
    powerType2: 'Gasoline',
    description: 'All-electric SUV with impresive E-Performance,',
    startingPrice: '75,300',
    image: 'https://images-porsche.imgix.net/-/media/77EB2C62CE774603BC3F3E7608D825B4_B15900D011F04A95994B0724CD421D8B_Berlin---Mobile?iar=0&w=645&ar=9%3A16&q=85&auto=format',
  },
  carCayenne: {
    model: 'Cayenne',
    powerType1: 'Hybrid',
    powerType2: 'Gasoline',
    description: 'The versatile SUV with sports car performance and up to five seats.',
    startingPrice: '84,700',
    image: 'https://images-porsche.imgix.net/-/media/7F1AD532955347949B29A4D9C29A4C27_23377A1E50F640948CA45B9948AE2C76_Cayenne---Mobile?iar=0&w=645&ar=9%3A16&q=85&auto=format',
  },
}

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='content'>
        <div className='carCards'>
          <Model {...carModels.car718} />
          <Model {...carModels.car911} />
          <Model {...carModels.carTaycan} />
          <Model {...carModels.carPanamera} />
          <Model {...carModels.carMacan} />
          <Model {...carModels.carCayenne} />
        </div>
      </div>
    </div>
  )
}
