"use client";

import { useState, useEffect} from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";


const links = [
        { 
            title: "Home", 
            path: "/", 
        },
        { 
            title: "About",
            path: "/about",
        },
        { 
            title: "Contact", 
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        
        },
    ];

const Links = ({session}) => {
    const [open,setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    //TEMPORARY
    // const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link=>(
                    <NavLink item={link} key={link.title}/>
                )))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}}/>)}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )}
            </div>
            <Image className={styles.menuButton} alt="" src="/menu.png" width={30} height={30} onClick={()=>setOpen(prev=>!prev)}/>
            {open && (
                <div className={styles.mobileLinks} onClick={()=>setOpen(prev=>!prev)}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>
                    ))}
                    {session?.user ? (
                        <>
                            {session.user?.isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}}/>)}
                            <form action={handleLogout} onClick={(e) => e.stopPropagation()}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default Links