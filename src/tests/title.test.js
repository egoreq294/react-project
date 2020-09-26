import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Title from "../components/Title";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without a title text", () => {
  act(() => {
    render(<Title />, container);
  });
  expect(container.textContent).toBe("");
});
it("renders with title text", () => {
  act(() => {
    render(<Title text="Hello" />, container);
  });
  expect(container.textContent).toBe("Hello");
});
