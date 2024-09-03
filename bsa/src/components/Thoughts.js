import React, { useState } from 'react'
import './thoughts.css'
import thou from '../images/thoughts.svg'

export default function Thoughts() {

    const [one, setone] = useState(true);
    const [two, settwo] = useState(false);
    const [three, setthree] = useState(false);
    const [four, setfour] = useState(false);
    const [five, setfive] = useState(false);


    const thoughtmover = (K) => {
        if (K > 0) {
            if (one) { setone(false); settwo(true) }
            else if (two) { settwo(false); setthree(true) }
            else if (three) { setthree(false); setfour(true) }
            else if (four) { setfour(false); setfive(true) }
            else if (five) { setfive(false); setone(true) }


        } else {

            if (one) { setone(false); setfive(true) }
            else if (two) { settwo(false); setone(true) }
            else if (three) { setthree(false); settwo(true) }
            else if (four) { setfour(false); setthree(true) }
            else if (five) { setfive(false); setfour(true) }
        }
    }
    return (
        <div className='thoughts my-20'>
            <div className="thtopic py-20 text-5xl font-bold font-serif text-center text-gray-700">Students Thoughts ✍</div>
            <div className="thoughtimg">
                <img src={thou} alt="thoughts img" className='w-cw500' />
            </div>
            <div className="stdthought relative w-cw700">
                <div className={`${!one && "scale-0"} thought text-center mt-12 w-cw700 px-20 absolute top-1/2 -translate-y-1/2 duration-300`}>
                    <p className='text-center text-xl'>class එක ගොඩක් හොඳයි සර් 😍 , අපි මොණරාගල බුත්තල තව
                        ක්ලාස් වල ගිහින් ආපු නිසා ඒවට වඩා වැඩි වෙනසක් තේරෙනවා.
                        ගොඩක් වැඩ කෙරෙනවා ක්ලාස් එකේ පළවෙනි දවස් ටිකේ පොඩ්ඩක්
                        confuse වෙලා හිටියෙ. දැන්නම් හරි මුලදී තේරෙන්නෙ නැති දේවල්
                        පස්සෙ හරි තේරුම් ගන්න පුළුවන් තරමට සර් කියල දෙනවා</p>

                    <div className='text-right mt-10'>✍Student Sigma-Wallawaya</div>
                </div>


                <div className={`${!two && "scale-0"} thought text-center mt-12 w-cw700 px-20 absolute top-1/2 left-0 -translate-y-1/2 duration-300`}>
                    <p className='text-center text-xl'>ඇත්තටම සර් මට අහම්බෙන් හම්බුන පංතියක්😍
                        අපේ physics class  එක ඉස්කෝලෙ යාළුවො අමාරු subject එක අපේ class
                        එකේ අයට ලේසිම එක වෙලා😁, විශේෂයෙන්ම මට සෙට් වුණේ MCQ points වලින්,
                        සර් කියලා දෙන විදිය සර්ගෙ MCQ points ටික මාරම වැදගත් සර් කියන විදිහට වැඩ
                        ටික කරගෙන යනවා. subject තුනම හොඳට බැලන්ස් කරලා stress එකක් නැතුව
                        කරගෙන යනවා.🥳 ඉතිං ඉස්සරහටත් අපිට මේ විදිහට හොඳට කියල දෙන්න සර්ට ගොඩාක් ස්තුතියි.🙏
                    </p>

                    <div className='text-right mt-10'>✍Student Minacra-Hanwella</div>
                </div>

                <div className={`${!three && "scale-0"} thought text-center mt-12 w-cw700 px-20 absolute top-1/2 left-0 -translate-y-1/2 duration-300`}>
                    <p className='text-center text-xl'>පංතිය ගොඩක් හොදයි සර්, 🥳
                        සර් කියලා දෙන ඒවා හොඳට තේරෙනවා.  🤩🤩
                        පේපර් කරන නිසා අමාරු ප්‍රශ්න පවා හොදින් තේරුම් ගන්න පුළුවන් වෙනවා.
                        Week MCQ කරන නිසා MCQ ගැන බයක් නෑ සර් කියලා දෙන දේ හොඳින් තේරෙනවා 💪💪💪
                    </p>

                    <div className='text-right mt-10'>✍Student Expertexion-Kesbewa</div>
                </div>

                <div className={`${!four && "scale-0"} thought text-center mt-12 w-cw700 px-20 absolute top-1/2 left-0 -translate-y-1/2 duration-300`}>
                    <p className='text-center text-xl'>
                    පන්තිය නම් ගොඩාක් හොදයි සර්. මුලදී දැනගත්තනම් ඉස්සෙල්ලම එන පංතිය මේක.
                    😍😍 ඉස්සරහටත් හොඳට වැඩ ටික කරන්න බලාපොරොත්තු වෙනවා. 
                    පේපර් ලියන නිසා විභාගෙ ගැන බයක් නෑ. ගොඩාක් පිං සර්ට.🙏🙏🙏🙏🙏
                    </p>

                    <div className='text-right mt-10'>✍Student Minacra-Hanwella</div>
                </div>

                <div className={`${!five && "scale-0"} thought text-center mt-12 w-cw700 px-20 absolute top-1/2 left-0 -translate-y-1/2 duration-300`}>
                    <p className='text-center text-xl'>
                    හැමදාම mcq පේපර් එකක් කරන නිසා අපි එදිනෙදා ඉගනගන්න
                     දේවල් ආය ආයම මතක් කරගන්න පුලුවන්... ඒ වගේම mcq 
                     ප්‍රශ්න විසදන අලුත් කෙටි ක්‍රම කියල දෙන නිසා අපිට ගොඩක් 
                     ලේසියෙන් ප්‍රශ්න වලට උත්තර හොයාගන්නත් පහසු වෙනව... 
                     😍ඒ වගේම සර් උගන්නන විදිය නිසා ගොඩක් විශය කරුනු අපිට 
                     පහසුවෙන් මතක තියාගන්නත් පුලුවන්... ගොඩක් ස්තූතියි සර්❤🌹
                    </p>

                    <div className='text-right mt-10'>✍Student Sigma-Wellawaya</div>
                </div>
                <div className="next font-bold absolute font-sans text-white pb-3 opacity-50 rounded-xl top-1/2 -right-12 bg-gray-600 px-4 py-0 text-5xl cursor-pointer hover:scale-105 duration-200" onClick={() => thoughtmover(1)}>&#187;</div>
                <div className="prev font-bold absolute font-sans text-white pb-3 opacity-50 rounded-xl top-1/2 -left-12 bg-gray-600 px-4 py-0 text-5xl cursor-pointer hover:scale-105 duration-200" onClick={() => thoughtmover(-1)}>&#171;</div>

                <div className="indicator absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <div className={`${one ? "bg-blue-600 w-4 h-4" : " w-3 h-3 bg-gray-400 opacity-55"} ind mx-1 inline-block rounded-full duration-300`}></div>
                    <div className={`${two ? "bg-blue-600 w-4 h-4" : " w-3 h-3 bg-gray-400 opacity-55"} ind mx-1 inline-block rounded-full duration-300`}></div>
                    <div className={`${three ? "bg-blue-600 w-4 h-4" : " w-3 h-3 bg-gray-400 opacity-55"} ind mx-1 inline-block rounded-full duration-300`}></div>
                    <div className={`${four ? "bg-blue-600 w-4 h-4" : " w-3 h-3 bg-gray-400 opacity-55"} ind mx-1 inline-block rounded-full duration-300`}></div>
                    <div className={`${five ? "bg-blue-600 w-4 h-4" : " w-3 h-3 bg-gray-400 opacity-55"} ind mx-1 inline-block rounded-full duration-300`}></div>
                   
                </div>
            </div>
        </div>
    )
}
