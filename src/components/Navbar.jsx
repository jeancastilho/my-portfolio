import Link from "next/link";

const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                Jean's  Portfolio
                </Link>
            </div>
          
        </div>
    )
}

export default Navbar;