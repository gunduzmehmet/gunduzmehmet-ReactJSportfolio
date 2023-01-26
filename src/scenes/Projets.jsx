import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { 
            staggerChildren: 0.2,
        },
    },
};

const projetVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};


const Projet = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-black`;
    const projetTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projetVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair ">{title}</p>
                <p className="mt-7">
                    </p>
            </div>
            <img class="object-cover h-96 w-96" src={`../assets/${projetTitle}.jpeg`} alt={projetTitle} />
        </motion.div>
    );
};


const Projets = () => {
    return (
        <section id="projets" className="pt-48 pb-38">
            { /* headings */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },

                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red-400">PROJET</span>S
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/4" />
                    </div>
                </div>
                <p className="mt-10 mb-10">Quelques projets de groupe
                </p>
            </motion.div>

            {/*Projets*/}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/*row 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red-400 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        Projets ⚡️
                    </div >
                    <Projet  title="E-Commerce"  />
                    <Projet title="Flutter" />

                    {/*row 2 */}
                    <Projet title="Dataviz" />
                    <Projet title="Pico8" />
                    {/*<Projet title="Projet 5" />*/}

                    {/*row 3 */}
                    { /*<Projet title="Projet 6" />
                    <Projet title="Projet 7" />
                    <Projet title="Projet 8" /> */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-yellow-400
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        À suivre...
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projets;

