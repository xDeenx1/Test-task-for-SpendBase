import React from "react";
import {TreeView}  from "@mui/x-tree-view/TreeView";
import { TreeItem  } from '@mui/x-tree-view/TreeItem';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MyTreeView = (props) => {
  const { data, expanded, selected, handleToggle, handleSelect, isAdmin, onDelete } = props;

  const deleteHandler = (e, id, path, nodeName) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(id, path, nodeName);
  }
  const renderTree = ({nodes, path}) => {
    if (!nodes || nodes.length === 0) {
      return null;
    }
  const isDirectory = Array.isArray(nodes.children);

    return (
        <TreeItem  key={nodes.id} nodeId={nodes.id} label={
                  <ListItem as= 'div'
                  secondaryAction={
                    <IconButton onClick={(e) => deleteHandler(e, nodes.id, path, nodes.name)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      {isDirectory ? <FolderIcon /> : <InsertDriveFileIcon/>}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={nodes.name}
                  />
          </ListItem>} disabled={nodes.disabled && !isAdmin}>
        {isDirectory
          ? nodes.children.map((node) => renderTree({nodes: node, path: `${path}${nodes.name}/`}))
          : null}
      </TreeItem>



    );
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {renderTree({nodes: data, path: ''})}
    </TreeView>
  );
};

export default MyTreeView;
