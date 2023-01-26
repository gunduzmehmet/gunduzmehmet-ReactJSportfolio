import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center  z-10 mt-16 md:mt-32  ">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-30 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[1280px] before:h-full  before:z-[-1]">
                        <img
                            alt="profile"
                            className=" z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/profile-image.png" />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className=" z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                )}
            </div>

            {/* MAIN TEXT */}
            <div className="z-30 basis-2/5 mt-12 p-8 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl  font-playfair z-10 text-center md:text-start">
                        Mehmet {" "}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
                            xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Gunduz
                        </span>
                    </p>

                    <h1 className="mt-10 mb-10 text-4xl text-center md:text-start">
                        Développeur web en apprentissage à Ada Tech School, en recherche d'alternance pour Mars 2023 au rythme de 4 jours / 1 jour
                        {/*Après plusieurs années d'expériences dans divers domaines tel que la vente, la restauration et la construction,
                        j'ai décidé de me lancer un nouveau challenge dans le développement informatique. L'informatique est une place où je serai régulièrement amener à me remettre en question, me mettre à niveau et monter en compétence.
                        Mes expériences d'avant m'ont apporter beaucoup de choses positives; d'abord de l'autonomie, le travail d'équipe, une discipline et une conscience professionnelle.
                        Actuellemment, je cherche toujours à monter en compétence et apprendre de nouvelles choses.
                        Mon état d'esprit est que; le cerveau est une machine exceptionnel qu'il faut toujours nourrir de connaissances et de sagesse.Apprendre et apprendre, apprendre tous les jours.

                        Grace à ma formation et en restant en veille réguliérement, j'ai acquis et continuer à apprendre,les bases de certains langages,
                des outils et des méthodes et je souhaiterai trouver une entreprise où je pourrais approfondir mes connaissances, monter en compétences et me rendre utile.*/}
                    </h1>
                </motion.div>

                {/* ApPels d'actions */}
                <motion.div
                    className="flex mt-4 justify-center md:justify-start p-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-blue-600 rounded-sm py-3 px-7 font-semibold
                    hover:bg-blue-300 hover:text-white transition duration-500 "
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contactez-moi
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-blue-900 hover:text-red-400 transition duration-500 w-full h-full flex items-center justify-center px-10 py-3 font-playfair">
                            Discuter
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />

                </motion.div>

            </div>
        </section>
    );
};

export default Landing;
