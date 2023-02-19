import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("her testten önce bir kere çalışır.")
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(()=>{
    console.log("tüm testlerden önce bir kere çalışır.")
  })

  afterAll(()=>{
    console.log("en son bir kere çalışır.")
  })

  afterEach(()=>{
    console.log("her testten sonra bir kere çalışır.")
  })

  test("increase btn", () => {
    act(() => {
      userEvent.click(increaseBtn);
    });
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    act(() => {
      userEvent.click(decreaseBtn);
    });
    expect(count).toHaveTextContent("-1");
  });
});
