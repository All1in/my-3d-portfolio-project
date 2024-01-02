import { useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird() {
    const { scene } = useGLTF(birdScene);
    return (
        // to create and display 3D objects
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            model or scene
            <primitive object={scene} />
        </mesh>
    );
}

export default Bird
