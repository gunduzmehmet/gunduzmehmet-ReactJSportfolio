import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="py-40">
            {/*headings*/}
            <motion.div
            className="flex justify-end w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-blue-400">CONTACTEZ</span>
                        <span className="text-yellow-400"> - </span>
                        <span className="text-red-400">MOI</span>
                    </p>
                    <div className="flex:mdjustify-end my-5" >
                        <LineGradient width="" />
                    </div>
                </div>
            </motion.div>

            {/*Form/Image*/}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    className="basis-1/2 flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src="../assets/contact-image.jpeg" alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/gunduzmg86@gmail.com"
                        method="POST"
                    >
                        <input
                            className="w-full bg-blue-300 font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NOM *"
                            {...register("name", {
                                required: true,
                                maxLength: 31,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-600 mt-1">
                                {errors.name.type === "required" && "Veuillez saisir un nom ."}
                                {errors.name.type === "maxLength" && "Maximum 31 caractères."}
                            </p>
                        )}

                        <input
                            className="w-full bg-blue-300 font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL *"
                            {...register("email", {
                                required: true,
                                pattern: /^[a-z0-9!#$%&‘*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&‘*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-600 mt-1">
                                {errors.email.type === "required" && "Veuillez respecter le format email."}
                                {errors.email.type === "pattern" && "Adresse email invalide."}
                            </p>
                        )}

                        <textarea
                            className="w-full font-semibold bg-blue-300 placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="MESSAGE *"
                            rows="10"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 501
                            })}
                        />
                        {errors.message && (
                            <p className="text-red-600 mt-1">
                                {errors.message.type === "required" && "Veuillez saisir un message."}
                                {errors.message.type === "maxLength" && "Maximum 501 caractères."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="p-5 bg-yellow-400 font-semibold text-blue-900 mt-5 hover:bg-red-400
                        hover:text-white transition duration-500"
                        >
                            Envoyer Message

                        </button>

                    </form>

                </motion.div>

            </div>

        </section>
    )

};

export default Contact;

