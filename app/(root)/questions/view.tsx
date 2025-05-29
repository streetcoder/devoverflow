"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { incrementViews } from "@/lib/actions/question.action";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementViews({ questionId });

    if (result.success) {
      toast.success("Views incremented");
    } else {
      toast.error("destructive");
    }
  };

  useEffect(() => {
    handleIncrement();
  }, []);

  return null;
};

export default View;
