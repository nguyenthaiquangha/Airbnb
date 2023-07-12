import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import vi from "date-fns/locale/vi";
import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSearch } from "src/redux/slices/Search";
import "./Header.scss";
import logo from "/img/airbnb.jpg";

function Header() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchReducer);
  console.log(search);

  const [searchInput, setSearchInput] = useState(search.location || "");
  const [startDate, setStartDate] = useState(
    search.startDate ? new Date(search.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    search.endDate ? new Date(search.endDate) : new Date()
  );
  const [numberOfGuests, setNumberOfGuests] = useState(
    search.numberOfGuests || 1
  );
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [maViTri, setMaViTri] = useState("");

  const getViTri = async () => {
    try {
      const response = await axios.get(
        "https://airbnbnew.cybersoft.edu.vn/api/vi-tri",
        {
          headers: {
            tokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcPDEkMOgIE7hurVuZyAwNyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.z53DwWShTQ-NYmv_cyVwxzyaarjOV3xiMrElt3gwl8M",
          },
        }
      );
      const listViTri = response.data.content;
      setSuggestions(listViTri);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getViTri();
  }, []);

  const handleSearch = (value) => {
    const filteredSuggestions = suggestions.filter((item) =>
      item.tinhThanh.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    const location = `${suggestion.tenViTri} - ${suggestion.tinhThanh}`;
    setSearchInput(location);
    setShowSuggestions(false);
    setMaViTri(suggestion.id);
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleNumberOfGuestsChange = (e) => {
    const value = e.target.value;
    setNumberOfGuests(value);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSubmit = () => {
    dispatch(
      setSearch({
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
        maViTri,
      })
    );
    clearInput();
  };

  const clearInput = () => {
    setSearchInput("");
  };

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
            placeholder="Nhập tỉnh thành"
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

          <div className="menu-user d-flex justify-content-between px-2 py-1">
            <Bars3Icon className="menu-icon" />
            <UserCircleIcon className="user-circle-icon" />
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
              onChange={handleNumberOfGuestsChange}
              type="number"
              min={1}
              className="input-guest"
            />
          </div>
          <div className="d-flex">
            <button onClick={clearInput} className="cancel-button">
              Hủy
            </button>
            <NavLink to="/search-by-location" activeClassName="active-link">
              <button onClick={handleSubmit} className="search-button">
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
