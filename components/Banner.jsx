import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go ? perfect</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          {" "}
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner