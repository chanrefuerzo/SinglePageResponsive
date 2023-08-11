import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HomePage from "../../assets/HomePageLogo.png";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function ({ setSelectedPage }: Props) {
  const inputStyles = `mb-5 w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>
            <span className="text-red-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 text-sm">
            Ready to transform your life? Join now to embark on an incredible
            journey towards a healthier, fitter you. Whether you're a fitness
            enthusiast or just starting your fitness journey, our expert
            trainers and state-of-the-art facilities are here to guide and
            support you every step of the way. Don't wait any longer – take the
            first step towards a healthier, happier you and join now to get in
            shape!
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/chanrefuerzoofficial@gmail.com"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                </p>
              )}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "maxLength" &&
                    "maxLength is 100 characters"}
                </p>
              )}

              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                </p>
              )}
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "pattern" && "Invalid Email Address"}
                </p>
              )}

              <input
                type="text"
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 1000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "message" &&
                    "This field is required."}
                </p>
              )}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "maxLength" &&
                    "maxLength is 1000 characters"}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-yellow-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:-top-5 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={HomePage}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
