import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      className="relative bg-gradient-to-r from-green-200 to-green-700 bg-cover bg-center h-full"
      id="aboutdino"
    >
      <h1 className="text-center text-5xl font-bold py-12">DinoBout</h1>

      <div className="hero-content flex flex-row items-center justify-center">
        <Image
          src="/logo/dinoo.jpg"
          className="rounded-lg shadow-2xl mx-5 my-10"
          width={400}
          height={450}
          alt="dino"
        />
        <div className="mx-5">
          <div>
            <h1 className="text-3xl font-bold mx-5">Company History</h1>
            <p className="py-6 mx-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              fugit non corrupti aut explicabo tempore saepe id assumenda,
              aperiam eum nihil nostrum quidem in totam temporibus perferendis
              quod reiciendis maxime! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Neque dolor sunt facilis distinctio, architecto
              error, minus porro amet iure sint ea asperiores vel ullam quod, a
              non. Earum, possimus. Recusandae?
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold mx-5">Culture</h1>
            <p className="py-6 mx-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              quas temporibus, ut eos non magnam exercitationem labore facere
              repellendus soluta, explicabo, officiis sunt quisquam consequuntur
              perspiciatis molestiae odit aut ducimus! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corporis odio, minima, cumque
              necessitatibus veniam consequuntur beatae numquam sit pariatur
              tempore voluptatem tenetur non voluptate quisquam facere quis
              explicabo id perferendis.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold mx-5">Lets Meet Our Teams</h1>
            <p className="py-6 mx-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="#dinoteams">
              <button className="mx-5 bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                DinoTeams
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
