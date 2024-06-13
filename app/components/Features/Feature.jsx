import Image from "next/image";
import Img1 from "../../../public/images/f1.jpg";
import Img2 from "../../../public/images/f2.jpg";
import Img3 from "../../../public/images/f3.jpg";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* Heading */}
      <h1 className="heading">
        burgers made with <br /> love and{" "}
        <span className="text-red-600">Care</span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* 1st Card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img1} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Experience the joy of biting into our signature burger, crafted
              with premium ingredients and a whole lot of love. Every bite
              promises a burst of flavor that will leave you wanting more.
            </p>
          </div>
        </div>
        {/* 2nd Card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={Img2} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              We value your feedback and strive to make each dining experience
              unforgettable. Share your thoughts with us and help us continue to
              serve you the best burgers in town.
            </p>
          </div>
        </div>
        {/* 3rd Card */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img3} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chicken Burgers
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Delight in our mouth-watering chicken burgers, where juicy chicken
              meets a perfect blend of spices and fresh toppings. A true treat
              for chicken lovers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
