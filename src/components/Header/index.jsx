import { Link } from "preact-router/match";
import style from "./style.module.scss";
import logo from "@assets/svg/logo.svg";
import logo_black from "@assets/svg/logo_black.svg";
import user from "@assets/svg/user.svg";
import user_black from "@assets/svg/user_black.svg"

export default function Header({blackMenu}) {
  console.log(blackMenu,"dkajhdkjsakjhfdkajhk")
  return (
    <header class={style.header}>
      <a href="/" class={style.logo}>
        {blackMenu?<img src={logo_black} alt="XREAL Logo" height="24" width="108" />:<img src={logo} alt="XREAL Logo" height="24" width="108" />}
      </a>
      <nav class={style.nav}>
        <Link class={style.navItem} activeClassName={style.active} href="/spatial-display">
          <span class={style.navItemText}>Spatial Display</span>
          <span class={style.navItemLabel}>for everything</span>
        </Link>
        <Link
          class={style.navItem}
          activeClassName={style.active}
          href="/nebula-for-mac"
        >
          <span class={style.navItemText}>Nebula</span>
          <span class={style.navItemLabel}>for Mac/PC</span>
        </Link>
        <Link
          class={style.navItem}
          activeClassName={style.active}
          href="/nebula-for-android"
        >
          <span class={style.navItemText}>Nebula</span>
          <span class={style.navItemLabel}>for Android</span>
        </Link>
        <Link
          class={style.navItem}
          activeClassName={style.active}
          href="https://www-uat-eks.xreal.com/shop"
        >
          <span class={style.navItemText}>Shop</span>
          {/* <span class={style.navItemLabel}>haha</span> */}
        </Link>
      </nav>
      <a href="https://www-uat-eks.xreal.com/shop/mooauth/actions/sendAuthorizationRequest" class={style.user}>
      {blackMenu?<img src={user_black} alt="user" height="28" width="28" />:<img src={user} alt="user" height="28" width="28" />}
      </a>
    </header>
  );
}
