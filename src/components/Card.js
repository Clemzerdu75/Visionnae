import React from 'react'

function Card() {
    return (
    <div>
        <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;" vr-mode-ui="enabled: false">
            <a-marker type='pattern' url='static/carte/marker.patt'>
                <a-entity scale="3 3 3" obj-model="obj: url(static/carte/object.obj); mtl: url(static/carte/texture.mtl)">
                </a-entity>
            </a-marker>
            <a-entity camera>
            </a-entity>
        </a-scene>
    </div>
    )
}

export default Card