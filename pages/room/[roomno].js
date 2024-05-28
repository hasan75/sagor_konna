import SingleroomDetails from '../../components/room/SingleroomDetails';
import {useRouter} from "next/router";
// export const getStaticPaths = async () => {
//   const res = await fetch('/api/roomData');
//   const data = await res.json();
//   const paths = data.map((curElem) => {
//     return {
//       params: {
//         roomno: curElem.id.toString(),
//       },
//     };
//   });
//
//   return {
//     paths,
//     fallback: true,
//   };
// };
// export const getStaticProps = async (context) => {
//   const id = context.params.roomno;
//   const res = await fetch(`/api/roomData`);
//   const data = await res.json();
//   const singleRoom = data.find((singleData) => singleData.id.toString() === id);
//   // console.log(singleRoom);
//   return {
//     props: {
//       singleRoom,
//     },
//   };
// };
const myData = () => {
  const router = useRouter();
  const roomData = [
    {
      "id": 1,
      "title": "See View",
      "img": "/images/Room/demo_room_04.jpg",
      "status": "Popular",
      "type": "Guest",
      "time": "night",
      "category": "Economic Room",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
      "price": "4200.0",
      "count": "5",
      "feet": "70",
      "roomImages": [
        "/images/Room/demo_room_04.jpg",
        "/images/Room/room_one_01.jpg",
        "/images/Room/room_one_02.jpg",
        "/images/Room/room_one_03.jpg",
        "/images/Room/room_one_04.jpg",
        "/images/Room/room_one_05.jpg",
        "/images/Room/room_one_06.jpg",
        "/images/Room/room_one_07.jpg"
      ],
      "similarRoom": [
        {
          "id": 2,
          "title": "See View",
          "img": "/images/Room/demo_room_03.jpg",
          "status": "Popular",
          "type": "Guest",
          "category": "Standard Room",
          "airCondition": "line_style",
          "breakfast": "free_breakfast",
          "time": "night",
          "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
          "price": "1600.0",
          "count": "3",
          "feet": "55",
          "roomImages": [
            "/images/Room/demo_room_03.jpg",
            "/images/Room/room_one_01.jpg",
            "/images/Room/room_one_02.jpg",
            "/images/Room/room_one_03.jpg",
            "/images/Room/room_one_04.jpg",
            "/images/Room/room_one_05.jpg",
            "/images/Room/room_one_06.jpg",
            "/images/Room/room_one_07.jpg"
          ]
        },
        {
          "id": 3,
          "title": "Nature view",
          "img": "/images/Room/demo_room_02.jpg",
          "type": "Guest",
          "time": "night",
          "category": "Economic Room",
          "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
          "price": "2200.0",
          "count": "4",
          "feet": "56",
          "roomImages": [
            "/images/Room/demo_room_02.jpg",
            "/images/Room/room_one_01.jpg",
            "/images/Room/room_one_02.jpg",
            "/images/Room/room_one_03.jpg",
            "/images/Room/room_one_04.jpg",
            "/images/Room/room_one_05.jpg",
            "/images/Room/room_one_06.jpg",
            "/images/Room/room_one_07.jpg"
          ]
        },
        {
          "id": 4,
          "title": "See View",
          "img": "/images/Room/demo_room_01.jpg",
          "type": "Guest",
          "time": "night",
          "category": "Standard Room",
          "airCondition": "line_style",
          "breakfast": "free_breakfast",
          "status": "Popular",
          "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
          "price": "3500.0",
          "count": "2",
          "feet": "66",
          "roomImages": [
            "/images/Room/demo_room_01.jpg",
            "/images/Room/room_one_01.jpg",
            "/images/Room/room_one_02.jpg",
            "/images/Room/room_one_03.jpg",
            "/images/Room/room_one_04.jpg",
            "/images/Room/room_one_05.jpg",
            "/images/Room/room_one_06.jpg",
            "/images/Room/room_one_07.jpg"
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "See View",
      "img": "/images/Room/demo_room_03.jpg",
      "status": "Popular",
      "type": "Guest",
      "category": "Standard Room",
      "airCondition": "line_style",
      "breakfast": "free_breakfast",
      "time": "night",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
      "price": "1600.0",
      "count": "3",
      "feet": "55",
      "roomImages": [
        "/images/Room/demo_room_03.jpg",
        "/images/Room/room_one_01.jpg",
        "/images/Room/room_one_02.jpg",
        "/images/Room/room_one_03.jpg",
        "/images/Room/room_one_04.jpg",
        "/images/Room/room_one_05.jpg",
        "/images/Room/room_one_06.jpg",
        "/images/Room/room_one_07.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Nature view",
      "img": "/images/Room/demo_room_02.jpg",
      "type": "Guest",
      "time": "night",
      "category": "Economic Room",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
      "price": "2200.0",
      "count": "4",
      "feet": "56",
      "roomImages": [
        "/images/Room/demo_room_02.jpg",
        "/images/Room/room_one_01.jpg",
        "/images/Room/room_one_02.jpg",
        "/images/Room/room_one_03.jpg",
        "/images/Room/room_one_04.jpg",
        "/images/Room/room_one_05.jpg",
        "/images/Room/room_one_06.jpg",
        "/images/Room/room_one_07.jpg"
      ]
    },
    {
      "id": 4,
      "title": "See View",
      "img": "/images/Room/demo_room_01.jpg",
      "type": "Guest",
      "time": "night",
      "category": "Standard Room",
      "airCondition": "line_style",
      "breakfast": "free_breakfast",
      "status": "Popular",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
      "price": "3500.0",
      "count": "2",
      "feet": "66",
      "roomImages": [
        "/images/Room/demo_room_01.jpg",
        "/images/Room/room_one_01.jpg",
        "/images/Room/room_one_02.jpg",
        "/images/Room/room_one_03.jpg",
        "/images/Room/room_one_04.jpg",
        "/images/Room/room_one_05.jpg",
        "/images/Room/room_one_06.jpg",
        "/images/Room/room_one_07.jpg"
      ]
    }
  ];
  const singleRoom = roomData.find((singleData) => singleData.id.toString() === router.query.roomno);

  // console.log(singleRoom)
  return (
    <div style={{ background: '#ECFAFB' }} className='p-container'>
      <SingleroomDetails singleRoom={singleRoom} />
    </div>
  );
};

export default myData;
