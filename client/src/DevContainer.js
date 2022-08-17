import React from "react";
import DevCard from "./DevCard";

function DevContainer({ devList }) {




  const renderDevs = devList.map((dev) => {
    return <DevCard key={dev.id} dev={dev}/>
})


return (
    <div>
        <center>{renderDevs}</center>
    </div>
)
}
export default DevContainer