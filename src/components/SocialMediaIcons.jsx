
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start mb-50 gap-5 rounded-sm py-1 px-10">
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/mehmet-gunduz-dev"
                target="_blank"
                rel="noreferrer">
                <img alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/gunduzmehmet"
                target="_blank"
                rel="noreferrer">
                <img alt="Github-link" src="../assets/github.png" />
            </a>

        </div>
    )
}

export default SocialMediaIcons;