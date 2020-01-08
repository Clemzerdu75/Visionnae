import React from 'react'

function Adf() {
    return (
    <div>
       <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;" vr-mode-ui="enabled: false">
            <a-marker type='pattern' url='static/adf/marker.patt'>
                <a-entity scale="10 10 10" rotation="0 0 0" position="0 0 0" obj-model="obj: url(static/adf/object.obj); mtl: url(static/adf/texture.mtl)">
                </a-entity>
            </a-marker>
            <a-entity camera>
            </a-entity>
        </a-scene>
    </div>
    )
}

export default Adf