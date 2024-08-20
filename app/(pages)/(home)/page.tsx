'use client'
import AboutUs from './components/AboutUs'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import NewsCard from './components/NewsCard'
import Statistic from './components/Statistic'

const Home = () => {
	return (
		<>
			<Carousel />
			<AboutUs />
			<NewsCard />
			<Statistic />
			<Gallery />
			<Contact />
		</>
	)
}

export default Home
