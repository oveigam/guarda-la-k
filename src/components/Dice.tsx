"use client";

import Image from "next/image";
import { FC } from "react";

import black from "./../assets/black.png";
import red from "./../assets/red.png";
import jack from "./../assets/j.png";
import queen from "./../assets/q.png";
import king from "./../assets/k.png";
import ace from "./../assets/ace.png";

export enum DiceFace {
  BLACK = 0,
  RED = 1,
  JACK = 2,
  QUEEN = 3,
  KING = 4,
  ACE = 5,
}

const getImage = (face: DiceFace) => {
  switch (face) {
    case DiceFace.BLACK:
      return black;
    case DiceFace.RED:
      return red;
    case DiceFace.JACK:
      return jack;
    case DiceFace.QUEEN:
      return queen;
    case DiceFace.KING:
      return king;
    case DiceFace.ACE:
      return ace;
  }
};

type Props = {
  face: DiceFace;
  onChange: (face: DiceFace) => void;
};

export const Dice: FC<Props> = ({ face, onChange }) => {
  return (
    <div className="relative aspect-square h-full">
      <Image
        src={getImage(face)}
        alt="dice image"
        fill
        onClick={() => {
          switch (face) {
            case DiceFace.BLACK:
              onChange(DiceFace.RED);
              break;
            case DiceFace.RED:
              onChange(DiceFace.JACK);
              break;
            case DiceFace.JACK:
              onChange(DiceFace.QUEEN);
              break;
            case DiceFace.QUEEN:
              onChange(DiceFace.KING);
              break;
            case DiceFace.KING:
              onChange(DiceFace.ACE);
              break;
            case DiceFace.ACE:
              onChange(DiceFace.BLACK);
              break;
          }
        }}
      />
    </div>
  );
};
