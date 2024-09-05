import React from 'react'
import './workflow.css'
import teach from '../images/teach.svg'
import practical from '../images/practicsl.svg'
import mcq from '../images/mcq.svg'
import evaluate from '../images/eval.svg'
import exam from '../images/exam.svg'
import books from '../images/books.svg'

export default function Workprocess() {
  return (
    <div className='workflow mt-40'>
      <h1 className='protopic mt-12 text-5xl font-bold font-serif py-4 text-center text-gray-900 pb-12'>Our Excellent Workprocess 🤝</h1>
      <div className="col1">

        <div className="box px-10 py-10 text-center rounded-3xl lg:hover:scale-105 duration-200 relative">
          <div><img src={teach} alt="teach" className='vecimg absolute left-1/2 top-3 -translate-x-1/2 pb-5 bg-blue-300 p-2' /></div>
          <div className='process-head text-2xl font-bold mt-20'>Excellent Teaching</div>
          <div className="text text-center lg:w-80 pt-8 text-lg">
            නිවැරදි විෂය කරුණු-තාර්කික ඉගැන්වීම් රටාව තුලින් ඉතා දුර්වල දරුවන්ට පවා පැහැදිලිවන පරිදි සංකීර්ණ සිද්ධාන්ත පවා සරලව පැහැදිලි කර  නිවැරදි කාළ සීමාව තුල ආවරණය කිරීම.
          </div>
        </div>


        <div className="box px-10 py-10 text-center relative rounded-3xl lg:hover:scale-105 duration-200 mt-20">
        <div><img src={practical} alt="teach" className='vecimg absolute left-1/2 top-3 -translate-x-1/2 pb-5 bg-blue-300 p-2' /></div>
          
          <div className='process-head text-2xl font-bold mt-20'>Practicals Explanation</div>
          <div className="text text-center w-80 pt-8 text-lg">
          ප්‍රායෝගික ක්‍රියාකාරකම් හා ප්‍රායෝගික උදාහරණ ඇසුරින් විෂය නිර්දේශය ආවරණය තුලින් සිසුන්ට විෂය කරුණු මතක තබා ගැනීමට අමතර වෙහෙසක් දැරීමට සිදු නොවේ. 

          </div>
        </div>

      </div>


      <div className="col2">

        <div className="box px-10 py-10 text-center relative rounded-3xl lg:hover:scale-105 duration-200">
        <div><img src={mcq} alt="teach" className='vecimg absolute left-1/2 top-3 -translate-x-1/2 pb-5 bg-blue-300 p-2' /></div>
          
          <div className='process-head text-2xl font-bold mt-20'>Weekly MCQ</div>
          <div className="text text-center w-80 pt-8 text-lg">
          
           පසුගිය ඒකක නැවත ආවරණය වීම තුලින් සිසුන්ට මගහැරුණු
            කොටස් ආවරණය කරගත හැකිවීම සහ කෙටිකාලයක් තුල 
            පිළිතුරු ලබාගැනීමේ හැකියාව වර්ධනයවීම.
          </div>
        </div>

        <div className="box px-10 py-10 text-center relative rounded-3xl lg:hover:scale-105 duration-200 mt-20">
        <div><img src={evaluate} alt="teach" className='vecimg absolute left-1/2 top-3 -translate-x-1/2 pb-5 bg-blue-300 p-2' /></div>
          
          <div className='process-head text-2xl font-bold mt-20'>Individual Evaluation</div>
          <div className="text text-center w-80 pt-8 text-lg">
          සෑම සිසුවෙක් සදහාම ලකුණු ලබාදීම සමගින් ඉතා දුර්වල සිසුන් හඳුනාගෙන ඔවුන් විශේෂ වැඩ පිලිවෙලක් හරහා අපේක්ෂිත ප්‍රතිඵලය කරා ගෙනයාම
          </div>
        </div>

        


      </div>

      <div className="col3">



      <div className="box px-10 py-10 text-center relative rounded-3xl lg:hover:scale-105 duration-200">
      <div><img src={exam} alt="teach" className='vecimg absolute left-1/2 top-3 -translate-x-1/2 pb-5 bg-blue-300 p-3' /></div>
          
          <div className='process-head text-2xl font-bold mt-20'>Monthly Test</div>
          <div className="text text-center w-80 pt-8 text-lg">
          විෂයානුකූලව සෑදූ ප්‍රශ්න පත්‍ර රවාව තුලින් සිසුන් විභාගය සදහා සූදානම් කිරීම. විභාගයට පෙර සිසුන්ට පූර්ණ විභාග අත්දැකීම. 
          
          </div>
        </div>

        <div className="box px-10 py-10 relative text-center rounded-3xl lg:hover:scale-105 duration-200 mt-20">
        <div><img src={books} alt="teach" className='vecimg absolute left-1/2 top-3 -translate-x-1/2 pb-5 bg-blue-300 p-2' /></div>
          <div className='process-head text-2xl font-bold mt-20'>Excellent Learning <br /> Materials</div>
          <div className="text text-center w-80 pt-8 text-lg">
          නිවැරදි විෂය කරුණු සමගින් ආකර්ෂණීය නිබන්දන, කෙටි සටහන් පොත්, weekly mcq, ප්‍රායෝගික පරීක්ෂණ නිබන්දන සමගින් වසර 25කට වැඩි විභාග ප්‍රශ්න ආවරණය තුලින් ආකර්ෂනීය ඉගැන්නුම් රටාව
          </div>
        </div>


        
      </div>

    </div>
  )
}
