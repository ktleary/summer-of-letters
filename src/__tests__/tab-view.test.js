import { cleanup, render, screen } from "@testing-library/react";
import TabView from "../components/tab-view";

const wordlist = "Hope, justice, challenge, angle";

it("shows renders TabView with a wordlist", () => {
  render(<TabView wordlist={wordlist} />);
  const resultRow = screen.getByText(/HOPE/i);
  expect(resultRow).toBeInTheDocument();
});

afterEach(cleanup);
