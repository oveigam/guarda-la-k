"use client";

import { FC } from "react";
import { Dice, DiceFace } from "./Dice";

type Props = {
  value: DiceFace;
  onChange: (face: DiceFace) => void;
};

export const DiceSelector: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex w-full justify-center gap-4">
      <Dice
        face={DiceFace.BLACK}
        selected={value === DiceFace.BLACK}
        onClick={() => onChange(DiceFace.BLACK)}
      />
      <Dice
        face={DiceFace.RED}
        selected={value === DiceFace.RED}
        onClick={() => onChange(DiceFace.RED)}
      />
      <Dice
        face={DiceFace.JACK}
        selected={value === DiceFace.JACK}
        onClick={() => onChange(DiceFace.JACK)}
      />
      <Dice
        face={DiceFace.QUEEN}
        selected={value === DiceFace.QUEEN}
        onClick={() => onChange(DiceFace.QUEEN)}
      />
      <Dice
        face={DiceFace.KING}
        selected={value === DiceFace.KING}
        onClick={() => onChange(DiceFace.KING)}
      />
      <Dice
        face={DiceFace.ACE}
        selected={value === DiceFace.ACE}
        onClick={() => onChange(DiceFace.ACE)}
      />
    </div>
  );
};
