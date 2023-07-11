
import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchByLocation.scss';
import { format } from 'date-fns';
import vi from "date-fns/locale/vi";

function SearchByLocation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const startDateISO = searchParams.get('startDate');
  const endDateISO = searchParams.get('endDate');
  const numberOfGuests = searchParams.get('numberOfGuests');
  const startDate = format(new Date(startDateISO), "dd MMMM" , { locale: vi });
  const endDate = format(new Date(endDateISO), "dd MMMM", { locale: vi });
  return (
    <main className='container'>
        <section>
            <p> ? chỗ ở • {startDate} - {endDate} • {numberOfGuests} khách</p>

            <h1>Chỗ ở tại khu vực bản đồ đã chọn</h1>

            <div className='filter-section'>
                <button>Loại nơi ở</button> 
                <button>Giá</button>
                <button>Đặt ngay</button>
                <button>Phòng và phòng ngủ</button>
                <button>Bộ lọc khác</button>
            </div>
        </section>
    </main>
  )
}

export default SearchByLocation