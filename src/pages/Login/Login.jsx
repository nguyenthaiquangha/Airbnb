import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='auth-form'>
      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className='auth-form__heading'>Đăng nhập</h3>
          <NavLink to={'/register'} className='auth-form__switch-nav'>Chưa có tài khoản!</NavLink>
        </div>

        <div className="auth-form__form">
          <div className="auth-form__group">
            <input type='number' className="auth-form__input" placeholder='Nhập số điện thoại' />
          </div>
          <div className="auth-form__group">
            <input type='password' className="auth-form__input" placeholder='Nhập password' />
          </div>
          <div className="auth-form__controls" style={{marginTop: '0'}}>
            <button className='btn__submit btn-register-color' >Đăng nhập</button>
          </div>

          <div className="auth-form__socials">

            <a href="" className='btn__submit btn-fb-color'>
              <i className="fa-brands fa-square-facebook"></i>
              Đăng nhập với Facebook
            </a>

            <a href="" className='btn__submit btn-gg-color'>
              <i className="fa-brands fa-google"></i>
              Đăng ký nhập Google
            </a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Login