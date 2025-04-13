import "./card.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa6";
import { TbLink } from "react-icons/tb";
import type { BookModel } from "../../models/bookModel";

interface CardComponentsProps {
  data: BookModel;
}

function Card({ data }: CardComponentsProps) {
  return (
    <div className="card">
      <span style={{ alignItems: "center", display: "flex", gap: 10 }}>
        <i className="icon">
          <BsFillPersonFill size={20} />
        </i>{" "}
        {data.author.toUpperCase()}{" "}
      </span>
      <span style={{ alignItems: "center", display: "flex", gap: 10 }}>
        <i className="icon">
          <FaBookOpen size={20} />
        </i>{" "}
        {data.title}{" "}
      </span>
      {data.url && (
        <a
          className="url"
          href={data.url}
          style={{
            alignItems: "center",
            display: "flex",
            gap: 10,
            cursor: "pointer",
          }}
        >
          <i className="icon">
            <TbLink size={20} />
          </i>
          Link para o livro
        </a>
      )}
      {!data.url && (
        <a
          className="no-url"
          style={{
            alignItems: "center",
            display: "flex",
            gap: 10,
            cursor: "pointer",
          }}
        >
          <i className="icon">
            <TbLink size={20} />
          </i>
          Link não disponível
        </a>
      )}
    </div>
  );
}

export default Card;
