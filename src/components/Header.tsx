import { List } from "phosphor-react";
import Logo from "./Logo";

interface Props{
  openAndCloseSideBar: Function
}

export default function Header(props: Props){
  return(
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo/>
      <List 
          onClick={()=>props.openAndCloseSideBar()} 
          className="absolute right-4 text-blue-500 cursor-pointer hover:text-blue-200" 
          size={30}/>
    </header>
    )
}