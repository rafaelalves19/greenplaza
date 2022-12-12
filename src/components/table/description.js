import Container from "../container/container";
import { motion } from "framer-motion";

function Description() {
  const descriptions = {
    title: "Informações sobre os apartamentos disponíveis",
    subtitle: "Descrição",
    text: "A sua localização é perfeita, suficientemente próximo da cidade, mas ao mesmo tempo isolado do ruido e excesso de movimento urbano. As varandas rasgadas nas fachadas integram a zona social, da qual constituem um prolongamento natural, permitindo usufruir não só da paisagem como dos coloridos tons do por-do-sol. Os materiais de acabamento são de inegável qualidade e criteriosamente selecionados conferindo aos apartamentos um visual moderno, não descurando a preocupação com os isolamentos térmico e acústico, como garantia de um resultado final assente na qualidade e conforto. Descubra todos os pormenores destes fantásticos apartamentos, em Vila Nova de Famalicão!",
  };
  return (
    <section id="description">
      <Container>
        <motion.div
          className="description__wrapper"
          key="description"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <h2>{descriptions.title}</h2>
          <h3>{descriptions.subtitle}</h3>
          <p>{descriptions.text}</p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Description;
