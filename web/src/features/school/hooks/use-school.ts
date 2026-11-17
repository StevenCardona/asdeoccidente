"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchSchoolContent,
  type SchoolContent,
} from "@/features/school/models";

export const schoolQueryKey = ["school", "content"] as const;

export function useSchoolContent(initialData?: SchoolContent) {
  return useQuery({
    queryKey: schoolQueryKey,
    queryFn: fetchSchoolContent,
    initialData,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
