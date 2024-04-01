function Card({ image, title, description, price }) {
	return (
		<div className='card'>
			<img src={image} />
			<h1>{title}</h1>
			<p>{description}</p>
			<b>{price}</b>
			<button>add to card</button>
		</div>
	)
}

export default Card
