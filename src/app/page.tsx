"use client";

import { DiceFace } from "@/components/Dice";
import { Slider } from "@/components/Slider";
import { ServerRuntime } from "next";
import { Fragment, useState } from "react";

import _data from "./../data.json";
import { DiceSelector } from "@/components/DiceSelector";

const data = _data as Record<string, number>;

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 10;

const getWinClassColor = (winProb: number) => {
  if (winProb < 0.45) {
    return "text-red-500";
  } else if (winProb > 0.55) {
    return "text-green-500";
  } else {
    return "text-orange-500";
  }
};

export const runtime: ServerRuntime = "edge";

export default function Home() {
  const [hand, setHand] = useState([
    DiceFace.BLACK,
    DiceFace.BLACK,
    DiceFace.BLACK,
    DiceFace.BLACK,
    DiceFace.KING,
  ]);
  const [players, setPlayers] = useState(5);

  const dataKey = `${[...hand].sort().join("-")}/${players}`;
  const dataValue = data[dataKey] ?? 0;

  const winPercentage = (dataValue * 100).toFixed(2);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 font-mono">
      <h1 className="text-center text-5xl font-bold md:text-7xl">Guarda la K</h1>
      <div className="z-10 mb-8 flex h-16 w-full max-w-5xl items-center justify-between text-sm sm:h-20 md:h-28">
        <div className="flex w-full flex-col">
          <label className="my-3 text-xl md:my-2">
            <span className="font-bold ">Jugadores: </span>
            {players}
          </label>
          <Slider
            defaultValue={[5]}
            step={1}
            max={MAX_PLAYERS}
            min={MIN_PLAYERS}
            onValueChange={(nums) => {
              const num = nums[0];
              if (num !== undefined && num >= MIN_PLAYERS && num <= MAX_PLAYERS) {
                setPlayers(num);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        {hand.map((face, i) => {
          return (
            <Fragment key={i}>
              <DiceSelector
                value={face}
                onChange={(face) => {
                  setHand((prev) => {
                    const result = [...prev];
                    result[i] = face;
                    return result;
                  });
                }}
              />
              {i !== hand.length - 1 && <div className="h-[1px] w-5/6 bg-slate-500" />}
            </Fragment>
          );
        })}
      </div>
      <div className="relative">
        <h2
          className={`mt-8 w-full text-center text-7xl md:text-8xl ${getWinClassColor(dataValue)}`}
          title={String(dataValue)}
        >
          {winPercentage}%
        </h2>
        <div className="flex w-full items-center justify-center p-4">
          <p className="rounded-full bg-slate-200 px-4 text-center">{dataValue}</p>
        </div>
      </div>
    </main>
  );
}
