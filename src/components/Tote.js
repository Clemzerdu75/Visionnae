import React from 'react'

function Tote() {
    return (
        <div>
            <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;">
                <a-marker type='pattern' url='static/marker.patt'>
                    <a-entity scale="3 3 3" obj-model="obj: url(static/tote.obj); mtl: url(static/tote.mtl)"></a-entity>
                </a-marker>
                <a-entity camera>
                </a-entity>
            </a-scene>
        </div>
    )
}

export default Tote