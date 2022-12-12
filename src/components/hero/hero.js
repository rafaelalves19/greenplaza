import Container from "../container/container";
import { motion } from "framer-motion";

const variants = {
  initial: { y: -300, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function Hero() {
  return (
    <section id="hero">
      <Container>
        <div className="hero__wrapper">
          <motion.div
            className="hero__infoContainer"
            key={"hero"}
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h2>Desfrute da natureza em harmonia com a cidade!</h2>
            <h5>Apartamentos T1, T2 e T3 junto ao centro de Famalicão.</h5>
            <button>
              <a href="#contact">Saber mais</a>
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
