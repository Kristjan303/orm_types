import { Request, Response, Router } from "express";
import Article from "../models/article";

const router: Router = Router();

router.post('/article', async (req: Request, res: Response) => {
    const data = new Article({
        header: req.body.header,
        content: req.body.content
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error})
    }
})



router.get('/article', async (req: Request, res: Response) => {
    try{
        const data = await Article.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})



export default router;