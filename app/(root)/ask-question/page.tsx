import React from "react";

import QuestionsForm from "@/components/forms/QuestionsForm";

const AskAQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>

      <div className="mt-9">
        <QuestionsForm />
      </div>
    </>
  );
};

export default AskAQuestion;
