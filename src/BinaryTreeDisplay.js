import React, { useState } from "react";
import TreeNode from "./TreeNode";

function BinaryTreeDisplay() {
  const [inputArray, setInputArray] = useState([]);
  const [clickedNode, setClickedNode] = useState(null);

  const handleInput = (event) => {
    const inputString = event.target.value;
    const inputArray = inputString
      .split(",")
      .map((node) => parseInt(node.trim()));
    setInputArray(inputArray);
    console.log("input array", inputArray);
    setClickedNode(null);
  };

  const handleNodeClick = (nodeValue) => {
    const path = findPathToRoot(inputArray, nodeValue);
    setClickedNode({ value: nodeValue, path });
  };

  const findPathToRoot = (array, nodeValue) => {
    const path = [];
    let currentIndex = array.indexOf(nodeValue);
    while (currentIndex >= 0) {
      path.unshift(currentIndex);
      const isLeftChild = currentIndex % 2 !== 0;
      const parentIndex = isLeftChild
        ? Math.floor(currentIndex / 2)
        : Math.floor((currentIndex - 1) / 2);
      currentIndex = parentIndex;
    }
    return path;
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Enter binary tree as input array"
      />
      {inputArray.length > 0 && (
        <svg height="1000px" width="100%">
          {inputArray.map((node, index) => {
            const level = Math.floor(Math.log2(index + 1));
            const levelWidth = 800 / Math.pow(2, level + 1);
            const x =
              levelWidth * (index + 1 - Math.pow(2, level)) + levelWidth / 2;
            const y = level * 80 + 40;
            const isClicked = clickedNode && clickedNode.value === node;
            const pathToRoot = clickedNode && clickedNode.path.includes(index);
            const fillColor = pathToRoot ? "red" : "white";

            // Calculate coordinates of parent node

            const parentIndex = Math.floor((index - 1) / 2);
            const parentLevel = level - 1;
            const parentLevelWidth = 800 / Math.pow(2, parentLevel + 1);
            const parentX =
              parentLevelWidth * (parentIndex + 1 - Math.pow(2, parentLevel)) +
              parentLevelWidth / 2;
            const parentY = parentLevel * 80 + 40;

            // Determine whether to draw line to parent node
            const drawLineToParent = pathToRoot && index > 0;

            return (
              <g key={index}>
                {drawLineToParent && (
                  <line
                    x1={x}
                    y1={y}
                    x2={parentX}
                    y2={parentY}
                    stroke="red"
                    strokeWidth="2"
                  />
                )}
                <TreeNode
                  data={node}
                  onClick={handleNodeClick}
                  x={x}
                  y={y}
                  x2={parentX}
                  y2={parentY}
                  fillColor={fillColor}
                  isClicked={isClicked}
                />
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}

export default BinaryTreeDisplay;
