"use client";

import clsx from "clsx";
import { FC } from "react";
import { Ace } from "./shapes/Ace";
import { Black } from "./shapes/Black";
import { Letter } from "./shapes/Letter";
import { Red } from "./shapes/Red";

export enum DiceFace {
  BLACK = 0,
  RED = 1,
  JACK = 2,
  QUEEN = 3,
  KING = 4,
  ACE = 5,
}

const getShape = (face: DiceFace) => {
  switch (face) {
    case DiceFace.BLACK:
      return <Black />;
    case DiceFace.RED:
      return <Red />;
    case DiceFace.JACK:
      return <Letter letter="J" />;
    case DiceFace.QUEEN:
      return <Letter letter="Q" />;
    case DiceFace.KING:
      return <Letter letter="K" />;
    case DiceFace.ACE:
      return <Ace />;
  }
};

type Props = {
  face: DiceFace;
  selected: boolean;
  onClick: () => void;
};

export const Dice: FC<Props> = ({ face, selected, onClick }) => {
  return (
    <div
      className={clsx("h-12 w-12 rounded-md border bg-white p-1.5", {
        "cursor-pointer border-slate-500 opacity-30": !selected,
        "scale-110 border-black": selected,
      })}
      onClick={onClick}
    >
      {getShape(face)}
    </div>
  );
};
