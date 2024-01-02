import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "../components";

const Home = () => {
    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className='w-full h-screen relative'
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
