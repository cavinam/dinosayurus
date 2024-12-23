import React from "react";
import TeamCard from "@/card/teamCard";
import { teams } from "@/data/team";

const TeamsPage = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-green-200 to-green-700 bg-cover bg-center h-full"
      id="dinoteams"
    >
      <div className="container mx-auto py-16 max-w-7xl justify-center">
        <h1 className="text-5xl font-bold text-center">DinoTeams</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto my-10">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
