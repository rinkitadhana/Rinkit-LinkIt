import Coffee from "../parts/BuyMeACofee";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Links from "../parts/Links";

const Tree = () => {
  const imgURL = "./userIMG/dp.jpeg"; //ENTER YOUR IMG URL HERE
  const name = "Rinkit Adhana"; //ENTER YOUR FULL NAME HERE
  const bio =
    "Full Stack Developer and Freelancer who loves to build and ship stuffs.."; //ENTER YOUR BIO HERE

  return (
    <div className="">
      <div className="flex justify-center md:flex-row flex-col  ">
        <div className=" md:w-2/5 ">
          <div className="flex flex-row justify-between mt-6 px-2">
            <div className=" font-bold text-green-500 text-3xl  font-bricolage ">
              <span className=" text-gray-600">Link</span>It
            </div>
            <a href="https://github.com/rinkitadhana/LinkFree" target=" _blank">
              <div className="flex flex-row gap-1 p-2 bg-black/50 w-fit items-center rounded-md text-sm font-semibold text-white  hover:bg-black/60 ">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <div>on Github</div>
              </div>
            </a>
          </div>

          <Header img={imgURL} name={name} bio={bio} />

          <div>
            <Links name="Portfolio" url="https://therinkit.vercel.app" />
            <Links name="Twitter" url="https://x.com/rnkktt" />
            <Links name="Github" url="https://github.com/rinkitadhana" />
            <Links
              name="Linked In"
              url="https://www.linkedin.com/in/rinkitadhana/"
            />
            <Links name="Leetcode" url="https://leetcode.com/u/therinkit/" />
            <Links name="Instagram" url="https://www.instagram.com/rnkktt/" />
          </div>
          <Footer />
        </div>
        <Coffee />
      </div>
    </div>
  );
};

export default Tree;
