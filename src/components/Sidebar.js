import React from 'react'
// import { FaInbox, FaRegCalenderAlt, FaRegCalender } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  console.log(selectedTab)
  return (
    <div className="sidebar">
      <div className="active" onClick={() => setSelectedTab("INBOX")}>
        {/* <FaInBox className="icon" /> */}
        Inbox </div>

      <div onClick={() => setSelectedTab("TODAY")} > Today </div>

      <div onClick={() => setSelectedTab("NEXT_7")}>Next 7 days</div>
    </div>
  )
}

export default Sidebar
