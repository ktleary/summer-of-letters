import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WordContainer from "../components/word-container";
import Controls from "../components/controls";

import Tabs from "../components/tabs";
import { VIEWS } from "../constants";

describe("test wordContainer", () => {
  it("renders WordContainer", () => {
    render(<WordContainer />);
  });
  it("finds the sort button", () => {
    const { getByTestId } = render(<WordContainer />);
    const sortButton = getByTestId("button-sort");
    expect(sortButton).toBeInTheDocument();
  });
});

describe("test sort", () => {
  it("should sort the wordlist", async () => {
    const wordlist = "peach, apple, pear";
    const { getByTestId, getByText } = render(<WordContainer />);

    const textarea = getByTestId("enter-textarea");
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: wordlist } });
    const textareaText = screen.getByText(/peach/);
    expect(textareaText).toBeInTheDocument();
    const sortButton = getByText("Sort");
    fireEvent.click(sortButton);
    const updatedText = screen.getByText(/PEACH/);
    expect(updatedText).toBeInTheDocument();
  });
});

describe("Tabs", () => {
  it("switches to the tab when user clicks it", () => {
    const { getByTestId, getByText } = render(<WordContainer />);
    const viewResultsTab = getByText(VIEWS.VIEW);
    expect(viewResultsTab).toBeInTheDocument();
    fireEvent.click(viewResultsTab);
    const tabView = getByTestId("tab-view");
    expect(tabView).toBeInTheDocument();
  });
});

describe("test controls", () => {
  it("should show the sort button clicked", () => {
    const sortWordList = jest.fn();
    const processEntry = jest.fn();
    const { getByText } = render(
      <Controls sortWords={sortWordList} handleSubmit={processEntry} />
    );
    const sortButton = getByText("Sort");
    fireEvent.click(sortButton);
    expect(sortWordList).toHaveBeenCalled();
  });
});



afterEach(cleanup);
