import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getListUser } from '../../redux/slices/userReducer';
import { loginUser } from '../../redux/slices/apiRequest';

function Login() {
  // state
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // danh sách tài khoản
  const getUser = async () => {
    const rs = await axios.get('https://airbnbnew.cybersoft.edu.vn/api/users', {
      headers: {
        tokenCybersoft:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcPDEkMOgIE7hurVuZyAwNyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.z53DwWShTQ-NYmv_cyVwxzyaarjOV3xiMrElt3gwl8M',
      },
    });
    const action = getListUser(rs.data.content)
    dispatch(action)
  }
  useEffect(() => {
    getUser();
  }, [])



  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      // phone: phone,
      // password: password
      email: email
    };
    loginUser(newUser, dispatch, navigate)    
  }
  return (
    <div className='auth-form'>
      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className='auth-form__heading'>Đăng nhập</h3>
          <NavLink to={'/register'} className='auth-form__switch-nav'>Chưa có tài khoản!</NavLink>
        </div>

        <div className="auth-form__form">
          <form  onSubmit={handleLogin}>
            {/* <div className="auth-form__group">
              <input type='number' className="auth-form__input" placeholder='Nhập số điện thoại' onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <div className="auth-form__group">
              <input type='password' className="auth-form__input" placeholder='Nhập password' onChange={(e) => { setPassword(e.target.value) }} />
            </div> */}

            <div className="auth-form__group">
              <input type='email' className="auth-form__input" name='email' placeholder='Nhập email' onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className="auth-form__controls" style={{ marginTop: '0' }}>
              <button className='btn__submit btn-register-color'>Đăng nhập</button>
            </div>

            {/* <div className="auth-form__socials">

              <a href="" className='btn__submit btn-fb-color'>
                <i className="fa-brands fa-square-facebook"></i>
                Đăng nhập với Facebook
              </a>

              <a href="" className='btn__submit btn-gg-color'>
                <i className="fa-brands fa-google"></i>
                Đăng ký nhập Google
              </a>

            </div> */}
          </form>
        </div>

      </div>

    </div>
  )
}

export default Login