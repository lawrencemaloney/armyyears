import React, { useState, useRef } from "react";
import Header from "../Components/Header";

import Collapsible from "../Components/Collapsible";
import Sidebar from "../Components/Sidebar";

function Training() {
  return (
    <>
        <Header />
        <Sidebar />
      <div className="trainwrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center ">


        <div className="  mx-auto mt-[40px]  flex flex-col items-center ">
          <h1 className=" mx-[20px] mt-[1rem] mb-3 text-center text-3xl  tablet:text-4xl">
            Welcome to the Army
          </h1>
          <h2 className=" mt-3 text-center  text-3xl">
            Fort Dix - Basic Training
          </h2>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            On Monday, February 2, 1970, I was one of about 40 young men
            inducted into the U. S. Army at the Induction Center in Hackensack,
            NJ. After receiving physical exams, we were lined up randomly when
            the military person in charge (probably a sergeant) asked for
            volunteers for the Marine Corps. Not getting as many as he needed,
            he "volunteered" a couple. The rest of us were loaded onto a bus and
            driven about 80 miles to Fort Dix.
          </p>
          <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/FT dix induction cropped.jpg"
              alt="Ft Dix Reception 1968"
              width="980px"
            />
            <span className="text-sm leading-none ">
              (Chairborne, Alan S. - WITF.org)
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            We arrived after dark and were directed into a building where we
            were given uniforms and other items needed for basic training. I
            guess we must have been fed, although I don't remember it. I do
            remember being roused out of bed early the next morning while it was
            still dark. I got up right away but some who didn't were not so
            gently reminded that they were definitely "in the Army now"!
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            On one of the first days in camp, we all lined up for the dreaded
            first army haircut. This was the early 70's and many of the guys had
            been cultivating long hair for a few years. The barbers (if they
            were barbers) showed no mercy. Some guys took it pretty hard. Keep
            in mind, about 25% of the trainees were draftees and had not chosen
            to be there, but they hadn’t shirked their responsibility either.
          </p>
          <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className=" border-2 border-black "
              width="980px"
              src="images/cryin shame.jpg"
              alt="Army haircut"
            />
            <span className="text-sm leading-none ">
              ("cryin shame" (r/OldSchoolCool at Reddit) )
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Later in the first week, we were given aptitude tests to help the
            Army determine how our skills could best fit their needs. While this
            sounds good in theory, in times of war like this, what the Army
            mostly needed was soldiers to shoot and be shot at and this required
            a very limited set of skills. But they also needed junior officers
            to fill the ranks of those that were leaving the Amy and could not
            be adequately filled by commissioning programs like military
            academies. To fill the gap, the U.S. Army instituted Officer
            Candidate School (OCS). “OCS is a 12-week course designed to train,
            assess, evaluate, and develop second lieutenants for the U.S. Army.
            It is the only commissioning source that can be responsive to the
            U.S. Army's changing personnel requirements due to its short length,
            compared to other commissioning programs and their requirements.”
            <Collapsible icon="[&#8224;]">
              <p className="mx-4 mt-[20px] max-w-[45ch] break-words	text-[18] text-black ">
                Wikipedia contributors. (2022, May 24). Officer Candidate School
                (United States Army). In Wikipedia, The Free Encyclopedia.
                Retrieved 20:02, June 18, 2022, from{"  "}
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/w/index.php?title=Officer_Candidate_School_(United_States_Army)&oldid=1089478766"
                  className="
                  text-blue-600
                  visited:text-purple-600"
                >
                  https://en.wikipedia.org/w/index.php?title=Officer_Candidate_School_(United_States_Army)&oldid=1089478766
                </a>
                {/* <br /> */}
              </p>
            </Collapsible>
          </p>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            As a direct result of scores on the tests, I was among 3 or 4 out of
            two hundred or so recruits to be offered the opportunity to attend
            OCS. To be eligible I would have to agree to add one year to my
            two-year enlistment to cover the time I would spend in additional
            training. I would begin OCS After basic and advanced infantry
            training when I would be assigned to an OCS that specialized in
            whatever skills the Army thought most useful. Since it would delay a
            possible assignment to Vietnam by a couple of months and I would
            make a few more dollars each month, I signed up. The ramifications
            of this decision would not be known until I was more than half-way
            through my Advanced Infantry Training.
          </p>
          <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              width="980px"
              src="images/basic training morning march big.jpg"
              alt="Army moring march"
            />
            <span className="text-sm leading-none ">
              (by Gary (Mike) Willson at inquisitivequest.com)
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            At Ft. Dix, training began early every morning with a 5-mile march
            in full gear before breakfast in the mess hall. We were happy to get
            to the mess hall, but only had about 15 minutes to eat and form up
            for the day's training. We also had to quick-time march to every
            class.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Some classes, like learning how to disassemble and reassemble
            weapons (we were issued M1 carbines even though the M16 was already
            being used in Vietnam) were held in classrooms but most were held in
            the field. The number one objective of Basic Training was to get us
            in “fighting shape”.
          </p>

          <div className=" mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className=" border-2 border-black "
              width="980px"
              src="images/basic training id_pistol_m1911_700_06.jpg"
              alt="Army pistol practice"
            />
            <span className="text-sm leading-none ">
              (U.S. Army Pistol Training - National Archives and Records
              Administration)
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            We were engaged in some form of physical and weapons training every
            day. Physical training included calisthenics, hand-to-hand fighting,
            obstacle courses, and lots of running. We spent a fair amount of
            time on the rifle range and had to qualify with the M1 and then the
            M16 before graduation. We also had to qualify with the .45 Cal
            pistol (official designation: Pistol, Caliber .45, Automatic,
            M1911A1). A very awkward and inaccurate weapon, at least in my
            hands.
          </p>
          <h2 className="  mt-3 text-center  text-3xl">
            Fort Lewis - Advanced Infantry Training
          </h2>
          <div className=" mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              width="980px"
              src="images/Ft-Lewis-Mt-R-cropped.jpg"
              alt="Ft. Lewis "
            />
            <span className="text-sm leading-none ">(32nd-division.org)</span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            After graduating from Basic Training, I was assigned to Fort Lewis
            situated just south of Tacoma, WA. (See Fort Lewis 1966-1972). It
            had a rugged terrain with a great view of Mt. Rainier. The barracks
            were old wooden buildings with metal frame bunk beds lined up on
            either side of a central aisle. I was assigned to a mortar platoon
            for specialized training in the 81mm and M30 (4.2-inch) mortars. To
            use these weapons, you had to be pretty close to the enemy. The
            effective range of both mortars was about 3 miles. Although 3 miles
            may seem like a long way, someone, a forward observer (FO), had to
            be close enough to see the enemy, radio back to the men servicing
            the weapon, and call in rounds. Calling in rounds required the FO to
            estimate distance and direction for the first round, extrapolate
            from where the round landed what adjustments need to be made for the
            second round. Watch that round, adjust again, etc.
          </p>

          <div className=" mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className=" border-2 border-black "
              width="980px"
              src="images/81mm_b (BW).jpg"
              alt="81mm Mortar "
            />
            <span className="text-sm leading-none ">
              (81mm Mortar-Wikipedia)
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            This was a perilous job since the enemy could sometimes establish
            the FO’s position by triangulating on his hand radio signal. All of
            the members of the mortar platoon were trained in all aspects of the
            weapon. We took pride in being able to hit a target in three rounds
            or less. Having been designated for training in mortars, it was
            understood that I would be using those skills in Vietnam.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            While my training was focused on mortars, we still spent a good
            portion of our time in physical training, pushups, obstacle courses,
            long marches in full packs, and hand-to-hand combat. Since the
            purpose of all our training was to prepare us for fighting in
            Vietnam, we were also taught skills that would be of particular
            value in jungle fighting, like recognizing booby traps and potential
            ambushes. We played “war games” that attempted to simulate what it
            might be like on patrol in Vietnam.
          </p>
          <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className=" border-2 border-black "
              width="980px"
              src="images/Berlin Brigade in Field (16).jpg"
              alt="81mm Mortar "
            />
            <span className="text-sm leading-none ">
              (Live Fire Training - Hohenfels, Germany by me)
            </span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            I remember vividly the night-time “live fire” exercise where our
            platoon had to crawl 50 yards with full packs and a rifle while a
            .50 caliber machine gun fired live rounds over our heads. Live
            tracer rounds were included so that we could see (and hear) the
            bullets flying overhead. While the exercise was spectacular, it was
            also a little scary, even though If you looked down the line instead
            of straight up, you could tell that the rounds were at least 20 – 30
            feet above our heads, but our sergeant's admonition to “keep your
            head down” was deeply ingrained.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            We continued more traditional combat training like improving our
            marksmanship with M16s and throwing hand grenades. An interesting
            story about learning to throw hand grenades. It turns out that some
            soldiers, having practiced with dummy grenades, still couldn’t get
            the three basic steps right when it came to live fire. The live-fire
            grenade range consisted of a long row of small bunkers each about 6
            foot by 12 foot, surrounded on three sides with sandbags and
            reinforced with telephone pole sized logs. Each trainee would go
            inside the bunker with a drill sergeant. Over and over we practiced:
            1- remove the pin, 2- throw the grenade as far as you can, 3 – duck
            below the front wall.
          </p>
          <div className="mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              width="980px"
              src="images/Alan-Shenk-grenade-cropped_2.jpg"
              alt="Grenade Training"
            />
            <span className="text-sm leading-none ">
              (Grenade Pit - Chairborne, Alan S. - WITF.org)
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            While I was on the firing line waiting for my turn, I heard “Fire in
            the hole!” followed closely by the body of a trainee flying out of
            the bunker, followed by the drill sergeant scrambling out, followed
            by an explosion. The drill sergeant was not happy! Apparently, the
            trainee panicked and got the order wrong. He pulled the pin, ducked,
            and then threw the grenade (1,3,2), which hit the front wall of the
            bunker. The trainee flew out of the bunker having been thrown out by
            the DI (a very strong man). Luckily, the Army is somewhat prepared
            for this level of incompetence. Each bunker had a deep trough angled
            so that grenades that didn’t make it out of the bunker over the top
            would (hopefully) role down the trough into a special compartment.
            No one was hurt, except maybe the trainee when he landed. But it
            solidified in my mind that war is dangerous and some people should
            not be allowed to fight in them.
          </p>
          <h3 className=" mt-4  mb-3 text-center text-2xl underline">
            Other Things I Learned at Ft. Lewis
          </h3>
          <div className=" mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className=" border-2 border-black "
              width="980px"
              src="images/Potato-Peeling.jpg"
              alt="KP"
            />
            <span className="text-sm leading-none ">(U. S. Army)</span>
          </div>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Approximately half-way through AIT, I developed pleurisy, an
            inflammation of the layer of tissue between the lungs and the chest
            wall. It was fairly painful and I was removed from training and
            placed on light duty, which, for me, meant Kitchen Patrol (KP). I
            was fortunate in that the chief cook in our company was a very
            reasonable person and a great cook. He had been the cook at the base
            commander’s previous post and developed a reputation as being one of
            the best cooks in the Army. When the commander moved to Ft. Lewis,
            the cook came with him. One of the things that I learned during this
            time was that officers ate a lot better than regular troops. I also
            learned how to peel potatoes fast. I took it as a challenge to peel
            as many as I could in the time allotted. I figured that since I had
            to peel them I might as well be the best at it. It turns out that
            this attitude was unusual in the Army and the cook took a liking to
            me. Although I didn’t sit with the officers, I was allowed to eat
            what they were having before helping to serve the troops.
          </p>
          <h3 className=" mt-4  mb-3 text-center text-2xl underline">
            Providence of God
          </h3>

          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Picture 50 or so fellow soldiers who have just completed living and
            training together for nearly two months. We were on the parade
            ground outside our barracks milling around waiting to receive our
            orders for our next (first real) duty assignment. Very few had any
            expectation of any assignment other than Vietnam. It was more a
            question of at what base in Vietnam we would be stationed. I was the
            only one of this group (and one of only three men in the 300+ man
            training company) who knew what their orders would be for
            assignments outside of Vietnam.
          </p>
          <div className=" mt-4 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              width="980px"
              src="images/basic training graduation 1970 (BW).jpg"
              alt="Basic Grad"
            />
            <span className="text-sm leading-none ">
              (U.S. Army Training Graduation)
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            About two weeks earlier I had been summoned to the Headquarters
            building and directed to a small conference room. There were two
            other trainees already there. We didn’t know each other since we
            were from different training platoons. Eventually, a Major came in
            and introduced himself and explained why we there. He said that the
            war in Vietnam was winding down and that the Army was looking to
            close most of the Officer Candidate Schools to cut the cost of the
            war. The Army believed that it had more than enough officers. The
            issue for the Army was that the documents we (the soldiers) signed
            to be able to attend OCS also obligated the Army to honor their side
            of the contract. Unless both sides agreed to change the terms the
            Army had to send us to OCS. To encourage us to sign a waiver, the
            Army offered two enticements: the first was that we would revert to
            a 2-year active duty commitment and the second was that we would be
            guaranteed a choice of duty station at an Army base anywhere in the
            world for 12 months. The rules regarding assignment to combat
            theatres at that time required the soldier to have more than a year
            of active duty time left.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Putting the math skills that I had learned in school to practical
            use, I quickly (I mean really quickly!) determined that by the time
            I finished four months of training and then 12 months assigned to a
            base outside of Vietnam, I would not have enough active duty time
            left to be sent to a combat zone. To be certain, I asked the Major
            if that meant we would not be assigned to Vietnam and he said: “That
            is correct”. He told us that we had a week to decide. I did not need
            two minutes to decide. I was ready to sign. On the waiver form, we
            had to list three desired duty station locations in order of
            preference. Since I had always wanted to travel to Europe, I listed
            England, Germany, and the U.S. in that order. Reviewing the form,
            the Major said that England was very unlikely since there were
            “about 500 U.S. Army personnel in all of England!” Germany, on the
            other hand, seemed very likely to him.
          </p>
          <p className=" mx-[20px] mb-[8rem] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Back to the scene at the parade ground after graduation. As the
            names were called and the orders were handed out, my joy over
            reading that I was to report to Armry Headquarters in Frankfurt,
            Germany was greatly diminished as I learned that every one of my
            fellow trainees received orders for Vietnam. This unlikely series of
            events could not, in my mind, be anything but the providence of God.
          </p>
        </div>
      </div>
    </>
  );
}

export default Training;
