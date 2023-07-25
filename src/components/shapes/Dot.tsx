import clsx from "clsx";
import { FC } from "react";

export const Dot: FC<{ color: "black" | "red" }> = ({ color }) => {
  return (
    <div
      className={clsx("aspect-square h-full w-full rounded-full", {
        "bg-black": color === "black",
        "bg-red-500": color === "red",
      })}
    />
  );
};
