const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      photo: 'https://i.postimg.cc/Y0LyTsMc/Livingston-Bed.jpg',
      oldPrice: 60,
      price: 30,
      stars: 2,
      userStars: 5,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      photo: 'https://i.postimg.cc/pd8QbMnJ/Keziah-Platform-Bed.png',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      photo: 'https://i.postimg.cc/PJf1wLVS/Headboards.jpg',
      oldPrice: 50,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      photo:
        'https://i.postimg.cc/ZRRQxqQ5/Overstock-com-Online-Shopping-Bedding-Furniture-Electronics-Jewelry-Clothing-more.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      photo: 'https://i.postimg.cc/sXktfrnf/Chloe-Poliform-Bed-Milia-Shop.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      photo: 'https://i.postimg.cc/mgf0WBPm/Gerrald-Upholstered-Standard-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      photo: 'https://i.postimg.cc/RhWj401D/Ahumada-Upholstered-Standard-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      photo:
        'https://i.postimg.cc/xjszZ14S/Lexington-Tower-Place-Barrington-Upholstered-Platform-Bed.jpg',
      oldPrice: 60,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      photo:
        'https://i.postimg.cc/X7Hk98bd/Kelly-Wingback-Bed-Stripe-Beds-Bedroom-Furniture.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      photo:
        'https://i.postimg.cc/X7JwNCCJ/Emerald-Lizbeth-Velvet-Queen-Bed-Frame.jpg ',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      photo:
        'https://i.postimg.cc/6618018W/Chelsea-Modern-Bed-with-High-Feet-Berto-Salotti.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      photo: 'https://i.postimg.cc/fL1JwVn3/Andes-Deco-Upholstered-Storage-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      photo: 'https://i.postimg.cc/zfR7zR4W/Harper-Upholstered-Tall-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      photo: 'https://i.postimg.cc/Y0VBWFq7/Revley-Upholstered-Standard-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      photo:
        'https://i.postimg.cc/9Xv72nCx/Room-Board-Avery-Custom-Upholsterd-Storage-Bed-Modern-Custom-Beds-Platform-Beds.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      photo:
        'https://i.postimg.cc/0y12XgPs/BOLD-Double-bed-By-HC28-design-Frank-Chou.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      photo:
        'https://i.postimg.cc/kgWD7JfG/Porro-Spa-p-Makura-textile-bed-is-a-new-interpretation-of-domestic-warmth-that-is-a-cross-between.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      photo:
        'https://i.postimg.cc/m2tHWWv1/Raleigh-Curved-Upholstered-Tall-Footboard-Storage-Platform-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      photo:
        'https://i.postimg.cc/MGbcm6QN/Harper-Upholstered-Low-Storage-Platform-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      photo: 'https://i.postimg.cc/0jtDd8LP/Georgia-Velvet-Single-Bed-Blush.jpg',
      oldPrice: 60,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      photo:
        'https://i.postimg.cc/q7MtQfx7/Tamsen-Curved-Upholstered-Footboard-Storage-Platform-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      photo: 'https://i.postimg.cc/XYWBGBZd/Raleigh-Wingback-Upholstered-Bed.jpg',
      oldPrice: 50,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      photo: 'https://i.postimg.cc/gcwZfWFX/Clara-Platform-Bed.jpg',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      photo: 'https://i.postimg.cc/ZRQJr2VX/The-Best-Storage-Beds.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-1',
      name: 'Chair Bristique 24',
      category: 'chair',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-2',
      name: 'Chair Ru Bristique 24',
      category: 'chair',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-3',
      name: 'Chair Ru Bristique 24',
      category: 'chair',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'Chair-4',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-1',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-2',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-3',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-4',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-1',
      name: 'Table Ru Bristique 24',
      category: 'table',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-2',
      name: 'Table Ru Bristique 24',
      category: 'table',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-3',
      name: 'Table Ru Bristique 24',
      category: 'table',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-4',
      name: 'Table Ru Bristique 24',
      category: 'table',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-1',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-2',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-3',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-4',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      oldPrice: false,
      price: 30,
      stars: 2,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-5',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      oldPrice: false,
      price: 30,
      stars: 2,
      userStars: 0,
      promo: false,
      newFurniture: true,
      favorite: false,
      compare: false,
    },
  ],
  cart: {
    products: [],
  },

  promotingProducts: {
    leftSide: {
      src: 'https://i.postimg.cc/W4RvqLDB/kse.png',
      name: 'Aenean Ru Bristique',
      priceBefore: '$350.00',
      priceAfter: '$300.00',
    },
    rightSide: {
      title1: 'Indoor ',
      title2: 'furniture',
      subtitle: 'save up to 50% of all furniture',
      src: 'https://i.postimg.cc/NMp2DZ0p/33.png',
    },
  },

  banners: [
    {
      src: 'https://i.postimg.cc/GmP3ZqKN/1.png',
      alt: 'brands logo-1',
    },
    {
      src: 'https://i.postimg.cc/s2Vfy702/2.png',
      alt: 'brands logo-2',
    },
    {
      src: 'https://i.postimg.cc/Zn1KhQ1k/3.png',
      alt: 'brands logo-3',
    },
    {
      src: 'https://i.postimg.cc/Z5zK718p/4.png',
      alt: 'brands logo-4',
    },
    {
      src: 'https://i.postimg.cc/QxTdqXTj/5.png',
      alt: 'brands logo-5',
    },
    {
      src: 'https://i.postimg.cc/dQX0d7DW/6.png',
      alt: 'brands logo-6',
    },
    {
      src: 'https://i.postimg.cc/GmP3ZqKN/1.png',
      alt: 'brands logo-7',
    },
    {
      src: 'https://i.postimg.cc/s2Vfy702/2.png',
      alt: 'brands logo-8',
    },
    {
      src: 'https://i.postimg.cc/Zn1KhQ1k/3.png',
      alt: 'brands logo-9',
    },
    {
      src: 'https://i.postimg.cc/Z5zK718p/4.png',
      alt: 'brands logo-10',
    },
    {
      src: 'https://i.postimg.cc/QxTdqXTj/5.png',
      alt: 'brands logo-11',
    },
    {
      src: 'https://i.postimg.cc/dQX0d7DW/6.png',
      alt: 'brands logo-12',
    },
  ],
  promotions: {
    leftBanner: {
      title: 'Guest Room',
      subtitle: 'Sofa',
      discount: 20,
      image:
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    rightTopBanner: {
      titleBold: 'Office',
      title: 'Chair',
      subtitle: 'collection',
      price: 200.0,
      image:
        'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    rightBottomBanner: {
      titleBold: 'Special',
      title: 'collection',
      subtitle: 'Save up 45% of furniture',
      image:
        'https://images.pexels.com/photos/545043/pexels-photo-545043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  },
  feedback: [
    {
      image:
        'https://i.postimg.cc/pTdkwW2s/laughing-businesswoman-working-in-office-with-laptop-3756679.jpg',
      alt: 'happy client',
      name: 'Jane Doe',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tristique quam. Duis lobortis ante sit amet urna faucibus, in egestas nisl mattis. Donec vitae sem eu felis consectetur laoreet. In gravida eros ligula, eget auctor est imperdiet ut.',
      description: 'Furniture client',
    },
    {
      image:
        'https://i.postimg.cc/s2sTJPbd/man-holding-clipboard-inside-room-1543924.jpg',
      alt: 'happy client',
      name: 'John Doe',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tristique quam. Duis lobortis ante sit amet urna faucibus, in egestas nisl mattis.',
      description: 'Furniture client',
    },
    {
      image: 'https://i.postimg.cc/s2mwHQRB/man-in-black-holding-phone-618613.jpg',
      alt: 'happy client',
      name: 'Adam Smith',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tristique quam. Duis lobortis ante sit amet urna faucibus, in egestas nisl mattis.',
      description: 'Furniture client',
    },
  ],

  currencies: [
    {
      active: true,
      value: 'USD',
    },
    {
      active: false,
      value: 'GBP',
    },
    {
      active: false,
      value: 'EUR',
    },
  ],
  language: [
    {
      active: true,
      value: 'English',
    },
    {
      active: false,
      value: 'Polski',
    },
    {
      active: false,
      value: 'Francais',
    },
  ],
  clientService: [
    {
      active: true,
      value: 'Help',
    },
    {
      active: false,
      value: 'FAQ',
    },
    {
      active: false,
      value: 'Contact',
    },
    {
      active: false,
      value: 'Terms & Conditions',
    },
  ],
  galleryPics: [
    {
      src: 'https://i.postimg.cc/1z77FMFv/krzeslo.png',
      alt: 'chair',
    },
    {
      src:
        'https://i.postimg.cc/g0P5zWrV/Stolik-Kawowy-Sitio-Z-oty-Jasny-D-b-Pakamera-pl.png',
      alt: 'cofee table',
    },
    {
      src: 'https://i.postimg.cc/1z77FMFv/krzeslo.png',
      alt: 'chair',
    },
    {
      src:
        'https://i.postimg.cc/g0P5zWrV/Stolik-Kawowy-Sitio-Z-oty-Jasny-D-b-Pakamera-pl.png',
      alt: 'chair',
    },
    {
      src: 'https://i.postimg.cc/1z77FMFv/krzeslo.png',
      alt: 'armchair',
    },
    {
      src:
        'https://i.postimg.cc/g0P5zWrV/Stolik-Kawowy-Sitio-Z-oty-Jasny-D-b-Pakamera-pl.png',
      alt: 'chair',
    },
  ],
};

export default initialState;