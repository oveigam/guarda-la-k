import { Dot } from "./Dot";

export const Red = () => {
  return (
    <div className="flex h-full w-full items-center gap-1">
      <div className="grid h-full flex-1 grid-rows-3 gap-1">
        <Dot color="red" />
        <Dot color="red" />
        <Dot color="red" />
      </div>
      <div className="grid h-[63.5%] flex-1 grid-rows-2 gap-1">
        <Dot color="red" />
        <Dot color="red" />
      </div>
      <div className="grid h-full flex-1 grid-rows-3 gap-1">
        <Dot color="red" />
        <Dot color="red" />
        <Dot color="red" />
      </div>
    </div>
  );
};
