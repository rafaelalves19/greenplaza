import Container from "../container/container";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      key="footer"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
    >
      <Container>
        <div className="footer__greenPlaza">
          <a href="/" className="footer__logo">
            <img src="/images/footer-logo.svg" alt="logo" />
          </a>
          <div className="footer__wrapper">
            <div className="footer__manufactures">
              <div className="footer__promoters">
                <p>Promotor:</p>
                <div className="footer__img">
                  <img src="/images/competro-logo.svg" alt="competro logo" />
                </div>
              </div>
              <div className="footer__promoters">
                <p>Arquitetura:</p>
                <div className="footer__img">
                  <img src="/images/trama-logo.png" alt="trama logo" />
                </div>
              </div>
            </div>
            <div className="footer__sales">
              <p>Comercialização e venda:</p>
              <div className="footer__mediumInfo">
                <img src="/images/medium-imobiliaria.svg" alt="medium logo" />
                <a href="/">252 104 181</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer__drible">
        <p>Todos os direitos reservados</p>
        <div className="footer__dribleLogo">
          <p>Desenvolvido por:</p>
          <a href="https://www.drible.pt/" target="_black">
            <img src="/images/drible.svg" alt="drible logo" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
