function TreeNode({ data, onClick, x, y, fillColor, isClicked, isPath }) {
  return (
    <g onClick={() => onClick(data)}>
      {isPath && (
        <line x1={x} y1={y} x2={x} y2={y} stroke="black" strokeWidth="1" />
      )}
      <circle
        cx={x}
        cy={y}
        r="20"
        fill={isClicked ? "#46aac0" : fillColor}
        stroke="black"
        strokeWidth="1"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        alignmentBaseline="central"
        fill="black"
      >
        {data}
      </text>
    </g>
  );
}

export default TreeNode;
