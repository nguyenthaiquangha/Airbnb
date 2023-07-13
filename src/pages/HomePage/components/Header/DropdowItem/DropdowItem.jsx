import React from 'react'
import { NavLink } from 'react-router-dom'
import './DropdowItem.scss'
function DropdowItem(props) {
    return (
        <div className='dropdown-item'>
                <NavLink to={props.src} className='nav-link' style={{fontSize: '1.4rem'}}>{props.text}</NavLink>
        </div>
    )
}

export default DropdowItem


/**
 *  <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} style={{ display: 'block', position: 'absolute', top: '50px', right: '0', width: '150px' }} >
              <ul>
                <DropdowItem text={'Đăng kí'} src={'/dangki'} />
                <DropdowItem text={'Đăng nhập'} src={'/dangnhap'} />
                <DropdowItem text={'Thông tin'} src={'/thongtin'} />
                <DropdowItem text={'Trợ giúp'} src={'/trogiup'} />
                <DropdowItem text={'Thoát'} src={'/thoat'} />
              </ul>
            </div>
 */