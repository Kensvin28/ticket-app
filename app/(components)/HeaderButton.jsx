const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
const { default: Link } = require("next/link")

const HeaderButton = ({ href, icon }) => {
    return (
        <Link href={href} className="p-4 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-10 transition">
            <FontAwesomeIcon icon={icon} className={"icon"} />
        </Link>
    )
}

export default HeaderButton;