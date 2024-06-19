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
    <div className="flex flex-col">
      <TopRowContainer mainTitle="Contact" />
      <div className="flex flex-col justify-center gap-y-4 pl-2">
        {/* <ContactItem icon={media.CONTACT.self} /> */}
        <ContactItem icon={<RxAvatar />} text={contactInfo.name} copy={false} />

        <ContactItem
          icon={<IoMdGlobe />}
          // activeIcon={<HiOutlineMailOpen />}
          text={contactInfo.location}
          copy={false}
        />
        <ContactItem
          icon={<HiOutlineMail />}
          // activeIcon={<HiOutlineMailOpen />}
          text={contactInfo.email}
          copy={true}
        />
        <div className="flex flex-col items-center gap-y-4 pt-6">
          <img
            src={media.CONTACT.self}
            className={`hidden w-[40rem] select-none lg:block`}
          />
          <img
            src={media.CONTACT.selfHalf}
            className={`w-64 select-none sm:hidden`}
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
