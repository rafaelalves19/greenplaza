import Container from "../container/container";
import { motion } from "framer-motion";

function Banner() {
  return (
    <Container>
      <section id="banner">
        <motion.div
          className="banner__wrapper"
          key="text"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <h2>Inicie hoje a mudança da sua vida!</h2>
          <p>
            O edifício "Green Plaza" carateriza-se por uma simbiose perfeita
            entre o verde &#40;green&#41; e o espaço urbano &#40;plaza&#41;. A
            sua arquitetura arrojada, com utilização de elementos naturais, foi
            concebido para proporcionar aos futuros residentes um bem estar em
            comunhão com a natureza.
          </p>
        </motion.div>
        <motion.button
          key="button"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <a href="#contact">Quero saber mais</a>
        </motion.button>
      </section>
    </Container>
  );
}

export default Banner;
