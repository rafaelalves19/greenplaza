import Container from "../container/container";
import { motion } from "framer-motion";

function Location() {
  const localInfo = {
    title:
      "Permita-se vivier num apartamento que prima pelo conforto, junto ao centro de vila nova de famalicão.",
    subtitle:
      "Os apartamentos Green Plaza, em Vila Nova de Famalicão, têm a particularidade de integrar-se num cenário aprazível e tranquilo, mas bastante próximo do centro da cidade e dos acessos à autoestrada.",
  };

  return (
    <section id="location">
      <Container>
        <motion.div
          className="location__wrapper"
          key="text"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <h2>{localInfo.title}</h2>
          <p>{localInfo.subtitle}</p>
        </motion.div>
      </Container>
      <div className="location__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1496.0060663272332!2d-8.524162493392954!3d41.41725529695167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24584dda72997d%3A0x76737ff9ca226747!2sR.%20Lino%20Jos%C3%A9%20de%20Sousa%20Ferreira%201208%201186%2C%204760-152%20Vila%20Nova%20de%20Famalic%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1668266924662!5m2!1spt-PT!2spt"
          width="100%"
          height="450"
          loading="lazy"
          title="location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
