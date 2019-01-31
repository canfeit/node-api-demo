const {Router}=require('./routes')
const router=new Router()
router.GET('/userinfo',(req,res)=>{
    res.end('userinfo')
})
