import React, { useState } from "react";
import { record_list } from "../../assets/assets.js";
import { Switch, Typography } from "antd";
import "./Search.css";
import logo from "../../assets/logo.png";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredrecords, setFilteredrecords] = useState(record_list);
  const [ellipsis, setEllipsis] = useState(true);
  const { Paragraph } = Typography;
  function handleSearch(e) {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    const filtered = record_list.filter((record) =>
      record.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredrecords(filtered);
  }
  return (
    <>
      <div className="rec-nav">
        <div>
          <img src={logo} className="logo" alt="aasiyan-logo" />
        </div>
        <div>
          <h1 className="logo-title">Aasiyan</h1>
        </div>
      </div>
      <center>
        <div className="hero-buttons search-btn">
          <input
            type="text"
            placeholder="Search for a record..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="button" className="btn btn-red">
            Search
          </button>
        </div>
      </center>
      {filteredrecords.length === 0 ? (
        <p className="not-found">record not found</p>
      ) : (
        <div className="record-grid">
          {filteredrecords.map((record) => (
            <div key={record.id} className="records-margine">
              <div className="records-card">
                <img
                  src={record.image}
                  alt={record.name}
                  className="record-img"
                />
                <div className="record-content">
                  <h2 className="common-colour record-title">{record.name}</h2>
                  <h3 className="common-colour record-date">
                    Held at : {record.date}
                  </h3>

                  <Switch
                    checked={ellipsis}
                    onChange={() => {
                      setEllipsis(!ellipsis);
                    }}
                    style={{ display: "none" }}
                  />

                  <Paragraph
                    className="antd-style common-colour record-overview"
                    ellipsis={
                      ellipsis
                        ? { rows: 6, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    {record.description}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
