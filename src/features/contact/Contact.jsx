import { HiOutlineMail } from "react-icons/hi";
import ContactItem from "./ContactItem";
import { media } from "../../helpers/imageData";
import { RxAvatar } from "react-icons/rx";
import { IoMdGlobe } from "react-icons/io";
import TopRowContainer from "../../ui/TopRowContainer";

const contactInfo = {
  name: "Michael See",
  email: "michaelSeeDev@gmail.com",
  location: "Anchorage, Alaska",
  selfBlurb: "Pups + Me - Chugach Mountain Range, Anchorage, AK",
};

function Contact() {
  return (
    <div className="flex w-full flex-col">
      <TopRowContainer mainTitle="Contact" />
      <div className="flex flex-col justify-evenly gap-x-8 gap-y-4 pl-2 sm:mt-8 sm:flex-row md:py-16">
        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <ContactItem
            icon={<RxAvatar />}
            text={contactInfo.name}
            copy={false}
          />

          <ContactItem
            icon={<IoMdGlobe />}
            text={contactInfo.location}
            copy={false}
          />
          <ContactItem
            icon={<HiOutlineMail />}
            text={contactInfo.email}
            copy={true}
          />
        </div>
        <div className="flex flex-col items-center gap-y-4 pt-6">
          <img
            src={media.CONTACT.self}
            className={`w-[15rem] select-none sm:w-[500px]`}
          />
          <div className="flex flex-col justify-center text-center text-sm italic">
            <div>Pups and Me</div>
            <div className="text-xs">Chugach Mountain Range, Anchorage, AK</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
