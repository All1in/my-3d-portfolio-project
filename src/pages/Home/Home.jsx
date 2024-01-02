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
                     {/*Loader is still implementing*/}
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
