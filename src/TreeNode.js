function TreeNode({ data, onClick, x, y, fillColor, isClicked, isPath }) {
  return (
    <g onClick={() => onClick(data)}>
      {isPath && (
        <line
          x1={x}
          y1={y - 20}
          x2={x}
          y2={y - 40}
          stroke="black"
          strokeWidth="1"
        />
      )}
      <circle
        cx={x}
        cy={y}
        r="20"
        fill={isClicked ? "red" : fillColor}
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
