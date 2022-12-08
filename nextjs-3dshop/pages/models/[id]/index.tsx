import React, { lazy } from "react";
import { useRouter } from "next/router";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import { AnimationClip, Group, Mesh, Object3D } from "three/src/Three";
import { useAnimations, useGLTF } from '@react-three/drei'


const ModelComponent = lazy(() => import("../../../components/model"))

export default function ModelItem() {
    const id = useRouter().query.id    

    return (
        <React.Suspense fallback={"Loading"}>
            <Canvas camera={{position: [10,20,1]}}>
                <ModelComponent/>
                <color attach="background" args={["hotpink"]} />
            </Canvas>
        </React.Suspense>
    )
}