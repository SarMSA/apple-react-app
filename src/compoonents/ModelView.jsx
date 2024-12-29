import {
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  ControlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : " "
      }`}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <ambientLight intensity={0.5} color="#ffffff" />
      <Lights />
      <OrbitControls
        ref={ControlRef}
        enableZoom={false}
        enablePan={false}
        makeDefault
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          if (ControlRef && ControlRef.current) {
            setRotationState(ControlRef.current.getAzimuthalAngle())
          }
        }}
      />
      <group ref={groupRef} name={`${index === 1}? 'small': 'large'`}>
        <Suspense
          fallback={
            <Loader/>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
