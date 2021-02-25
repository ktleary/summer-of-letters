import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import letterSummerCore from "../lib/letter-summer-core";
import SearchBox from "../components/search-box";
import TabEnter from "../components/tab-enter";
import TabQuick from "../components/tab-quick";
import TabView from "../components/tab-view";

describe("test TabView", () => {
  const wordlist = "Hope, justice, challenge, angle";

  it("shows renders TabView with a wordlist", () => {
    render(<TabView wordlist={wordlist} />);
    const resultRow = screen.getByText(/HOPE/i);

    expect(resultRow).toBeInTheDocument();
  });

  it("should fire handleChange", () => {
    const handleQuery = (e) => {
      const { value } = e.target;
      expect(value).toEqual("change");
    };

    const { getByPlaceholderText } = render(
      <SearchBox handleChange={handleQuery} />
    );
    const searchbox = getByPlaceholderText("Search");
    expect(searchbox).toBeInTheDocument();
    fireEvent.change(searchbox, { value: "change" });
  });
});

describe("test TabEnter", () => {
  const wordlist = "Hope, justice, challenge, angle";
  it("renders TabEnter with a word list", () => {
    const setWordList = jest.fn();
    const { getByTestId } = render(
      <TabEnter words={wordlist} setWordList={setWordList} />
    );
    const textarea = getByTestId("enter-textarea");

    expect(textarea).toBeInTheDocument();
  });

  it("handles changes to the textarea", () => {
    const inputtedvalue = "h0pe";
    const setWordList = jest.fn();
    const { getByTestId } = render(
      <TabEnter words={""} setWordList={setWordList} />
    );

    const textarea = getByTestId("enter-textarea");
    fireEvent.change(textarea, { target: { value: inputtedvalue } });
  });
});

describe("test TabQuick", () => {
  const setQuickQuery = jest.fn();
  const quickQuery = "hope";
  const resultData = letterSummerCore(quickQuery);

  it("renders TabQuick", () => {
    const { getByTestId } = render(
      <TabQuick
        setQuickQuery={setQuickQuery}
        resultData={resultData}
        query={quickQuery}
      />
    );
    const tabViewContainer = getByTestId("tab-quick");
    expect(tabViewContainer).toBeInTheDocument();
  });

  it("receives the user query", () => {
    const inputtedvalue = "h0pe";
    const setQuickQuery = jest.fn();
    const { getByTestId } = render(
      <TabQuick
        setQuickQuery={setQuickQuery}
        resultData={resultData}
        query={quickQuery}
      />
    );
    const quickInput = getByTestId("input");
    fireEvent.change(quickInput, { target: { value: inputtedvalue } });
  });
});

afterEach(cleanup);
