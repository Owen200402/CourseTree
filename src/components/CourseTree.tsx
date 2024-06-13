import { Card, CardContent, Typography } from "@mui/material";
import Tree from "react-d3-tree";

interface Props {
  nodeDatum: any;
  onNodeClick: (nodeDatum: any) => void;
}

interface Selection {
  onNodeSelect: (nodeDatum: any) => void;
}

const treeData = [
  {
    name: "APSC 160",
    description: "Introduction to Engineering Computation",
    children: [
      {
        name: "CPEN 221",
        description: "Software Construction I",
        children: [
          {
            name: "CPEN 212",
            description: "Computing Systems II",
            children: [
              {
                name: "CPEN 311",
                description: "Digital Systems Design",
              },
              {
                name: "CPEN 321",
                description: "Introduction to Software Engineering",
                children: [
                  {
                    name: "CPEN 421",
                    description: "Software Project Management",
                  },
                  {
                    name: "CPEN 422",
                    description: "Software Testing and Analysis",
                  },
                  {
                    name: "CPEN 423",
                    description: "Software Architecture",
                  },
                ],
              },
              {
                name: "CPEN 391",
                description: "Computer Engineering Design Studio II",
              },
            ],
          },
          {
            name: "CPEN 231",
            description: "Computer Architecture",
            children: [
              {
                name: "CPEN 331",
                description: "Operating Systems",
              },
              {
                name: "CPEN 333",
                description: "System Software Engineering",
              },
              {
                name: "CPEN 412",
                description: "Microcomputer Systems Design",
              },
            ],
          },
          {
            name: "CPEN 223",
            description: "Software Design for Engineers",
          },
        ],
      },
      {
        name: "ELEC 201",
        description: "Circuit Analysis I",
        children: [
          {
            name: "ELEC 202",
            description: "Circuit Analysis II",
            children: [
              {
                name: "ELEC 301",
                description: "Electronic Circuits",
              },
              {
                name: "ELEC 311",
                description: "Electromagnetic Fields and Waves",
              },
              {
                name: "ELEC 341",
                description: "Systems and Control",
              },
            ],
          },
          {
            name: "ELEC 221",
            description: "Signals and Systems",
            children: [
              {
                name: "ELEC 321",
                description: "Stochastic Signals and Systems",
              },
              {
                name: "ELEC 331",
                description: "Computer Communications",
              },
              {
                name: "ELEC 371",
                description: "Biomedical Engineering Instrumentation",
              },
            ],
          },
        ],
      },
    ],
  },
];


const renderCustomNodeElement = ({ nodeDatum, onNodeClick }: Props) => (
  <foreignObject x="-50" y="-50" width="150" height="150">
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        style={{ borderRadius: "2rem", textAlign: "center" }}
        sx={{
          transition: 'color 0.3s',
          ":hover": {
            color: "#A6192E"
          },
        }}
        onClick={() => onNodeClick(nodeDatum)}
      >
        <CardContent>
          <Typography variant="h5">{nodeDatum.name}</Typography>
          <Typography variant="body1">{nodeDatum.description}</Typography>
        </CardContent>
      </Card>
    </div>
  </foreignObject>
);

const CourseTree = ({ onNodeSelect }: Selection) => {
  return (
    <div style={{ width: "80vw", height: "60rem"}}>
      <Typography variant="h5" sx={{textAlign: "center", marginTop: "1rem", display: "flex", flexDirection: "column", color: "white"}}>Interactive Course Tree</Typography>
      <Tree
        data={treeData}
        renderCustomNodeElement={(node) => renderCustomNodeElement({ ...node, onNodeClick: onNodeSelect })}
        pathFunc="elbow"
        zoom={0.48}
        translate={{ x: 200, y: 470 }}
        nodeSize={{ x: 300, y: 200 }}
        separation={{ siblings: 0.8, nonSiblings: 0.7 }}
      />
    </div>
  );
};

export default CourseTree;
