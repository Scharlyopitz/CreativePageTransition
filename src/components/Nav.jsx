import { Link } from "react-router-dom";

export default function Nav() {
  const buttons = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
  return (
    <nav>
      {buttons.map(({ name, href }, i) => {
        return (
          <Link key={i} to={href}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
