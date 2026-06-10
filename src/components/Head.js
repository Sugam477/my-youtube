import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  useEffect(()=>{
// that is all debouncing code
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  },[searchQuery])

  //till here is debouncing code

  const getSearchSuggestions = async () => {
  console.log("API CALL", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  }

  const dispatch = useDispatch();
const toggleMenuHandler = () => {
dispatch(toggleMenu());
}
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg" >
      <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
        />

        <a href="/">
        <img
        className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
          <ul>
            <li className="py-2 shadow-sm">🔍 Iphone</li>
            <li className="py-2 shadow-sm">🔍 Iphone</li>
            <li className="py-2 shadow-sm">🔍 Iphone</li>
            <li className="py-2 shadow-sm">🔍 Iphone</li>
            <li className="py-2 shadow-sm">🔍 Iphone</li>
            <li className="py-2 shadow-sm">🔍 Iphone</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          alt="user-icon"
          src="https://img.magnific.com/premium-vector/user-icon-vector_1272330-86.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
