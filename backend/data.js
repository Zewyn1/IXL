import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@user.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Ryzen 7 5800x',
      slug: 'ryzen-7-5800x',
      category: 'CPU',
      image: '/Images/ryzen7.jpg',
      price: 300,
      countInStock: 5,
      brand: 'AMD',
      rating: 4.8,
      numReviews: 13,
      description: '4.7Ghz, 105W TDP, 8 cores, 16 threads',
    },
    {
      name: 'Ryzen 5 5600x',
      slug: 'ryzen-5-5600x',
      category: 'CPU',
      image: '/Images/ryzen5.jpg',
      price: 300,
      countInStock: 0,
      brand: 'AMD',
      rating: 4.8,
      numReviews: 13,
      description: '4.7Ghz, 105W TDP, 8 cores, 16 threads',
    },
    {
      name: 'Ryzen 5 5600x',
      slug: 'ryzen-5-5600x',
      category: 'CPU',
      image: '/Images/ryzen5.jpg',
      price: 300,
      countInStock: 0,
      brand: 'AMD',
      rating: 4.8,
      numReviews: 13,
      description: '4.7Ghz, 105W TDP, 8 cores, 16 threads',
    },
    {
      name: 'Ryzen 5 5600x',
      slug: 'ryzen-5-5600x',
      category: 'CPU',
      image: '/Images/ryzen5.jpg',
      price: 300,
      countInStock: 0,
      brand: 'AMD',
      rating: 4.8,
      numReviews: 13,
      description: '4.7Ghz, 105W TDP, 8 cores, 16 threads',
    },
  ],
};
export default data;
