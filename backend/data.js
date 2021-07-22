import bcrypt from 'bcryptjs';
const data = {
	users: [
		{
			name: 'Starboush',
			email: 'Starboush@starboush.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: true
		},
		{
			name: 'Jhon',
			email: 'user@example.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: true
		}
	],
	products: [
		{
			name: 'D&G Slim Shirt',
			image: '/images/p1.jpg',
			price: 60,
			brand: 'D&G',
			rating: 1.2,
			numReviews: 298,
			countInStock: 7,
			description: 'High quality product',
			category: 'Shirts'
		},
		{
			name: 'Nike Slim Shirt',
			image: '/images/p2.jpg',
			price: 160,
			brand: 'Nike',
			rating: 2.8,
			numReviews: 544,
			countInStock: 57,
			description: 'High quality product',
			category: 'Shirts'
		},
		{
			name: 'Ralph lauren Slim Shirt',
			image: '/images/p3.jpg',
			price: 118,
			brand: 'Ralph lauren',
			rating: 4.2,
			numReviews: 2151,
			countInStock: 54,
			description: 'High quality product',
			category: 'Shirts'
		},
		{
			name: 'Puma Slim Shirt',
			image: '/images/p4.jpg',
			price: 51,
			brand: 'Puma',
			rating: 2.6,
			numReviews: 456,
			countInStock: 98,
			description: 'High quality product',
			category: 'Shirts'
		},
		{
			name: 'Slim Nike Shirt',
			image: '/images/p5.jpg',
			price: 85,
			brand: 'Nike',
			rating: 1.9,
			numReviews: 254,
			countInStock: 2,
			description: 'High quality product',
			category: 'Shirts'
		},
		{
			name: 'Slim Fit Shirt',
			image: '/images/p6.jpg',
			price: 38,
			brand: 'Nike',
			rating: 3.2,
			numReviews: 654,
			countInStock: 21,
			description: 'High quality product',
			category: 'Shirts'
		},
		{
			name: 'Slim Shirt D&G',
			image: '/images/p7.jpg',
			price: 21,
			brand: 'D&G',
			rating: 1.5,
			numReviews: 2,
			countInStock: 0,
			description: 'High quality product',
			category: 'Shirts'
		}
	]
};

export default data;
