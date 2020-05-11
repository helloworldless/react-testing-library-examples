import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Checkbox from "./Checkbox";

test("checkboxes must use click", () => {
  render(<Checkbox initiallyChecked />);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();
  expect(screen.getByTestId("message")).toHaveTextContent(/yes/i);

  userEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(screen.getByTestId("message")).toHaveTextContent(/no/i);
});
