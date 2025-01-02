import React from "react";
import Image from "next/image";
import { ITeam } from "@/data/team";

const TeamCard = ({ team }: { team: ITeam }) => {
  console.log(team);
  return (
    <div className=" flex flex-col items-center bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <Image
          src={team.image}
          alt={team.name}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "100px" }}
        />
      </div>
      <div className="p-5">
        <h5 className="mt-4 text-center font-bold text-2xl">{team.name}</h5>
        <p className="text-center">{team.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
