import React from 'react';
import CustomerTestimonials from '../../components/Home/CustomerTestimonials';
import OfferList from '../../components/Offers/OfferList';
import OfferTopBanner from '../../components/Offers/OfferTopBanner';
import SagorKonnaCommon from '../../components/Offers/SagorKonnaCommon';

const Offers = () => {
  // console.log(offer);
  const offer = [
      {
          "id": 1,
          "name": "Early Winter Package",
          "title": "Enjoy your holiday at Sagor Konaa",
          "picture": "/images/offers/2earlywinter.svg",
          "desc": "Sagor Konna Invites you all.",
          "price": 7000
      },
      {
          "id": 2,
          "name": "Honeymoon Package",
          "title": "Make your experience an unforgettable one with your partner at Sagor Konaa",
          "picture": "/images/offers/1honeymoon.svg",
          "desc": "Sagor Konna Invites you all.",
          "price": 8000
      },
      {
          "id": 0,
          "name": "Anniversary Celebration Package",
          "title": "Make your experience an unforgettable one with your partner at Sagor Konaa",
          "picture": "/images/offers/3saycation.svg",
          "desc": "Sagor Konna Invites you all.",
          "price": 8000
      },
      {
          "id": 3,
          "name": "Working Day Packages",
          "title": "Enjoy your holiday at Sagor Konaa",
          "picture": "/images/offers/4average.svg",
          "desc": "Sagor Konna Invites you all.",
          "price": 6000
      },
      {
          "id": 4,
          "name": "Early Winter Family Package",
          "title": "Enjoy your holiday at Sagor Konaa",
          "picture": "/images/offers/5family.svg",
          "desc": "Sagor Konna Invites you all.",
          "price": 12000
      }
  ]
  return (
    <div>
      <OfferTopBanner />
      <OfferList offer={offer} />
      <SagorKonnaCommon />
      <CustomerTestimonials />
    </div>
  );
};

export default Offers;

// export async function getStaticProps() {
//   const res = await fetch('/api/offer');
//   const offer = await res.json();
//
//   return {
//     props: {
//       offer,
//     },
//   };
// }
