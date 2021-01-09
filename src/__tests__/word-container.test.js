import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import letterSummerCore from "../lib/letter-summer-core";
import WordContainer from "../components/word-container";
import TabEnter from "../components/tab-enter";
import TabView from "../components/tab-view";
import TabQuick from "../components/tab-quick";
import Controls from "../components/controls";
import SearchBox from "../components/search-box";

const wordlist = "Hope, justice, challenge, angle";

describe("test wordContainer", () => {
  it("finds the sort button", () => {
    const { getByTestId } = render(<WordContainer />);
    const sortButton = getByTestId("button-sort");
    expect(sortButton).toBeInTheDocument();
  });

  it("renders WordContainer", () => {
    render(<WordContainer />);
  });
});

describe("test TabEnter", () => {
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
});

describe("test TabView", () => {
  it("renders TabView", () => {
    const { getByTestId } = render(<TabView wordlist={wordlist} />);
    const tabViewContainer = getByTestId("tab-view");
    expect(tabViewContainer).toBeInTheDocument();
  });
});

describe("test TabQuick", () => {
  const handleQuickQuery = jest.fn();
  const quickQuery = "hope";
  const resultData = letterSummerCore(quickQuery);

  it("renders TabQuick", () => {
    const { getByTestId } = render(
      <TabQuick
        handleChange={handleQuickQuery}
        resultData={resultData}
        query={quickQuery}
      />
    );
    const tabViewContainer = getByTestId("tab-quick");
    expect(tabViewContainer).toBeInTheDocument();
  });

  it("receives the user query", () => {
    const inputtedvalue = "h0pe";
    const handleQuickQuery = (e) => {
      const { value } = e.target;
      expect(value).toBe("h0pe");
    };
    const { getByTestId } = render(
      <TabQuick
        handleChange={handleQuickQuery}
        resultData={resultData}
        query={quickQuery}
      />
    );
    const quickInput = getByTestId("quick-input");
    fireEvent.change(quickInput, { target: { value: inputtedvalue } });
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

describe("test search box", () => {
  it("should fire setQuery", () => {
    const setQuery = jest.fn();
    const { getByTestId } = render(<SearchBox setQuery={setQuery} />);
    const searchbox = getByTestId("search-box");
    expect(searchbox).toBeInTheDocument();
  });
});

afterEach(cleanup);
