import React from 'react'

function Cdv() {
    return (
        <div>
            <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;" vr-mode-ui="enabled: false">
                <a-marker type='pattern' url='static/cdv/marker.patt'>
                    <a-entity scale="0.22 0.22 0.22" rotation="0 201 0" position="-0.04 0 -0.04" obj-model="obj: url(static/cdv/object.obj); mtl: url(static/cdv/texture.mtl)">
                        <a-animation attribute="position"
                                    begin="4000"
                                    dur="6000"
                                    from="0 0 0"
                                    to="0 1 0">
                        </a-animation>
                        <a-animation attribute="scale"
                                    begin="7000"
                                    dur="6000"
                                    from="0.22 0.22 0.22"
                                    to="2 2 2">
                        </a-animation>
                        <a-animation attribute="rotation"
                                    begin="11000"
                                    dur="15000"
                                    from="0 201 0"
                                    to="0 561 0"
                                    repeat="indefinite">
                        </a-animation>
                    </a-entity>
                </a-marker>
                <a-entity camera>
                </a-entity>
            </a-scene>
        </div>
    )
}

export default Cdv