import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, spending, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const updatedBudget = event.target.value;

    if (parseInt(updatedBudget) >= spending) {
      setNewBudget(updatedBudget);
    } else {
      alert("You cannot reduce the budget value lower than the spending");
    }
  };

  return (
    <div className="budget">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
