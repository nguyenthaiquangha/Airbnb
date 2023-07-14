import React from 'react'
import './Register.scss'
import { NavLink } from 'react-router-dom'
function Register() {
  return (
    <div className='auth-form'>
      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className='auth-form__heading'>Đăng ký</h3>
          <NavLink to={'/login'} className='auth-form__switch-nav'>Đăng nhập</NavLink>
        </div>

        <div className="auth-form__form">
          <div className="auth-form__group">
            <input type='text' className="auth-form__input" placeholder='Nhập họ tên' />
          </div>
          <div className="auth-form__group">
            <input type='number' className="auth-form__input" placeholder='Nhập số điện thoại' />
          </div>
          <div className="auth-form__group">
            <input type='email' className="auth-form__input" placeholder='Nhập email' />
          </div>
          <div className="auth-form__group">
            <input type='password' className="auth-form__input" placeholder='Nhập password' />
          </div>
          <div className="auth-form__group">
            <input type='password' className="auth-form__input" placeholder='Nhập lại password' />
          </div>
          <div className="auth-form__group">
            <input type='date' className="auth-form__input" placeholder='Ngày sinh' />
          </div>
          <div className="auth-form__group">
            <select name="" id="" className='auth-form__input'>
              <option value="0" >Giới tính</option>
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
              <option value="1">Khác</option>
            </select>
          </div>

          <div className="auth-form__controls">
            <button className='btn__submit btn-register-color'>Đăng ký</button>
          </div>

          <div className="auth-form__socials">

            <a href="" className='btn__submit btn-fb-color'>
              <i className="fa-brands fa-square-facebook"></i>
              Đăng ký với Facebook
            </a>

            <a href="" className='btn__submit btn-gg-color'>
              <i className="fa-brands fa-google"></i>
              Đăng ký với Google
            </a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Register