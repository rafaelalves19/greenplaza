import Container from "../container/container";
import Grid from "../grid/grid";
import { motion } from "framer-motion";

function Graphic() {
  const benefits = [
    {
      src: "/images/vantagem1.svg",
      alt: "vantagem 1",
      title: "Junto ao centro",
      subtitle:
        "Localizada numa zona tranquila, junto ao centro da cidade, com ótimos acessos à autoestrada e outras vias de ligação.",
    },
    {
      src: "/images/vantagem2.svg",
      alt: "vantagem 2",
      title: "Garagem privada",
      subtitle:
        "Todos os apartamentos incluem garagem privada fechada ou lugar de garagem no interior.",
    },
    {
      src: "/images/vantagem3.svg",
      alt: "vantagem 3",
      title: "Acabamentos premium",
      subtitle:
        "A elevada qualidade dos materiais aplicados e rigor nos acabamentos confere aos apartamentos um alto nível de comodidade.",
    },
    {
      src: "/images/vantagem4.svg",
      alt: "vantagem 4",
      title: "Zona tranquila",
      subtitle:
        "Localização excelente, em zona residencial com área pedonal e natureza envolvente. Muito próximo à ciclovia.",
    },
    {
      src: "/images/vantagem5.svg",
      alt: "vantagem 5",
      title: "Arquitetura arrojada",
      subtitle:
        "Edifício de arquitetura moderna, com varandas ventiladas e rega nas floreiras exteriores.",
    },
    {
      src: "/images/vantagem6.svg",
      alt: "vantagem 6",
      title: "Ótimo isolamento",
      subtitle:
        "Elevado nível de isolamento térmico e acústico, com fachada ventilada, proporcionando o bem-estar e privacidade aos residentes.",
    },
  ];

  return (
    <section id="graphic">
      <Container>
        <motion.h2
          key="title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          Vantagens
        </motion.h2>
        <Grid>
          <img className="graphic__imgLine" src="/images/line.svg" alt="line" />
          {benefits.map((benefit, i) => {
            return (
              <motion.div
                key={i}
                className="graphic__wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                <div className="graphic__imgBackground">
                  <img src={benefit.src} alt={benefit.alt} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.subtitle}</p>
              </motion.div>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

export default Graphic;
