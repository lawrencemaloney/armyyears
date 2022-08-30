import React from 'react'
import Records from '../Pages/myphotos.json'



const imageSlider = () => {
  return (
    <div>
        <h1>imageSlider</h1>
        <div className=" grid grid-cols-3  outline  outline-4 outline-red-700	 mx-auto my-[50px] max-w-[70%]">
        {          
          Records && Records.map( record => {
            return(
              <div className="  text-center m-3	 flex flex-col border border-black " key={ record.id }>
                <img className="	w-screen object-contain" src={record.url} alt={record.caption} />
                { record.caption }
                <br />
                { record.place}
              </div>
            )
          })
        }

        </div>
    </div>
  )
}

export default imageSlider