import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";


function Archives() {
  return (
    <>
        <Header />
        <Sidebar />


      <div className="archivewrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center ">

        <div>
          <div className="mt-[300px]">Archives page goes here</div>
          <h1 className="mt-[200px]">Archivin going on here!</h1>
        </div>
      </div>
    </>
  );
}

export default Archives;
