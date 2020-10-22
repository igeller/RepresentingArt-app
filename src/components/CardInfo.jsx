// import ReactFilestack from 'filestack-react';
// const React = require('react');
import React from "react";
// import Gallery from 'react-grid-gallery';
// import {IMAGES} from '../constants/gridGallery';
// import 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
// import 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js';
// import '@google/model-viewer';

// const show3dobs = function () {
//         console.log()
//         return(
//             <model-viewer src={this.props.item.glb} leap-motion ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls>hello</model-viewer>
//         )
//
//
// };
/* the main page for the index route of this app */
const CardInfo = function() {
    return (
        <div>
            {/*<Gallery images={IMAGES} enableImageSelection={false} onClickThumbnail={show3dobs}/>*/}
            <model-viewer crossorigin src={"https://representingart.imfast.io/punu/scene.gltf"} ios-src={'https://representingart.imfast.io/punu/Punu_People_Ceremonial_Dance_Mask.usdz'} loading="eager" poster="https://representingart.imfast.io/kulango-people-ceremonial-dance-mask/textures/KulangaMaskMesh.png" ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls/>
            {console.log('model-viewer')}

        </div>
    );
}

export default CardInfo;
