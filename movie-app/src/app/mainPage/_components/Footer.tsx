import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-indigo-700 text-white flex flex-col gap-7 px-5 pt-10 pb-5 mt-8 text-sm w-full lg:flex-row lg:gap-30 md:px-15 md:py-10 lg:justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Film size={20} />
          <p className="italic font-bold">Movie N</p>
        </div>
        <p className="lg:w-61.75">© 2026 Movie N. All Rights Reserved.</p>
      </div>
      <div className="flex justify-between lg:justify-end lg:gap-17">
        <div>
          <p>Contact information</p>
          <div className="mt-3 mb-6 flex gap-3 items-center">
            <Mail size={16} />
            <div>
              <p>Email:</p>
              <p>support@movieN.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Phone size={16} />
            <div>
              <p>Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3">Follow us</p>
          <div className="flex flex-col gap-3 lg:flex-row">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
