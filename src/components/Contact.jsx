import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className=" block h-full w-full items-center justify-center py-20  text-center">
      <div className="h-full w-full  ">
        <div className="px-8 py-5 text-xl 2xl:text-2xl">
          <h1 className="font-bold">Contact</h1>
          <p className="font-bold text-orange-500">
            Si vous voulez en savoir plus!
          </p>
        </div>
      </div>

      <div className="xl:flex xl:items-center xl:justify-center xl:gap-40 2xl:gap-32">
        <div className="py-4">
          <div className="flex items-center justify-center ">
            <FaPhoneAlt className="2xl:text-2x rounded-full  bg-orange-500 text-xl" />
          </div>
          <p className=" 2xl:text-xl ">
            Phone <br />
            07 69 57 74 67 69
          </p>
        </div>
        <div className="pb-10 pt-4 xl:pb-4">
          <div className="flex items-center justify-center ">
            <CiMail className="2xl:text-2x rounded-full bg-orange-500 text-xl" />
          </div>
          <a className="2xl:text-xl  " href="mailto:hnnhat67@gmail.com">
            Mail <br />
            <span className="text-orange-500  "> hnnhat67@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
