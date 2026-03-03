import { useForm, ValidationError } from "@formspree/react";
import ProcrastinatingText from "../../assets/homepage/procastText.svg";
import SocialIcons from "../other/SocialIcons";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvzbjdok");

  return (
    <div
      id="contact"
      className="w-screen flex justify-center items-center lg:px-20 lg:py-14 px-4 py-10"
    >
      <div className="lg:max-w-7xl flex justify-center w-full lg:gap-20 flex-wrap">
        {state.succeeded ? (
          <div className="w-full max-w-[35rem] flex flex-col gap-5 items-center justify-center">
            <p className="text-2xl font-semibold">Thanks for reaching out!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[35rem] flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="rounded border border-black placeholder:text-zinc-500 px-6 py-4"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className="rounded border border-black placeholder:text-zinc-500 px-6 py-4"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              type="text"
              placeholder="Number"
              name="website"
              className="rounded border border-black placeholder:text-zinc-500 px-6 py-4"
            />
            <textarea
              placeholder="How Can I Help ?"
              rows={3}
              id="message"
              name="message"
              className="rounded border border-black placeholder:text-zinc-500 px-6 py-4 resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="flex gap-6 flex-wrap py-5">
              {/* submit */}
              <div className="group relative cursor-pointer">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex justify-center items-center rounded bg-black py-4 px-5 h-fit font-semibold text-white gap-2 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                >
                  Submit
                </button>
                <div className="w-full h-full border border-black rounded absolute bottom-0 right-0 pointer-events-none" />
              </div>

              <SocialIcons />
            </div>
          </form>
        )}
        <div className="w-full flex flex-col justify-center py-5 lg:max-w-[35rem]">
          <div className="lg:text-5xl lg:leading-[3.5rem] text-[1.75rem] leading-[2rem] font-extrabold gap-4">
            Get in touch before I start{" "}
            <span className="inline-block lg:h-[3.25rem] h-8 relative lg:top-3 top-2">
              <img src={ProcrastinatingText} alt="" className="h-full" />
            </span>
          </div>
          <div className="mt-5 text-zinc-500">
            Contact me through Email or Socials and let's create something
            amazing together.
          </div>

          <a
            href="mailto:ruchitp167@gmail.com"
            className="font-semibold lg:text-2xl mt-10 text-black hover:text-black text-wrap"
          >
            ruchitp167@gmail.com
          </a>
          <a
            href="tel:+91 96645 222649"
            className="font-semibold lg:text-2xl lg:mt-4 mt-2 text-black hover:text-black"
          >
            +91 96645 222649
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
