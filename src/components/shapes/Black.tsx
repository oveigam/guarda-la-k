import { Dot } from "./Dot";

export const Black = () => {
  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1">
      <Dot color="black" />
      <div />
      <Dot color="black" />
      <Dot color="black" />
      <Dot color="black" />
      <Dot color="black" />
      <Dot color="black" />
      <div />
      <Dot color="black" />
    </div>
  );
};
