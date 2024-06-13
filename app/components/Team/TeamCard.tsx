import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  position: string;
}

const TeamCard = ({ image, name, position }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        height={400}
        width={400}
        className="rounded-2xl mx-auto"
      />
      <h1 className="text-[40px] text-gray-800 mt-[1.rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium">
        {position}
      </p>
      <p className="text-center md:w-[70%} mx-auto text-gray-600 mt-[1rem]">
        {name} is a highly dedicated professional with extensive experience in
        the culinary industry. As {position}, they are committed to delivering
        exceptional quality and service, ensuring every guest enjoys a memorable
        dining experience.
      </p>
    </div>
  );
};

export default TeamCard;
