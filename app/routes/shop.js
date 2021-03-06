import Router from 'koa-router'

import { baseApi } from '../config'
import {save,show,find} from '../controllers/shop.js'

const api = 'shop'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/save',save)
router.post('/lists',show)
router.post('/findById:id',find)

export default router