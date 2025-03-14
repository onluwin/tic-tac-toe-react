import "../styles/square.css";
import "../styles/rain.css";
import x from "../images/X.png";
import o from "../images/O.png";
import { motion } from "framer-motion";

export const Square = ({ clickHandler, value, id }) => {
  console.log(value);
  if (!value) {
    return (
      <button
        onClick={() => clickHandler(id)}
        id={id}
        className="square"
      ></button>
    );
  }

  // if (!value) {
  //   return (
  //     <motion.button
  //       initial={{ scale: 0, opacity: 0 }}
  //       animate={{ scale: 1, opacity: 1 }}
  //       transition={{ duration: 0.3 }}
  //       onClick={() => clickHandler(id)}
  //       className="square"
  //       id={id}
  //     >
  //       {value}
  //     </motion.button>
  //   );

  return (
    <button onClick={() => clickHandler(id)} className="square" id={id}>
      {value && (
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={value === "X" ? x : o}
          className="square-pic"
        />
      )}
    </button>
  );
};

// return (
//   <button onClick={() => clickHandler(id)} id={id} className="square">
//     {value && <img src={value === "X" ? x : o} className="square-pic" />}
//   </button>
// );
// };
