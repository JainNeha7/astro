"use client";
import BookingSection from "@/components/BookingSection";
import Image from "next/image";
import Reviews from "@/components/Reviews";
import Achievements from "@/components/Achievements";

import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="hero bg-gradient-to-r text-black from-yellow-200 via-yellow-100 to-yellow-300">
          <section id="journey">
            <div className="md:flex hero-content flex-col md:flex-row-reverse justify-between ">
              <Image
                src="/profile.jpg"
                width="300"
                height="100"
                alt="profile"
                className="md:w-70 w-65 z-[0]"
              ></Image>
              <div className="pr-5">
                <h1 className="font-bold  text-3xl">Neha Jain</h1>
                <div className="w-36 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
                <p className="font-sans font-medium mt-2 lg:mr-5 md:text-md lg:text-lg">
                  She is a blessed soul with supernatural powers of healing and
                  psychic senses, directly bestowed by the universe. She has the
                  blessings of Mahadev and Maa Kali. Her spiritual journey began
                  in 2022 when an unfavorable incident occurred in her life,
                  prompting her to seek answers to her unresolved questions.{" "}
                  <br />
                  Soon, she felt her divine connections with the universe, where
                  her grandfather's spirit helped her embark on her spiritual
                  journey. The guidance from her grandfather's soul led her to
                  connect with the divine Lord Shiva, where she realized her
                  spiritual gifts and divine connections.
                  <br />
                  Mahadev blessed her with the powerful Mahamrityunjaya Mantra,
                  and Maa Kali endowed her with divine spiritual gifts,
                  including the ability to communicate with spirits in the
                  heavens and on earth. She was also blessed with the unlocked
                  vibrations of the Beej Mantra of Maa Kali. Her journey has
                  been blissful, and she invites all needy souls to be a part of
                  it.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section id="services">
          {" "}
          <BookingSection />
        </section>

        <section id="review" className="my-4">
          <Reviews />
        </section>
        <section id="achievements" className="my-4">
          <Achievements />
        </section>
      </div>
    </>
  );
}
