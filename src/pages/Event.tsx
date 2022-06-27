import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event(){
  const { slug } = useParams<{slug:string}>();
  const [showSidebar,setShowSideBar] = useState(true);

  
  function openAndCloseSideBar(){
    setShowSideBar(!showSidebar);
  }

  return(
    <div className="flex flex-col min-h-screen">
      <Header openAndCloseSideBar={openAndCloseSideBar}/>
    <main className="flex flex-1">
      { slug 
      ? <Video showSidebar={showSidebar} lessonSlug={slug}/> 
      : <div className="flex-1"></div>}
      {showSidebar && (
      <Sidebar/>
      )}

    </main>
    </div>
  )
}