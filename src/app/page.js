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
        <p className="font-sans font-medium mt-2 lg:mr-5 md:text-md lg:text-lg">She is Blessed soul with super Natural powers of Healing and Psychic senses which is directly given by the universe. She has the blessings of MAHADEV🙏and MAA KALI.<br/>
        She started her Spritual journey in 2022 when some unfavorable incident happend in her life. She  then started to seek answers to her unresolved  questions. Soon she felt her divine connections with universe where her Grandfather's spirit helped her to begin her journey towards spirituality. The guidance from her Grandfather's soul helped her to connect with the divine “ Lord Shiva “ where she realised her connections with the divine and her spiritual gifts.<br/>
        MAHADEV BLESSED her unlock the powerful MAHAMRITUNJAYA MANTRA and MAA KALI BLESSED her with divine Spiritual gifts of speaking with Spirits in Heavens and earth. She got even blessed with the unlock vibrations of the Beej mantra of MAA KALI.  She had a blissful journey. And all the needy souls can also be a part of it.</p>
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
