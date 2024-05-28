import GalleryImg from '../../components/Gallery/GalleryImg';
const Gallery = () => {
  const imgData = [
    {
      "id": 1,
      "galleryImg": "/images/Gallary/img-01.jpg"
    },
    {
      "id": 2,
      "galleryImg": "/images/Gallary/img-14.jpg"
    },
    {
      "id": 3,
      "galleryImg": "/images/Gallary/img-03.jpg"
    },
    {
      "id": 5,
      "galleryImg": "/images/Gallary/img-15.jpg"
    },
    {
      "id": 6,
      "galleryImg": "/images/Gallary/img-05.jpg"
    },
    {
      "id": 7,
      "galleryImg": "/images/Gallary/img-06.jpg"
    },
    {
      "id": 8,
      "galleryImg": "/images/Gallary/img-07.jpg"
    },
    {
      "id": 9,
      "galleryImg": "/images/Gallary/img-16.jpg"
    },
    {
      "id": 10,
      "galleryImg": "/images/Gallary/img-18.jpg"
    },
    {
      "id": 11,
      "galleryImg": "/images/Gallary/img-10.jpg"
    }
  ]
  return (
    <div className='p-container'>
      <GalleryImg imgData={imgData} />
    </div>
  );
};
export default Gallery;

// export async function getStaticProps() {
//   // const roomdata = await import('./api/roomData.json');
//   // return { props: { roomdata: roomdata.default } };
//   const res = await fetch('/api/gallery', {
//     accept: 'application/json',
//   });
//   // console.log((res));
//   const imgData = await res.json();
//   return {
//     props: { imgData: imgData },
//   };
// }
