/** Intitulé de bloc (petit titre mono avec filet horizontal). */
export function BlockTitle({
  variant,
  children,
}: {
  variant: "comp" | "etape" | "sorts" | "valid" | "anim" | "recomp";
  children: React.ReactNode;
}) {
  return (
    <p className={`blk-title blk-${variant}`}>
      <span>{children}</span>
    </p>
  );
}
