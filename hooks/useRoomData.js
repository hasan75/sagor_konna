import { useState, useEffect } from 'react';

const useRoomData = () => {
  const [skrRooms, setSkrRooms] = useState([]);

  useEffect(() => {
    fetch('/api/roomData')
      .then((res) => res.json())
      .then((data) => setSkrRooms(data));
  }, []);

  return { skrRooms };
};

export default useRoomData;
