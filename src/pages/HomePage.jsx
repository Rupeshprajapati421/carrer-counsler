import React from 'react'

const HomePage = () => {
  return (
    <div className=' flex bg-white w-screen h-full flex-col ' >
      
      
      <div className='flex items-center h-[70px]  w-full bg-gray-200 '>
          <div className=' h-full w-[900px] flex items-center '>
            <div className='h-full w-full flex items-center justify-end mr-9 text-3xl text-gray-700 font-bold'>Carrer-Compass</div>
          </div>
          <div className=' h-full w-full flex  '>
            <div className='h-full w-full ml-28 flex gap-16 text-blue-600 font-medium text-[18px] '>
              <button className='hover:underline hover:decoration-blue-800'>Home</button>
              <button className='hover:underline hover:decoration-blue-800'>Services</button>
              <button className='hover:underline hover:decoration-blue-800'>About</button>
              <button className='hover:underline hover:decoration-blue-800'>Testimonials  </button>
              <button className='hover:underline hover:decoration-blue-800'>Contact</button>
            </div>
          </div>
      </div>
      <div className='h-[300px] w-full bg-amber-900'> 
        <img src="https://media.istockphoto.com/id/1221837116/photo/positive-man-celebrating-success.jpg?s=612x612&w=0&k=20&c=UAazDrWbUjSHAYNlthq_kf1IdzsxZo9CCtEYc7zJTAw=" alt="image" className='w-full h-full' />
      </div>
      <div class=" bg-white h-screen w-[980px] ml-54 flex-col items-center ">

    <h2 class="text-xl font-semibold mb-6">Services</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

         <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
           <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" class="w-12 mb-4" />
           <h3 class="text-lg font-semibold">Career Exploration</h3>
           <p class="text-gray-600 text-sm mt-2">Discover your passions & strengths</p>
           <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
             Learn More
           </button>
         </div>

        <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
           <img src="https://cdn-icons-png.flaticon.com/512/2991/2991109.png" class="w-12 mb-4" />
            <h3 class="text-lg font-semibold">Resume & LinkedIn</h3>
             <p class="text-gray-600 text-sm mt-2">Craft a winning professional profile</p>
            <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
             Learn More
             </button>
         </div>

         <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="w-12 mb-4" />
             <h3 class="text-lg font-semibold">Interview Prep</h3>
             <p class="text-gray-600 text-sm mt-2">Build confidence & ace your interviews</p>
             <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
               Learn More
            </button>
        </div>

     </div>

     <h2 class="text-xl font-semibold mt-12 mb-6">Testimonials</h2>

         <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

               <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-12 h-12 rounded-full" />
                   <p class="text-gray-700 text-sm">
                   "Career Compass helped land your dream job!" <br />
                      <span class="text-black font-semibold">– Sarah K.</span>
                   </p>
               </div>

    
      
    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
      <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-12 h-12 rounded-full" />
      <p class="text-gray-700 text-sm">
        "Totally clarity in career–changing decisions." <br />
        <span class="text-black font-semibold">– Emily R.</span>
      </p>
    </div>

   
   
    <div class="p-6 rounded-xl shadow-sm bg-gradient-to-r from-green-200 via-blue-200 to-blue-400 text-black">
      <div class="flex items-center gap-4">
        <img src="https://randomuser.me/api/portraits/women/65.jpg" class="w-12 h-12 rounded-full" />
        <div>
          <h3 class="text-lg font-semibold">Ready to start your journey?</h3>
          <button class="mt-3 border border-black px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>

  </div>

</div>


    </div>
  )
}

export default HomePage