// System
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// Local
import Grid from "../components/app/Grid";
// import ListBox from "../components/app/ListBox"
import Card from "../components/app/Card";
// import constants from "../constants";

import "./PythonStats.scss";

class PythonStats extends Component {
  render() {

    const titleName_1 = "CODE QUALITY"
    const dataList_1 = { "code_quality": [
      { "name": "Bugs", "value": 0 },
      {
        "name": "Maintainability",
        "value": "Medium",
        "children": [
          { "name": "Code Smells", "value": "72%" },
          { "name": "Cyclomatic Complexity", "value": "12%" },
          {
            "name": "Best Project",
            "value": {
              "name": "saplings",
              "url": "http://github.com/shobrook/saplings"
            }
          }
        ]
      },
      {
        "name": "Security",
        "value": "Low",
        "children": []
      },
      {
        "name": "Style",
        "value": "High",
        "children": [
          { "name": "PEP8 Adherence", "value": "19%" },
          { "name": "Code Convention", "value": "99%" },
          {
            "name": "Best Project",
            "value": {
              "name": "saplings",
              "url": "http://github.com/shobrook/sapling"
            }
          }
        ]
      }
    ] }

    const titleName_2 = "EXPERTISE"
    const dataList_2 = { "expertise": [
      { "name": "Machine Learning", "value": "45%" },
      { "name": "Databases", "value": "30%" },
      { "name": "Concurrency", "value": "15%" },
      { "name": "Web Scraping", "value": "10%" }
    ] }



    const titleName_3 = "LANGUAGE PROFICIENCY"
    const dataList_3 = { "language_proficiency": [
      { "name": "Lines of Code in Production", "value": 12944 },
      {
        "name": "Syntax Knowledge",
        "value": "Intermediate",
        "children": [
          { "name": "Literals", "value": "12%" },
          { "name": "Statements and Variables", "value": "51%" },
          { "name": "Unary and Boolean Operations", "value": "75%" },
          { "name": "Binary Operations and Comparisons", "value": "33%" },
          { "name": "Comprehensions", "value": "9%" },
          { "name": "Generators", "value": "86%" },
          { "name": "Functions and Classes", "value": "44%" },
          { "name": "Control Flow", "value": "30%" },
          { "name": "Exception Handling", "value": "99%" },
          { "name": "Asynchronous", "value": "75%" }
        ]
      },
      {
        "name": "Standard Library Knowledge",
        "value": "Advanced",
        "children": [
          { "name": "Built-in Functions", "value": "88%" },
          { "name": "Built-in Constants", "value": "Coming Soon" },
          { "name": "Built-in Types", "value": "Coming Soon" },
          { "name": "Built-in Exceptions", "value": "Coming Soon" },
          { "name": "Text Processing", "value": "Coming Soon" },
          { "name": "Binary Data", "value": "Coming Soon" },
          { "name": "Data Types", "value": "Coming Soon" },
          { "name": "Mathematical Modules", "value": "Coming Soon" },
          { "name": "Functional Programming", "value": "Coming Soon" },
          { "name": "File and Directory Access", "value": "Coming Soon" },
          { "name": "Data Persistence", "value": "Coming Soon" },
          { "name": "Data Compression and Archiving", "value": "Coming Soon" },
          { "name": "File Formats", "value": "Coming Soon" },
          { "name": "Cryptography", "value": "Coming Soon" },
          { "name": "Operating System", "value": "Coming Soon" },
          { "name": "Concurrency", "value": "Coming Soon" },
          { "name": "Context Variables", "value": "Coming Soon" },
          {
            "name": "Interprocess Communication and Networking",
            "value": "Coming Soon"
          },
          { "name": "Internet Data Handling", "value": "Coming Soon" },
          { "name": "Structured Markup Processing", "value": "Coming Soon" },
          { "name": "Internet Protocols", "value": "Coming Soon" },
          { "name": "Multimedia", "value": "Coming Soon" },
          { "name": "Internationalization", "value": "Coming Soon" },
          { "name": "Program Frameworks", "value": "Coming Soon" },
          { "name": "Debugging and Profiling", "value": "Coming Soon" },
          {
            "name": "Software Packaging and Distribution",
            "value": "Coming Soon"
          },
          { "name": "Custom Python Interpreters", "value": "Coming Soon" }
        ]
      },
      { "name": "Design Patterns", "value": "Coming Soon" }
    ] }



    const titleName_4 = "PROJECTS"
    const dataList_4 = { "projects": [
      {
        "name": "Most Contributions",
        "value": {
          "name": "rebound",
          "url": "http://github.com/shobrook/rebound"
        },
        "children": [
          { "name": "Role", "value": "Owner" },
          { "name": "Collaborators", "value": 2 },
          { "name": "Documentation Quality", "value": "Low" },
          { "name": "Median Issue Resolution Time", "value": "7 days" },
          { "name": "Stars", "value": 19 },
          { "name": "Lines of Python Code", "value": 1928 }
        ]
      },
      {
        "name": "Most Popular",
        "value": {
          "name": "rebound",
          "url": "http://github.com/shobrook/rebound"
        },
        "children": [
          { "name": "Role", "value": "Owner" },
          { "name": "Collaborators", "value": 2 },
          { "name": "Documentation Quality", "value": "Low" },
          { "name": "Median Issue Resolution Time", "value": "7 days" },
          { "name": "Stars", "value": 19 },
          { "name": "Lines of Python Code", "value": 1928 }
        ]
      },
      {
        "name": "Releases",
        "value": 9,
        "children": [
          { "name": "BitVision", "value": "19 Stars" },
          { "name": "BitVision", "value": "19 Stars" },
          { "name": "BitVision", "value": "19 Stars" },
          { "name": "BitVision", "value": "19 Stars" }
        ]
      }
    ] }


    const titleName_5 = "TECHNOLOGIES";
    const dataList_5 = { "technologies": [
      {
        "name": "Scikit-Learn",
        "value": "Advanced",
        "children": [
          { "name": "Breadth of Experience", "value": "34%" },
          { "name": "Experience", "value": "49%" },
          {
            "name": "Largest Project",
            "value": {
              "name": "BitVision",
              "url": "http://github.com/shobrook/BitVision"
            }
          }
        ]
      },
      {
        "name": "Tensorflow",
        "value": "Expert",
        "children": [
          { "name": "Breadth of Experience", "value": "55%" },
          { "name": "Experience", "value": "19%" },
          {
            "name": "Largest Project",
            "value": {
              "name": "BitVision",
              "url": "http://github.com/shobrook/BitVision"
            }
          }
        ]
      },
      {
        "name": "PyTorch",
        "value": "Beginner",
        "children": [
          { "name": "Breadth of Experience", "value": "92%" },
          { "name": "Experience", "value": "84%" },
          {
            "name": "Largest Project",
            "value": {
              "name": "BitVision",
              "url": "http://github.com/shobrook/BitVision"
            }
          }
        ]
      },
      {
        "name": "Theano",
        "value": "Intermediate",
        "children": [
          { "name": "Breadth of Experience", "value": "95%" },
          { "name": "Experience", "value": "87%" },
          {
            "name": "Largest Project",
            "value": {
              "name": "BitVision",
              "url": "http://github.com/shobrook/BitVision"
            }
          }
        ]
      }
    ] }


    return (
      <Grid>
        <Card title={titleName_2} data={Object.values(dataList_2)[0]}/>
        <Card title={titleName_5} data={Object.values(dataList_5)[0]}/>
        <Card title={titleName_3} data={Object.values(dataList_3)[0]}/>
        <Card title={titleName_1} data={Object.values(dataList_1)[0]}/>
        <Card title={titleName_4} data={Object.values(dataList_4)[0]}/>
      </Grid>
    );
  }
}

export default PythonStats;
