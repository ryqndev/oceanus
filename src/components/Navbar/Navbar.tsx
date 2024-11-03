import cn from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo.png";
import DashIcon from "./icons/dash.svg?react";
import clsx from "clsx";

const APP_LINKS = [
    { Icon: DashIcon, path: "/" },
    { Icon: DashIcon, path: "/add" },
];

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className={cn.nav}>
            <Link to="/" className={cn.home}>
                <img src={Logo} />
            </Link>

            <div className={cn.links}>
                {APP_LINKS.map(({ Icon, path }) => (
                    <Link
                        to={path}
                        className={clsx(
                            cn.link,
                            pathname === path && cn.active
                        )}
                        key={path}
                    >
                        <Icon />
                    </Link>
                ))}
            </div>
        </nav>
    );
};
