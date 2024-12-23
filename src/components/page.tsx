import React from "react";

export default function Main() {
  return (
    <div className="">
      <div className="relative bg-gradient-to-r from-green-200 to-green-700 bg-cover bg-center h-screen">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-opacity-50">
          <h1 className="text-5xl text-black font-bold">DINOSAYURUS.INC</h1>
          <p className="font-bold">Need Veg? Go Call Dino!</p>
          <a href="#aboutdino">
            <button className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
              Dinotour
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
