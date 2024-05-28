import React from 'react';
import CustomerTestimonials from '../../../components/Home/CustomerTestimonials';
import MenuListToShow from '../../../components/Menu/MenuListToShow';
import SpecialMenu from '../../../components/Menu/SpecialMenu';

const Menu = () => {
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
    <div className='mt-6'>
      <MenuListToShow menuLists={menuLists} />
      <SpecialMenu menuLists={menuLists} />
      <CustomerTestimonials />
    </div>
  );
};

//index page for menu contain only menus

export default Menu;

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
