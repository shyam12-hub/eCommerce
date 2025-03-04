import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setVisbible } from "../feature/ProductSlice";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { setLogin } from "../feature/ProductSlice";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { toast } from "react-hot-toast";
export function Navbar() {
  const cart = useSelector((state) => state.productReducer.cart);
  const visible = useSelector((state) => state.productReducer.visible);
  const dispatch = useDispatch();
  const menu = ["Laptops", "Fragrances", "Home Decoration", "Skin Care"];
  const login = useSelector((state) => state.productReducer.login);
  const [show, setShow] = React.useState(false);
  return (
    <div>
      {/* navbar */}
      <nav className="flex justify-between  h-16 items-center sticky  top-0 bg-white  ">
        <NavLink
          to="/"
          className="text-center order-2 lg:order-1 text-3xl font-bold ml-[6rem] lg:ml-4 lg:mt-4"
        >
          ClosTich.
        </NavLink>
        <div className="relative showdow-xl order-1  lg:order-2 ">
          <div className="  lg:hidden">
            <MenuRoundedIcon onClick={() => dispatch(setVisbible(true))} />
          </div>
          <div
            className={`${
              visible ? "scale-x-[1] " : "scale-x-[0]"
            } lg:scale-x-[1] duration-100`}
          >
            <CloseRoundedIcon
              className="absolute top-[-1.6rem] z-10 left-[15rem] lg:invisible"
              onClick={() => dispatch(setVisbible(false))}
            />
            <div
              className={` absolute z-0 left-0 p-4 top-[-2.8rem] bg-white  h-[100vh] w-[18rem]  lg:top-[-1rem] lg:p-3 lg:w-[30rem] lg:h-16 lg:bg-transparent`}
            >
              <ul className="flex gap-4 flex-col  lg:flex-row ">
                {menu.map((menu) => (
                  <NavLink
                    to="/search"
                    onClick={() => (
                      dispatch(
                        setSearch(
                          menu === "Home Decoration"
                            ? "home-decoration"
                            : menu === "Laptops"
                            ? "laptops"
                            : menu === "Fragrances"
                            ? "fragrances"
                            : menu === "Skin Care" && "skincare"
                        )
                      ),
                      dispatch(setVisbible(false))
                    )}
                    className="text-lg font-bold"
                  >
                    {menu}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="order-3">
          <div className="flex gap-3 p-2 text-3xl font-bold">
            {login ? (
              <div className="relative">
                <div
                  onClick={() => setShow((prev) => !prev)}
                  className="cursor-pointer"
                >
                  {" "}
                  <AccountCircleOutlinedIcon />
                </div>
                <div
                  className={`absolute py-4 px-5 shadow-xl rounded-md ${
                    show ? "block" : "hidden"
                  } `}
                >
                  <NavLink to="/manageProfile">
                    <ManageAccountsIcon />
                  </NavLink>
                  <div
                    onClick={() => (
                      dispatch(setLogin(false)), toast.success("log out")
                    )}
                    className="cursor-pointer"
                  >
                    {" "}
                    <LogoutIcon />
                  </div>
                </div>
              </div>
            ) : (
              <NavLink to="/login">
                <LoginIcon />
              </NavLink>
            )}

            <NavLink to="/cart">
              <div className="relative">
                <div className="absolute top-0 left-3 h-5 w-5 flex items-center justify-center rounded-full  text-white text-xs font-bold bg-gray-800">
                  <h2>{cart.length}</h2>{" "}
                </div>

                <ShoppingCartOutlinedIcon className="text-gray-800" />
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* banner */}

      {/* category */}
    </div>
  );
}
