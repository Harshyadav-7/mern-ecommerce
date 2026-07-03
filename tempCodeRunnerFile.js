// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('mern-ecomm');

// Create a new document in the collection.
db.getCollection('products').insertMany([
    
  {
    "title": "iPhone 15",
    "description": "Latest smartphone",
    "price": 79999,
    "category": "Electronics",
    "image": "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    "stock": 15
  },
  {
    "title": "Samsung Galaxy S24",
    "description": "Android flagship",
    "price": 74999,
    "category": "Electronics",
    "image": "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    "stock": 20
  },
  {
    "title": "MacBook Air M3",
    "description": "Powerful laptop",
    "price": 114999,
    "category": "Electronics",
    "image": "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
    "stock": 8
  },
  {
    "title": "Sony WH-1000XM5",
    "description": "Wireless headphones",
    "price": 29999,
    "category": "Electronics",
    "image": "https://m.media-amazon.com/images/I/61vIICn2A0L._SX679_.jpg",
    "stock": 12
  },
  {
    "title": "Apple Watch Series 9",
    "description": "Smart watch",
    "price": 41999,
    "category": "Electronics",
    "image": "https://m.media-amazon.com/images/I/71LfnkRgZ4L._SX679_.jpg",
    "stock": 10
  },
  {
    "title": "Nike Air Max",
    "description": "Running shoes",
    "price": 6999,
    "category": "Footwear",
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-max-270-mens-shoes-KkLcGR.png",
    "stock": 25
  },
  {
    "title": "Adidas Hoodie",
    "description": "Casual wear",
    "price": 2499,
    "category": "Clothing",
    "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/hoodie.jpg",
    "stock": 30
  },
  {
    "title": "Levi's Jeans",
    "description": "Slim fit",
    "price": 1999,
    "category": "Clothing",
    "image": "https://lsco.scene7.com/is/image/lsco/005013409-front-pdp",
    "stock": 22
  },
  {
    "title": "Puma T-Shirt",
    "description": "Cotton fabric",
    "price": 999,
    "category": "Clothing",
    "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/670140/01/mod01/fnd/IND/fmt/png",
    "stock": 35
  },
  {
    "title": "Dell XPS 13",
    "description": "Premium laptop",
    "price": 99999,
    "category": "Electronics",
    "image": "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops/xps/xps-13-9340",
    "stock": 6
  },
  {
    "title": "HP Pavilion",
    "description": "Office laptop",
    "price": 64999,
    "category": "Electronics",
    "image": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres",
    "stock": 11
  },
  {
    "title": "Canon EOS 1500D",
    "description": "DSLR camera",
    "price": 45999,
    "category": "Electronics",
    "image": "https://in.canon/media/image/2018/02/26/eos-1500d.png",
    "stock": 9
  },
  {
    "title": "Boat Airdopes 141",
    "description": "Wireless earbuds",
    "price": 1499,
    "category": "Electronics",
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/AD141.png",
    "stock": 40
  },
  {
    "title": "Wildcraft Backpack",
    "description": "Travel bag",
    "price": 1799,
    "category": "Bags",
    "image": "https://wildcraft.com/media/catalog/product/backpack.jpg",
    "stock": 28
  },
  {
    "title": "American Tourister",
    "description": "Cabin luggage",
    "price": 3499,
    "category": "Bags",
    "image": "https://images.samsung.com/is/image/samsung/p6pim/luggage",
    "stock": 14
  },
  {
    "title": "Fossil Wallet",
    "description": "Leather wallet",
    "price": 2299,
    "category": "Accessories",
    "image": "https://fossil.scene7.com/is/image/FossilPartners/ML3729200_main",
    "stock": 18
  },
  {
    "title": "RayBan Aviator",
    "description": "Classic sunglasses",
    "price": 7999,
    "category": "Accessories",
    "image": "https://assets.ray-ban.com/is/image/RayBan/805289602057",
    "stock": 16
  },
  {
    "title": "Casio G-Shock",
    "description": "Sports watch",
    "price": 8999,
    "category": "Accessories",
    "image": "https://www.casio.com/content/dam/casio/product-info",
    "stock": 12
  },
  {
    "title": "Logitech MX Master 3S",
    "description": "Wireless mouse",
    "price": 8995,
    "category": "Electronics",
    "image": "https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s",
    "stock": 20
  },
  {
    "title": "Mechanical Keyboard",
    "description": "RGB keyboard",
    "price": 4999,
    "category": "Electronics",
    "image": "https://m.media-amazon.com/images/I/71kr3WAj1FL._SX679_.jpg",
    "stock": 17
  }
]);
