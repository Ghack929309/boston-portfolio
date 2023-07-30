import React from "react";

type ToggleProps = {
  mode: boolean;
  label: {
    on: string;
    off: string;
  };
  toggleMode: () => void;
  className?: string;
};

export default function Toggle({
  mode,
  toggleMode,
  label,
  className = "absolute right-0 top-0",
}: ToggleProps) {
  return (
    <div className={className}>
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          defaultChecked={mode}
          onChange={toggleMode}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {mode ? label.on : label.off}
        </span>
      </label>
    </div>
  );
}
