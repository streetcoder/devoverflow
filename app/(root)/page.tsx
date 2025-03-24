import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React? Can you help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvote: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What is Node.js used for?",
    description: "Can someone explain the use cases of Node.js?",
    tags: [
      { _id: "3", name: "Node.js" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "2", name: "Jane Smith" },
    upvote: 15,
    answers: 8,
    views: 150,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "Best practices for MongoDB?",
    description: "What are some best practices for using MongoDB efficiently?",
    tags: [
      { _id: "4", name: "MongoDB" },
      { _id: "5", name: "Database" },
    ],
    author: { _id: "3", name: "Alice Brown" },
    upvote: 20,
    answers: 12,
    views: 200,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [Key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button>
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      {/* HomeFilter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
