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
        style={{
          backgroundColor: "#003554",
          height: "2.8em",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: transaction.amount < 0 ? "#f21b3f" : "#00ff41",
            fontWeight: "bold",
          }}
        >
          <div>&#9656;&nbsp;{transaction.text}</div>
          <div>
            {sign}${amount}
            <Badge
              bg="danger"
              style={{ border: "0.1px solid transparent", marginLeft: "1em" }}
            >
              <CloseButton
                aria-label="Hide"
                style={{ fontSize: "0.6rem" }}
                variant="dark"
                onClick={() => deleteTransaction(transaction.id)}
              />
            </Badge>
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
