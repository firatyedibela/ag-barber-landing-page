type StatusIndicatorProps = {
  color: string;
  shadow: string;
  text: string;
};

export const StatusIndicator = ({
  color,
  shadow,
  text,
}: StatusIndicatorProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color, boxShadow: shadow }}
      ></div>
      <span style={{ color }}>{text}</span>
    </div>
  );
};
