import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Badge from "react-bootstrap/Badge";
import CloseButton from "react-bootstrap/CloseButton";
import ListGroup from "react-bootstrap/ListGroup";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount);

  return (
    <ListGroup>
      <ListGroup.Item
        className={transaction.amount < 0 ? "text-danger" : "text-primary"}
        style={{ fontWeight: "bold" }}
      >
        <Badge bg="danger" style={{ border: "0.1px solid transparent" }}>
          <CloseButton
            aria-label="Hide"
            style={{ fontSize: "0.6rem" }}
            variant="dark"
            onClick={() => deleteTransaction(transaction.id)}
          />
        </Badge>
        &#9656;&nbsp;{transaction.text} &nbsp;&nbsp;&nbsp; {sign}${amount}
      </ListGroup.Item>
    </ListGroup>
  );
};
