import React from "react"
import Card from "./Card";
import CardData from "./Data";

function wpteam(val){
return(
  <Card link={CardData[0].link} title={CardData[0].title} imgsrc={CardData[0].imgsrc} />
)
}

export default function Home() {
  return(
    <>
    {CardData.map(wpteam)}    
    </>
  )
}
