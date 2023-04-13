// NOT  used after 10 24 22

import React, { useEffect, useState } from "react";
import "../Components/MyPhotos.css";
// import images from './data';
import imageRef from "../imagedata.json";
import ImageSlider from "../Components/ImageSlider";

function OldTryPhotos() {
  const [group, setGroup] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  // const [currentArray,setCurrentArray] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [imageCaption, setImageCaption] = useState("");

  useEffect(() => {
    group === "all"
      ? setFilteredImages(imageRef)
      : setFilteredImages(
          imageRef.filter((imageRef) => imageRef.group === group)
        );
  }, [group]);

  return (
    <>
      <div className="App  ">
        <div className="pageContainer grid-cols-14  grid gap-4	  ">
          <h1 className=" col-span-12 col-start-1 mx-[20px] mt-[1rem] mb-3 text-center text-3xl	  tablet:text-4xl">
            My Photos
          </h1>

          <div className="groups sticky  top-[60px] col-span-3  col-start-1  ml-[40px] ml-[6px] mr-[2px] h-[620px] w-[210px] rounded-lg border border-black bg-[#fffbeb] px-5 text-black ">
            <div className="group mx-[3px] flex cursor-pointer flex-col items-center	rounded-lg bg-transparent py-[4px] text-[20px]	">
              <p className="text-[24px] uppercase">Categories</p>
              <GroupButton
                name="all"
                groupActive={group === "all" ? true : false}
                handleSetgroup={setGroup}
              />
              <GroupButton
                name="Amsterdam"
                groupActive={group === "Amsterdam" ? true : false}
                handleSetgroup={setGroup}
              />
              <GroupButton
                name="Army"
                groupActive={group === "Army" ? true : false}
                handleSetgroup={setGroup}
              />
              <GroupButton
                name="Portraits"
                groupActive={group === "Portraits" ? true : false}
                handleSetgroup={setGroup}
              />
              <GroupButton
                name="Berlin"
                groupActive={group === "Berlin" ? true : false}
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
            </div>
          </div>

          <div className="imgcontainer col-span-7 col-start-4 grid grid-cols-4 gap-2">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="image-card m-[5px] rounded-xl object-cover p-[3px] 		 "
              >
                <img
                  className="image"
                  src={image.url}
                  alt={image.caption}
                  onClick={() => {
                    setSelectedImg(image.url);
                    setImageCaption(image.caption);
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

          <div className="textcontainer  col-span-1 col-start-13 mx-[20px] mx-4 mt-[1rem] h-[25%] w-[36ch]  rounded-lg border border-black p-[20px] text-[20px] leading-[32px] mobile:max-w-[20ch]	mobile:text-[25px] laptop:max-w-[28ch] ">
            <h2 className="col-span-12 col-start-1 mx-[20px] mt-[1rem] mb-3 text-center text-[28px]	  tablet:text-[32px]">
              Story of the Photos
            </h2>
            <p>
              These are some of the photos I took while in the Army. Those
              labeled "Army" were taken as part of my job as Battalion PIO
              clerk. Lots of award presentations, baseball coverage, official
              Army ceremonies, field training exercises, and miscellaneous
              pictures taken while covering those events. I particularly enjoyed
              taking pictures of the Brigade baseball games.
            </p>

            <p>
              I am also pleased with some of the dramatic pictures I took while
              our battalion was in training in Hoenfels in southern Germany. The
              aerial pictures were taken as I was sitting facing the open door
              of a Bell UH-1 "Huey" helicopter so I could get clear shots of the
              terrain. The pilot for the training recon mission had recently
              returned from his latest tour in Vietnam (he had several). I was
              ostensibly held into my seat by a single very thin seatbelt but I
              doubt if it would have held my weight if I was relying on it
              alone. I had a headset and microphone so I could communicate with
              the crew. At one point, the pilot asked if I would like to
              experience some of the maneuvers that were used in Vietnam. Being
              23 years old, I of course said "absolutely!" He then throttled up
              and laid the chopper over on its side or at least as close to 90
              degrees as was possible. At an altitude of around 1K feet,
              watching the ground go by at high speed was exhilarating, to say
              the least.
            </p>

            <p>
              Word got out that I could take decent photos and I had many
              requests to take portrait photos for friends. I was even asked to
              be the photographer for one Army officer's wedding. My popularity
              was due, in no small part, to the fact that I didn't charge for my
              services.
            </p>
          </div>
          {/* </SRLWrapper> */}
        </div>
      </div>
    </>
  );
}

const GroupButton = ({ name, handleSetgroup, groupActive }) => {
  return (
    <button
      className={`group my-[14px] w-[155px] rounded-lg py-[6px] text-center hover:bg-black  hover:text-white	
		${groupActive ? "active" : null}`}
      onClick={() => handleSetgroup(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default OldTryPhotos;
