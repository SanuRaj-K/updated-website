"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

type MicrosoftClarityProps = {
  projectId: string;
};

export function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  useEffect(() => {
    if (projectId && projectId !== "xxxx" && projectId !== "your_project_id")
      Clarity.init(projectId);
  }, [projectId]);

  return null;
}
