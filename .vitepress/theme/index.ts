// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import {Vuelize} from "vuelize";

export default {
    Layout,
    enhanceApp(data) {
        const {app} = data;
        app.use(Vuelize)
        //app.component("Header", Header)
    }
}

