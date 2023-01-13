import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-34 bg-gradient-rainblue pt-&">
            <div className="w-10/12 mx-auto">
                <div className="md:flex justify-center text-md md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl text-white">
                        MEHMET GUNDUZ
                    </p>
                    <p className="font-playfair text-md text-yellow">
                        ©2022 Gunduz. All Rights Reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;