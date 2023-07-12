import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SearchByLocation.scss";
import axios from "axios";

function SearchByLocation() {
  const search = useSelector((state) => state.searchReducer);
  const startDate = format(new Date(search.startDate), "dd MMMM", {
    locale: vi,
  });
  const endDate = format(new Date(search.endDate), "dd MMMM", { locale: vi });
  const maViTri = useSelector((state) => state.searchReducer.maViTri);
  const [listRoom, setListRoom] = useState([]);
  const getRoomByLocation = async () => {
    try {
      const response = await axios.get(
        `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${maViTri}`,
        {
          headers: {
            tokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcPDEkMOgIE7hurVuZyAwNyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.z53DwWShTQ-NYmv_cyVwxzyaarjOV3xiMrElt3gwl8M",
          },
        }
      );
      setListRoom(response.data.content);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getRoomByLocation();
  }, []);
  return (
    <main className="container">
      <section>
        <p>
          Có {listRoom.length} chỗ ở • {startDate} - {endDate} • {search.numberOfGuests} khách
        </p>

        <h1>Chỗ ở tại khu vực bản đồ đã chọn</h1>

        <div className="filter-section">
          <button>Loại nơi ở</button>
          <button>Giá</button>
          <button>Đặt ngay</button>
          <button>Phòng và phòng ngủ</button>
          <button>Bộ lọc khác</button>
        </div>

        <div className='room-list'>
        {listRoom.map(room => (
          <div key={room.id} className='room-item'>
            <img src={room.hinhAnh} alt=".." />
            <h2>{room.tenPhong}</h2>
            <p>{room.description}</p>
            <p>{room.khach} khách</p>
            <p>{room.giuong} giường</p>
            <p>{room.phongTam} phòng tắm</p>
            {room.mayGiat && <p>Máy giặt</p>}
            {room.banLa && <p>Bàn là</p>}
            {room.tivi && <p>Ti vi</p>}
            {room.wifi && <p>Wifi</p>}
            {room.bep && <p>Bếp</p>}
            {room.doXe && <p>Đỗ xe</p>}
            {room.hoBoi && <p>Hồ bơi</p>}
            {room.banUi && <p>Bàn ủi</p>}
            <p>{room.giaTien}$/ngày </p>
          </div>
        ))}
      </div>
      </section>
    </main>
  );
}

export default SearchByLocation;
