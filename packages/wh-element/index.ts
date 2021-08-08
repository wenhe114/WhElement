
import type {App} from "vue"

import button from "../button"
import novnc from "../novnc"
import test from "../test"
            
const components=[

    button,
    novnc,
    test,
]
            
const install=(app:App,opt:any):void=>{
    components.forEach(component => {
        app.component(component.name, component)
    })
}
            
export {

    button,
    novnc,
    test,
    install
}
            
export default{
    install
}