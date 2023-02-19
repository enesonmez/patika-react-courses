import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";

describe("Emoji Testleri", () => {
  let title, list, input, emoji;
  beforeAll(() => {
    render(<App />);
    title = screen.getByText("Emoji Search");
    list = screen.getByTestId("list").getElementsByTagName("div");
    input = screen.getByTestId("input").getElementsByTagName("input")[0];
    emoji = screen.getByText("100");
  });

  beforeEach(() => {
    render(<App />);
  });

  test("başlık kısmı render edilmeli", () => {
    expect(title).toBeInTheDocument();
  });

  test("emoji listesi render edilmeli", () => {
    expect(list.length).toEqual(20);
  });

  test("filtreleme işlemi yapılabilmeli", () => {
    const filter = "100";
    userEvent.type(input, filter);
    expect(screen.getByText(filter)).toBeInTheDocument();
  });

  test("emojiye tıklanınca kopyalanmalı", () => {
    userEvent.click(emoji);
    expect(emoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "💯"
    );
  });
});
