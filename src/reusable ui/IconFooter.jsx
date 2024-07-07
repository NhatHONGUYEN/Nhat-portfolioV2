import { SocialIcons } from "../utils/SocialIcons.jsx";

export default function IconFooter() {
  return (
    <div className="flex justify-center space-x-6  md:order-2 md:space-x-8">
      {SocialIcons.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.target}
          rel={item.rel}
          className="rounded-full p-2 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-200"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-8 w-8 " aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
