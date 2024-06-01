"use client";
import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    reviewer: "Parul Rajoria",
    rating: 4.5,
    date: "2024-05-15",
    review:
      "@Divine Gratitude Neha this is an amazing experience and great vibes Truly mesmerizing experience of this beautiful Shalvik session and I m really glad to opt for it and highly recommending everyone to go for it for your own upscaling. It definitely have positive results as you have manifested from the core of your heart & full belief in Neha. Go for it. Thanks for much Neha🤗❤ You are truly great👍😍.",
  },

  {
    reviewer: "Sanjana",
    rating: 5.0,
    date: "2024-05-17",
    review:
      "Dear Neha,I am so impressed and must say you have got an amazing perspective. I do not connect easily but with you I felt well connected many times during our session, infact for the second time as well. You have really uplifted me and cleared my thoughts totally. I can feel inside of me...I can see myself so visibly. I truly believe this was the best surprise from the universe thru you. I am so grateful to have known you. Thanks for the guidance I was looking for it. Stay blessed! Love & care Sanjana💞",
  },
  {
    reviewer: "Rachna",
    rating: 2.5,
    date: "2024-05-18",
    review:
      "Excellent! This speaks to me, and makes a lot of sense. I'm not usually someone who would get their tarot read, but I am so glad I did and had a wonderful experience and came to know about positive sides and negatives to work on .You are professional and advise in a manner that can help for positive changes. Great experience. I would highly recommend Neha to anyone! God Bless You😍👍🏻😱",
  },
  {
    reviewer: "Tanuja Srivastava",
    rating: 4.0,
    date: "2024-05-19",
    review:
      "Neha the reading session was extremely effective I swear... Like I am so satisfied after taking reading from you... I could feel positivity all around I thoroughly enjoyed this session. You are such a great mentor I must say. I would highly recommend everyone to take sessions from you without fail. You have that ability to connect. My reading session with you was really relevant and helpful.",
  },

  {
    reviewer: "Ruchika Chopra",
    rating: 4.0,
    date: "2024-05-19",
    review:
      "I would like to tell you something before taking this session I was skeptical. Neha you were so accurate I must say that. I never knew that having a tarot reading can assist people to gain meaningful insights and deeper understandings into specific situations. You gave me perfect understanding on how we can discover and explore more about ourselves and work on balance and harmony in all areas of our lives and work.",
  },

  {
    reviewer: "Aditi",
    rating: 4.0,
    date: "2024-05-19",
    review:
      "Thank you Neha 💐💐 for guiding me through tarot. Needless to say all your readings were so apt,on point 😇😇😇😇 connecting to my husband's late grandmother aftr 21 yrs.n listening her name frm your side was a true goosebump this is a real blessing on u .may your voice reach to every soul tht needs help .I am glad that i took this session .More power to you🙏😇.",
  },
  {
    reviewer: "Namita",
    rating: 4.0,
    date: "2024-05-19",
    review:
      "Divine Gratitude Neha this is an amazing experience and great vibes Truly mesmerizing experience of this beautiful Shalvik session and I m really glad to opt for it and highly recommending everyone to go for it for your own upscaling. It definitely have positive results as you have manifested from the core of your heart & full belief in Neha. Go for it. Thanks for much Neha🤗❤ You are truly great👍😍.",
  },
  {
    reviewer: "Rinke mishra 🙏",
    rating: 3.0,
    date: "2024-05-16",
    review:
      "Har Har Mahadev🙏, Shalvik Shiv is divine feeling, it is like just closing your eyes and travelling in universe, where presence of Shivji, Bholenath sath hai can be feeled.",
  },
];

function Reviews() {
  var settings = {
    // accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" p-4 text-black">
        <div className="my-8  bg-gradient-to-r rounded-full from-yellow-300 via-yellow-200 to-yellow-300 flex items-center justify-center">
          <div className="flex-col py-2">
            <h2 className="font-serif text-4xl font-bold"> Reviews </h2>
            <div className="w-45 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
          </div>
        </div>
        <div className="slider-container px-8">
          <Slider {...settings}>
            {reviews.map((d, index) => (
              <div key={index} className="w-70 card">
                <div className=" card-body p-4 rounded-xl h-90 text-center item center shadow-2xl m-3">
                  <div className=" ">
                    <h2 className="card-title">{d.reviewer}</h2>
                    <div className="w-36 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
                  </div>
                  <div className="">
                    <p>{d.review} </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Reviews;
