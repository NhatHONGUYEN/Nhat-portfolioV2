import IconFooter from "../../reusable ui/IconFooter";

export default function Footer() {
  return (
    <div className="w-full bg-slate-500">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <IconFooter />
        <div className="mt-8 text-center md:order-1 md:mt-0 md:text-left">
          <p className="text-xs leading-5 text-slate-50 md:text-base lg:text-lg">
            &copy; 2024 Nhat, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
