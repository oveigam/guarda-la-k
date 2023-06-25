"use client";

import { Dice, DiceFace } from "@/components/Dice";
import { Slider } from "@/components/Slider";
import { ServerRuntime } from "next";
import { useState } from "react";

import _data from "./../data.json";

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
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-4 font-mono md:p-24 ">
      <h1 className="mb-8 text-center text-5xl font-bold md:text-7xl">Guarda la K</h1>
      <div className="z-10 flex h-16 w-full max-w-5xl items-center justify-between text-sm sm:h-20 md:h-28">
        <div className="flex w-full flex-col">
          <label className="my-2 text-xl">
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
      <div className="z-10 flex h-16 w-full max-w-5xl items-center justify-between text-sm sm:h-20 md:h-28">
        {hand.map((face, i) => {
          return (
            <Dice
              key={i}
              face={face}
              onChange={(face) => {
                setHand((prev) => {
                  const result = [...prev];
                  result[i] = face;
                  return result;
                });
              }}
            />
          );
        })}
      </div>
      <h2
        className={`mt-24 w-full text-center text-7xl md:text-8xl ${getWinClassColor(dataValue)}`}
        title={String(dataValue)}
      >
        {winPercentage}%
      </h2>
    </main>
  );
}
