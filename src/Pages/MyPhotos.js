import React, { useEffect, useState } from "react";
import "../Components/MyPhotos.css";
import "../index.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//
import { Link } from "react-router-dom";
// import PhotoMenu from "../Components/PhotoMenu";
import imageRef from "../imagedata.json";
import ImageSlider from "../Components/ImageSlider";

function MyPhotos() {
  const [group, setGroup] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);
  // const [currentArray,setCurrentArray] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  // const handlekeyPress = (e: React.KeyboardEvent) =>{

  // }
  // const [imageCaption, setImageCaption] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const GroupButton = ({ name, handleSetgroup, groupActive }) => {
    return (
      <button
        className={`group my-[2px] ml-[10px] flex w-[90px] flex-col  rounded-lg  p-[2px] text-left  hover:scale-[1.1] hover:text-yellow-400  ${
          groupActive ? "text-yellow-400" : null
        }`}
        onClick={() => {
          // console.log('Click - ',e)
          handleSetgroup(name);
          setIsOpen(!isOpen);
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
      {/* <div className='App bg-black w-[100vw]  text-white '> */}
      <ul className="fixed  top-0  left-0  z-20   h-full w-[200px]  space-y-[10px] overflow-y-scroll  bg-black text-left text-[16px] text-white	 ">
        <p className="mt-20 text-[22px] ">Photo Categories</p>

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

        {/* </div> */}

        <p className="my-[20px] text-[20px]">Page Navigation</p>
        <li className=" ml-[10px] text-left hover:scale-[1.1] ">
          <Link to="/Home">My Story</Link>
        </li>
        <li className=" hover:scale-[1.1]text-left ml-[10px]">
          <Link to="/Training">Training</Link>
        </li>
        <li className=" ml-[10px]  text-left hover:scale-[1.1] ">
          <Link to="/InBerlin">In Berlin</Link>
        </li>
        <li className=" ml-[10px]  text-left hover:scale-[1.1] ">
          <Link to="/BOarticles">My Journalism</Link>
        </li>
        <li className=" ml-[10px] text-left hover:scale-[1.1] ">
          <Link to="/MyPhotos">My Photos</Link>
        </li>
        <li className=" ml-[10px]  text-left hover:scale-[1.1]">
          <Link to="/Archives">Archives</Link>
        </li>
        <li className=" ml-[10px]  text-left hover:scale-[1.25]">
          <Link to="/About">About</Link>
        </li>
      </ul>

      {/* <div className='bg-black	'> */}
      <div className="pageContainer absolute top-0 left-0 ml-[150px] flex w-full flex-col bg-black  text-white  ">
        {/* <div className="subhead  text-white   z-auto  w-[100vw] bg-black h-[100px] fixed top-0 "> */}
        <h1 className="  text-center text-3xl">My Photos</h1>
        {/* </div> */}

        {!isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu className=" bg-#fffbeb  absolute top-1 right-2 z-[35]  h-[32px] w-[32px]	cursor-pointer hover:scale-[1.2] mobile:hidden "></AiOutlineMenu>
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineClose
              className=" bg-#fffbeb  absolute top-1 right-2 
							   z-[35]  h-[32px] w-[32px]	cursor-pointer hover:scale-[1.2]  mobile:hidden"
            ></AiOutlineClose>
          </button>
        )}

        {/* <div className={`groups p-4 grid-col-start-1 col-span-2 bg-white text-black  overflow-y-scroll  h-[35px] w-screen
				tablet:h-[100%] text-[16px] tablet:w-[200px] ${isOpen ? 'translate-x-0 ' : 'translate-x-full tablet:translate-x-0'} ease-in-out duration-700`}> */}

        {/* </div> */}

        <div className="textimagecontainer z-0  m-[2%] h-full w-[90%] bg-black">
          {/* <div className={`textimagecontainer  grid-col-start-1 col-span-12 h-full w-[100%] m-[2%] mobile:grid-col-start-3 mobile:col-span-8 ${!isOpen ? 'mobile:visible ' : ' mobile:hidden '} `}> */}

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

          <div className="imgcontainer mx-[3%]  grid grid-cols-2 gap-2	 mobile:grid-cols-3 tablet:grid-cols-5    ">
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
