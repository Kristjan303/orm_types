import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.send("Hello world at " + new Date());
});

export default router;