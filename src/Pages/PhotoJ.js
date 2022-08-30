import React, { useState } from "react";
import Modal from "../Components/Modal";
import Records from './myphotos.json'

function PhotoJ() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imageAlt, setImageAlt] = useState(null)

  return (
    <>

    <div className='  mt-[40px] mx-auto  flex flex-col items-center '>

      <h1 className=' text-center mt-[1rem] mx-[20px] text-3xl md:text-4xl  mb-3'>My Photos</h1>

      <p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
      These are some of the photos I took while in the Army.  Those labeled "Army" were taken as part of my job as Battalion PIO clerk. Lots of award presentations, baseball coverage, official Army ceremonies, field training exercises, and miscellaneous pictures taken while covering those events. I particularly enjoyed taking pictures of the Brigade baseball
          games.
      </p>


      <p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
      I am also pleased with some of the dramatic pictures I took while our battalion was in training in
          Hoenfels in southern Germany. 
          The aerial pictures were taken as I was sitting facing the open door of a Bell UH-1
          "Huey" helicopter so I could get clear shots of the terrain. The pilot for the training recon mission
          had recently returned from his latest tour in Vietnam (he had several). I was ostensibly held into my
          seat by a single very thin seatbelt but I doubt if it would have held my weight if I was relying on it
          alone. I had a headset and microphone so I could communicate with the crew. At one point, the pilot
          asked if I would like to experience some of the maneuvers that were used in Vietnam. Being 23 years old,
          I of course said "absolutely!" He then throttled up and laid the chopper over on its side or at least as
          close to 90 degrees as was possible. At an altitude of around 1K feet, watching the ground go by at high
          speed was exhilarating, to say the least. 
      </p>
      
      
      <p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
      I used my personal Minolta SR-T 101b camera, which I still have somewhere, loaded with black and white film, for all of these photos mostly because the Berlin Observer only printed in black and white and the film was free. Using black and white film allowed me to develop and print my personal photos for free in the barracks' photo lab. 
      </p>
      
      
      <p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
      Most of the other categories of photos were taken touring Berlin or while I was on leave in Amsterdam, London, and Oxford. I made a couple fo trips to London. One of them  included taking a train to Bremerhaven and then an overnight ferry to London. </p>

      <p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
        In addition to articles, the Berlin Observer published random photos of civilians, probably to remind us soldiers that there was still life outside of the Army. Many of the photos that I took for that purpose are in the "Portraits" category. Others are sprinkled throughout the other categories.
      </p>
      
      
      <p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
      Word got out that I could take decent photos and I had many requests to take portrait photos for friends. I was even asked to be the photographer for one Army officer's wedding. My popularity was due, in no small part, to the fact that I didn't charge for my services.
      </p>
      
      <div className=" grid grid-cols-5 gap-4 outline  	 mx-auto my-[50px] w-[70%] bg-black text-white">
        {          
          Records && Records.map( record => {
            return(
              <div className="  text-center  m-3	text-[14px] flex flex-col border border-black " key={ record.id }
              onClick={() => {
                setSelectedImg(record.url)
                setImageAlt(record.caption)
                }}>
                <img className="overflow-hidden	 border border-white h-full	w-auto object-cover hover:scale-x-105" src={record.url} alt={record.caption} />
                { record.caption }
                <br />
                { record.place}
              </div>
            )
          })
        }

        </div>
        </div>
        
        { selectedImg && (<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imageAlt={imageAlt} />)}
    </>
  );
  
}

export default PhotoJ;
