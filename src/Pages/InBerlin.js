import Header from "../Components/Header";

import React from "react";
import Collapsible from "../Components/Collapsible";
import Sidebar from "../Components/Sidebar";

function InBerlin() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="berlinwrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center ">
        <div className="  mx-auto mt-[40px]  flex flex-col items-center ">
          <h3>New York to Frankfurt to Berlin</h3>
          <p class="hilite">(Tap or hover over pictures below to enlarge.)</p>

          <img
            src="..\media\US Army Building in Frankfurt Germany 1970.jpg"
            alt="Army building in Frankfurt"
            width="434px"
            height="280px"
          ></img>
          <p>U.S. Army - Frankfurt 1970</p>

          <img
            src="..\media\duty train frankfurt berlin (cropped).jpg"
            alt="Army train to Frankfurt"
            width="434px"
            height="280px"
          />
          <p>(U.S. Army Duty Train)</p>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            I traveled to Frankfurt via a commercial jet from JFK Airport in New
            York. I'm not certain how I got from the Frankfurt airport
            (Rhein-Main-Flughafen in those days) to an Army headquarters
            building in downtown Frankfurt. I was traveling alone, so I think I
            must have taken a taxi. I remember being driven through the
            castle-like stone gates of the headquarters building and into the
            courtyard. It looked very much like (and may have been) the building
            pictured on the left. Being my first time out of the U.S., I was in
            awe of the building and, especially, the courtyard. I was in
            Frankfurt for only a few hours when I was given orders to travel to
            Berlin and report to the 2nd Battalion, 6th Infantry. The orders
            included a travel voucher for the{" "}
            <span class="reflink">
              <a
                href="https://www.usarmygermany.com/Sont.htm?https&&&www.usarmygermany.com/Units/Transportation/USAREUR_Duty%20Trains.htm"
                target="blank"
                className="reflink text-blue-600 underline visited:text-purple-600"
              >
                U.S. Army duty train
              </a>
            </span>
            that regularly traveled between Frankfurt and Berlin. Although I
            don't have a clear memory of my first trip on this train (see image
            on right), I do remember one subsequent trip in particular. I was
            traveling from Berlin to Frankfurt and looking out the window on a
            very clear cold winter night at an East German landscape of forest
            and farms beautifully lit by a full moon. In the distance, I could
            clearly see a train traveling in the opposite direction begin
            powered by a steam engine. I can still picture the long trail of
            moonlit smoke trailing from the stack. I remember thinking: “This
            could be a scene from the 1930s. It’s hard to imagine that just 25
            years before, this peaceful landscape was ravaged by war.”
          </p>
        </div>

        <h3 className=" mb-3  text-center  text-2xl">Arrival in Berlin</h3>
        <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
          My first memory of Berlin is sitting in a small office at McNair
          Barracks being inter by Sargent First Class Ed LeClair who was in
          charge of assigning personnel within the 2nd Battalion, 6th Infantry,
          Berlin Brigade. Sgt. LeClair was calm and reasonable (an unexpected
          experience based upon my dealings with sergeants heretofore).
        </p>

        <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
          <img
            className="border-2 border-black "
            src="images\Sgt LeClair mod 1 copy 1.webp"
            alt="Army building in Frankfurt"
            width="980px"
          />
          <span className="text-sm leading-none ">
            (Sgt. First Class LeClair from Berlin Observer)
          </span>
        </div>

        <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
          Looking at my records, he noticed that I had a degree in
          communications and asked if I would be interested in the recently
          vacated position of Battalion Public Information Office (PIO) clerk,
          which, among other things, involved writing articles and taking
          pictures for the Berlin Brigade newspaper called the Berlin Observer.
          Being shocked that I was asked rather than told, I said "absolutely"!
        </p>

        <h3 className=" mb-3  text-center  text-2xl">Getting Settled</h3>

        <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
          Sgt. LeClair assigned me to the Headquarters Company for reporting
          purposes but for billiting purposes I was assigned the Company B.
          McNair Barracks "Berlin Brigade" where I served as a Public
          Information Office (PIO) clerk from June 28, 1970 to December 29,
          1971.
        </p>

        <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
          <img
            className="border-2 border-black "
            src="images\mcnair-barracks1_bw cropped resized.jpg"
            alt="Army building in Berlin"
            width="980px"
          />
          <span className="text-sm leading-none ">
            (U.S. Army McNair Barracks)
          </span>
        </div>

        <h1 className=" mb-3  text-center  text-3xl">
          Life in the Berlin Brigade
        </h1>

        <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]"></p>
      </div>
    </>
  );
}

export default InBerlin;
