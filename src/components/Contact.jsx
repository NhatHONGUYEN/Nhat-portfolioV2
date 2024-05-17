import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full h-full justify-center items-center text-center">
      <div>
        <div className="py-8">
          <h1 className="font-bold">Contact</h1>
          <p className="font-bold text-orange-500">
            Si vous voulez en savoir plus!
          </p>
        </div>
      </div>

      <div className="py-4">
        <div className="flex justify-center items-center">
          <FaPhoneAlt className="rounded-full bg-orange-500  text-xl" />
        </div>
        <p>
          Phone <br />
          07 69 57 74 67 69
        </p>
      </div>
      <div className="pt-4 pb-10">
        <div className="flex justify-center items-center ">
          <CiMail className="rounded-full bg-orange-500 text-xl" />
        </div>
        <p>
          Mail <br />
          hnnhat67@gmail.com
        </p>
      </div>
    </div>
  );
}
