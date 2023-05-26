import React, { useEffect, useState } from "react";
import "../Components/MyPhotos.css";
import "../index.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaCamera  } from "react-icons/fa";

import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import imageRef from "../imagedata.json";
import ImageSlider from "../Components/ImageSlider";


function MyPhotos() {
  const [group, setGroup] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isGrpOpen, setIsGrpOpen] = useState(false);

  const GroupButton = ({ name, handleSetgroup, groupActive }) => {
    return (

      <button
        className={`group ml-[10px] flex w-full  flex-col    p-[2px] text-center  hover:scale-[1.1] hover:text-red-400  ${
          groupActive ? "text-red-400" : null
        }`}
        onClick={() => {
          // console.log('Click - ',e)
          handleSetgroup(name);
          setIsGrpOpen(!isGrpOpen);
          setSelectedImg(null);
        }}
      >
        {/* {name.toUpperCase()} */}
        {name}
      </button>
    );
  };

  useEffect(() => {
    group === "All"
      ? setFilteredImages(imageRef)
      : setFilteredImages(
          imageRef.filter((imageRef) => imageRef.group === group)
        );
  }, [group]);

  return (
    <>
    <Header />
    <Sidebar />
{/* 
      <div className='{groupnav  fixed  top-0 h-full   left-0  z-20  bg-[#ccc9bc] ${isGrpOpen ? "translate-x-0" : "translate-x-full  "} ease-in-out duration-300`}>'> */}
<div className="fixed text-black  z-30 flex items-center cursor-pointer h-[24px] w-[24px]  left-6 top-120">



{!isGrpOpen ? 
    (
        <FaAngleDoubleLeft
          className="categoryopen  text-black  z-50 flex items-center cursor-pointer h-[24px] w-[24px] fixed left-6 top-4 font-light	" onClick={() => setIsGrpOpen(!isGrpOpen)}>
        </FaAngleDoubleLeft> 

          
        // <button  className="flex fixed -rotate-90 top-110 left-0 border items-center border-black p-2 rounded-md bg-yellow-500 text-black  z-30  cursor-pointer " onClick={() => setIsGrpOpen(!isGrpOpen)}>Hide Catagories</button>

    )
    :
    (
      <FaCamera 
      className="categoryopen  text-4xl text-black  items-center cursor-pointer fixed left-6 top-6 z-50 w-[24px] h-[24px]"
      onClick={() => setIsGrpOpen(!isGrpOpen)}>
    </FaCamera>


    // <button  className="flex -rotate-90 origin-top-left	 fixed top-110 left-0 border items-center border-black p-2 rounded-md bg-yellow-500 text-black  z-30  cursor-pointer  " onClick={() => setIsGrpOpen(!isGrpOpen)}> Show Catagories </button>

    )
}
      <div
        className={`groupnav top-0 left-0 w-full  bg-[#ccc9bc]  fixed h-full z-40  ${isGrpOpen ? "-translate-x-full " : "translate-x-0  "} ease-in-out duration-300`}>

        
      <div className=" h-full w-[235px] landscape:w-[80%] mt-8  space-y-[15px] flex flex-col   text-[26px] text-black m-auto ">
        <p className="mt-10 text-[36px] ">Categories</p>
        <div className=" landscape:grid landscape:grid-cols-2 ">

        <GroupButton
          name="Army"
          groupActive={group === "Army" ? true : false}
          handleSetgroup={setGroup}
        />

        <GroupButton
          name="By Request"
          groupActive={group === "By Request" ? true : false}
          handleSetgroup={setGroup}
        />

        <GroupButton
          name="Berlin"
          groupActive={group === "Berlin" ? true : false}
          handleSetgroup={setGroup}
        />

        <GroupButton
          name="Amsterdam"
          groupActive={group === "Amsterdam" ? true : false}
          handleSetgroup={setGroup}
        />

        <GroupButton
          name="Ferry"
          groupActive={group === "Ferry" ? true : false}
          handleSetgroup={setGroup}
        />
        <GroupButton
          name="London"
          groupActive={group === "London" ? true : false}
          handleSetgroup={setGroup}
        />
        <GroupButton
          name="Oxford"
          groupActive={group === "Oxford" ? true : false}
          handleSetgroup={setGroup}
        />

        <GroupButton
          name="All"
          groupActive={group === "All" ? true : false}
          handleSetgroup={setGroup}
        />
      </div>
      </div>
      </div>
</div>





      {/* <div className='bg-black	'> */}
      <div className="pageContainer  ml-[5px] flex w-full flex-col    text-black  ">
        {/* <div className="subhead  text-white   z-auto  w-[100vw] bg-black h-[100px] fixed top-0 "> */}
        <h1 className="  text-center text-3xl">My Photos</h1>
        {/* </div> */}

        {/* {!isGrpOpen ? (
          <button onClick={() => setIsGrpOpen(!isGrpOpen)}>
            <AiOutlineMenu className=" bg-black   z-[35]  h-[32px] w-[32px]	cursor-pointer hover:scale-[1.2] mobile:hidden "></AiOutlineMenu>
          </button>
        ) : (
          <button onClick={() => setIsGrpOpen(!isGrpOpen)}>
            <AiOutlineClose
              className=" bg-#fffbeb  
							   z-[35]  h-[32px] w-[32px]	cursor-pointer hover:scale-[1.2]  mobile:hidden"
            ></AiOutlineClose>
          </button>
        )} */}

        {/* <div className={`groups p-4 grid-col-start-1 col-span-2 bg-white text-black  overflow-y-scroll  h-[35px] w-screen
				tablet:h-[100%] text-[16px] tablet:w-[200px] ${isGrpOpen ? 'translate-x-0 ' : 'translate-x-full tablet:translate-x-0'} ease-in-out duration-700`}> */}

        {/* </div> */}

        <div className="textimagecontainer z-0  m-[2%] h-full w-[90%] 	">
          {/* <div className={`textimagecontainer  grid-col-start-1 col-span-12 h-full w-[100%] m-[2%] mobile:grid-col-start-3 mobile:col-span-8 ${!isGrpOpen ? 'mobile:visible ' : ' mobile:hidden '} `}> */}

          <div className="textcontainer mx-8  mb-[2rem]  text-[22px] leading-[32px]    ">

            {group === "Army" && (
              <div className="p-2     leading-[32px]  	">
                These are some of the photos I took while in the Army as part of
                my job as Battalion PIO clerk. Lots of award presentations,
                baseball coverage, official Army ceremonies, field training
                exercises, and miscellaneous pictures taken while covering those
                events. I particularly enjoyed taking pictures of the Brigade
                baseball games.
              </div>
            )}
            {group === "By Request" && (
              <div className="p-2    leading-[32px]   	">
                I did some “studio” work, including a wedding, at the request of
                friends who wanted photos taken but didn’t want to pay for them.
                it was a chance Ito learn without the pressure that comes with
                charging for the service. If they didn’t like the results, they
                got exactly what they paid for.
              </div>
            )}
            {group === "Berlin" && (
              <div className="p-2    leading-[32px]   	">
                During the 18 months, I spent there, I tried to capture unique
                views of everyday life in Berlin, including time spent with my
                friends. On the weekends, young people would gather to buy and
                sell crafts on the sidewalk outside the shops on the
                Kurfürstendamm, one of Berlin’s most famous shopping areas.
                Berlin had a large amount of space dedicated to parks.
              </div>
            )}
            {group === "Amsterdam" && (
              <div className="p-2    leading-[32px]   	">
                Amsterdam Photos ==== ipsum dolor sit amet consectetur,
                adipisicing elit. Omnis eveniet soluta inventore minus atque,
                sapiente optio consectetur rem culpa illum quisquam hic dolore
                harum, expedita distinctio vel, fuga obcaecati dicta.
              </div>
            )}
            {group === "Ferry" && (
              <div className="p-2    leading-[32px]   	">
                FERRY Photos ==== ipsum dolor sit amet consectetur, adipisicing
                elit. Omnis eveniet soluta inventore minus atque, sapiente optio
                consectetur rem culpa illum quisquam hic dolore harum, expedita
                distinctio vel, fuga obcaecati dicta.
              </div>
            )}
            {group === "London" && (
              <div className="p-2    leading-[32px]   	">
                LONDON Photos ==== ipsum dolor sit amet consectetur, adipisicing
                elit. Omnis eveniet soluta inventore minus atque, sapiente optio
                consectetur rem culpa illum quisquam hic dolore harum, expedita
                distinctio vel, fuga obcaecati dicta.
              </div>
            )}
            {group === "Oxford" && (
              <div className="   mx-[1rem]   		">
                OXFORD Photos ==== ipsum dolor sit amet consectetur, adipisicing
                elit. Omnis eveniet soluta inventore minus atque, sapiente optio
                consectetur rem culpa illum quisquam hic dolore harum, expedita
                distinctio vel, fuga obcaecati dicta.
              </div>
            )}
            {group === "All" && (
              <div className="   mx-[1px] max-w-[100%] gap-4 tablet:mb-[1rem]	tablet:columns-2	">
                <p className="mb-[16px]">
                  A large part of my job as the PIO clerk for the “2/6” was to
                  get pictures of significant events in the Battalion published
                  in the Berlin Observer. All the pictures in the “Army”
                  category were taken as part of a feature article, important
                  parades, sporting events, or awards ceremonies.
                </p>
                <p className="mb-[16px]">
                  The pictures in the “By Request” category represent some
                  “studio” work I did at the request of friends.
                </p>
                <p className="mb-[16px]">
                  The pictures in the “Berlin” category were taken as I walked
                  around the city and its surrounding areas over the entire time
                  I was there.
                </p>
                <p className="mb-[16px]">
                  Pictures in the Amsterdam, London, and Oxford categories were
                  taken when I was on leave in those cities. The pictures in the
                  Ferry category were taken on a trip I made from Bremerhaven to
                  London.
                </p>
              </div>
            )}
          </div>

          <div className="imgcontainer mx-[1%] grid grid-cols-1 mobile:gap-2	 mobile:grid-cols-3 tablet:grid-cols-4    ">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="image-card m-[5px] max-h-[350px] cursor-pointer  object-cover p-[3px]  	 "
              >
                <img
                  className="image aspect-square max-h-[250px] min-h-[150px] w-[100%] rounded object-cover"
                  src={image.url}
                  alt={image.caption}
                  onClick={() => {
                    setSelectedImg(image.url);
                    // setImageCaption(image.caption)
                  }}
                />
                <p>{image.caption}</p>
              </div>
            ))}
          </div>
          {/* <p>Selected Image is {selectedImg}</p> */}
          {/* { selectedImg && (<FullImage  setSelectedImg={setSelectedImg} selectedImg={selectedImg} imageCaption={imageCaption}/>)} */}
          {selectedImg && (
            <ImageSlider
              setSelectedImg={setSelectedImg}
              selectedImg={selectedImg}
              filteredImages={filteredImages}
            />
          )}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default MyPhotos;
