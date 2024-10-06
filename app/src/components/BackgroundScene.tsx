import { Environment, useEnvironment } from "@react-three/drei"

const BackgroundScene = () => {
    const envMap = useEnvironment({ files: './images/Deathstar_Hanger_4k.hdr' })
    
    return <Environment map={envMap} background/>
  }
  
export default BackgroundScene
