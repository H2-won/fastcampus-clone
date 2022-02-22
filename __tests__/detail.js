/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Detail from "../pages/detail";

describe("Home", () => {
  it("강의 목록이 렌더링 되어야 한다", () => {
    const { getByRole } = render(<Detail />);

    const lectureGroup = getByRole("lectureGroup");
    expect(lectureGroup).toBeInTheDocument();
  });
});
