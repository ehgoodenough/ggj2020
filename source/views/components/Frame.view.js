import * as Preact from "preact"

import "views/components/Frame.view.less"

export default function Frame() {
    return (
        <div class="Frame" id="frame">
            {this.props.children}
        </div>
    )
}
