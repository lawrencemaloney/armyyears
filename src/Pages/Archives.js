import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import PDFRef from "../Json Files/bo_archive_data.json";



function Archives() {
  return (
    <>
        <Header />
        <Sidebar />


      {/* <div className="archivewrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center "> */}

      <div className="imgcontainer mx-[1%] grid grid-cols-1 mobile:gap-2	 mobile:grid-cols-3 tablet:grid-cols-4    ">

        {/* <a href="../media//BO PDFs/BO Archives/Berlin Observer archive1945/Berlin Obsever V1_N1_Sept_25.pdf">

      <img src="/media/BO page1 images/Berlin Observer archive1945/Berlin Obsever V1_N1_Sept_25.jpg"/>
    </a> */}
        
    {PDFRef.map((issue) => (
              <div
                key={issue.id}
                className="image-card m-[5px] max-h-[350px] cursor-pointer  object-cover p-[3px]  	 "
              >
              <a href={issue.href_url}>

                <img
                  className="image aspect-square max-h-[250px] min-h-[150px] w-[100%] rounded object-cover"
                  src={issue.url}
                  alt={issue.caption}

                  // onClick={() => {
                  //   setSelectedImg(issue.url);
                  //   // setImageCaption(image.caption)
                  // }}
                />
                <p>{issue.caption}</p>
                </a>
              </div>
            ))}
          

   



        <div>
          <div className="mt-[300px]">Archives page goes here</div>
          <h1 className="mt-[200px]">Archivin going on here!</h1>
        </div>
      </div>
    </>
  );
}

export default Archives;
