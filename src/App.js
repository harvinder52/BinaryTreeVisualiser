import React, { useState } from "react";

import BinaryTreeDisplay from "./BinaryTreeDisplay";
import "./styles.css";

export default function App() {
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  const handleNodeClick = (nodeIndex) => {
    const nodes = [];
    let index = nodeIndex;

    // add all nodes from the clicked node up to the root
    while (index >= 0) {
      nodes.push(index);
      index = Math.floor((index - 1) / 2);
    }

    setHighlightedNodes(nodes);
  };

  return (
    <div className="App">
      <BinaryTreeDisplay
        
        onNodeClick={handleNodeClick}
        highlightedNodes={highlightedNodes}
      />
    </div>
  );
}
