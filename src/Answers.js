import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

function Answers({ data }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((qstn) => (
        <ListItem key={qstn.questionid}>
          <ListItemText
            primary={`${qstn.questionid}. ${qstn.question}`}
            secondary={`Answer: ${qstn.answer}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default Answers;
