import { SigninForm } from "@/components";
import { ASSETS } from "@/constants";

export default (): JSX.Element => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/5 max-sm:w-5/6 max-xl:w-3/6 flex flex-col justify-center items-center gap-y-3">
        <img src={ASSETS.KATIG_LOGO} alt="katig-logo.png" className="mb-10" />
        <h1 className="text-3xl text-white font-lora">WELCOME</h1>
        <h1 className="text-white font-bold">Log in to your account</h1>
        <SigninForm />
      </div>
    </div>
  );
};
