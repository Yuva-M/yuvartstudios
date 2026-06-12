import { useCallback, useRef, useState } from "react";

type Pair = {
  id: string;
  label: string;
  before: string;
  after: string;
  caption: string;
};

const PAIRS: Pair[] = [
  {
    id: "living-swing",
    label: "Obsidian Lounge",
    before: "/views/04718caa-0234-41bd-bd99-39ad799c35ae.jpg",
    after: "/views/hf_20260612_054107_4053e485-47e7-441a-ae72-06d06943f820.jpg",
    caption: "The Obsidian Lounge — Living Area",
  },
  {
    id: "peacock-lounge",
    label: "Peacock Room",
    before: "/views/9500b95c-1c3c-4f6c-9e09-a47de0525093.jpg",
    after: "/views/hf_20260430_115925_6cc0bc2d-2d43-4e5c-9d7a-c6363f2e580d.png",
    caption: "The Peacock Lounge — Television Area",
  },
  {
    id: "marble-lobby",
    label: "Marble Lobby",
    before: "/views/70d03355-d28c-4127-95dd-069a16282e99.jpg",
    after: "/views/hf_20260409_060056_73c287fc-f145-4bc8-ac5a-0f95921f8c49.jpg",
    caption: "The Marble Lobby — Atrium Entrance",
  }
];

export function BeforeAfterSlider() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      updateFromClientX(e.clientX);
    },
    [updateFromClientX],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    },
    [updateFromClientX],
  );

  const stopDrag = useCallback(() => {
    dragging.current = false;
  }, []);

  const pair = PAIRS[active];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {PAIRS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setActive(i);
              setPos(50);
            }}
            className="rounded px-4 py-2 font-sans text-sm transition-colors"
            style={
              i === active
                ? { backgroundColor: "#1A1A1A", color: "#F9F6F1" }
                : {
                    backgroundColor: "transparent",
                    color: "#1A1A1A",
                    border: "1px solid #D8D2C4",
                  }
            }
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className="relative w-full cursor-ew-resize touch-none select-none overflow-hidden"
        style={{ aspectRatio: "3 / 2", borderRadius: 6 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerLeave={stopDrag}
      >
        {/* After (cinematic) — full */}
        <img
          src={pair.after}
          alt={`${pair.caption} — cinematic render`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        {/* Before (sketch) — clipped to left of handle */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt={`${pair.caption} — SketchUp input`}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>
        {/* Divider + handle */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div
            className="mx-auto h-full"
            style={{ width: 2, backgroundColor: "#D97757" }}
          />
          <div
            className="absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
              transform: "translate(-50%, -50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#D97757",
              boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9F6F1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 6l-6 6 6 6" />
              <path d="M16 6l6 6-6 6" />
            </svg>
          </div>
        </div>
        {/* Corner labels */}
        <span
          className="absolute top-4 left-4 z-10 px-2.5 py-1 font-sans text-[11px] tracking-[0.14em]"
          style={{
            backgroundColor: "rgba(249,246,241,0.92)",
            color: "#1A1A1A",
            borderRadius: 3,
          }}
        >
          SKETCHUP INPUT
        </span>
        <span
          className="absolute top-4 right-4 z-10 px-2.5 py-1 font-sans text-[11px] tracking-[0.14em]"
          style={{
            backgroundColor: "rgba(26,26,26,0.78)",
            color: "#F9F6F1",
            borderRadius: 3,
          }}
        >
          CINEMATIC RENDER
        </span>
      </div>

      <p
        className="mt-4 text-center font-sans text-sm"
        style={{ color: "#6B6457" }}
      >
        {pair.caption} — drag the handle to compare
      </p>
    </div>
  );
}
