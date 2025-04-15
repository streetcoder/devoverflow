import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";
import QuestionsForm from "@/components/forms/QuestionsForm";

const AskAQuestion = async () => {
  const session = await auth();

  if (!session) return redirect("/sign-in");
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
