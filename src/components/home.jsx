import {Link} from 'react-router-dom';

function Home(){
return(
    <body class="bg-gradient-to-l from-slate-100 to-white">
    <div class="absolute mt-16 ml-36 rounded-full w-7 h-8 border-4 "></div>
    <div class="flex">
        <div class="mt-44 ml-36"><h3 class="font-serif font-bold text-6xl text-blue-400 tracking-widest">WE ' RE</h3><h3 class="text-4xl text-blue-200 font-serif tracking-widest "> COMING </h3> <h3 class="text-4xl font-serif text-blue-200 tracking-widest ">SOON</h3>
        <p class="text-justify font-arima font-bold mr-96 tracking-widest mt-8">simple challenges for beginners<br/>interesting details to it that will test your javascript, html and css skills. <br/>You'll also get to practice basic DOM and OOP in javascript</p>
        <Link to='/main'>
        <button class="w-96 h-10 rounded-2xl px-10 border-4 mt-4 font-sans text-blue-300 font-bold" type="search" placeholder="find your interest">start exploring</button>
        </Link>
    </div>
      <div class="h-screen w-1/2 object-cover"><img class="absolute inset-y-0 right-0 h-screen" src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/></div>
   </div>  
   
</body> 
)
}
export default Home;