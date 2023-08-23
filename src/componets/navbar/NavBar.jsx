// import css from "../../pages/navbar/Navbar.module.css";
// import { Link } from "react-router-dom";
import headerLogo from "../../assets/Logo.png";
import { navLinks } from "../../constants";
import { hamburger } from "../../assets/icons";
export const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

// import css from "../../pages/navbar/Navbar.module.css";
// import { Link } from "react-router-dom";
// export const NavBar = () => {
//   return (
//     <div className={`w-[100vw]`}>
//       <ul
//         className={`bg-transparent flex justify-between items-center h-[50px]  px-4`}
//       >
//         <li
//           className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//         >
//           <Link to="/">SAJEF LOGO</Link>
//         </li>

//         <div className="flex gap-10">
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">About Us</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">Car Parts</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">Contact Us</Link>
//           </li>
//         </div>
//         <div className="flex gap-10">
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto uppercase']`}
//           >
//             <Link to="/">Shop</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto uppercase']`}
//           >
//             <Link to="/">Login</Link>
//           </li>

//         </div>
//       </ul>
//     </div>
//   );
// };
