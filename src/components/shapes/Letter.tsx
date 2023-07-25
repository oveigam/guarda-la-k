import clsx from "clsx";
import { FC } from "react";

type Props = {
  letter: "J" | "Q" | "K";
};

export const Letter: FC<Props> = ({ letter }) => {
  return (
    <div
      className={clsx(
        "flex h-full w-full items-center justify-center align-middle text-4xl font-bold",
        {
          "text-red-500": letter === "K",
        },
      )}
    >
      {letter}
    </div>
  );
};
