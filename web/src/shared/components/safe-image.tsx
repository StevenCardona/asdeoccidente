"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  wrapperClassName?: string;
  fallbackClassName?: string;
};

export function SafeImage({
  wrapperClassName,
  fallbackClassName,
  className,
  alt,
  src,
  priority,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", wrapperClassName)}>
      {failed || !src ? (
        <div
          className={cn("absolute inset-0 bg-muted", fallbackClassName)}
          aria-hidden
        />
      ) : (
        <Image
          {...props}
          src={src}
          alt={alt}
          className={cn("object-cover", className)}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
