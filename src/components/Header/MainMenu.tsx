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

export const homeItems = [
  {
    name: "Home 01",
    routePath: "/",
  },
]


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
      </ul>
    </nav>
  );
};

export default MainMenu;
