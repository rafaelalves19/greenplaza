import Container from "../container/container";
import { motion } from "framer-motion";

function Contact() {
  const questions = {
    title:
      "Não guarde as suas questões. Teremos todo o gosto em falar consigo, sem qualquer compromisso.",
    subtitle:
      "A procura por apartamentos novos não para de aumentar. Esta é uma fantástica oportunidade para mudar a sua vida e a da sua família. Coloque-nos todas as suas questões, sem qualquer compromisso.",
  };

  return (
    <section id="contact">
      <Container>
        <motion.h2
          key="title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          {questions.title}
        </motion.h2>
        <motion.p
          key="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          {questions.subtitle}
        </motion.p>
        <div className="contact__formWrapper">
          <form>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder="Nº de Telefone"
              required
            />
            <div className="contact__termsWrapper">
              <div className="contact__termsCheckbox">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  value="terms"
                  required
                />
                <label htmlFor="terms">
                  Concordo com os <a href="/privacy"> termos e condições</a>
                </label>
              </div>
              <button id="submit" type="submit" value="submit">
                Quero ser contactado
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
