import React, { useState, useRef } from "react";
// import { AiOutlineCloseSquare, AiFillDownSquare } from "react-icons/ai";
import Collapsible from "../Components/Collapsible";
// import sectionDiv from "../Assets/Icons/section divider.svg";

function BackStory() {
  return (
    <>
      <div className='  mt-[40px] mx-auto  flex flex-col items-center '>
        <h1 className=' text-center text-3xl md:text-4xl  mb-3'>My Story</h1>

        <p className=' text-[20px] mx-[20px] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[28px]  lg:max-w-[60ch] '>
          From June 28, 1970, to December 29, 1971, I served as the Public Information Office
          (PIO) clerk for the 2nd Battalion, 6th Infantry (the "2/6")
          Regiment of the Berlin Brigade, U.S. Army Berlin (USAB) in Berlin, Germany. My
          primary duty was to promote the 2/6 by getting vignettes, feature articles, and
          photos of Batallion accomplishments published in the Brigade's weekly newspaper, the
          Berlin Observer.
        </p>
        <div className=' max-w-[36ch] md:max-w-[65ch]'>
          <img
            className=' mt-4'
            src='images/Berlin scenes 41  resized.webp'
            alt='Ku-Damm Berlin'
            width='600px'
          />
          <span className='text-sm leading-none '>
            Ku-damm Strasse & Kaiser Wilhelm Memorial, Berlin Germany c. 1970 taken by me
          </span>
        </div>
        <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
          In February 2020, I discovered an online archive of over 900 complete editions of the
          Observer preserving Brigade-related events (many of significant historical
          importance) from the first issue on September 25, 1945 (just five and a half months
          after Germany surrendered) through the final publication on July 15, 1994. (See the
          Berlin Observer Archives page to access all PDFs).
        </p>
        <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          My wife suggested that I preserve my work contained in that archive along with some
          context so that my family, particularly my sons and grandchildren, would know a
          little of what my life in the Army was like. This website is the result of that
          effort. (For a description of how and why I started this project. Go to the page).
        </p>
        <h1 className=' text-center text-4xl  mb-3'>The Backstory - How I Got to Berlin.</h1>

        <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          On December 3, 1969, at the height of American involvement in the Vietnam War, I
          joined the U.S. Army. As with most decisions, my choices were remarkably few. I could
          enlist, live with the uncertainty of the draft, or evade military service altogether.
          The events and convictions that influenced my decision were varied, complex, and
          mostly out of my control.
        </p>
        <h2 className=' text-center text-3xl  mb-1'>The Draft Lottery</h2>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          The timing of my decision was determined primarily by the outcome of a lottery. On
          December 1, 1969, at Selective Service National Headquarters in Washington, D.C., a
          nationally televised lottery determined the "order of call" for induction into
          military service for 1970. The lottery was established to address perceived
          inequities in the "oldest man first" method for conscripting civilians.
        </p>
        
        <div className=' max-w-[36ch] md:max-w-[65ch]'>
          <img
            src='images/Draft Lottery glass bowl Pirnie.jpg'
            width='940px'
            alt='Lottery 1969'
          />
          <span className='text-sm leading-none'>(Library of Congress)</span>
        </div>

        <h3 className='text-center  underline text-2xl  mb-1'>The Process</h3>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          366 opaque plastic capsules, each containing a slip of paper with a number from 1 to
          366 representing each day of the year (366 to account for those born on February 29th
          during leap years), were placed in a large glass container and drawn by hand. The
          number in each capsule represented the birth date of each eligible registrant.
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          The sequence in which a person’s birth date was drawn determined the order in which
          young men between 18 and 26 were to be called to serve. The event was covered live on
          TV and radio. I remember watching it with rapt attention. The first capsule drawn by
          Congressman Alexander Pirnie (R-NY) of the House Armed Services Committee, contained
          the number representing September 14, so all men born on September 14 in any year
          between 1944 and 1950 were assigned lottery number 1. The drawing continued until all
          days of the year had been paired with a sequence number.
        </p>
        <h3 className='text-center  underline text-2xl mb-1'>The Results</h3>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          My birth date, November 27, 1947, was on the 47th capsule chosen. (See results card.)
        </p>
        <div className=' max-w-[36ch] md:max-w-[65ch]'>
          <img
            className='border-2 border-black'
            src='images/lottery-card-1970-marked.jpg'
            alt='Lottery 1969'
            width='880px'
          />
          <span className='text-sm leading-none mr-8 '>1970 Results.</span>
        </div>
        <h3 className='text-center underline text-2xl  mb-3'>Seeking Advice</h3>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          I decided to get an expert opinion on how long I had until I was likely to be
          drafted. So, on December 3rd, I visited the local Army recruitment office in Midland
          Park, NJ, "You might make it to February." the Recruitment Officer said after I told
          him that my lottery number was 47.
        </p>
        <div className=' max-w-[36ch] md:max-w-[65ch]'>
          <img
            className='border-2 border-black'
            src='images/Enlisting.webp'
            alt='Lottery 1969'
            width='880px'
          />
          <span className='text-sm leading-none'>U.S. Army Recruiter</span>
        </div>

                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          I asked him if there was any benefit in volunteering rather than waiting to be
          drafted. He said that my military records would show that I was "RA" (Regular Army
          volunteer) rather than "US," indicating draftee status. He suggested that the Drill
          Instructors (DI) at Basic Training might treat volunteers better than draftees.
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          He also said that enlisting would allow me to schedule my induction rather than be in
          a constant state of anticipation. If my RA status had a positive impact during my
          Army career, it certainly wasn't obvious during Basic Training.
        </p>
        <p className=' text-[20px]  p-2 max-w-[85vw] '>
          <span className='font-bold'>The Decision:</span> I signed up and scheduled my
          induction for February 2, 1970.
        </p>
        {/* <img className='max-w-[35vw] ' src={sectionDiv} alt='divider' /> */}

        <h2 className=' text-center text-3xl  mb-1'>How did I Get Here?</h2>
      
        <div className=' w-[42ch] md:max-w-[65ch]'>
          <img
            className='border-2 border-black'
            src='images/JTAlicewithCCat500.webp'
            alt='Alice and the Cat'
            width='980px'
          />
        </div>
        <div className='text-[14px] md:text-[16px]  w-[32ch] ml-[165px] md:ml[200px] mb-[6px]  md:leading-4	leading-1  -mt-[340px]'>
          `Would you tell me, please, which way I ought to go from here?' <br />
          `That depends a good deal on where you want to get to,' said the Cat. <br />
          `I don't much care where--' said Alice. <br />
          `Then it doesn't matter which way you go,' said the Cat. <br />
          `--so long as I get SOMEWHERE,' Alice added as an explanation. <br />
          `Oh, you're sure to do that,' said the Cat, `if you only walk long enough
          
            <Collapsible icon='[&#8224;]'>
            <div className="-ml-10 w-[300px] mt-[32px] break-words">
              [&#8224;]
                Carroll, Lewis. Alice’s Adventures in Wonderland. With illustrations by John
                Tenniel. Alice-in-wonderland.net Page 30.
                <a
                  target='blank'
                  rel='noopener noreferrer'
                  href='https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf'
                  className='
                  text-blue-600
                  visited:text-purple-600'>
                  https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf
                  <br/>
                  <br/>
           
                </a>
                {/* <br /> */}
              </div>
            </Collapsible>
          </div>

      
        <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] ,y=[30px]'>

          Like Alice, I had no clear idea of where I wanted to "get to" in the years and months
          leading to my enlistment. The war in Vietnam, the university I attended, the courses
          I took, the interests I developed, and the experiences I had that led directly to my
          enlistment decision were not planned,
          <b>at least not by me</b>.
        </p>
        <h3 className=' text-center underline text-2xl  mb-3'>The Influencers</h3>
        
        <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          How we make sense of what we see happening in the world around us is greatly
          influenced by our family, friends, and the various communities in which we live.
          These influences significantly impact our decisions, but there is also always a
          spiritual element at the core of every decision. After all, we are all spiritual as
          well as physical creatures. Whether we accept, reject, or ignore the spiritual input,
          its influence and impact remain.
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          Since I can’t possibly understand, much less record here, all the things that
          influenced my decision to join the Army, I thought it would be interesting, maybe
          even helpful, to capture some of the significant political, social, cultural, and
          technological influences of the 1960s.
        </p>
        <h3 className=' text-center underline text-2xl  mb-3'>
          My Personal life and the World Around me
        </h3>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          For nearly the entire decade of the 1960s, from September 1960 to May 1969, my
          personal life focused on high school and college and all the interests, activities,
          and social “angst” like every other teenager in the 60s. While I was focused on my
          personal life, I was also aware of the events going on in the world around me. While
          they had some influence, they did not seem to directly impact my life during this
          time. But the impact was there, and, for the purposes of the story, they
          significantly impacted my decision to join the Army.
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          Unlike many typical high schools in northern New Jersey, Ridgewood high school only
          covered grades 10 through 12. Grades nine through 11 were housed in two middle school
          buildings: the Benjamin Franklin school, and the George Washington school. Having
          attended a private school through eighth grade, I spent my “freshman” year of high
          school at George Washington school, about a mile from our house.
        </p>
        <div className='	mx-auto  max-w-[55ch] mt-4 '>
          <img
            className='border-2 border-black '
            src='images/GW.jpg'
            alt='Riodgewood High'
            width='980px'
          />
          <span className='text-sm leading-none'>
            George Washington Middle School, Ridgewood, NJ
          </span>
        </div>
<p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          From September 1962 to June 1965, I attended Ridgewood high school in Ridgewood, New
          Jersey. I had an unremarkable career there. I could get by with minimum effort, and,
          to my later shame, a minimum effort is what I gave. I was more interested in my
          activities away from school. From 6th grade until high school, my closest friend,
          Dick Gilmour, and I would spend a lot of time together after school building model
          cars, reading Mad Magazine, and riding our bicycles around the neighborhood.
        </p>
        <div className='	mx-auto  max-w-[55ch] mt-4 '>
          <img
            className='border-2 border-black '
            src='images/Ridgewood_High_School BW.webp'
            alt='Riodgewood High'
            width='980px'
          />
          <span className='text-sm leading-none'>Ridgewood Highschool, Ridgewood, NJ</span>
        </div>
        <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          While I attended the public school in Ridgewood, Dick attended a private military
          high school in Manhattan. As we moved on in our high school careers, we began
          spending weekends and summers mainly playing sports. If I remember correctly, Dick
          started to take tennis lessons, and he would teach me what he learned. Since we had a
          good-quality public tennis court near our neighborhood, we would play on many
          weekends, both days and throughout the summer. The tennis courts were only a couple
          blocks from van Dyck’s ice cream parlor, so many a summer day was spent going back
          and forth between the tennis courts and Van Dyk’s. Those were beautiful days.
        </p>
        <div className='	mx-auto  max-w-[55ch] mt-4 '>
          <a href='https://www.vandyksicecream.com/'>
            {" "}
            <img
              className='border-2 border-black '
              src='images/va dyks icecreamridgewood nj.jpg'
              alt='Van Dyks Ice Cream Ridgewwod NJ'
              width='980px'
            />
            Belaire Tennis Courts Ridgewwod NJ
          </a>
        </div>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          While we were able to enjoy a great deal of freedom without much responsibility, we
          were certainly aware of the political, social, and cultural events going on around
          us. The proliferation of television sets across the United States brought news of
          these events into our homes every night.
        </p>
        <h3 className=' text-center underline text-2xl '>
          Off to College -September 1964 through May 1969
        </h3>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          As an example of how little control we have over our lives, I attended Loyola
          University in New Orleans because I had received an acceptance letter from them in
          the spring of 1965, even though I had never officially applied.
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          It turned out that Loyola was looking to expand the geographic scope of its student
          base in 1964, and New Jersey was in their target zone. They accepted me because I
          lived in New Jersey and had scored well on my SATs. (It certainly was not due to my
          grades.) Loyola had received my SAT scores because I had put a checkmark next to
          "Loyola University (LA)" on my SAT document as a place to send my results. I thought
          "LA" meant Los Angles when it meant Louisiana. It was the only acceptance letter I
          had received, so in September 1965, off I went to New Orleans
          <span>
            <a
              href='https://goo.gl/maps/F6HwQFJxHC5DLHMC8'
              target='blank'
              rel='noopener noreferrer'
              className='font-bold'>
              {" "}
              (Click for map location)
            </a>
          </span>
          .
        </p>

        <div className='	mx-auto  max-w-[55ch] my-6 '>
          <img
            className='border-2 border-black '
            src='images/Loyola Marquette Hall 1960s LA stat archives.webp'
            alt='U2'
            width='980px'
          />
          <span className='text-sm leading-none'>
            Loyola University, New Orleans Louisiana - from Louisiana State archives.
          </span>
        </div>

                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          With a student deferment in hand, I was not concerned about being drafted into
          military service as I arrived at Loyola for my first year. During registration, I had
          to declare a major field of study. I approached this decision with a vague notion
          that I should take classes that would help me get a job in “business” eventually. A
          faculty advisor convinced me to enroll in a new ambitious “Business Law” program. In
          this program, a student would complete all requirements for a BA degree in Business
          Administration within three years and then spend their senior year taking
          business-related courses at the Loyola School of Law. This program was dropped by
          Loyola the following year because the up-front course load was considered too
          burdensome by the Association to Advance Collegiate Schools of Business (AACSB). I
          had to find a new degree program.
        </p>

        <h3 className=' text-center underline text-2xl '>A Change in Direction</h3>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          Happily, some friends had asked me to join the staff of the student-run WVSU-AM radio
          station, which broadcast to the campus over telephone lines (carrier current) from
          the balcony in the theatre in Marquette Hall. By the end of my freshman year, the
          radio station moved to new facilities in the basement of the Danna Student Center and
          changed the call letters to{"   "}
          <a
            target='blank'
            rel='noopener noreferrer'
            href='https://en.wikipedia.org/wiki/Crescent_City_Radio'
            className='
                  text-blue-600
                  visited:text-purple-600'>
            WOLF
          </a>{" "}
          . (Wolf Pack being the mascot of Loyola’s sports teams).
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          During this same time, Loyola worked with WWL executives to introduce a new BA
          program in Communications (later named Bachelor of Arts in Mass Communications) at
          Loyola. I transferred to that program.
        </p>
        <div className='	mx-auto  max-w-[55ch] my-2'>
          <img
            className='border-2 border-black '
            src='images/Me on camera yearbook 1968.webp'
            alt='Me at Loyola'
            width='980px'
          />
          <span className='text-sm leading-none'>
            That's me on the headset, upper right - from 1968 Loyola Yearbook
          </span>
        </div>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          I worked as an early morning DJ, a play-by-play radio announcer at the Loyola
          Basketball games, the PA announcer at a few Loyola Baseball team and football club
          games. As a reporter, I had the opportunity to interview many notable musical artists
          who came to perform at the Loyola Field House. Among them were: Peter, Paul and Mary,
          Simon & Garfunkel, The 5th Dimension (my favorites - they took a couple of us
          starving college interviewers to an expensive restaurant and paid for our meals.
          Marilyn McCoo was even more beautiful in person!), and Johnny Rivers. I also got to
          work backstage at a Beach Boys concert at the field house (April 18, 1968) but did
          not get to interview them. My friend, Jeff Bray, was the MC for the show.{" "}
        </p>
        <div className='	mx-auto  max-w-[55ch] mt-4 '>
          <img
            className='border-2 border-black '
            src='images/Loyola_Field_House.jpg'
            alt='Riodgewood High'
            width='980px'
          />
          <span className='text-sm leading-none'>
            Loyola University Field House, New Orleans, LA
          </span>
        </div>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          After the Department of Communications and changing my major, I was able to take
          courses in TV writing, directing, announcing, and camera operation. At the start of
          my senior year, I was named Senior Operations Director for the radio station now
          named WLDC . These skills were to come in handy when I finally got to Berlin.
        </p>
                <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

          I also joined the ROTC was a member of the competitive rifle team, and the Drill
          Team. As far as I know, neither one of these activities.
        </p>


        <div className='	mx-auto  max-w-[55ch] my-4 '>
          <img
            className='border-2 border-black '
            src='images/loyola-cadet-battalion-marches-back-to-campus-from-audubon-park-1966.webp'
            alt='Loyola ROTC Drill Tea,'
            width='980px'
          />
          <span className='text-sm leading-none'>
            Loyola ROTC back to campus from drill practice in Audubon Park.
          </span>
        </div>


        <h1 className=' text-center text-4xl  mb-3'>
          Timeline 1960 through 1969 - Outside my Bubble
        </h1>

                    <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

            May 1, 1960 - U.S. Spy Plane Shot Down over USSR
          </p>
                  <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

            The ongoing Cold War between the Soviet Union and the western allies, three major
            political assassinations, the nation-wide racial violence, and the escalation of
            the Vietnam War all played a major role in my decision.
          </p>
          <div className='	mx-auto  max-w-[55ch] my-4 '>
            <img
              className='border-2 border-black '
              src='images/First-U-2.jpg'
              alt='U2'
              width='980px'
            />
            <span className='text-sm leading-none '>
              U2 Spy Plane Photo credit: U.S. Air Force
            </span>
          </div>
              <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
            On May 1, 1960, four months before I started high school, a CIA U-2 Spy Plane,
            flown by Francis Gary Powers, was shot down by the Soviet air defense forces while
            performing photographic aerial reconnaissance deep inside Soviet territory. This
            incident was a significant international embarrassment to the United States. It
            came at a very sensitive time in the developing Cold War between the United States
            and the Soviet Union.
          </p>
          <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
            The single-seated aircraft had successfully evaded Soviet air defense capabilities
            on several previous missions. Powers had taken off from Peshawar, Pakistan, and
            crashed near Sverdlovsk after being hit by an S-75 Dvina surface-to-air missile.
            Powers parachuted safely and was quickly captured. Powers was convicted of
            espionage and sentenced to three years of imprisonment plus seven years of hard
            labor but was released two years later in February 1962 in a prisoner exchange for
            Soviet intelligence officer Rudolf Abel.
          </p>
          <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
            October 16 to November 20, 1962 - Cuban missile crisis
          </p>
                  <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

            On October 17, 1962, every network brought news that a U.S. U2 spy plane
            photographed evidence that as many as 32 Soviet-built medium-range ballistic
            missiles capable of delivering a nuclear warhead to any location within a
            1,600-mile radius were already in Cuba with more on the way. In 0response,
            President Kennedy established an Executive Committee of the National Security
            Council comprised of top officials of the U.S. Departments of Defence, State, the
            CIA, and other national security experts.
          </p>
          <div className='	mx-auto  max-w-[55ch] mt-4 '>
            <img
              className='border-2 border-black '
              src='images/The_relative_ranges_of_the_IL-28,_SS-4,_and_SS-5,_stationed_on_Cuba.webp'
              alt='Cuban Missile Crisis'
              width='980px'
            />
            <span className='text-sm leading-none	'>
              (The relative ranges of the Soviet missiles based on Cuba in nautical miles (NM).
              (Public Domain))
            </span>
          </div>
                  <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

            The President received advice on the most appropriate response ranging from a
            direct attack on the missile sites to a blockade of the island nation. Arguing for
            the direct attack approach, Air Force Chief General Curtis LeMay stated, “They'll
            do nothing," in response to the President's question about a Soviet response to a
            direct attack. Kennedy responded: "Are you trying to tell me they'll let us bomb
            their missiles and kill a lot of Russians and then do nothing? If they don't do
            anything in Cuba they'll certainly do something in Berlin."
          </p>
                  <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>

            Secretary of Defense Robert McNamara proposed that a blockade of Cuba would put
            pressure on the Soviets but give them time to reconsider and deescalate. It would
            also provide the U.S. with time to prepare for more aggressive action if warranted.
            McNamara noted that surgical airstrikes were not practical unless followed by an
            invasion.
          </p>
          <div className='	mx-auto  max-w-[55ch] mt-4 '>
            <img
              className='border-2 border-black '
              src='images/P-2H_Neptune_over_Soviet_ship_Oct_1962 (1).webp'
              alt='Van Dyks Ice Cream Ridgewwod NJ'
              width='980px'
            />
            <span className='text-sm leading-none'>
              (A US Navy P-2H Neptune anti-submarine warfare (ASW) aircraft monitors a Soviet
              cargo ship. (Public Domain))
            </span>
          </div>
          <div className=' max-w-[64ch]'>
          <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
            President Kennedy decided on a plan based upon McNamara's advice and ordered a
            total naval "quarantine" of Cuba, declaring that the U.S. would prevent any ship
            carrying offensive weapons from reaching Cuba. There was a real possibility that
            the U.S. Navy would forcibly stop and board Soviet ships and that war would ensue.
            Eventually, the two nations negotiated the total removal of missiles and the
            destruction of the launch facilities
              <Collapsible icon='[&#8224;]'>
              <div className="mx-8 w-[500px]">
              [&#8224;]
              <p>
                  “CUBAN MISSILE CRISIS” Accessed February 11, 2022.
                  <br />
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='https://www.jfklibrary.org/learn/about-jfk/jfk-in-historycuban-missile-crisis'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    {" "}
                    https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/cuban-missile-crisis
                  </a>
                </p>
                <p>
                  Britannica, T. Editors of Encyclopaedia. "Cuban missile crisis." Encyclopedia
                  Britannica, December 20, 2021.
                  <br />
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='https://www.britannica.com/event/Cuban-missile-crisis'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    https://www.britannica.com/event/Cuban-missile-crisis
                  </a>
                </p>
                <p>
                  Schwarz, Benjamin, Janury/February 2013 Issue, The Real Cuban Missile
                  Crisis.The Atlantic.
                  <br />
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='https://www.theatlantic.com/magazine/archive/2013/01/the-real-cuban-mssile-crisis/309190/'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    https://www.theatlantic.com/magazine/archive/2013/01/the-real-cuban-mssile-crisis/309190/
                  </a>
                </p>
                <p>
                  Arnold, Mark, May 5, 2013 Issue, JFK and the Road to Dallas: The Cuban
                  Missile Crisis-Part II.
                  <br />
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='http://fromanativeson.com/2013/05/05/jfk-and-the-road-to-dallas-the-cuban-missile-crisis-pat-ii-by-mark-arnold/'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    http://fromanativeson.com/?s=The+Cuban+Missile+Crisis-Part+II
                    <br />
                    <br />
                  </a>
                  </p>

                </div>
              </Collapsible>
              </p>
            </div>
          <p className=' text-center text-xl border-2 border-black mb-3	'>
            May 11 and September 15, 1963 - Three bombings in Birmingham Alabama ignite a
            decade of racial violence.
          </p>
          <div className=' max-w-[64ch]'>
          <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
            The city of Birmingham, Alabama was no stranger to racially-motivated bombings.
            There were 48 such bombings reported in Birmingham between 1948 in 1957. In one
            month in 1957, four black churches and at least seven private residences were
            bombed.
              <Collapsible icon='[&#8224;]'>
                <div className="ml-8 w-[300px] break-words">
                  <p>
                  Gado, Mark (2007). "Bombingham". CrimeLibrary.com/Court TV Online. Archived
                  from the original on August 18, 2007.
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='https://web.archive.org/web/20070818222057/http://www.crimelibrary.com/terrorists_spies/terrorists/birmingham_church/3.html'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    https://web.archive.org/web/20070818222057/http://www.crimelibrary.com/terrorists_spies/terrorists/birmingham_church/3.html
                 <br />
                 <br />
                  </a>
                  </p>
                </div>
              </Collapsible>
              </p>
          </div>

          <div className='	mx-auto  max-w-[55ch] mt-4 '>
            <img
              className='border-2 border-black '
              src='images/birmingham riots dogs.webp'
              alt='Dogs attack protesters in Birmingham'
              width='980px'
            />
            <span className='text-sm  leading-none'>
              (Dogs attack protesters in Birmingham, AL - By Bill Hudson, of the Associated
              Press)
            </span>
          </div>

          <div className=' max-w-[64ch]'>
          <p className=' text-[20px] max-w-[32ch] sm:text-[28px] sm:max-w-[40ch]  lg:max-w-[64ch] '>
            On Sunday, September 15, 1963, at the 16th street Baptist Church in Birmingham, AL,
            four young girls, 14-year-olds Addie Mae Collins, Denise McNair, Carole Robertson,
            and 11-year-old Cynthia Wesley, were murdered by a bomb planted under the steps of
            the church by members of Cahaba River Group, a splinter group of the Eastview
            Klavern #13 chapter of the Ku Klux Klan. It took until May 1, 2001, until three of
            the four suspected bombers were convicted.
              <Collapsible icon='[&#8224;]'>
              <div className="mt-[3-px] w-[300px] break-words">
              [&#8224;]
                <p>
                  16th Street Baptist Church Bombing, National Parks Service.
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='https://www.nps.gov/articles/16thstreetbaptist.htm'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    https://www.nps.gov/articles/16thstreetbaptist.htm
                    <br />
                    <br />
                  </a>
                </p>
                </div>
              </Collapsible>
              </p>
          </div>

          <div className='	mx-auto  max-w-[55ch] mt-4 '>
            <img
              className='border-2 border-black '
              src='images/16th street church birminghamLOC BW.jpg'
              alt='Four Girls Murdered in Birmingham 1963'
              width='980px'
            />
            <span className='text-sm  leading-none'>
              (16th Street Church, Birminham, AL (Librarry of Congress) )
            </span>
          </div>
          
          <div className='	mx-auto  max-w-[55ch] mt-4 '>
            <img
              className='border-2 border-black '
              src='images/16th Street Church bombed 1963 outside view.jpg'
              alt='Four Girls Murdered in Birmingham 1963'
              width='980px'
            />
            <span className='text-sm leading-none'>
              (The crater and other damage caused by the bombing of the Sixteenth Street
              Baptist Church, which killed four African-American girls. AP Photo. )
            </span>
          </div>


          <p className=' text-center text-xl border-2 border-black mb-3	'>
            November 22, 1963 - President John F. Kennedy Assassinated in Dallas, TX,
          </p>
          <div className=' max-w-[64ch]'>
            On November 22, 1963, President John F. Kennedy was assassinated in Dallas, TX. I
            remember being in the Ridgewood, NJ Highschool cafeteria when a news broadcast
            could suddenly be heard over the PA system reporting that the President had been
            shot. There was a stunned silence as we all tried to make sense of what we heard
              <Collapsible icon=']&#8224;]'>
              <div className="ml-8 w-[300px] break-words">
                <p className=' w-[12chr] text-[12px] leading-4'>
                  Robert Siegel, "Walter Cronkite On The Assassination Of John F. Kennedy," NPR
                  News All Things Considered, Washington, DC, November 22, 2013 4:22 PM ET.
                  <a
                    target='blank'
                    rel='noopener noreferrer'
                    href='https://www.npr.org/transcripts/246628793'
                    className='
                  text-blue-600
                  visited:text-purple-600'>
                    https://www.npr.org/transcripts/246628793
                    <br />
                    <br />
                  </a>
                  {/* <br /> */}
                </p>
                  </div>
              </Collapsible>
          </div>
          <div className='	mx-auto  max-w-[55ch] mt-4 '>
            <img
              className='border-2 border-black '
              src='images/JFK_limousine BW.webp'
              alt='JFK at Dealey Plaza'
              width='980px'
            />
            <span className='text-sm leading-none'>
              (President Kennedy motorcade in Dallas, Texas, on Main Street, minutes before the
              assassination. November 22, 1963 (Public Domain))
            </span>
          </div>
        </div>
    </>
  );
}

export default BackStory;
