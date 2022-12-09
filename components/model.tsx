import { useGLTF } from '@react-three/drei'

export default function Model() {
    const model = useGLTF("https://qeivejengqdlpvclinzu.supabase.co/storage/v1/object/public/3dobject/1.gltf")
    return(
        <primitive object={model.scene}/>
    )
}