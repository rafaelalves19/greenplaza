import { useState } from "react";
import Container from "../container/container";
import { motion } from "framer-motion";

function Table() {
  const data = [
    {
      batch: "4.4 / 1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4 / 1",
      fraction: "B",
      type: "T3",
      area: "156.10",
      garage: "27.50",
      state: "Disponível",
    },
    {
      batch: "4.4 / 1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4 / 1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Disponível",
    },
    {
      batch: "4.4/1",
      fraction: "A",
      type: "T2",
      area: "118.10",
      garage: "15.40",
      state: "Reservado",
    },
  ];

  const [view, setView] = useState("todas");
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <section id="table">
      <Container>
        <motion.div
          className="table__allOptions"
          key="option"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <div className=" table__option">
            <input
              onClick={(e) => {
                setView(e.target.value);
              }}
              name="state"
              id="todas"
              value="todas"
              type="radio"
              defaultChecked
              onChange={() => setShowAll(false)}
            />
            <label htmlFor="todas"> Todas </label>
          </div>
          <div className=" table__option">
            <input
              onClick={(e) => {
                setView(e.target.value);
              }}
              name="state"
              id="venda"
              value="disponível"
              type="radio"
              onChange={() => setShowAll(false)}
            />
            <label htmlFor="venda"> Para venda </label>
          </div>
          <div className=" table__option">
            <input
              onClick={(e) => {
                setView(e.target.value);
              }}
              name="state"
              id="reservada"
              value="reservado"
              type="radio"
              onChange={() => setShowAll(false)}
            />
            <label htmlFor="reservada"> Reservada </label>
          </div>
        </motion.div>

        <motion.div
          className={`table__layout ${showAll ? "table__showAll" : ""}`}
          key="table"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <div className="table__verticalWrapper">
            <table className="table__vertical">
              <thead>
                {data
                  .filter((row) => {
                    return view.toLowerCase() === "todas"
                      ? row
                      : row.state.toLowerCase() === view.toLowerCase();
                  })
                  .map((item, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <th>Lote/Piso</th>
                          <td>{item.batch}</td>
                          <th>Fração</th>
                          <td>{item.fraction}</td>
                          <th>Tipologia</th>
                          <td>{item.type}</td>
                          <th>Área Bruta &#40;M2&#41;</th>
                          <td>{item.area}</td>
                          <th>Garagem &#40;M2&#41;</th>
                          <td>{item.garage}</td>
                          <th>Estado</th>
                          <td>{item.state}</td>
                        </tr>
                      </>
                    );
                  })}
              </thead>
            </table>
          </div>

          <div className="table__horizontalWrapper">
            <table className="table__horizontal">
              <thead>
                <tr>
                  <th>Lote/Piso</th>
                  <th>Fração</th>
                  <th>Tipologia</th>
                  <th>Área Bruta &#40;M2&#41;</th>
                  <th>Garagem &#40;M2&#41;</th>
                  <th>Estado</th>
                </tr>

                {data
                  .filter((row) => {
                    return view.toLowerCase() === "todas"
                      ? row
                      : row.state.toLowerCase() === view.toLowerCase();
                  })
                  .map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.batch}</td>
                        <td>{item.fraction}</td>
                        <td>{item.type}</td>
                        <td>{item.area}</td>
                        <td>{item.garage}</td>
                        <td>{item.state}</td>
                      </tr>
                    );
                  })}
              </thead>
            </table>
          </div>
        </motion.div>
        <div className="table__expandButton">
          <button
            onClick={handleClick}
            className={`${showAll ? "hidden" : ""}`}
          >
            <p>Expandir tabela</p>
            <div className="button__arrow">
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Table;
