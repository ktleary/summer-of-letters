import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WordContainer from "../components/word-container";
import TabEnter from "../components/tab-enter";

const wordlist = "Hope, justice, challenge, angle";

it("renders WordContainer", () => {
  render(<WordContainer />);
});

it("renders TabEnter with a word list", () => {
  const handleTextArea = jest.fn();
  const { getByTestId } = render(
    <TabEnter words={wordlist} onchange={handleTextArea} />
  );
  const textarea = getByTestId("enter-textarea");
  expect(textarea).toBeInTheDocument();
});

it("handles changes to the textarea", () => {
  const inputtedvalue = "h0pe";
  const handleTextArea = (e) => {
    const { value } = e.target;
    expect(value).toBe("h0pe");
  };
  const { getByTestId } = render(
    <TabEnter words={""} onchange={handleTextArea} />
  );
  const textarea = getByTestId("enter-textarea");
  fireEvent.change(textarea, { target: { value: inputtedvalue } });
});

afterEach(cleanup);
