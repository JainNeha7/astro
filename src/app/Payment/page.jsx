import Image from "next/image";
import React from "react";
import PaymentForm from "@/components/PayuSetup";

function page() {
  return (
    <section>
      <div className="hero bg-gradient-to-r text-black font-bold from-orange-300  to-orange-400">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <Image src="/paymentmethod.jpeg" width={400} height={400} /> */}
          <div className="flex-col justify-center">
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <Image src="/paymentmethod.jpeg" width={400} height={400} />
                </div>
              </div>
            </div>
            <div className="text-xl font-bold justify-center my-10 ml-32">
              --- OR ---
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow my-4 border w-80 md:w-100 text-black border-black bg-white"
            >
              <div className="collapse-title text-xl font-medium border-black">
                Account Details
              </div>
              <div className="collapse-content">
                <p className="text-lg font-semibold ">
                  <ul>
                    <li>Neha Jain</li>
                    <li>A/c no :- 50100715489404</li>
                    <li>IFSC :- HDFC0002006</li>
                    <li>Bank name :- HDFC bank</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-8 md:mr-20 lg:mr-36">
            <div>
              <button className="btn btn-outline bg-white font-bold text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 color-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                Read Carefully
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-lg ">Payment methods</h2>
              <div className="w-36 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
              <ul className="steps steps-vertical mt-2">
                <li className="step step-primary ">
                  Scan the QR code <br />
                  -- OR --{" "}
                </li>
                <li className="step step-primary">
                  Use UPI ID <br />
                  -- OR --
                </li>
                <li className="step step-primary">Net Banking </li>
              </ul>

              <div className="card w-80 bg-white shadow-xl ">
                <div className="card-body">
                  <h2 className="text-lg font-semibold">
                    Share the ScreenShot with your name on WhatsApp --
                    9721423456
                    <br /> You will get confirmation message through WhatsApp
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-lg p-6 my-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 mr-2 mt-4 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <div className="text-lg  ">
                Your payments are secured <br />
                with encrypted payment
                <br /> gateways
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
