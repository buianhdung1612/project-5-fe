"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode, useEffect, useState } from "react";
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";
import { IoMdAdd } from "react-icons/io";


export default function SiderMenu() {
    const [isLogin, setIsLogin] = useState<boolean>();

    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {            
            //   const uid = user.uid;
            //   console.log("Đã đăng nhập", uid);
              setIsLogin(true);
            } else {
            //   console.log("Chưa đăng nhập");
              setIsLogin(false);
            }
          });
    }, [])


    interface MenuLink {
        icon: ReactNode,   // KDL của ảnh
        title: string,
        link: Url,          // KDL của Link
        logged?: Boolean
    }

    const menu: MenuLink[] = [
        {
            icon: <FaHouse/>,
            title: "Trang Chủ",
            link: "/"
        },
        {
            icon: <FaMusic/>,
            title: "Danh Mục Bài Hát",
            link: "/categories"
        },
        {
            icon: <FaPodcast/>,
            title: "Ca Sĩ",
            link: "/singers"
        },
        {
            icon: <FaHeart/>,
            title: "Bài Hát Yêu Thích",
            link: "/wishlist",
            logged: true
        },
        {
            icon: <FaRightFromBracket/>,
            title: "Đăng Xuất",
            link: "/logout",
            logged: true
        },
        {
            icon: <FaUser/>,
            title: "Đăng Nhập",
            link: "/login",
            logged: false
        },
        {
            icon: <FaUserPlus/>,
            title: "Đăng Ký",
            link: "/register",
            logged: false
        }
    ]

    

    return (
        <>
            <nav className="pt-[30px] px-[20px]">
                <ul className="">
                    {menu.map((item, index) => (
                        <SiderMenuItem 
                            key={index} 
                            item={item}
                            isShow={item.logged === undefined || item.logged === isLogin ? true : false}
                        />
                    ))}                   
                </ul>
            </nav>
        </>
    );
}
