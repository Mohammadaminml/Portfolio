export function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="ambient-orb-one absolute -top-24 start-[-10%] h-96 w-96 rounded-full bg-(--accent)/10 blur-3xl will-change-transform" />
      <div className="ambient-orb-two absolute -bottom-24 end-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl will-change-transform" />
      <div className="background-grid absolute inset-0 opacity-40" />
    </div>
  );
}