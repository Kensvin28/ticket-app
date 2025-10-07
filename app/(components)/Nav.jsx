import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import HeaderButton from "./HeaderButton"

const Nav = () => {
    return (
        <nav className="flex items-center justify-between bg-nav p-2">
            <div className="flex items-center justify-center space-x-2 p-2">
                <HeaderButton href="/" icon={faHome} />
                <HeaderButton href="/ticket-page/new" icon={faTicket} />
            </div>
            <div className="flex items-center justify-center p-2 px-4">
                <p className="text-default-text">
                    user@gmail.com
                </p>
            </div>
        </nav>
    )
}

export default Nav