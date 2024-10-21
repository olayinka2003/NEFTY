
import { useState } from 'react';
import './App.css'
import { Nav } from './components/Nav'
import { Plans } from './components/Plans'
import { Subscription } from './components/Subscription'
import { FaTimes } from 'react-icons/fa';

function App() {
  const [slide, setSlide] = useState(false);
  const [isOpen, setIsopen] = useState(false);

  const handleClicks = () => {
    setIsopen((f) => !f);
  };

  const handleClick = () => {
    setSlide((f) => !f);
  };

  return (
    <div className='relative overflow-x-hidden'>
    <Nav onClick={handleClicks}/>
    <Subscription slide={slide} click={handleClick}/>
    <Plans slide={slide}/>

    <div className={`bg-black w-full lg:w-[20%] h-[100vh] max-h-[100vh] space-y-8 p-4 rounded-md absolute top-0 right-0 ${!isOpen?"translate-x-full":"translate-x-0"} overflow-y-auto box-border transform duration-300 ease-in-out `}>
        <FaTimes onClick={handleClicks} className="text-white cursor-pointer" />
        <ul className="flex flex-col  gap-10 cursor-pointer text-white">
          <li>Project</li>
          <li>Services</li>
          <li>Services</li>
          <li>About Us</li>
        </ul>
        <button className="bg-gray-200 px-[10px] py-[5px] rounded-full text-black ">
          Get in Touch
        </button>
      </div>
    </div>
  )
}

export default App
