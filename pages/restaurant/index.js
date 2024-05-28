import Head from 'next/head';
import React from 'react';
import CustomerTestimonials from '../../components/Home/CustomerTestimonials';
import HomeBlogs from '../../components/Home/HomeBlogs';
import RestaurantGallery from '../../components/Restaurant/RestaurantGallery';
import RestaurantMenu from '../../components/Restaurant/RestaurantMenu';
import RestaurantSummary from '../../components/Restaurant/RestaurantSummary';
import RestaurantTeam from '../../components/Restaurant/RestaurantTeam';
import RestaurantVideoComponent from '../../components/Restaurant/RestaurantVideoComponent';
import TopBannerForRestaurnat from '../../components/Restaurant/TopBannerForRestaurnat';
import restaurantStyles from './Restaurant.module.css';

const Restaurant = () => {
  const menuLists = [
    {
      "id": 1,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/1.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 420
    },
    {
      "id": 2,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/2.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 430
    },
    {
      "id": 3,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/3.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 520
    },
    {
      "id": 4,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/4.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 720
    },
    {
      "id": 5,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/5.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 490
    },
    {
      "id": 6,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/1.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 410
    },
    {
      "id": 7,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/2.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 550
    },
    {
      "id": 8,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/4.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 650
    },
    {
      "id": 9,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/5.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 550
    },
    {
      "id": 10,
      "title": "Peyalla with Sea Food",
      "img": "/images/restaurant/menu/2.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 650
    },
    {
      "id": 11,
      "title": "Boiled Crayfish",
      "img": "/images/restaurant/menu/5.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 650
    },
    {
      "id": 12,
      "title": "Casserole",
      "img": "/images/restaurant/menu/1.jpg",
      "description": "Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles",
      "price": 650
    }
  ]
  // console.log(menuLists);
  return (
    <div>
      <Head>
        <title>Restaurant Sagor Konna</title>
        <meta
          name='Restaurant description'
          content='Sagor Konna Resort is a fabulous resort  situated in Kuakata with a great restaurant, Bangladesh'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* material icon of google  */}
      </Head>
      <main>
        <TopBannerForRestaurnat />
        <RestaurantMenu menuLists={menuLists} />
        <RestaurantGallery />
        <RestaurantSummary />
        <RestaurantTeam />
        <RestaurantVideoComponent />
        <CustomerTestimonials />
        <HomeBlogs />
      </main>
    </div>
  );
};

export default Restaurant;

// export async function getStaticProps() {
//   const res = await fetch('/api/menuListData', {
//     accept: 'application/json',
//   });
//   // console.log(res);
//   const menuLists = await res.json();
//   return {
//     props: { menuLists: menuLists },
//   };
// }
