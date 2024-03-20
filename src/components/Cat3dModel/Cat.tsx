import { useGLTF } from "@react-three/drei";
// import cat from "../../../Cat/scene.gltf";

export default function Cat() {
  const cat = "../../../Cat/scene.gltf"; // Укажите путь к вашей модели
  const { scene } = useGLTF(cat); // true для DRACOLoader если нужно

  return (
    <mesh position={[0, 0, 0]}>
      <ambientLight color={0xffffff} intensity={0.75} />
      <directionalLight
        position={[10, 10, 10]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive scale={12} object={scene} dispose={null} />
    </mesh>
  );
}
