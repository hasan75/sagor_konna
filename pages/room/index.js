import RoomCard from '../../components/room/RoomCard';
const room = () => {
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
  return (
    <div style={{ background: '#ECFAFB' }} className='p-container'>
      <RoomCard data={roomData} />
    </div>
  );
};
export default room;
// export async function getStaticProps() {
//   // const url = process.env.API_URL;
//   // const roomdata = await import('./api/roomData.json');
//   // return { props: { roomdata: roomdata.default } };
//   const res = await fetch('/api/roomData', {
//     accept: 'application/json',
//   });
//   if (!res.ok) {
//     const message = `An error occured: ${res.status}`;
//     // throw new Error(message);
//   }
//   const roomData = await res.json();
//   const data = roomData;
//   // console.log(data.data.data, 'data');
//   return {
//     props: { data },
//   };
// }
