import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SearchByLocation.scss";
import { HeartIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import MapLocation from "src/components/LiveAnyWhere/components/MapLocation";

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
  }, [maViTri]);
  return (
    <main className="container">
      <section>
        <p>
          Có {listRoom.length} chỗ ở • {startDate} - {endDate} •{" "}
          {search.numberOfGuests} khách
        </p>

        <h1>Chỗ ở tại khu vực bản đồ đã chọn</h1>

        <div className="filter-section">
          <button>Loại nơi ở</button>
          <button>Giá</button>
          <button>Đặt ngay</button>
          <button>Phòng và phòng ngủ</button>
          <button>Bộ lọc khác</button>
        </div>
        <div className="row">
          <div className="room-list col-8">
            {listRoom.map((room) => (
              <div key={room.id} className="room-item row">
                <div className="col-4 left">
                  <img src={room.hinhAnh} alt=".." />
                </div>
                <div className="col-8 right">
                  <div className="d-flex justify-content-between">
                    <h2>{room.tenPhong}</h2>
                    <HeartIcon className="heart-icon" />
                  </div>
                  <span>
                    {room.khach} khách • {room.giuong} giường • {room.phongTam}{" "}
                    phòng tắm
                  </span>
                  <br />
                  {room.mayGiat && <span>Máy giặt</span>}
                  {room.banLa && <span> • Bàn là</span>}
                  {room.tivi && <span> • Ti vi</span>}
                  {room.wifi && <span> • Wifi</span>}
                  {room.bep && <span> • Bếp</span>}
                  {room.doXe && <span> • Đỗ xe</span>}
                  {room.hoBoi && <span> • Hồ bơi</span>}
                  {room.banUi && <span> • Bàn ủi</span>}
                  <p>
                    <span>${room.giaTien}</span>/đêm
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 map-container">
            <MapLocation />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SearchByLocation;
