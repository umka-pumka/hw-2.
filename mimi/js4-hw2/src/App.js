import logo from './logo.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footerr'
import Counter from './components/Counter'
import Calc from './components/calc'

const data = [
	{
		title: 'navigating',
		description:
			'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
		image: 'https://loremflickr.com/640/480/cats',
		price: 77,
		oldPrice: 17,
		id: '4',
	},
	{
		title: 'Wooden',
		description:
			"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
		image: 'https://loremflickr.com/640/480/cats',
		price: 17,
		oldPrice: 57,
		id: '5',
	},
	{
		title: 'Concrete',
		description:
			'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
		image: 'https://loremflickr.com/640/480/cats',
		price: 76,
		oldPrice: 67,
		id: '6',
	},
	{
		title: 'Borders',
		description:
			'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
		image: 'https://loremflickr.com/640/480/cats',
		price: 93,
		oldPrice: 58,
		id: '7',
	},
	{
		title: 'Investor',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 37,
		oldPrice: 31,
		id: '3',
	},
	{
		title: 'Investor',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 37,
		oldPrice: 31,
		id: '3',
	},
	{
		title: 'Investor',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 37,
		oldPrice: 31,
		id: '3',
	},

	{
		title: 'Investor',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 37,
		oldPrice: 31,
		id: '3',
	},
	{
		title: 'Quality',
		description:
			'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
		image: 'https://loremflickr.com/640/480/cats',
		price: 44,
		oldPrice: 84,
		id: '8',
	},
	{
		title: 'suddenly',
		description:
			'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
		image: 'https://loremflickr.com/640/480/cats',
		price: 31,
		oldPrice: 98,
		id: '9',
	},
	{
		title: 'dicta',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 3,
		oldPrice: 38,
		id: '10',
	},
	{
		title: 'payment',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 13,
		oldPrice: 28,
		id: '11',
	},
	{
		title: 'Investor',
		description:
			'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		image: 'https://loremflickr.com/640/480/cats',
		price: 37,
		oldPrice: 31,
		id: '3',
	},
]

function App() {
	return (
		<div className='body'>
			<Header />
			<Counter />
			<Calc />
			{data.map(item => (
				<Card
					className='body'
					image={item.image}
					title={item.title}
					description={item.description}
					price={item.price}
				/>
			))}
			<Footer />
		</div>
	)
}

export default App
