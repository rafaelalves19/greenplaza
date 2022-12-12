import Container from "../container/container";
import { motion } from "framer-motion";

function Gallery() {
  const images = [
    {
      src: "/images/fotos/image1.png",
      alt: "foto sala",
    },
    {
      src: "/images/fotos/image2.png",
      alt: "foto apartamento",
    },
    {
      src: "/images/fotos/image3.png",
      alt: "foto apartamento",
    },
    {
      src: "/images/fotos/image4.png",
      alt: "foto cozinha",
    },
    {
      src: "/images/fotos/image5.png",
      alt: "foto apartamento",
    },
    {
      src: "/images/fotos/image6.png",
      alt: "foto quarto",
    },
    {
      src: "/images/fotos/image7.png",
      alt: "foto casa de banho",
    },
  ];

  return (
    <Container>
      <section id="gallery">
        <motion.h2
          key="title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          Apartamentos novos juntos ao centro de Famalicão
        </motion.h2>
        <motion.ul
          className="gallery__grid grid"
          key="gallery"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          {images.map((image, i) => (
            <li key={i}>
              <img src={image.src} alt={image.alt} />
            </li>
          ))}
        </motion.ul>
      </section>
    </Container>
  );
}

export default Gallery;
