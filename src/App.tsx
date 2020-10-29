import React from "react";
import { GlobalStyle } from "./App.styles";
import { Header } from "./components/Header";
import { QuestionSection } from "./components/QuestionSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <QuestionSection />
    </>
  );
}

export default App;
