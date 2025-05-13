import { PaginatedSearchParams } from "./global";

interface SignInWithOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    image: string;
    username: string;
  };
}

interface AuthCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface createQuestionParams {
  title: string;
  content: string;
  tags: string[];
}

interface editQuestionParams extends createQuestionParams {
  questionId: string;
}

interface GetQuestionParams {
  questionId: string;
}

interface GetQuestionsParams extends Omit<PaginatedSearchParams, "filter"> {
  tagId: string;
}
