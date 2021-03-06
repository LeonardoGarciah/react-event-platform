import { useNavigate } from "react-router-dom";
import { useGetLessonsQuery } from "../graphQL/generated";
import Lesson from "./Lesson";

export default function Sidebar(){
  const { data } = useGetLessonsQuery()

  const navigate = useNavigate();

  console.log(localStorage.getItem("logged"))
  if(!localStorage.getItem("logged")){
    navigate("/")
  }

  console.log(data);
  return(
    <aside className="w-[348px] sm:w-full bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson)=>{
          return(
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
        />
          )
        })}

      </div>
    </aside>
  )
}