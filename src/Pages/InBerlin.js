import React from "react";
import Collapsible from "../Components/Collapsible";

function InBerlin() {
  return (
    <>
      <div className='  mt-[250px] mx-auto  flex flex-col items-center '>
        <h1 className=' text-center text-4xl  mb-3'>Hot War/Cold War - Vietnam/Germany</h1>
        <h2 className=' text-center text-3xl  mb-1'>What was I getting into?</h2>
        <p className='max-w-[64ch] '>
          When I arrived in Germany in early July 1970, the world's attention was firmly
          focused on the war in Vietnam. At that time, the casualty figures exceeded 1.5
          million people killed (50,000 U.S., 254,000 South Vietnamese, 849,000 North
          Vietnamese military personnel, and 400,000 North and South Vietnamese civilians)
          <span className='  w-[60ch] 	font-bold '>
            <Collapsible label='&#8224;'>
              <p className=' w-[12chr] text-[12px] leading-4 	'>
                Wikipedia contributors, "Vietnam War casualties," Wikipedia, The Free
                Encyclopedia,
                <br />
                <a
                  target='blank'
                  rel='noopener noreferrer'
                  href='https://en.wikipedia.org/w/index.php?title=Vietnam_War_casualties&oldid=1062906270'
                  className='
                  text-blue-600
                  visited:text-purple-600'>
                  https://en.wikipedia.org/w/index.php?title=Vietnam_War_casualties&oldid=1062906270
                </a>
                <br />
              </p>
            </Collapsible>
          </span>{" "}
          . The conflicting world views and political ambitions of the U.S. and the Soviet
          Union, which contributed to the escalating involvement of the U.S. in the Vietnam
          War, had their genesis in post-war Germany. Fundamental philosophical differences
          regarding how people should be governed, at the root of the conflict in Vietnam, were
          earlier made manifest to the world in post-war Berlin.
        </p>
        <p className='max-w-[64ch]'>
          Immediately after Germany's unconditional surrender on May 7, 1945, the Soviet Union
          focused on exacting punishment and reparations for atrocities suffered during the
          German invasion of Russia. The Soviet plan included moving skilled workers and other
          valuable German assets to Soviet-controlled countries while leaving the remaining
          German people to fend for themselves with few agricultural, industrial, or medical
          resources . The Western Allies, led by the U.S., focused on building up the West
          German state for humanitarian, economic, and political reasons. A stable,
          self-sufficient West Germany could eventually feed itself, significantly reducing the
          money required from other nations to feed so many people. The Western Allies also
          reasoned that a strong West Germany would provide a buffer between the
          Soviet-controlled countries and the rest of Europe.
        </p>
        <p className='max-w-[64ch]'>
          {" "}
          These conflicting philosophies and ambitions had their focal point in Berlin. For
          civilians and military personnel living in Berlin, the potential for armed conflict
          was personal and ever-present.
        </p>
        <h3 className=' text-center underline text-2xl  mb-3'>
          100 Miles Behind Enemy Lines!
        </h3>

        <p className='max-w-[64ch]'>
          Before arriving in Berlin, I hadn't given much thought to the "Cold War" or the
          precarious position that the Western Allies' military personnel, their families, and
          other civilians found themselves in, living 100 miles inside the Soviet-controlled
          sector of post-war Germany. I was about to become part of a "community" surrounded by
          a belligerent cold war enemy, supported by Soviet Union and East German troops.
        </p>

        <h3 className=' text-center underline text-2xl  mb-3'>The Berlin Blockade</h3>

        <p className='max-w-[64ch]'>
          By mid-1970, the Soviets had already made several concerted efforts to isolate and
          eventually take sole control of Berlin. The first was the Berlin Blockade
          <span className='  w-[60ch] 	font-bold '>
            <Collapsible label='&#8224;'>
              <p className=' w-[12chr] text-[12px] leading-4'>
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
                </a>
                {/* <br /> */}
              </p>
            </Collapsible>
          </span>{" "}
          . (June 24, 1948, to May 12, 1949), in which the Soviet Union blocked all rail, road,
          and canal access to the sectors of Berlin controlled by the Western Allies, making it
          impossible to get food, fuel, and supplies using those modes of transportation.
        </p>

        <p className='max-w-[64ch]'></p>
        <p className='max-w-[64ch]'></p>
        <p className='max-w-[64ch]'></p>
        <p className='max-w-[64ch]'></p>
        <p className='max-w-[64ch]'></p>
        <p className='max-w-[64ch]'></p>
      </div>
    </>
  );
}

export default InBerlin;
