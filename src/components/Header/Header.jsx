import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import navItems from "./navItems";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItem = navItems;
  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link to={"/"}>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItem.map((item) =>
              item.active ? (<li key={item.name}>
                <button onClick={() => navigate(item.slug)}
                  className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded full"
                >
                  {item.name}
                </button>
              </li>) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>
        </nav>
      </Container>
    </header>
  )
};

export default Header;
