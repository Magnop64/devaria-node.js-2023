// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';

type resposta = {
  name: string,
}

const app = (req: NextApiRequest, res: NextApiResponse<resposta> | any) =>{

  const user = 'Ana Vitoria'
  try{
    res.status(200).json({name: `Seja bem vinda ${user}`,
    data: moment().format("DD/MM/YYYY HH:mm:ss")});
  
    console.log(req.method);

  }catch(e){
    console.log(e)
    res.status(500).json('ops');
  }  
}

export default app;