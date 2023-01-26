import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-8 pb-25">
            {/*header et image section*/}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
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
                    <p className="font-playfair font semibold text-4xl mb-5">
                        MY <span className="text-red-400" >SKILLS</span>
                    </p>
                    <LineGradient width="w-1/4" />
                    <p className="mt-10 mb-7">
                        <ul>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Python</li>
                            <li>PHP / Laravel</li>
                            <li>Flutter</li>
                            <li>HTML5 / CSS3</li>
                        </ul>
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                                before:w-full before:max-w-[800px] before:h-full before:border-2 before:border-red-400 before:z-[-1]">
                            <img 
                                alt="skills"
                                className="z-10"
                                src="assets/skills-image.jpeg"
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src="assets/skills-image.png" />
                    )}
                </div>
            </div>
            {/*skills section*/}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/*Experince*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Expérience
                            </p>
                        </div>
                            <div className="w-1/2 md:w:-3/4 h-32 bg-blue-400 absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Après plusieurs années de travail domaines tels que la vente, la restauration et la construction, 
                        jai voulu changer de métier en me lançant un nouveau challenge et me diriger vers le monde de l'informatique , 
                        le développement web.
                    </p>
                </motion.div>

                {/*Objectifs*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Objectifs
                            </p>
                        </div>
                            <div className="w-1/2 md:w:-3/4 h-32 bg-red-400 absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    Changer le monde, créer les projets les plus fou, comme les plus simple, les plus utiles, les plus originaux… 
                    Le développement web laisse place à l'imagination
                    </p>
                </motion.div>

                {/*Objectifs*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Envie
                            </p>
                        </div>
                            <div className="w-1/2 md:w:-3/4 h-32 bg-yellow-400 absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Je trouve que c’est un métier qui ouvre des horizons infinis. En effet, lorsque l’on maitrise les compétences du développement web, 
                        il est possible de créer tout ce qui est imaginable.
                    </p>
                </motion.div>
            </div>
        </section>
    )
};

export default MySkills;