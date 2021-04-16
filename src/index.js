import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1> List of top 3 Netflix series </h1>

    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />

    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />

    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
  </>,

  document.getElementById("root")
);
