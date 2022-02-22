/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("fastcampus라는 텍스트를 가지고 있어야 한다", () => {
    const { getByText } = render(<Home />);

    const detail = getByText("배너");

    expect(detail).toBeInTheDocument();
  });
});
