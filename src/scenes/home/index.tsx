import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageLogo.png";
import HomePageGraphic from "@/assets/ninja.png";
import Titan from "@/assets/titan.png";
import Cobra from "@/assets/cobra.png";
import Sting from "@/assets/sting.png";
import Delmonte from "@/assets/delmonte.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="items-center gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/*Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/*Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-5 before:-top-10  before:z-[-10] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Top-notch Gym. Unmatched Fitness Training Sessions.
              State-of-the-art Studios for Achieving Your Dream Body Shape.
              Achieve Your Fitness Goals Today.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-red-500 underline hover:text-yellow-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/*Image */}
        <div className="relative flex basis-3/5 justify-center overflow-hidden rounded-full md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/*Sponsors */}
      {isAboveMediumScreens && (
        <div className="flex items-center justify-center bg-blue-900">
          <div className="w-40">
            <div className="flex justify-center gap-40 pb-5 pt-5">
              <img src={Titan} alt="titan-sponsor" />
              <img src={Cobra} alt="cobra-sponsor" />
              <img src={Sting} alt="sting-sponsor" />
              <img src={Delmonte} alt="delmonte-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default home;
