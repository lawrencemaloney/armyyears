import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import PDFRef from "../Json Files/bo_links_by_srt_date.json";

function Archives() {
  return (
    <>
      <Header />
      <Sidebar />

      <div className="archivewrap z-20  mt-0   h-[100%] max-w-full items-center ">
        <div className="texcontainer grid min-h-screen place-items-center">
          <h2 className="  mt-3 text-center  text-3xl">
            Berlin Observer Archives
          </h2>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Close to 900 PDFs on this site were downloaded from the
            website:Berlin Observer.com with expressed permission of the site
            administrator (webmaster). The PDFs were contributed by former
            Berlin Observer staffers and veterans of the Berlin Brigade. The
            site was established as a non-profit organization in 2001 and
            maintained this archive covering issues from September 25, 1945
            (just five and a half months after Germany surrendered) through its
            final publication on July 15, 1994 (some years had no issues
            submitted). Maintenance of this archive site ended in 2015 when the
            site administrator "retired to CONUS (Continental United States)".
            The administrator also stated that the archive is only funded
            through 2023. For this reason, I have downloaded all editions in the
            archive and make them accessible through this "Archives" page.
          </p>
          <p className=" mx-[20px]  max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Many important historical events and persons are captured in the 49
            years of continuous publication of the Berlin Observer and its
            predeces publications. The pictures and stories preserve first-hand
            accounts of the destruction in Berlin immediately after the end of
            the war, photos of "General of the Army" Dwight D. Eisenhower
            meeting with Russian leaders, references to the Nuremberg trials,
            JFK's Thanksgiving message printed on the day he was assassinated by
            editors who were not yet aware of the tragedy, visits by Henry Cabot
            Lodge, Clark Clifford, Vice President Lyndon Johnson (at the time
            that the Berlin Wall was being constructed), President Richard
            Nixon, Vice President George H. W. Bush, and President Ronald
            Reagan’s "Mr. Gorbachev, tear down this wall!" speech. The final
            publication on July 15, 1994, features President Bill Clinton’s
            "casing the colors" of the Berlin Brigade, which officially ended
            the Brigade’s mission in Berlin. That final issue also presents a
            retrospective on the long journey of the brigade.
          </p>
        </div>

        <div
          className="imgcontainer  
       max-w-5xL mx-4 grid grid-cols-1  mobile:grid-cols-3  tablet:grid-cols-4 tablet:gap-4 "
        >
          {PDFRef.map((issue) => (
            <div key={issue.id} className="p-6">
              <a href={issue.href_url}>
                <img
                  className="image  aspect-square rounded border    border-2  border-black object-cover  object-top"
                  src={issue.page1_url}
                  alt={issue.caption}
                />

                <p className="text-center text-2xl">{issue.caption}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Archives;
