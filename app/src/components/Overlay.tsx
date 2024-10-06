import background from '/images/texture.png'
import DisconnectButton from './DisconnectButton';
import SearchForm from "./SearchForm";
import backgroundMusic from "/sounds/StarMapOdyssaeRemix1.ogg"
import { useCallback } from 'react';

const Overlay = () => {
  const playSound =  useCallback(() => {
    const audio = new Audio(backgroundMusic)
    audio.volume= 0.1
    audio.play()
  }, [])

  return (
    <section 
        onMouseOver={() => playSound()} 
        className="fixed border-t-[1px] border-cyan-500 bottom-0 w-full h-28 bg-darken" 
        style={{
            backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat'
        }}
    >
      <div className="pt-6 pb-8 h-full">
          <div className="flex h-full justify-between border-y-[1px] border-cyan-950 pr-14">
            <div className="pl-4 relative flex  flex-col items-start">
              <svg className="absolute left-8 bottom-16 text-primary" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 300 300" xmlSpace="preserve">
                <g>
                  <path fill="currentColor" d="M7.42,145.986C9.185,99.193,32.899,56.035,76.25,27.516c0.128,0.048,1.251-0.361,0.738,0.61   c-3.434,3.184-65.172,76.114-8.344,133.68c0,0,29.858,28.704,53.011,1.468c0,0,22.847-29.577-0.289-74.413   c0,0-5.856-14.64-26.955-23.721l16.992-18.748c0,0,14.359,6.161,25.478,22.871c0,0,0.593-17.593-12.884-36.34l26.345-29.89   l26.08,29.609c0,0-11.993,16.991-12.876,36.902c0,0,8.191-13.477,25.776-23.151l16.686,18.748c0,0-16.045,5.287-26.794,23.529   c-9.242,16.902-16.357,53.05,0.416,75.223c0,0,18.772,26.618,51.792-1.571c0,0,60.712-54.399-6.226-133.048   c0,0-3.658-3.233,0.449-1.476c29.586,21.54,65.012,49.946,68.67,120.837c-1.444,85.966-59.012,147.334-143.074,147.334   C68.934,295.968,4.95,227.283,7.42,145.986"/>
                </g>
              </svg>
              <div className="font-display font-bold text-primary uppercase select-none">Rebel Alliance</div>
              <p className="font-display text-xs text-primary uppercase select-none">Spyware - System ©</p>
            </div>
            <SearchForm/>
        </div>
        <div className="h-1 border-b-[1px] border-cyan-950"/>
        <div className="flex justify-between">
          <DisconnectButton/>
          <p className="font-body opacity-60 w-full text-primary text-end pr-56 select-none	">FILTER</p>
          <label htmlFor="search" className=" font-body opacity-60 mr-[250px] text-primary select-none	">SEARCH</label>
        </div>
      </div>
    </section>
  )
}

export default Overlay
