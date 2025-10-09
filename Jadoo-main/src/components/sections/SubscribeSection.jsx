import React from "react";

const SubscribeSection = () => {
  return (
    <section className="pt-[70px] px-[128px] ">
      <div className="container">
        <div className="bg-[#DFD7F9] rounded-[20px] rounded-tl-[129px] py-20 px-[124px] text-center">
          <h2 className="font-poppins font-semibold text-[33px] text-paragraph leading-normal">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          <form action="" className="grid gap-6 grid-cols-[1fr_auto] max-w-[625px] mx-auto mt-10">
            <label className="grid grid-cols-[30px_1fr] gap-2 items-center py-6 px-7 bg-white rounded-[10px] text-paragraph">

              <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6" stroke="#39425D" strokeLinecap="round" />
                <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D" />
              </svg>

              <input type="email" placeholder="Your email" className="text-paragraph placeholder:text-paragraph focus:outline-0 focus:border-0"  required />
            </label>

            <button type="submit" className="py-6 px-[50px] rounded-[10px] bg-orange text-white cursor-pointer">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
