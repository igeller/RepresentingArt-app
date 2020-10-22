// import ReactFilestack from 'filestack-react';
// const React = require('react');
import React from "react";

const CardInfo = function() {
    return (
        <div>
            <model-viewer src={"https://representingart.imfast.io/punu/scene.gltf"} ios-src={'https://representingart.imfast.io/punu/Punu_People_Ceremonial_Dance_Mask.usdz'} loading="eager" poster="https://representingart.imfast.io/kulango-people-ceremonial-dance-mask/textures/KulangaMaskMesh.png" ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls/>

        </div>
    );
}

export default CardInfo;
