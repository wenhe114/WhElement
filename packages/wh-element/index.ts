
import type {App} from "vue"

import button from "../button"
import novnc from "../novnc"
            
const components=[

    button,
    novnc,
]
            
const install=(app:App,opt:any):void=>{
    components.forEach(component => {
        app.component(component.name, component)
    })
}
            
export {

    button,
    novnc,
    install
}
            
export default{
    install
}