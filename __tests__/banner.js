/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Banner from "../components/Banner";

describe("Home", () => {
  it("배너가 렌더링 되어야 한다", () => {
    const { getByText } = render(<Banner />);

    const banner = getByText("배너");
    expect(banner).toBeInTheDocument();
  });
});
