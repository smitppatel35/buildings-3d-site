/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useLayoutEffect, useRef } from "react";
import {
  OrbitControls,
  useAnimations,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { angleToRadiants } from "../utils/angleToRadiants";
gsap.registerPlugin(ScrollTrigger);

const Building = (props) => {
  const { nodes, materials, animations, scene } = useGLTF("/models/model.glb");

  const buildingRef = useRef();
  const tl = useRef();
  const orbitControlRef = useRef(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (orbitControlRef.current) {
      orbitControlRef.current.setAzimuthalAngle(-x * angleToRadiants(45));
      orbitControlRef.current.setPolarAngle((y + 1) * angleToRadiants(60));
    }
  });

  console.log(nodes);

  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-container",
        start: "10% top",
        end: "bottom 50%",
        // markers: true,
        scrub: false,
        pin: true,
      },
    });

    tl.current.to(buildingRef.current.rotation, {
      y: -2,
      duration: 3,
      ease: "power1.out",
    });
    tl.current.to(buildingRef.current.rotation, {
      y: -3,
      duration: 3,
      ease: "power1.out",
    });

    // .to(buildingRef.current.rotation, {
    //   x: 0,
    //   y: angleToRadiants(90),
    //   duration: 3,
    //   ease: "power1.out",
    // })
    // .to(buildingRef.current.rotation, {
    //   x: 0,
    //   y: angleToRadiants(180),
    //   duration: 3,
    //   ease: "power1.out",
    // })
    // .to(buildingRef.current.position, {
    //   x: 0,
    //   y: 0,
    //   duration: 1,
    //   ease: "power1.out",
    // });
  }, []);

  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-container",
        start: "top top",
        end: "bottom 50%",
        // markers: true,
        scrub: false,
        pin: true,
      },
    });

    tl.current
      .to(buildingRef.current.rotation, {
        y: -1,
        duration: 3,
        ease: "power1.out",
      })
      .to(buildingRef.current.position, {
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
    // .to(buildingRef.current.position, {
    //   y: 0,
    //   duration: 1,
    //   ease: "power1.out",
    // });
    // .to(buildingRef.current.rotation, {
    //   x: 0,
    //   y: angleToRadiants(90),
    //   duration: 3,
    //   ease: "power1.out",
    // })
    // .to(buildingRef.current.rotation, {
    //   x: 0,
    //   y: angleToRadiants(180),
    //   duration: 3,
    //   ease: "power1.out",
    // })
    // .to(buildingRef.current.position, {
    //   x: 0,
    //   y: 0,
    //   duration: 1,
    //   ease: "power1.out",
    // });
  }, []);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        ref={orbitControlRef}
        minPolarAngle={angleToRadiants(66)}
        maxPolarAngle={angleToRadiants(76)}
      />
      <group {...props} dispose={null} ref={buildingRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003"].geometry}
          material={materials["0001.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003015"].geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.InnerRenderNew001.geometry}
          material={materials["InnerRenderNew.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003002"].geometry}
          material={materials["0002.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_View002.geometry}
          material={materials["Top View.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003012"].geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003001"].geometry}
          material={materials["0000.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground001.geometry}
          material={materials["TopViewSides.001"]}
          position={[5.671, 0.1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground.geometry}
          material={materials["TopViewSides.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003003"].geometry}
          material={materials["0003.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component#614"].geometry}
            material={materials["[Cladding Stucco White]"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component#614_1"].geometry}
            material={materials["*74"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component#614_2"].geometry}
            material={materials["[Small Aggregate]"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Top_View.geometry}
            material={materials["Top View.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Top_View_1.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TopViewSides.geometry}
          material={materials["TopViewSides.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.InnerRenderNew.geometry}
          material={materials["InnerRenderNew.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </>
  );
};

useGLTF.preload("/models/model.glb");

export default Building;
