
import Overlay from "../components/Overlay";
import Scene from "../components/Scene";
import DataInterface from "../components/DataInterface";

const SpywareSystemPage = () => {
  return (
    <>
      <div className="absolute top-0 w-full h-screen">
          <Scene/>
      </div>
      <div className="flex min-h-screen justify-center pt-16">
        <div className='rounded-md p-4 flex w-[800px] h-[550px] bg-slate-950 opacity-70'>
          <DataInterface/>
        </div>
      </div>
      <Overlay/>
    </>
  )
}

export default SpywareSystemPage
