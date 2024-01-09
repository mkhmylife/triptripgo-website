import { useState } from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

// is active parent check
// export const isActiveParent = (data = [], path) => {
//   if (data?.length !== 0) {
//     return data?.some(({ items }) =>
//       items?.some(
//         (menu) =>
//           menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, ""),
//       ),
//     );
//   }
// };

// is active parent childe check
// export const isActiveParentChaild = (data = [], path) => {
//   if (data?.length !== 0) {
//     return data?.some(
//       (menu) =>
//         menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, ""),
//     );
//   }
// };

// is active link check
// export const isActiveLink = (menuPath, routePath) => {
//   if (menuPath && routePath) {
//     return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
//   }
// };

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          // className={`${
          //   isActiveParentChaild(homeItems, pathname) ? "current" : ""
          // } menu-item-has-children`}
        >
          <Link href="/">
            <span className="mr-10">主頁</span>
            {/*<i className="icon icon-chevron-sm-down" />*/}
          </Link>
          {/*<ul className="subnav">*/}
          {/*  {homeItems.map((menu, i) => (*/}
          {/*    <li*/}
          {/*      key={i}*/}
          {/*      className={*/}
          {/*        isActiveLink(menu.routePath, pathname) ? "current" : ""*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <Link href={menu.routePath}>{menu.name}</Link>*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </li>
        {/* End home page menu */}


        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/shenzhen/hotels">深圳酒店</Link>
        </li>
        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/news/7-%e3%80%90%e6%b7%b1%e5%9c%b3%e5%a5%bd%e5%8e%bb%e8%99%952024%e3%80%91%e6%b7%b1%e5%9c%b3%e4%b8%80%e6%97%a5%e9%81%8a5%e5%a4%a7%e6%99%af%e9%bb%9e%e6%8e%a8%e4%bb%8b">深圳好去處 2024</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
