import React from "react";
import { useEffect, useState } from "react";
import PopupModal from "./components/PopupModal";
import UserCard from "./components/userCard";
import { data } from "./data/data";
import App from "./components/mainpage";
import HomeContainers from "./containers/HomeContainers";
const Appmain = () => {
    const [searchText, setSearchText] = useState("");
    const [dummyData, setDummyData] = useState(data);
    const [gender, setGender] = useState("");
    const [isPopup, setIsPopup] = useState(null);

    const handleSearch = (e) => {
        console.log(e.target.value.toLowerCase());
        setSearchText(e.target.value.toLowerCase());
    };
    const search = () => {
        var filtered = data.filter((data) => String(data.first_name.toLowerCase()).startsWith(searchText));
        console.log(filtered);
        setDummyData(filtered);
    };
    const handleCardClick = () => {
        console.log("card clicked");
        setIsPopup(true);
    };
    const handleclosePopup = () => {
        setIsPopup(false);
    };
    return (
        <div
            style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "22px",
                justifyContent: "center",
                margin: "0px auto",
                background: "#FFF7F0",
            }}
        >
            {/* <App /> */}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {" "}
                <input onChange={(e) => handleSearch(e)}></input>
                <button onClick={search} style={{ height: "20px", width: "50px" }}>
                    Search
                </button>
            </div>
            <div
                className="app"
                style={{
                    width: "70%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "22px",
                    justifyContent: "center",
                    margin: "0px auto",
                    background: "#FFF7F0",
                }}
            >
                {/* {data.map((item, index) => {
                return (
                    <UserCard
                        firstname={item.first_name + " " + item.last_name}
                        l
                        gender={item.gender}
                        photo={item.avatar}
                        avialable={item.available}
                        domain={item.domain}
                    />
                );
            })} */}

                {dummyData &&
                    dummyData.map((item, index) => {
                        return (
                            <UserCard
                                key={index}
                                firstname={item.first_name + " " + item.last_name}
                                gender={item.gender}
                                photo={item.avatar}
                                avialable={item.available}
                                domain={item.domain}
                                handleButtonClick={handleCardClick}
                            />
                        );
                    })}

                {isPopup && (
                    <PopupModal isOpen={true} handleclose={handleclosePopup}>
                        {/* <p onClick={handleclosePopup}>close</p> */}

                        <div
                            style={{
                                display: "flex",
                                width: "80%",
                                flexWrap: "wrap",
                                gap: "20px",
                                overflowX: "scroll",
                                padding:"50px"
                            }}
                        >
                            {/* {dummyData &&
                                dummyData.map((item, index) => {
                                    return (
                                        <UserCard
                                            key={index}
                                            firstname={item.first_name + " " + item.last_name}
                                            gender={item.gender}
                                            photo={item.avatar}
                                            avialable={item.available}
                                            domain={item.domain}
                                            handleButtonClick={handleCardClick}
                                        />
                                    );
                                })} */}
                            {dummyData &&
                                dummyData
                                    .filter((item, index, arr) => {
                                        // check if item domain is different from previous item domain
                                        return index === 0 || item.domain !== arr[index - 1].domain;
                                    })
                                    .map((item, index) => {
                                        return (
                                            <UserCard
                                                key={index}
                                                firstname={item.first_name + " " + item.last_name}
                                                gender={item.gender}
                                                photo={item.avatar}
                                                avialable={item.available}
                                                domain={item.domain}
                                                handleButtonClick={handleCardClick}
                                            />
                                        );
                                    })}
                            
                        </div>
                    </PopupModal>
                )}
            </div>
        </div>
    );
};

export default Appmain;
