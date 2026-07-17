function SideBorders() {
  return (
    <>
      {/* RIGHT BORDER */}
      <div className="md:5.5 absolute top-0 right-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60"></div>

      {/* LEFT BORDER */}
      <div className="md:5.5 absolute top-0 left-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60"></div>
    </>
  );
}

export default SideBorders;
