import React,{useEffect,useState} from 'react'
import backgroundImage from '../assets/images/background2.png'
import '../assets/styles/Home.css'
const words = ["A Full Stack Developer",'Proficient in JavaScript',"A Team Player","An Avid Learner","A Problem Solver","A Critical Thinker"]

const WordFlicker = () => {
  const [word, setWord] = useState('');
  let i = 0,
    offset = 0,
    forwards = true,
    skip_count = 0,
    skip_delay = 30,
    speed = 70;
    
    useEffect(() => {
      const wordFlick = () => {
        setInterval(() => {
          if (forwards) {
            if (offset >= words[i].length) {
              ++skip_count;
              if (skip_count === skip_delay) {
                forwards = false;
                skip_count = 0;
              }
            }
          } else {
            if (offset === 0) {
              forwards = true;
              i++;
              offset = 0;
              if (i >= words.length) {
                i = 0;
              }
            }
          }
          const newWord = words[i].substr(0, offset);
          if (skip_count === 0) {
            if (forwards) {
              offset++;
            } else {
              offset--;
            }
          }
          setWord(newWord);
        }, speed);
      };
  
      wordFlick();
    }, []);
  
    return <div className="text-2xl font-bold text-center text-black">{word}</div>;
  }
const Home = () => {
  return (
    <div id='home' className="relative">
      <div className='w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-gray-200 to-transparent'></div>
    <img className='w-full h-screen object-cover object-left' src={backgroundImage}/>
    <div className='absolute rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
  
      <h1 className='sm:text-5xl text-4xl font-bold text-center text-black'>Hi, I'm <span className='text-cyan-700'>Campbell</span></h1>
      <div className='word-flicker-container'>
        <WordFlicker/>
      </div>
    </div>
  </div>
);
}

export default Home