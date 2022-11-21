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
			<button className={`group col-start-1 col-span-1 row-start-2   my-[2px] p-[2px] w-[90px] flex flex-col  rounded-lg  hover:scale-[1.1] hover:text-yellow-400  text-left ml-[10px]  ${groupActive ? 'active text-yellow-400'  : null}`} onClick={() => {
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


		{/* <div className='App bg-black w-[100vw]  text-white '> */}
		<div className="subhead  text-white   z-[32] sticky w-screen bg-black h-[140px] top-0 ">

			<h1 className='  mb-[10px] text-center text-3xl'>My Photos</h1>


		</div>

			<div className="pageContainer bg-black text-white flex w-[100vw]   ">

				
				<div className={`groups p-4 w-[160px]  bg-black text-white  overflow-scroll  h-[100%] text-[16px]  ${isOpen ? 'translate-x-0 ' : 'translate-x-full sm:translate-x-0'} ease-in-out duration-700`}>

				<ul className='  h-[100%] w-[120px] flex-col mt-4   bg-black text-left rounded-lg text-white   text-[14px]  space-y-[10px] '>
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
				{!isOpen ?
					(
						<button onClick={() => setIsOpen(!isOpen)}>
							<AiOutlineMenu className=" absolute  top-2 right-2 h-[32px] w-[32px]  hover:scale-[1.2] cursor-pointer	z-[35] bg-#fffbeb sm:hidden " >
							</AiOutlineMenu>
						</button>    
					)
					:
					(
						<button onClick={() => setIsOpen(!isOpen)}>
						<AiOutlineClose className=" absolute  top-2 right-2 h-[32px] w-[32px]  hover:scale-[1.2] cursor-pointer	z-[35] bg-#fffbeb  sm:hidden" >
						</AiOutlineClose> 
						</button>    
					)}
				</div>
		
		<div className='textimagecontainer'>	
				<div className="textcontainer mt-[2rem]  mx-2  text-[20px] leading-[32px]  
				sm:min-w-[65ch]      ">

					<h2 className=' text-2xl text-center place-self-center	   p-6 '>{group} Photos</h2>



					{group === 'Army' && (
						<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					These are some of the photos I took while in the Army as part of my job as Battalion PIO clerk. Lots of award presentations, baseball coverage, official Army ceremonies, field training exercises, and miscellaneous pictures taken while covering those events. I particularly enjoyed taking pictures of the Brigade baseball games.
					</p>
					) }
					{group === 'By Request' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					By Request Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }
					{group === 'Berlin' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					BERLIN Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }
					{group === 'Amsterdam' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					Amsterdam Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }
					{group === 'Ferry' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					FERRY Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }
					{group === 'London' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					LONDON Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }
					{group === 'Oxford' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					OXFORD Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }
					{group === 'All' && (
					<p className='p-2  text-[20px] md:max-w-[68ch] sm:text-[25px] sm:max-w-[48ch] leading-[32px]  md:max-w-[68ch] 	'>
					All Photos ==== ipsum dolor sit amet consectetur, adipisicing elit. Omnis eveniet soluta inventore minus atque, sapiente optio consectetur rem culpa illum quisquam hic dolore harum, expedita distinctio vel, fuga obcaecati dicta.
					</p>
					) }

					
				

				
						{/* {group === 'By Request' ? */}
				
					
					
				</div>



				
					<div className="imgcontainer ml-[20px] grid grid-cols-2 sm:grid-cols-3 gap 4   ">
						

						
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
		{/* </div> */}
	</>
	);
}



export default MyPhotos 

