import React, { useEffect, useState } from 'react';
import '../Components/MyPhotos.css';
// import images from './data';
import imageRef from '../imagedata.json'
import ImageSlider from '../Components/ImageSlider';


function TryPhotos() {
	const [group, setGroup] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);
	// const [currentArray,setCurrentArray] = useState([]);
	const [selectedImg, setSelectedImg] = useState(null);
	// const [imageId, setImageId] = useState(0)
	const [imageCaption, setImageCaption] = useState('')
	// const [imagePos, setImagePos] = useState(0)

	useEffect(
		() => {
			group === 'all' ? setFilteredImages(imageRef) : setFilteredImages(imageRef.filter(imageRef => imageRef.group === group));
		},
		[group]
	);


	return (
	<>
		<div className="App  ">

		<div className="pageContainer grid  grid-cols-14 gap-4	  ">
			<h1 className=' text-center mt-[1rem] mx-[20px] text-3xl md:text-4xl col-span-12 col-start-1	  mb-3'>My Photos</h1>

				<div className="groups ml-[40px] outline outline-2 sticky top-[40px]  px-10  h-[720px] w-[240px] ml-[6px] mr-[2px] bg-black text-white col-start-1 col-span-3 rounded-lg ">

					<div className="group flex flex-col mx-[3px] py-[12px]	items-center rounded-lg bg-transparent cursor-pointer	">
						<p className='text-[28px] uppercase'>Categories</p>
						<GroupButton name="all" groupActive={group === 'all' ? true : false} handleSetgroup={setGroup} /> 
						<GroupButton  name="Amsterdam" groupActive={group === 'Amsterdam' ? true : false} handleSetgroup={setGroup} /> 
						<GroupButton name="Army" groupActive={group === 'Army' ? true : false} handleSetgroup={setGroup} /> 
						<GroupButton name="Portraits" groupActive={group === 'Portraits' ? true : false} handleSetgroup={setGroup} /> 
						<GroupButton name="Berlin" groupActive={group === 'Berlin' ? true : false} handleSetgroup={setGroup} />
						<GroupButton name="Ferry" groupActive={group === 'Ferry' ? true : false} handleSetgroup={setGroup} />
						<GroupButton name="London" groupActive={group === 'London' ? true : false} handleSetgroup={setGroup} />
						<GroupButton name="Oxford" groupActive={group === 'Oxford' ? true : false} handleSetgroup={setGroup} />
					</div>
				</div>

				<div className="imgcontainer grid grid-cols-4 gap-2 col-span-7 col-start-4">
					
				{filteredImages.map(image => (

					<div key={image.id} className="image-card p-[3px] m-[5px] rounded-xl object-cover 		 ">
					<img className="image" src={image.url} alt={image.caption} 
						onClick={() => {
						setSelectedImg(image.url)
						setImageCaption(image.caption)
						}}/>
						<p>{image.caption}</p>	
						
					</div>
						))}
				</div>
				{/* <p>Selected Image is {selectedImg}</p> */}
				{/* { selectedImg && (<FullImage  setSelectedImg={setSelectedImg} selectedImg={selectedImg} imageCaption={imageCaption}/>)} */}
				{ selectedImg && (<ImageSlider  setSelectedImg={setSelectedImg}  selectedImg={selectedImg} filteredImages={filteredImages}  />)}

				
				<div className="textcontainer  mx-4 col-span-2	col-start-11 ">
				<p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
				These are some of the photos I took while in the Army.  Those labeled "Army" were taken as part of my job as Battalion PIO clerk. Lots of award presentations, baseball coverage, official Army ceremonies, field training exercises, and miscellaneous pictures taken while covering those events. I particularly enjoyed taking pictures of the Brigade baseball games.
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
				Most of the other categories of photos were taken touring Berlin or while I was on leave in Amsterdam, London, and Oxford. I made a couple fo trips to London. One of them  included taking a train to Bremerhaven and then an overnight ferry to London. 
				</p>

				<p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
					In addition to articles, the Berlin Observer published random photos of civilians, probably to remind us soldiers that there was still life outside of the Army. Many of the photos that I took for that purpose are in the "Portraits" category. Others are sprinkled throughout the other categories.
				</p>
				
				
				<p className='  text-[20px] mx-[20px] mt-[1rem] max-w-[38ch] sm:text-[25px] sm:max-w-[40ch] leading-[32px]  lg:max-w-[60ch] '>
				Word got out that I could take decent photos and I had many requests to take portrait photos for friends. I was even asked to be the photographer for one Army officer's wedding. My popularity was due, in no small part, to the fact that I didn't charge for my services.
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
		<button className={`group my-[20px] py-[10px] w-[175px] rounded-lg hover:text-black hover:bg-white  text-center	 ${groupActive ? 'active' : null}`} onClick={() => handleSetgroup(name)} >
			{name.toUpperCase()}
		</button>
	);
};

export default TryPhotos;