// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";




function BOarticles() {
  return (
    <>
        <Header />
        <Sidebar />
      <div className="articlewrap z-20 	 mx-auto flex h-[100%] flex-col items-center ">
        <div className="  mx-auto   flex flex-col items-center ">
          <h1 className="mx-auto mt-[40px] text-3xl">
          My Articles</h1>

          <div class="z-20 mx-auto mt-0  flex h-[100%] flex-col items-center  ">

            <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">A major part of my job as PIO Clerk was to make sure that the 2nd Battalion, 6th Infantry
                (the "2/6" ) was often and favorably represented in the Brigade weekly newspaper: the Berlin
                Observer. The Observer began publication in September 1945 as the “Grooper” just five and a half
                months after Germany surrendered. Its final publication was 39 years later on July 15, 1994. The
                “Second Anniversary” edition (pictured below) presents a picture of the early years of the Berlin
                Brigade, how the Observer was produced, and a preview of the historical value that the Observer
                maintained over the years.</p>

            <a className="mx-[20px] hover:outline-red-500 my-10 text-[20px] leading-[32px] h-[100%] w-[85%] mobile:max-w-[35ch] mobile:text-[25px]  laptop:max-w-[60ch] outline outline-black " href="\media\BO PDFs\Berlin Observer 1947suppl.pdf" target="_blank"> <img className=""
                    src ="..\media\BO part 1947 Special.JPG" alt="Berlin Observer July 17 1970" width=""
                    height=""
                    /></a>
                              <span className="text-sm leading-none ">
          (Click Image to Read)
          </span>




{/* 
        <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
          <Link to="src\Assets\BO_PDFs\Berlin Observer 1947suppl.pdf">
          <img
            className="border-2 border-black "
            src="media\BO part 1947 Special.JPG"            
            alt="Army building in Frankfurt"
            width="980px"
          />
      </Link>
          <span className="text-sm leading-none ">
          (Click to Read)
          </span>
        </div> */}


            <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
                Thanks to the efforts of an unnamed webmaster and contributions from "... former Berlin
                Observer
                staffers and Veterans of the Berlin Brigade..." many PDF copies of Berlin Observer editions
                were preserved on the website: <a class="bolink"  href="http://www.theberlinobserver.com" target="_blank" rel="noopener noreferrer" >Berlin Observer.com.</a> <span class = "newtab"> (Opens in a new tab.) </span> 
            </p>
            <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
                Not every edition was preserved on this site. For example, there were only three editions from 1970, my first year in Berlin.
                My first article appeared in the July 17, 1970 edition, two weeks after my arrival in
                Berlin. The next edition in the archive is December 11, some 5 months later. I would not have been allowed to go that long without the "2/6" being represented in the Observer.</p>
            <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
                Each of the images below represents the cover page of an issue of the Berlin Observer that
                contains
                articles and/or photos contributed by me. Clicking the image will open a page containing my
                articles and
                photos that appeared in that issue. You can also access the full edition by clicking the
                "See Full
                Edition PDF" button at the bottom of each article page. In order to preserve the historical
                collection
                assembled by the Berlin Observer.com webmaster past its funding end date of 2023, I have
                downloaded each
                issue, which can be accessed by clicking "Berlin Observer Archives" on the menu.</p>
        </div>

        </div>

<div className="articles w-[80vw] mt-[40px] grid grid-cols-2 gap-4	 mobile:grid-cols-3 tablet:grid-cols-3 gap-8">   
        <article class="bobsrvrjuly1770 	 ">
            <h5 >July 17, 1970</h5>
{/* 
            <Link className="mx-[20px]  my-10 text-[20px] leading-[32px] h-[100%] w-[85%] mobile:max-w-[35ch] mobile:text-[25px]  laptop:max-w-[60ch] outline outline-black " to "/" > */}

            
            
            <Link to= "/BOarticle1770"><img className=" border border-2 border-black w-full rounded-md"  src="..\media\BO page1 images\Berlin Observer archive1970\Berlin Obsever V26_N28_jul17 1970.jpg" alt="Berlin Observer July 17 1970"
                    width="211px" height="139px" /> </Link>

        </article>

        <article class="bobsrvrdec1170 ">
            <h5>December 11, 1970</h5>
            <a href="02_bodec11_70.php" > <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO page1 images\Berlin Observer archive1970\Berlin Obsever V26_N49_Dec_11 1970.jpg"
                    alt="Berlin Observer December 11 1970" width="211px" height="139px"/></a>
        </article>

        <article class="bobsrvrdec1170 ">
            <h5>December 18, 1970</h5>
            <a href="03_bodec18_70.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO page1 images\Berlin Observer archive1970\Berlin Obsever V26_50_Dec_18.jpg" alt="Berlin Observer December 18 1970"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrfeb0571">
            <h5>February 05, 1971</h5>
            <a href="04_bofeb05_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO page1 images\Berlin Observer archive1971\Berlin Obsever V27_N5_feb5 1971.jpg" alt="Berlin Observer February 5 1971"
                    width="211px" height="139px"/></a>
        </article>

        <article class="bobsrvrfeb121">
            <h5>February 12, 1971</h5>
            <a href="05_bofeb12_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 02 12 1971.JPG"
                    alt="Berlin Observer February 12 1971" width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrfeb191">
            <h5>February 19, 1971</h5>
            <a href="06_bofeb19_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 02 19 1971.JPG"
                    alt="Berlin Observer February 19 1971" width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrmar571">
            <h5>March 5, 1971</h5>
            <a href="07_bomar05_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 03 05 1971.JPG" alt="Berlin Observer March 5 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrmay571">
            <h5>May 7, 1971</h5>
            <a href="08_bomay07_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 05 07 71.JPG" alt="Berlin Observer May 7 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrmay1471">
            <h5>May 14, 1971</h5>
            <a href="09_bomay14_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 05 14 71.jpg" alt="Berlin Observer May 14 1971"
                    width="211px" height="139px/"/></a>
        </article>
        <article class="bobsrvrmay2171">
            <h5>May 21, 1971</h5>
            <a href="10_bomay21_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 05 21 71.JPG" alt="Berlin Observer May 21 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrmay2871">
            <h5>May 28, 1971</h5>
            <a href="11_bomay28_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 05 28 71.JPG" alt="Berlin Observer May 28 1971"
                    width="211px" height="139px"/></a>

        </article>
        <article class="bobsrvrjune2571">
            <h5>June 25, 1971</h5>
            <a href="12_bojune25_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 06 25 71.JPG" alt="Berlin Observer June 25 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrjul0271">
            <h5>July 2, 1971</h5>
            <a href="13_bobjuly02_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 07 02 71.JPG" alt="Berlin Observer July 2 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrjuly0971">
            <h5>July 09, 1971</h5>
            <a href="14_bojuly09_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 07 09 71.jpg" alt="Berlin Observer July 9 1971"
                width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrjul1671">
            <h5>July 16, 1971</h5>
            <a href="15_bojuly16_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 07 16 71.JPG" alt="Berlin Observer July 16 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvraug2071">
            <h5>August 20, 1971</h5>
            <a href="16_boaug20_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 08 20 71.JPG" alt="Berlin Observer August 20 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvraug2771">
            <h5>August 27, 1971</h5>
            <a href="17_boaug27_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 08 27 71.JPG" alt="Berlin Observer August 27 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrsep2471">
            <h5>September 24, 1971</h5>
            <a href="18_bosep24_71.php"> <img  className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 09 24 71.jpg"
                    alt="Berlin Observer September 24 1971" width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvroct1571">
            <h5>October 15, 1971</h5>
            <a href="19_booct15_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 10 15 71.JPG" alt="Berlin Observer October 15 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrnov0571">
            <h5>November 5, 1971</h5>
            <a href="20_bonov05_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 11 05 71.jpg" alt="Berlin Observer November 05 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrnov2671">
            <h5>November 26, 1971</h5>
            <a href="21_bonov26_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 11 26 71.jpg" alt="Berlin Observer November 26 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrdec0371">
            <h5>December 3, 1971</h5>
            <a href="22_bodec03_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 12 03 71.JPG" alt="Berlin Observer December 3 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrdec1071">
            <h5>December 10, 1971</h5>
            <a href="23_bodec10_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 12 10 71.JPG" alt="Berlin Observer December 10 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrdec1771">
            <h5>December 17, 1971</h5>
            <a href="24_bodec17_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 12 17 71.JPG" alt="Berlin Observer December 17 1971"
                    width="211px" height="139px"/></a>
        </article>
        <article class="bobsrvrdec2371">
            <h5>December 23, 1971</h5>
            <a href="25_bodec23_71.php"> <img className=" border border-2 border-black w-full rounded-md" src="..\media\BO part 12 23 71 SE.JPG"
                    alt="Berlin Observer December 23 1971" width="211px" height="139px"/></a>
        </article>
        </div>
      </div>

      <div>
        <h1>Article July 17 1970</h1>
        <a class="bofulleddition" href="..\BO_PDFs\B O Jul 17 1970.pdf">
        <button >
            <span class="fulledtext">
            <p>Full Eddition</p>
            </span>
        </button>
    </a>

      </div>
    </>
  );
}

export default BOarticles;
