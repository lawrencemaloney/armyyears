import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import Collapsible from "../Components/Collapsible";
import Sidebar from "../Components/Sidebar";


function Home() {
  return (
    <>
        <Header />
        <Sidebar />

      <div className="homewrap z-20 mx-auto mt-0  h-screen items-center tablet: grid grid-cols-2 ">

        <div className="thedecision z-20 mx-auto mt-[40px]  flex h-[100%] flex-col items-center ">
          <h1 className="mx-[20px] mt-[1rem] mb-3 text-center text-3xl 	 tablet:text-4xl">
          It Began With a Lottery.
          </h1>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            On December 3, 1969, at the height of American involvement in the
            Vietnam War, I joined the U.S. Army. As with most decisions, my
            choices were remarkably few. I could enlist, live with the
            uncertainty of the draft, or evade military service altogether. The
            events and convictions that influenced my decision were varied,
            complex, and mostly out of my control.
          </p>
          <h2 className="  mt-3 text-center  text-3xl">The Draft Lottery</h2>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The timing of my decision was determined primarily by the outcome of
            a lottery. On December 1, 1969, at Selective Service National
            Headquarters in Washington, D.C., a nationally televised lottery
            determined the "order of call" for induction into military service
            for 1970. The lottery was established to address perceived
            inequities in the "oldest man first" method for conscripting
            civilians.
          </p>

          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              src="images/Draft Lottery glass bowl Pirnie.jpg"
              width="940px"
              alt="Lottery 1969"
            />
            <span className="text-sm leading-none">(Library of Congress)</span>
          </div>

          <h3 className="mt-4  text-center text-2xl underline">The Process</h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            366 opaque plastic capsules, each containing a slip of paper with a
            number from 1 to 366 representing each day of the year (366 to
            account for those born on February 29th during leap years), were
            placed in a large glass container and drawn by hand. The number in
            each capsule represented the birth date of each eligible registrant.
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The sequence in which a person’s birth date was drawn determined the
            order in which young men between 18 and 26 were to be called to
            serve. The event was covered live on TV and radio. I remember
            watching it with rapt attention. The first capsule drawn by
            Congressman Alexander Pirnie (R-NY) of the House Armed Services
            Committee, contained the number representing September 14, so all
            men born on September 14 in any year between 1944 and 1950 were
            assigned lottery number 1. The drawing continued until all days of
            the year had been paired with a sequence number.
          </p>
          <h3 className="mt-4  text-center text-2xl underline">The Results</h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            My birth date, November 27, 1947, was on the 47th capsule chosen.
            (See results card.)
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="mt-4 border-2 border-black"
              src="images/lottery-card-1970-marked.jpg"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="mr-8 text-sm leading-none ">1970 Results.</span>
          </div>
          <h3 className="mt-4 text-center text-2xl  underline">
            Seeking Advice
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            I decided to get an expert opinion on how long I had until I was
            likely to be drafted. So, on December 3rd, I visited the local Army
            recruitment office in Midland Park, NJ, "You might make it to
            February." the Recruitment Officer said after I told him that my
            lottery number was 47.
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black"
              src="images/Enlisting.webp"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="text-sm leading-none">U.S. Army Recruiter</span>
          </div>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            I asked him if there was any benefit in volunteering rather than
            waiting to be drafted. He said that my military records would show
            that I was "RA" (Regular Army volunteer) rather than "US,"
            indicating draftee status. He suggested that the Drill Instructors
            (DI) at Basic Training might treat volunteers better than draftees.
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            He also said that enlisting would allow me to schedule my induction
            rather than be in a constant state of anticipation. If my RA status
            had a positive impact during my Army career, it certainly wasn't
            obvious during Basic Training.{" "}
            <span className="font-bold">
              I signed up and scheduled my induction for February 2, 1970.
            </span>
          </p>
          {/* <img className='max-w-[35vw] ' src={sectionDiv} alt='divider' /> */}

          <h2 className="  mt-6 mb-4 text-center text-3xl ">
            How did I Get Here?
          </h2>

          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black"
              src="images/JTAlicewithCCat500.webp"
              alt="Alice and the Cat"
              width="980px"
            />
          </div>
          <p className="leading-1 tablet:leading-1 ml-[140px] mb-[6px] -mt-[275px] w-[30ch] text-[12px]  tablet:ml-[246px] tablet:-mt-[475px] tablet:w-[29ch] tablet:text-[20px]">
            `Would you tell me, please, which way I ought to go from here?'{" "}
            <br />
            `That depends a good deal on where you want to get to,' said the
            Cat. <br />
            `I don't much care where--' said Alice. <br />
            `Then it doesn't matter which way you go,' said the Cat. <br />
            `--so long as I get SOMEWHERE,' Alice added as an explanation.{" "}
            <br />
            `Oh, you're sure to do that,' said the Cat, `if you only walk long
            enough
          </p>
          <div className="ml-2 	text-center">
            <Collapsible icon="[&#8224;]">
              <p className="ml-1  max-w-[45ch]  text-[18]	text-black	">
                {/* [&#8224;] */}
                Carroll, Lewis. Alice’s Adventures in Wonderland. With
                illustrations by John Tenniel. Alice-in-wonderland.net Page 30.
                <br />
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf"
                  className="
                  text-blue-600
                  visited:text-purple-600"
                >
                  https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf
                </a>
                {/* <br /> */}
              </p>
            </Collapsible>
          </div>

          <p className=" mx-[20px] mt-[12px] max-w-[38ch] text-[20px] leading-[32px] tablet:mt-[22px] tablet:max-w-[40ch] tablet:text-[25px]  laptop:max-w-[60ch] ">
            Like Alice, I had no clear idea of where I wanted to "get to" in the
            years and months leading to my enlistment. The war in Vietnam, the
            university I attended, the courses I took, the interests I
            developed, and the experiences I had that led directly to my
            enlistment decision were not planned,
            <b>at least not by me</b>.
          </p>
          <h3 className=" mx-[20px] my-3 text-center text-2xl underline">
            The Decision-Making Process
          </h3>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            We make thousands of decisions every day. Some decisions seem so
            easy that we hardly know were making them. Others are so momentous
            that we think of them as “life-changing”. But each decision is
            greatly influenced by many factors. Our daily interactions with
            family, friends, the various communities in which we live, and our
            mental, physical, and spiritual health all play a role in our
            decision-making. We have very little control over the things that
            influence our decisions, yet there are consequences for our
            decisions and we are held responsible by God for them.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Although I can’t record here all the things that influenced my
            decision to join the Army in December 1969, I thought it would be
            interesting, maybe even helpful, to present a picture of the more
            significant events of my personal life and the political, social,
            cultural, and technological events of the 1960s.
          </p>
          <h3 className=" mx-[20px] my-3 text-center text-2xl underline">
            My Personal life and the World Around me
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            For nearly the entire decade of the 1960s, from September 1960 to
            May 1969, my personal life focused on high school and college and
            all the interests, activities, and social “angst” like every other
            teenager in the 60s. While I was focused on my personal life, I was
            also aware of the events going on in the world around me. While they
            had some influence, they did not seem to directly impact my life
            during this time. But the impact was there, and, for the purposes of
            the story, they significantly impacted my decision to join the Army.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Unlike many typical high schools in northern New Jersey, Ridgewood
            high school only covered grades 10 through 12. Grades nine through
            11 were housed in two middle school buildings: the Benjamin Franklin
            school, and the George Washington school. Having attended a private
            school through eighth grade, I spent my “freshman” year of high
            school at George Washington school, about a mile from our house.
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/GW.jpg"
              alt="Riodgewood High"
              width="980px"
            />
            <span className="text-sm leading-none">
              George Washington Middle School, Ridgewood, NJ
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            From September 1962 to June 1965, I attended Ridgewood high school
            in Ridgewood, New Jersey. I had an unremarkable career there. I
            could get by with minimum effort, and, to my later shame, a minimum
            effort is what I gave. I was more interested in my activities away
            from school. From 6th grade until high school, my closest friend,
            Dick Gilmour, and I would spend a lot of time together after school
            building model cars, reading Mad Magazine, and riding our bicycles
            around the neighborhood.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/Ridgewood_High_School BW.webp"
              alt="Riodgewood High"
              width="980px"
            />
            <span className="text-sm leading-none">
              Ridgewood Highschool, Ridgewood, NJ
            </span>
          </div>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            While I attended the public school in Ridgewood, Dick attended a
            private military high school in Manhattan. As we moved on in our
            high school careers, we began spending weekends and summers mainly
            playing sports. If I remember correctly, Dick started to take tennis
            lessons, and he would teach me what he learned. Since we had a
            good-quality public tennis court near our neighborhood, we would
            play on many weekends, both days and throughout the summer. The
            tennis courts were only a couple blocks from van Dyck’s ice cream
            parlor, so many a summer day was spent going back and forth between
            the tennis courts and Van Dyk’s. Those were beautiful days.
          </p>
          <div className="mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <a href="https://www.vandyksicecream.com/">
              {" "}
              <img
                className="border-2 border-black "
                src="images/va dyks icecreamridgewood nj.jpg"
                alt="Van Dyks Ice Cream Ridgewwod NJ"
                width="980px"
              />
              Van Dyk's Ice Cream, Ridgewwod NJ
            </a>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            While we were able to enjoy a great deal of freedom without much
            responsibility, we were certainly aware of the political, social,
            and cultural events going on around us. The proliferation of
            television sets across the United States brought news of these
            events into our homes every night.
          </p>
          <h3 className=" mt-4  text-center text-2xl underline ">
            Off to College -September 1964
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            As an example of how little control we have over our lives, I
            attended Loyola University in New Orleans because I had received an
            acceptance letter from them in the spring of 1965, even though I had
            never officially applied.
          </p>
          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            It turned out that Loyola was looking to expand the geographic scope
            of its student base in 1964, and New Jersey was in their target
            zone. They accepted me because I lived in New Jersey and had scored
            well on my SATs. (It certainly was not due to my grades.) Loyola had
            received my SAT scores because I had put a checkmark next to "Loyola
            University (LA)" on my SAT document as a place to send my results. I
            thought "LA" meant Los Angles when it meant Louisiana. It was the
            only acceptance letter I had received, so in September 1965, off I
            went to New Orleans
            <span>
              <a
                href="https://goo.gl/maps/F6HwQFJxHC5DLHMC8"
                target="blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {" "}
                (Click for map location)
              </a>
            </span>
            .
          </p>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/Loyola Marquette Hall 1960s LA stat archives.webp"
              alt="U2"
              width="980px"
            />
            <span className="text-sm leading-none">
              Loyola University, New Orleans Louisiana - from Louisiana State
              archives.
            </span>
          </div>

          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            With a student deferment in hand, I was not concerned about being
            drafted into military service as I arrived at Loyola for my first
            year. During registration, I had to declare a major field of study.
            I approached this decision with a vague notion that I should take
            classes that would help me get a job in “business” eventually. A
            faculty advisor convinced me to enroll in a new ambitious “Business
            Law” program. In this program, a student would complete all
            requirements for a BA degree in Business Administration within three
            years and then spend their senior year taking business-related
            courses at the Loyola School of Law. This program was dropped by
            Loyola the following year because the up-front course load was
            considered too burdensome by the Association to Advance Collegiate
            Schools of Business (AACSB). I had to find a new degree program.
          </p>

          <h3 className="mt-4  mb-3 text-center text-2xl underline">
            A Change in Direction
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Happily, some friends had asked me to join the staff of the
            student-run WVSU-AM radio station, which broadcast to the campus
            over telephone lines (carrier current) from the balcony in the
            theatre in Marquette Hall. By the end of my freshman year, the radio
            station moved to new facilities in the basement of the Danna Student
            Center and changed the call letters to{"   "}
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Crescent_City_Radio"
              className="
                  text-blue-600
                  visited:text-purple-600"
            >
              WOLF
            </a>{" "}
            . (Wolf Pack being the mascot of Loyola’s sports teams).
          </p>
          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            During this same time, Loyola worked with WWL executives to
            introduce a new BA program in Communications (later named Bachelor
            of Arts in Mass Communications) at Loyola. I transferred to that
            program.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/Me on camera yearbook 1968.webp"
              alt="Me at Loyola"
              width="980px"
            />
            <span className="text-sm leading-none">
              That's me on the headset, upper right - from 1968 Loyola Yearbook
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            I worked as an early morning DJ, a play-by-play radio announcer at
            the Loyola Basketball games, the PA announcer at a few Loyola
            Baseball team and football club games. As a reporter, I had the
            opportunity to interview many notable musical artists who came to
            perform at the Loyola Field House. Among them were: Peter, Paul and
            Mary, Simon & Garfunkel, The 5th Dimension (my favorites - they took
            a couple of us starving college interviewers to an expensive
            restaurant and paid for our meals. Marilyn McCoo was even more
            beautiful in person!), and Johnny Rivers. I also got to work
            backstage at a Beach Boys concert at the field house (April 18,
            1968) but did not get to interview them. My friend, Jeff Bray, was
            the MC for the show.{" "}
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/Loyola_Field_House.jpg"
              alt="Loyola New Orleans Field House"
              width="980px"
            />
            <span className="text-sm leading-none">
              Loyola University Field House, New Orleans, LA
            </span>
          </div>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            After the Department of Communications and changing my major, I was
            able to take courses in TV writing, directing, announcing, and
            camera operation. At the start of my senior year, I was named Senior
            Operations Director for the radio station now named WLDC . These
            skills were to come in handy when I finally got to Berlin.
          </p>
          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            I also joined the ROTC was a member of the competitive rifle team,
            and the Drill Team. As far as I know, neither one of these
            activities.
          </p>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/loyola-cadet-battalion-marches-back-to-campus-from-audubon-park-1966.webp"
              alt="Loyola ROTC Drill Tea,"
              width="980px"
            />
            <span className="text-sm leading-none">
              Loyola ROTC back to campus from drill practice in Audubon Park.
            </span>
          </div>
        </div>

        <div className="events tablet:mt-2">
          <h1 className=" mx-[20px] mt-2 mb-3 text-center text-3xl  tablet:text-4xl">
            1960 through 1969 - World Events that Shaped my Course
          </h1>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            While I was busy dealing with the day-to-day events that were common
            throughout my high school and college years, things were happening
            in the world around me and lead me to that decision point in
            December 1969.
          </p>
          <h4 className=" mt-4 mb-3 max-w-[25ch] text-center  text-2xl font-bold italic ">
            May 1, 1960 - U.S. Spy Plane Shot Down over USSR
          </h4>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            The ongoing Cold War between the Soviet Union and the western
            allies, three major political assassinations, the nation-wide racial
            violence, and the escalation of the Vietnam War all played a major
            role in my decision.
          </p>
          <div className="mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/First-U-2.jpg"
              alt="U2"
              width="980px"
            />
            <span className="text-sm leading-none ">
              U2 Spy Plane Photo credit: U.S. Air Force
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            On May 1, 1960, four months before I started high school, a CIA U-2
            Spy Plane, flown by Francis Gary Powers, was shot down by the Soviet
            air defense forces while performing photographic aerial
            reconnaissance deep inside Soviet territory. This incident was a
            significant international embarrassment to the United States. It
            came at a very sensitive time in the developing Cold War between the
            United States and the Soviet Union.
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            The single-seated aircraft had successfully evaded Soviet air
            defense capabilities on several previous missions. Powers had taken
            off from Peshawar, Pakistan, and crashed near Sverdlovsk after being
            hit by an S-75 Dvina surface-to-air missile. Powers parachuted
            safely and was quickly captured. Powers was convicted of espionage
            and sentenced to three years of imprisonment plus seven years of
            hard labor but was released two years later in February 1962 in a
            prisoner exchange for Soviet intelligence officer Rudolf Abel.
          </p>
          <h4 className=" mt-4 mb-3 max-w-[25ch] text-center  text-2xl font-bold italic ">
            October 16 to November 20, 1962 - Cuban missile crisis
          </h4>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            On October 17, 1962, every network brought news that a U.S. U2 spy
            plane photographed evidence that as many as 32 Soviet-built
            medium-range ballistic missiles capable of delivering a nuclear
            warhead to any location within a 1,600-mile radius were already in
            Cuba with more on the way. In 0response, President Kennedy
            established an Executive Committee of the National Security Council
            comprised of top officials of the U.S. Departments of Defence,
            State, the CIA, and other national security experts.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/The_relative_ranges_of_the_IL-28,_SS-4,_and_SS-5,_stationed_on_Cuba.webp"
              alt="Cuban Missile Crisis"
              width="980px"
            />
            <span className="text-sm leading-none	">
              (The relative ranges of the Soviet missiles based on Cuba in
              nautical miles (NM). (Public Domain))
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The President received advice on the most appropriate response
            ranging from a direct attack on the missile sites to a blockade of
            the island nation. Arguing for the direct attack approach, Air Force
            Chief General Curtis LeMay stated, “They'll do nothing," in response
            to the President's question about a Soviet response to a direct
            attack. Kennedy responded: "Are you trying to tell me they'll let us
            bomb their missiles and kill a lot of Russians and then do nothing?
            If they don't do anything in Cuba they'll certainly do something in
            Berlin."
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Secretary of Defense Robert McNamara proposed that a blockade of
            Cuba would put pressure on the Soviets but give them time to
            reconsider and deescalate. It would also provide the U.S. with time
            to prepare for more aggressive action if warranted. McNamara noted
            that surgical airstrikes were not practical unless followed by an
            invasion.
          </p>
          <div className="mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/P-2H_Neptune_over_Soviet_ship_Oct_1962 (1).webp"
              alt="Van Dyks Ice Cream Ridgewwod NJ"
              width="980px"
            />
            <span className="text-sm leading-none">
              (A US Navy P-2H Neptune anti-submarine warfare (ASW) aircraft
              monitors a Soviet cargo ship. (Public Domain))
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            President Kennedy decided on a plan based upon McNamara's advice and
            ordered a total naval "quarantine" of Cuba, declaring that the U.S.
            would prevent any ship carrying offensive weapons from reaching
            Cuba. There was a real possibility that the U.S. Navy would forcibly
            stop and board Soviet ships and that war would ensue. Eventually,
            the two nations negotiated the total removal of missiles and the
            destruction of the launch facilities.
          </p>
          <div>
            <Collapsible icon="[&#8224;]">
              {/* <div className="-ml-[140px] text-black w-[400px] h-[135px]  py-[20px]  text-[18px] 	"> */}
              <div className="mx-4 mt-[20px] max-w-[45ch] break-words	text-[18] text-black  ">
                {/* [&#8224;] */}
                <p className="my-[10px]">
                  “CUBAN MISSILE CRISIS” Accessed February 11, 2022.
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.jfklibrary.org/learn/about-jfk/jfk-in-historycuban-missile-crisis"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    {" "}
                    https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/cuban-missile-crisis
                  </a>
                </p>
                <p className="my-[10px]">
                  Britannica, T. Editors of Encyclopaedia. "Cuban missile
                  crisis." Encyclopedia Britannica, December 20, 2021.
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.britannica.com/event/Cuban-missile-crisis"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.britannica.com/event/Cuban-missile-crisis
                  </a>
                </p>
                <p className="my-[10px]">
                  Schwarz, Benjamin, Janury/February 2013 Issue, The Real Cuban
                  Missile Crisis.The Atlantic.
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.theatlantic.com/magazine/archive/2013/01/the-real-cuban-mssile-crisis/309190/"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.theatlantic.com/magazine/archive/2013/01/the-real-cuban-mssile-crisis/309190/
                  </a>
                </p>
                <p>
                  Arnold, Mark, May 5, 2013 Issue, JFK and the Road to Dallas:
                  The Cuban Missile Crisis-Part II.
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="http://fromanativeson.com/2013/05/05/jfk-and-the-road-to-dallas-the-cuban-missile-crisis-pat-ii-by-mark-arnold/"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    http://fromanativeson.com/?s=The+Cuban+Missile+Crisis-Part+II
                    <br />
                    <br />
                  </a>
                </p>
              </div>
            </Collapsible>
          </div>

          <h4 className=" mt-4 mb-3 max-w-[25ch] text-center  text-2xl font-bold italic ">
            May 11 and September 15, 1963 - Three bombings in Birmingham Alabama
            ignite a decade of racial violence.
          </h4>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The city of Birmingham, Alabama was no stranger to
            racially-motivated bombings. There were 48 such bombings reported in
            Birmingham between 1948 in 1957. In one month in 1957, four black
            churches and at least seven private residences were bombed.
            <Collapsible icon="[&#8224;]">
              <div className="mx-4 mt-[20px] max-w-[45ch] break-words	text-[18] text-black ">
                {/* [&#8224;] */}

                <p>
                  Gado, Mark (2007). "Bombingham". CrimeLibrary.com/Court TV
                  Online. Archived from the original on August 18, 2007.
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://web.archive.org/web/20070818222057/http://www.crimelibrary.com/terrorists_spies/terrorists/birmingham_church/3.html"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://web.archive.org/web/20070818222057/http://www.crimelibrary.com/terrorists_spies/terrorists/birmingham_church/3.html
                    <br />
                    <br />
                  </a>
                </p>
              </div>
            </Collapsible>
          </p>

          <div className="mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/birmingham riots dogs.webp"
              alt="Dogs attack protesters in Birmingham"
              width="980px"
            />
            <span className="text-sm  leading-none">
              (Dogs attack protesters in Birmingham, AL - By Bill Hudson, of the
              Associated Press)
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            On Sunday, September 15, 1963, at the 16th street Baptist Church in
            Birmingham, AL, four young girls, 14-year-olds Addie Mae Collins,
            Denise McNair, Carole Robertson, and 11-year-old Cynthia Wesley,
            were murdered by a bomb planted under the steps of the church by
            members of Cahaba River Group, a splinter group of the Eastview
            Klavern #13 chapter of the Ku Klux Klan. It took until May 1, 2001,
            until three of the four suspected bombers were convicted.
            <Collapsible icon="[&#8224;]">
              <div className="mx-4 mt-[20px] max-w-[45ch] break-words	text-[18] text-black">
                {/* [&#8224;] */}
                <p>
                  16th Street Baptist Church Bombing, National Parks Service.
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.nps.gov/articles/16thstreetbaptist.htm"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.nps.gov/articles/16thstreetbaptist.htm
                    <br />
                    <br />
                  </a>
                </p>
              </div>
            </Collapsible>
          </p>

          <div className="mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/16th street church birminghamLOC BW.jpg"
              alt="Four Girls Murdered in Birmingham 1963"
              width="980px"
            />
            <span className="text-sm  leading-none">
              (16th Street Church, Birminham, AL (Librarry of Congress) )
            </span>
          </div>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[65ch] ">
            <img
              className="border-2 border-black "
              src="images/16th Street Church bombed 1963 outside view.jpg"
              alt="Four Girls Murdered in Birmingham 1963"
              width="980px"
            />
            <span className="text-sm leading-none">
              (The crater and other damage caused by the bombing of the
              Sixteenth Street Baptist Church, which killed four
              African-American girls. AP Photo. )
            </span>
          </div>

          <h4 className=" mt-4 mb-3 max-w-[25ch] text-center  text-2xl font-bold italic ">
            November 22, 1963 - President John F. Kennedy Assassinated in
            Dallas, TX,
          </h4>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            On November 22, 1963, President John F. Kennedy was assassinated in
            Dallas, TX. I remember being in the Ridgewood, NJ Highschool
            cafeteria when a news broadcast could suddenly be heard over the PA
            system reporting that the President had been shot. There was a
            stunned silence as we all tried to make sense of what we heard
            <Collapsible icon="]&#8224;]">
              <div className="mx-4 mt-[20px] max-w-[45ch] break-words	text-[18] text-black">
                <p className=" w-[12chr] text-[12px] leading-4">
                  Robert Siegel, "Walter Cronkite On The Assassination Of John
                  F. Kennedy," NPR News All Things Considered, Washington, DC,
                  November 22, 2013 4:22 PM ET.
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.npr.org/transcripts/246628793"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.npr.org/transcripts/246628793
                    <br />
                    <br />
                  </a>
                  {/* <br /> */}
                </p>
              </div>
            </Collapsible>
          </p>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/JFK_limousine BW.webp"
              alt="JFK at Dealey Plaza"
              width="980px"
            />
            <span className="text-sm leading-none">
              (President Kennedy motorcade in Dallas, Texas, on Main Street,
              minutes before the assassination. November 22, 1963 (Public
              Domain))
            </span>
          </div>

          <h4 className=" mt-4 mb-3 max-w-[25ch] text-center  text-2xl font-bold italic ">
            1963 - 1968 Racial Violence, Expanding War, and Assaassinations
          </h4>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Over the next five years, riots fueled by racial injustice rocked
            the U.S. Riots began in Birmingham, Alabama (1963), reignited in
            Harlem in New York City (1964), spread to Watts in Los Angeles
            (1965), then to Chicago (1966). During the "long hot summer" of
            1967, riots erupted in Atlanta, Cincinnati, Detroit, Boston,
            Buffalo, Milwaukee, Minneapolis, Newark, NJ, Plainfield, NJ,
            Rochester, NY, Tampa Bay, FL, and Toledo, OH. It seemed that things
            couldn't get much worse. But they did!
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images\Watts_car_flipped.webp"
              alt="JFK at Dealey Plaza"
              width="980px"
            />
            <span className="text-sm leading-none">
              Burned out cars during Watts Riots of August 1965 (Public Domain)
            </span>
          </div>

          <h4 className=" mt-4 mb-3 max-w-[25ch] text-center  text-2xl font-bold italic ">
            August, 1964 - U.S. Involvement in the Vietnam War Dramatically
            Escalates
          </h4>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The Vietnam war
            <Collapsible icon="]&#8224;]">
              <div className="mx-4 mt-[20px] max-w-[45ch] break-words	text-[18] text-black ">
                <p className=" w-[12chr] text-[12px] leading-4">
                  Wikipedia contributors, "Vietnam War," Wikipedia, The Free
                  Encyclopedia,
                  https://en.wikipedia.org/w/index.php?title=Vietnam_War&oldid=1102834758
                  (accessed August 14, 2022).
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/nam_VietWar"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://en.wikipedia.org/w/index.php?title=Vietnam_War&oldid=1102834758
                  </a>
                  <br />
                </p>
              </div>
            </Collapsible>
            , officially the war between North and South Vietnam began in 1955
            and ended in 1975. Since North Vietnam was supported by the Soviet
            Union, China, and other communist allies and South Vietnam was
            supported by the United States, South Korea, the Philippines,
            Thailand, and other anti-communist allies, the war was seen as an
            extension of the Cold War.
          </p>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              // src='images\US Soldiers vietnam war flickr by manhhai (1).webp'
              src="images\11_vietnam_war.jpg"
              alt="US Soldiers Vietnam"
              width="980px"
            />
            <span className="text-sm leading-none">
              US Soldiers in Vietnam - Wikipedia (Public Domain)
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            US troop involvement in Vietnam escalated from approximately 23,000
            US advisors in early 1964 to over 184,000by the end of that year.
            This dramatic increase was in response to an alleged attack on two
            US destroyers in the Gulf of Tonkin by fast attack craft from North
            Vietnam. This escalation was made possible by the passing of the
            Gulf of Tonkin Resolution by the U.S. Congress on August 5, 1964. It
            authorized President Johnson to take any measures he believed were
            necessary to retaliate and to promote the maintenance of
            international peace and security in southeast Asia. This resolution
            became the legal basis for the Johnson and Nixon Administrations’
            prosecution of the Vietnam War.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Every year onward, there was significant build-up of U.S forces,
            despite little progress. U.S Secretary of Defense Robert McNamara,
            one of the principal architects of the war, began expressing doubts
            of victory by the end of 1966. U.S. and South Vietnam forces relied
            on air superiority and overwhelming firepower to conduct search and
            destroy operations, involving ground forces, artillery, and
            airstrikes. The U.S. also conducted a large-scale strategic bombing
            campaign against North Vietnam and Laos.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images\A-6A_Intruders_drop_bombs_over_vietnam _1968_BW_.webp"
              alt="US Bombers Vietnam"
              width="980px"
            />
            <span className="text-sm leading-none">
              Two U.S. Navy A-6A Intruder aircraft dropping Mk 82 227 kg (500
              lbs) bombs over Vietnam 1968, U.S. Navy National Naval Aviation
              Museum (Public Domain)
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The Tet Offensive of 1968 showed the lack of progress with these
            doctrines. With the VC and PAVN mounting large-scale urban
            offensives throughout 1968, U.S domestic support for the war began
            fading. The Army of the Republic of Vietnam (ARVN) expanded
            following a period of neglect after Tet and was modeled after U.S
            doctrine. The VC sustained heavy losses during the Tet Offensive and
            subsequent U.S.-ARVN operations in the rest of 1968, losing over
            50,000 men. The CIA's Phoenix Program further degraded the VC's
            membership and capabilities. By the end of the year, the VC
            insurgents held almost no territory in South Vietnam, and their
            recruitment dropped by over 80% in 1969, signifying a drastic
            reduction in guerrilla operations, necessitating increased use of
            PAVN regular soldiers from the north.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              // src='images\US Soldiers vietnam war flickr by manhhai (1).webp'
              src="images\19vietnam-web-NYT_ARVN_cropped.jpg"
              alt="US Soldiers Vietnam"
              width="980px"
            />
            <span className="text-sm leading-none">NY Times</span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The ARVN, buttressed by said U.S. support, stopped the largest and
            first mechanized PAVN offensive to date during the Easter Offensive
            of 1972.The offensive resulted in heavy casualties on both sides and
            the failure of the PAVN to subdue South Vietnam, but the ARVN itself
            failed to recapture all territory, leaving its military situation
            difficult.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The Paris Peace Accords of January 1973 saw all U.S forces
            withdrawn; the Case–Church Amendment, passed by the U.S Congress on
            15 August 1973, officially ended direct U.S military involvement.
            The Peace Accords were broken almost immediately, and fighting
            continued for two more years. Phnom Penh fell to the Khmer Rouge on
            17 April 1975 while the 1975 Spring Offensive saw the capture of
            Saigon by the PAVN on 30 April; this marked the end of the war, and
            North and South Vietnam were reunified the following year.
          </p>
        </div>

      </div>
    </>
  );
}

export default Home;
