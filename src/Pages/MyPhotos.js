import React, { useEffect, useState } from 'react';
import '../Components/MyPhotos.css';
import '../index.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// 
import { Link } from 'react-router-dom';
import PhotoMenu from "../Components/PhotoMenu";
import imageRef from '../imagedata.json'
import ImageSlider from '../Components/ImageSlider';


function MyPhotos() {
	const [group, setGroup] = useState('Army');
	const [filteredImages, setFilteredImages] = useState([]);
	// const [currentArray,setCurrentArray] = useState([]);
	const [selectedImg, setSelectedImg] = useState(null);
	// const [imageId, setImageId] = useState(0)
	const [imageCaption, setImageCaption] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	// const [imagePos, setImagePos] = useState(0)
	const GroupButton = ({ name, handleSetgroup, groupActive }) => {
		return (
			<button className={`group  my-[2px] p-[2px] w-[132px] flex flex-col  rounded-lg  hover:scale-[1.1] hover:text-yellow-400  text-left ml-[10px]  ${groupActive ? 'active text-yellow-400'  : null}`} onClick={() => {
				handleSetgroup(name);
				setIsOpen(!isOpen);
			}} >
				{/* {name.toUpperCase()} */}
				{name}
			</button>
		);
	};

	useEffect(
		() => {
			group === 'All' ? setFilteredImages(imageRef) : setFilteredImages(imageRef.filter(imageRef => imageRef.group === group));
		},
		[group]
	);


	return (
	<>


		<div className='App bg-black text-white '>

			<div className="pageContainer grid grid-cols-2 sm:grid-cols-4  gap-4	  ">

				<div className="subhead z-[20] sticky h-[180px] bg-black top-0">
					<h1 className='  mt-[2rem] mb-[2rem] mx-5 text-3xl sm:text-4xl col-start-1 col-span-2  md:fixed md:top-[30px]   '>My Photos</h1>
					<span className='ml-6 text-2xl  sm:hidden'>{group}</span>
					{!isOpen ?
				(
					<button onClick={() => setIsOpen(!isOpen)}>
						<AiOutlineMenu className=" absolute  top-2 right-2 h-[32px] w-[32px]  hover:scale-[1.2] cursor-pointer	z-[22] bg-#fffbeb sm:hidden " >
						</AiOutlineMenu>
					</button>    
				)
				:
				(
					<button onClick={() => setIsOpen(!isOpen)}>
					<AiOutlineClose className=" absolute  top-2 right-2 h-[32px] w-[32px]  hover:scale-[1.2] cursor-pointer	z-[23] bg-#fffbeb  sm:hidden" >
					</AiOutlineClose> 
					</button>    
				)}
				</div>

				<div className="textcontainer mt-[2rem]  mx-2  text-[20px] sm:min-w-[65ch] sm: sm:text-[25px] sm:max-w-[20ch] leading-[32px]  lg:max-w-[28ch]  sm:p-[20px] col-span-2 sm:col-span-8 sm:col-start-2 sm:row-start-2 row-span-1 h-[25%] md:mx-auto ">

					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					These are some of the photos I took while in the Army.  Those labeled "Army" were taken as part of my job as Battalion PIO clerk. Lots of award presentations, baseball coverage, official Army ceremonies, field training exercises, and miscellaneous pictures taken while covering those events. I particularly enjoyed taking pictures of the Brigade baseball games.
					</p>


					{/* <p>
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
					
					
					<p>
					Word got out that I could take decent photos and I had many requests to take portrait photos for friends. I was even asked to be the photographer for one Army officer's wedding. My popularity was due, in no small part, to the fact that I didn't charge for my services.
					</p> */}
				</div>
					{/* <div className="groups ml-[4px]  p-4 max-h-[620px] w-[100px] bg-black text-white  flex flex-col fixed top-[320px] rounded-lg overflow-y-scroll scrollbar"> */}

					<div className={`groups p-4 w-screen  bg-black text-white flex flex-col fixed top-10  rounded-lg overflow-scroll z-[20] h-[100%] text-[16px]

					sm:ml-[4px] sm:h-[650px] sm:w-[180px]  sm:top-[180px] sm:left-0 md:ml-[50px]  sm:text-[20px]
					
					md:ml-[4px] md:h-[650px] md:w-[220px]  md:top-[180px] md:left-0 md:ml-[50px]  md:text-[20px] 	${isOpen ? 'translate-x-0 ' : 'translate-x-full sm:translate-x-0'} ease-in-out duration-700`}>

					{/* <AiOutlineClose className=" absolute  top-2 right-2 h-[32px] w-[32px] md:hidden  hover:scale-[1.2] cursor-pointer	 bg-#fffbeb "  
					onClick={setIsOpen(!isOpen)}>
					</AiOutlineClose> */}


					
					{/* <div className="text-left"> */}
					<ul className='  h-[100%] w-[200px] flex-col mt-4   bg-black text-left rounded-lg text-white   text-[14px]  space-y-[10px] '>
						<p className=' '>Photo Categories</p>

					<GroupButton name="Army" groupActive={group === 'Army' ? true : false} handleSetgroup={setGroup} />  

					<GroupButton name="By Request" groupActive={group === 'By Request' ? true : false} handleSetgroup={setGroup} /> 
					
					<GroupButton name="Berlin" groupActive={group === 'Berlin' ? true : false} handleSetgroup={setGroup} />

					<GroupButton  name="Amsterdam" groupActive={group === 'Amsterdam' ? true : false} handleSetgroup={setGroup} /> 
					
					<GroupButton name="Ferry" groupActive={group === 'Ferry' ? true : false} handleSetgroup={setGroup} />
					<GroupButton name="London" groupActive={group === 'London' ? true : false} handleSetgroup={setGroup} />
					<GroupButton name="Oxford" groupActive={group === 'Oxford' ? true : false} handleSetgroup={setGroup} />

					<GroupButton name="All" groupActive={group === 'All' ? true : false} handleSetgroup={setGroup} />

					{/* </div> */}
					
					<p>Navigation</p>
					<li className=' hover:scale-[1.1] text-left ml-[10px] '>
					<Link to='/Home'>My Story</Link>
					</li>
					<li className=' hover:scale-[1.1]text-left ml-[10px]'>
					<Link to='/Training'>Training</Link>
					</li>
					<li className=' hover:scale-[1.1]  text-left ml-[10px] '>
					<Link to='/InBerlin'>In Berlin</Link>
					</li>
					<li className=' hover:scale-[1.1]  text-left ml-[10px] '>
					<Link to='/BOarticles'>My Journalism</Link>
					</li>
					<li className=' hover:scale-[1.1] text-left ml-[10px] '>
					<Link to='/MyPhotos'>My Photos</Link>
					</li>
					<li className=' hover:scale-[1.1]  text-left ml-[10px]'>
					<Link to='/Archives'>Archives</Link>
					</li>
					<li className=' hover:scale-[1.25]  text-left ml-[10px]'>
					<Link to='/About'>About</Link>
					</li>
				</ul>
				</div>
				
					<div className="imgcontainer ml-[20px] grid grid-cols-2 col-start-1 col-span-2 row-start-3  sm:grid-cols-3 sm:col-start-2  sm:col-span-6  sm:grid-cols-3      md:col-start-2  md:col-span-6   lg:grid-cols-4  lg:col-start-2  lg:col-span-4   ">
						
						
					{filteredImages.map(image => (

						<div key={image.id} className="image-card p-[3px] m-[5px] object-cover  max-h-[350px] cursor-pointer  	 ">
						<img className="image rounded min-h-[150px] max-h-[250px] w-[100%] aspect-square object-cover" src={image.url} alt={image.caption} 
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

					

				{/* </SRLWrapper> */}
			</div>
		</div>
	</>
	);
}



export default MyPhotos 

