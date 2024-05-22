import BookingSection from "@/components/BookingSection";
import Image from "next/image";
import Reviews from "@/components/Reviews";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
    <div className="bg-white">

      <div className="hero bg-gradient-to-r text-black from-yellow-200 via-yellow-100 to-yellow-300">
<section id="journey">
      <div className="md:flex hero-content flex-col md:flex-row-reverse justify-between ">
      <Image src="/profile.jpg" width="300" height="100" alt="profile" className="md:w-70 w-65 z-[0]"></Image>
        <div className="pr-5">  
        <h1 className="font-bold  text-3xl">Nehaa Jain</h1>
        <div className="w-36 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
        <p className="font-sans font-medium mt-2 md:text-md lg:text-lg">She is Blessed soul and having super Natural power of Healings and Psychic senses which is directly given by the universe. She has the blessings of <span className="bg-orange-300 p-1">MAHADEV🙏and MAA KALI on her.</span> <br/>
        She has started her Spritual journey on 2022 where some unfavorable incident happend in her life and she started her journey to find the questions going on her mind. Sooner she has felt the divine connections with universe where her Grandfather's spirit helps to follow the path of our <span className="bg-orange-300">DIVINE FATHER MAHADEV </span>and she begins to follow the guidances given by her Grandfather's soul.<br></br> He guided her in every single step of her spiritual journey and later she know about her spiritual gifts. MAHADEV BLESSED her with the unlock power of <span className="bg-orange-300">MAHAMRITUNJAYA MANTRA.</span><br/> MAA KALI BLESSED her with divine Spiritual gifts of speaking with Spirits in Heavens as well as in earth and blessed her with the unlock vibrations of Beej mantra of MAA KALI. It's a blessed journey. You can also be a part of it.</p>
        </div>
        
        </div>
        </section>
      </div>
      <section id="services"> <BookingSection/></section>
     
      <section id="review" className="my-4"><Reviews/></section>
      <section id="achievements" className="my-4"><Achievements/></section>
      
      </div>
    
    </>
  );
}
