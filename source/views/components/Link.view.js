import * as Preact from "preact"
import index from "index"

import "views/components/Link.view.less"

export default class Link {
    render() {
        return (
            <a class="Link" onClick={this.onClick} href={this.props.url} target="_blank">
                {this.props.children}
            </a>
        )
    }
    get onClick() {
        return (event) => {
            if(this.props.screen != undefined) {
                index.navigation = {"screen": this.props.screen}
            }
            if(this.props.onClick != undefined
            && this.props.onClick instanceof Function) {
                this.props.onClick(event)
            }
        }
    }
}
