import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import BackgroundScene from "./BackgroundScene";

const Scene = () => {
    return (
        <Canvas camera={{fov:110}}>
            <OrbitControls autoRotate autoRotateSpeed={-0.4}></OrbitControls>
            <BackgroundScene/>
        </Canvas>
    )
}

export default Scene
