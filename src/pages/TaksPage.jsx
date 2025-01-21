import { ChevronLeftIcon } from "lucide-react"
import {useSearchParams, useNavigate} from "react-router-dom"

function Taskpage() {
    const navigate = useNavigate()

    function onBackClick() {
        navigate("/")
    }

    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    
    return (
        <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
            <div className="w-[500px] space-y-4 ">
                <div className="flex justify-center relative mb-6">
                    <button 
                    onClick={() => {onBackClick()}}
                    className=" absolute left-0 top-0 bottom-0 text-slate-100"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da tarefas</h1>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">
                        {title}
                    </h2>
                    <p className="text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Taskpage