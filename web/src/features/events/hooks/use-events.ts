"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchEventBySlug,
  fetchEventsContent,
  type Event,
  type EventsContent,
} from "@/features/events/models";

export const eventsQueryKey = ["events", "content"] as const;

export function eventQueryKey(slug: string) {
  return ["events", "event", slug] as const;
}

export function useEventsContent(initialData?: EventsContent) {
  return useQuery({
    queryKey: eventsQueryKey,
    queryFn: fetchEventsContent,
    initialData,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useEvent(slug: string, initialData?: Event | null) {
  return useQuery({
    queryKey: eventQueryKey(slug),
    queryFn: () => fetchEventBySlug(slug),
    initialData: initialData ?? undefined,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: Boolean(slug.trim()),
  });
}
