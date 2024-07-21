import React from 'react'
import "./aboutme.css"
import logo from "../images/logo.png"

export default function Aboutme() {
  return (
    <div className='aboutme py-40 h-auto bg-black' >

      <div className='Academy mb-7'>
        <h1 className='aboutme_header text-5xl font-bold font-serif py-4 text-center text-white'>The Greatful Effort...</h1>
        
        <div className='text w-cw900 leading-9 text-center text-gray-400'>
          BS Physics Academy which is introduced by Mr. Bandara Senarathna, a Leading 
          tution master in Sri Lanka to produce crystel clear plysics knowledge targeting the students who are facing G.C.E Advanced Level Examination in Sri lanka. <br />
          The Vision of this organization is to teach, explain and practice the advaced concepts, explain the practicals, give proper practice for the examination and eleminate the examination fear 
          of the students by targetting the A/L s.
          To ful-fill that vision, we take several options such as produce quality and compleate materials through a powerful Learning Management System (LMS) called BSP LMS, Practical Video Sessions, 
          Explanations through simulations ect

          <p className='text-c20 font-semibold mt-4 relative'>So Let's begin your Journey with ,
          <img src={logo} alt="logo" className='logo w-60 relative rounded-xl left-1/2 -translate-x-1/2 top-8 cursor-pointer hover:scale-105 duration-300' /></p>
        </div>


        <div className='t-topic text-5xl font-bold font-serif py-4 mt-40 text-white '>ගුරුවරයා පිලිබදව....</div>
        <div className='t-image w-40'>ya</div>
        <div className='about-s  text-center w-cw500 text-gray-400'>2017 උසස් පෙළ ජීව විද්‍යා අංශයෙන් දිවයිනේ 4 වන ස්ථානයට
                                (කොළඹ දිස්ත්‍රික් 2) සමත්ව මේ වන විට කොළඹ වෛද්‍ය පීඨයේ සිය උපාධිය අවසන් කරමින් සිටියි. 2019 දී උපකාරක 
                                පන්ති ක්ෂේත්‍රයට පිවිසෙන ඔහු වසර 4ක් යන්නටත් පෙර (වයස අවුරුදු 24ක වන විට) දිවයිනේ එදා මෙදා තුර සමස්ථ
                                 ටියුෂන් ඉතිහාසයේම වැඩිම සිසුන් පිරිසක් සහභාගි වන රසායන විද්‍යාව පන්තිය නිර්මාණය කරන්නේ, යල්පැනගිය ක්‍රමවේදයන් 
                                 වෙනුවට වසර කිහිපයකට ඉහත දී තමා විසින්ම අනුගමනය කළ අතිසාර්ථක ක්‍රමවේදයන් පන්තියේ වැඩ පිළිවෙළට මුසු කරමින්
                                 අවවාදයට එහා ගිය ආදර්ශයක් මත සිසුන් විභාගයට සූදානම් කරවීම සහ විෂයන් 3ටම අදාළ නිවැරදි මගපෙන්වීම හේතුවෙන් වේ
                                සිය පළමු පන්තියෙන්ම ගම්පහ දිස්ත්‍රික්කයේ ප්‍රථමයා (දිවයිනේ 9) ද දෙවන පන්තියෙන් දිවයිනේ 2, 4 ඇතුළුව දිස්ත්‍රික් ප්‍රථමයන් 
                                2ක් දෙවැනියන් 3ක් සහ තෙවනියෙක් නිර්මාණය වන්නේ ද ඉහත කී හේතුව සහ ගුරුවරයා සතු සහජයෙන් 
                                ලද විෂය කරුණු පැහැදිලි කිරීමේ හැකියාව හේතුවෙන් වේ.</div>
      </div>
      


    </div>
  )
}
