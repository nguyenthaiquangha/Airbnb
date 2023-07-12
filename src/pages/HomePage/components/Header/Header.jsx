import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "/img/airbnb.jpg";
import { DateRangePicker } from "react-date-range";
import vi from "date-fns/locale/vi";
import axios from "axios";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = async (value) => {
    setSearchInput(value);
    try {
      const response = await axios.get(
        `https://airbnbnew.cybersoft.edu.vn/api/vi-tri?tinhThanh=${value}`,
        {
          headers: {
            tokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcPDEkMOgIE7hurVuZyAwNyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.z53DwWShTQ-NYmv_cyVwxzyaarjOV3xiMrElt3gwl8M",
          },
        }
      );
      const filteredSuggestions = response.data.content.filter((item) =>
        item.tinhThanh.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchInput(`${suggestion.tenViTri} - ${suggestion.tinhThanh}`);
    setShowSuggestions(false);
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const queryParams = new URLSearchParams({
    location: searchInput,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    numberOfGuests,
  });
  const searchUrl = `/search-by-location?${queryParams}`;




  useEffect(() => {
    document.addEventListener("click", handleInfor, true);
  }, [])
  const refOne = useRef();
  
  const handleInfor = (e) => {
    const inforELE = document.querySelector('#infor');
    if (!refOne.current.contains(e.target)) {
      inforELE.style.display = 'block';
    }else {
      inforELE.style.display = "none";
    }
  }

  return (
    <header>
      <div className="header-container d-flex justify-content-between align-items-center">
        <div className="header-logo">
          <NavLink to={"/"}>
            <img className="logo-img w-50" src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="d-flex search-container bg-white align-items-center">
          <input
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder={placeholder}
            className="text-center"
            style={{ outline: "none ", border: "none" }}
          />
          <NavLink
            to={"/"}
            className="d-none d-md-inline-flex  search-icon text-black "
          >
            <MagnifyingGlassIcon />
          </NavLink>

          {showSuggestions && (
            <div className="suggestions-container">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  {`${suggestion.tenViTri} - ${suggestion.tinhThanh}`}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="header-user d-flex justify-content-end align-items-center ">
          <p>Đón tiếp khách</p>
          <GlobeAltIcon className="global-icon text-black" />

          <div className="menu-user d-flex justify-content-between px-2 py-1"  ref={refOne}>
            <Bars3Icon className="menu-icon" />
            <UserCircleIcon className="user-circle-icon" />

            <div className="infor" id="infor" style={{ display: 'none' }}>
              <div className="modalInfor" id="modalInfor">
                <NavLink to={"/dangki"} className='navlink'>
                  <a>Đăng ký</a>
                </NavLink>
                <NavLink to={"/dangnhap"} className='navlink'>
                  <a>Đăng nhập</a>
                </NavLink>
                <NavLink to={"/thongtin"} className='navlink'>
                  <a>Thông tin</a>
                </NavLink>
                <NavLink to={"/trogiup"} className='navlink'>
                  <a>trợ giúp ?</a>
                </NavLink>
                <NavLink to={"/thoat"} className='navlink'>
                  <a>Thoát</a>
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </div>





      {searchInput && (
        <div className="date-range-container mx-auto">
          <DateRangePicker
            locale={vi}
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
          />
          <div className="d-flex align-items-center">
            <h2>Khách</h2>
            <UsersIcon className="user-icon" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="input-guest"
            />
          </div>
          <div className="d-flex">
            <button onClick={resetInput} className="cancel-button">
              Hủy
            </button>
            <NavLink to={searchUrl} activeClassName="active-link">
              <button onClick={resetInput} className="search-button">
                Tìm kiếm
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
