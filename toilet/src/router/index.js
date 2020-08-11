import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import StructureDrawing from '@/views/structureDrawing/index'
import Structure from '@/views/structure/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/structureDrawing',
            name: 'structureDrawing',
            component: StructureDrawing
        }, {
            path: '/structure',
            name: 'structure',
            component: Structure
        },
    ]
})