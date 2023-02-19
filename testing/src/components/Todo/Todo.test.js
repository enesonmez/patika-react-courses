import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Todo from "./index";

describe("Todo Tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("varsayılan 3 nesne render edilmeli", () => {
    const items = screen.getByTestId("list").getElementsByTagName("p");
    expect(items.length).toEqual(3);
  });

  test("input ve button render edilmeli", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("listeye eleman eklenmeli", () => {
    const name = "react";
    const items = screen.getByTestId("list").getElementsByTagName("p");
    act(() => {
      userEvent.type(input, name);
      userEvent.click(button);
    });
    expect(items.length).toEqual(4);
  });
});
