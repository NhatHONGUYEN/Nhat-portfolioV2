import { Navigation } from "./Navigation";

export default function Footer() {
  return (
    <div className="w-full bg-slate-500">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2 md:space-x-8">
          {Navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="text-gray-400 hover:text-slate-50"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-10 w-10 md:h-12 md:w-12"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 text-center md:order-1 md:mt-0 md:text-left">
          <p className="text-xs leading-5 text-slate-50 md:text-base lg:text-lg">
            &copy; 2024 Nhat, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
