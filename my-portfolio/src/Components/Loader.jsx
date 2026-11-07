const Loader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="loader" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Chargement
        </span>
      </div>
    </div>
  );
};

export default Loader;
