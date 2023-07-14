import React from 'react'
import './Travel.scss'
import { NavLink } from 'react-router-dom'
function Travel() {
    return (
        <div className='container'>
            <div className='travel'>
                <h2>Chuyến đi</h2>
                <div className='hr'></div>
                <div className='content'>
                    <strong>Chưa có chuyến đi nào được đặt ...</strong>
                    <p>Đã đến lúc phủi bụi hành lý và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo của bạn rồi</p>
                    <NavLink to={'/'} className='btn__submit btn btn-dark'>Bắt đầu tìm kiếm</NavLink>
                </div>

                <div className='hr'></div>
            </div>
        </div>
    )
}

export default Travel