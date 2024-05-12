const EditProfile = () => {
  return (
    <div className="bg-white p-[2%] rounded-xl shadow-md">
      <div className="text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] py-[1vw]">Edit Profile</div>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col mb-[2%] w-[100%] md:w-[35%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">
            Company (disabled)
          </span>
          <input
            value="Creative Code Inc."
            className="bg-[#E3E3E3] rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw] cursor-not-allowed"
            disabled
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] sm:w-[49%] md:w-[28%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">Username</span>
          <input
            value="Michael23"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] sm:w-[49%] md:w-[35%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">Email address</span>
          <input
            value="Email"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] sm:w-[49%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">First Name</span>
          <input
            value="Chet"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] sm:w-[49%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">Last Name</span>
          <input
            value="Faker"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">Address</span>
          <input
            value="Melbourne, Australia"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] md:w-[32%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">City</span>
          <input
            value="Melbourne"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] sm:w-[49%] md:w-[32%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">Country</span>
          <input
            value="Australia"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%] sm:w-[49%] md:w-[32%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">Postal Code</span>
          <input
            value="Zip Code"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
        <div className="flex flex-col mb-[2%] w-[100%]">
          <span className="text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-primary-300">About Me</span>
          <textarea
            value="Oh so, your weak rhyme You doubt I'll bother, reading into it"
            className="border rounded-md p-[0.5vw] text-primary-600 mt-[0.5vw]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[3vw] lg:mt-[1vw]">
        <button className="bg-theme-blue text-white font-semibold rounded-3xl px-[1vw] py-[0.5vw]">UPDATE PROFILE</button>
      </div>
    </div>
  );
};

export default EditProfile;
