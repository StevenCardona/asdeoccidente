"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchHomeContent,
  type HomeContent,
} from "@/features/home/models/home";

export const homeQueryKey = ["home", "content"] as const;

export function useHomeContent(initialData?: HomeContent) {
  return useQuery({
    queryKey: homeQueryKey,
    queryFn: fetchHomeContent,
    initialData,
    staleTime: 60_000,
  });
}
