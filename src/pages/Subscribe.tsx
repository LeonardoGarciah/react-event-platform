import { GithubLogo } from "phosphor-react";
import { useState,FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useCreateSubscriberMutation, useCreateSubscriberWithGithubMutation } from "../graphQL/generated";
import { githubProvider } from "../lib/authMethod";
import firebaseAuth from "../lib/firebaseAuth";
import mockupImage from '/src/assets/code-mockup.png';


interface GithubAuthResponse{
  displayName: string,
  email: string,
  accessToken: string
}
export default function Subscribe(){
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading } ] = useCreateSubscriberMutation();
  const [createSubscriberWithGithub] = useCreateSubscriberWithGithubMutation();

  async function handleSubscribe(event: FormEvent){
    event?.preventDefault();
    await createSubscriber({
      variables:{
        name,
        email
      }
    }).then((res)=>{
      localStorage.setItem('logged',JSON.stringify({name:name}))
      navigate('/event')

    }).catch((error)=>{
      console.log(error)
    })

  }

  async function handleOnClick(provider:any){
      await firebaseAuth().then(async(res:GithubAuthResponse)=>{
       const token = res.accessToken;
       const name = res.displayName;
       const email = res.email;

       await createSubscriberWithGithub({
        variables:{
          name,
          email,
          token
        }
      }).then((res)=>{
        localStorage.setItem('logged',JSON.stringify({name:name,token:token}))
      navigate('/event')

    }).catch((error)=>{
      console.log(JSON.stringify(error, null, 2))
    })

     }).catch((error)=>{
      console.log(error);
     })
    }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto flex-wrap">
        <div className="max-w-[640px] flex items-center justify-center flex-col">
          <Logo/>

          <h1 className="mt-8 text-[2.5rem] leading-tight sm:text-center">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com<strong className="text-blue-500"> React </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed sm:text-center">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded sm:w-full sm:mt-5">
            <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full"> 
                <input 
                className="bg-gray-900 rounded px-5 h-14"
                  type="text" 
                  onChange={ev=>setName(ev.target.value)}
                  placeholder="Seu nome completo" />
                <input 
                  className="bg-gray-900 rounded px-5 h-14"
                  type="email" 
                  onChange={ev=>setEmail(ev.target.value)}
                  placeholder="Digite seu e-mail" />
            
              <button 
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-5 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit">
                Garantir minha vaga
              </button>
            </form>
            <button
            className="mt-4 bg-black w-full flex items-center justify-center gap-2 uppercase py-5 rounded font-bold text-sm hover:bg-gray-600 transition-colors disabled:opacity-50"
            onClick={()=>handleOnClick(githubProvider)}>
              <GithubLogo size={24} />
              Entrar com o GitHub
              </button>
          </div>

      
      </div>
      <img src={mockupImage} className="mt-10" alt="" />
    </div>
  )
}