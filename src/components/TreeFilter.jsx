import React from "react";
import { TextField } from "@mui/material";
import { uniq } from "lodash";
import MyTreeView from "./MyTreeView";
import { filterTree, expandFilteredNodes, getIDsExpandFilter } from "../util/filterTreeUtil";
import userData from "../data";

const loremIpsum = (data, payload) => {
  if(data.children) (loremIpsum(data.children))
  return data;
}

function reducer(state, action) {
  switch (action.type) {
    case "DELETE": 
      console.log(action.payload.path.split('/'));
      console.log(`Should return store without ${action.payload.nodeName} id:${action.payload.id}, Path to object: ${action.payload.path}`, action)
      return loremIpsum(state, action.payload);
    default :
      console.log("Wrong action type")
  }
}

const TreeFilter = (props) => {
  const { isAdmin } = props;
  const [expanded, setExpanded] = React.useState(["root"]);
  const [selected, setSelected] = React.useState([]);
  const [subjectData, setSubjectData] = React.useState();
  const [selectedSingleItem, setSelectedSingleItem] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, userData);

  React.useEffect(() => {
    setSubjectData(() => state);
  }, [state]);

  const onFilterMouseUp = (e) => {
    const value = e.target.value;
    const filter = value.trim();
    let expandedTemp = expanded;
    if (!filter) {
      setSubjectData(() => state);
      setExpanded(['root']);
      return;
    }

    let filtered = filterTree(state, filter);
    filtered = expandFilteredNodes(filtered, filter);
    if (filtered && filtered.children) {
      expandedTemp = [];
      expandedTemp.push(...getIDsExpandFilter(filtered));
    }
    setExpanded(uniq(expandedTemp));
    setSubjectData(filtered);
  };

  const handleToggle = (event, nodeIds) => {
    let expandedTemp = expanded;
    expandedTemp = nodeIds;
    setExpanded(expandedTemp);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    // When false (default) is a string this takes single string.
    if (!Array.isArray(nodeIds)) {
      setSelectedSingleItem(nodeIds);
    }
    // TODO: When `multiSelect` is true this takes an array of strings
  };

  return (
    <div>
      <TextField label="Fruit or Vagetable name" onKeyUp={onFilterMouseUp} />
      <MyTreeView
        data={subjectData}
        isAdmin={isAdmin}
        onDelete={(id, path, nodeName) => {dispatch({ type: 'DELETE', payload: {id, path, nodeName}})}}
        expanded={expanded}
        selected={selected}
        handleToggle={handleToggle}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default TreeFilter;