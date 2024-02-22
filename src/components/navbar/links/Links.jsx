import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

const Links = () => {

    //create array of links
    const links = [
        { 
            title: "HomePage", 
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

    //TEMPORARY

    const session = true
    const isAdmin = true

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}{
                session ? (
                <>
                    {
                        isAdmin && (
                            <NavLink item={{title: "Admin", path: "/admin"}}/>
                        )
                    }
                    <button>Logout</button>
                </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )
            }
        </div>
    )
}

export default Links