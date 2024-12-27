import React from "react";
import Image from "next/image";
import { ITeam } from "@/data/team";

const TeamCard = ({ team }: { team: ITeam }) => {
  console.log(team);
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-80 w-[200] overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image src={team.image} alt="team.name" width={80} height={80} />
      </div>
      <div className="p-5">
        <h5 className="mt-4 text-center font-bold text-2xl">{team.name}</h5>
        <p className="text-center">{team.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
