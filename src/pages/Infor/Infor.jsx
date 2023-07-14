import React from 'react'
import { NavLink } from 'react-router-dom'
import './Infor.scss'
function Infor() {
  return (
    <div className='auth-form'>
      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className='auth-form__heading'>Thông tin cá nhân</h3>
        </div>
        <div className="auth-form__form">
          <form action="" method="get">
            <div className="auth-form__group">
              <label htmlFor="">Họ tên</label>
              <input type='text' className="auth-form__input" />
            </div>
            <div className="auth-form__group">
              <label htmlFor="">Số điện thoại</label>
              <input type='number' className="auth-form__input" />
            </div>
            <div className="auth-form__group">
              <label htmlFor="">Email</label>
              <input type='email' className="auth-form__input" />
            </div>
            <div className="auth-form__group">
              <label htmlFor="">Mật khẩu</label>
              <input type='password' className="auth-form__input" />
            </div>
            <div className="auth-form__group">
              <label htmlFor="">Ngày sinh</label>
              <input type='date' className="auth-form__input" />
            </div>
            <div className='auth-form__group submit_infor'>
              <button className='btn__submit btn__edit__user btn btn-warning'>Sửa thông tin</button>
              <button className='btn__submit btn__update__user  btn btn-success'>Cập nhật</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Infor