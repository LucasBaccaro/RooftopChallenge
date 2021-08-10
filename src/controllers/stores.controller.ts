import {request, Request, response, Response , } from 'express'
import {getRepository} from 'typeorm'

import {Store} from "../entities/Store"


export const getStores = async (req:Request,res:Response): Promise<Response> =>{

    const repository = getRepository(Store)

    const stores : Store[] = await repository.find();

    return res.json(stores)
}

export const createNewStore = async (req:Request,res:Response):Promise<Response> => {

    const {name,address} = req.body

    if(!name) return res.status(422).send({ message: "You must provide a name"});
    if(!address) return res.status(422).send({ message: "You must provide a address"});

    const existing = await getRepository(Store).findOne({ where: {name}});
    if(existing) return res.status(400).send({ message: "Name already in use"});
    
    const newStore  = getRepository(Store).create(req.body)
    const result = await getRepository(Store).save(newStore)
   
    if(newStore) return res.status(201).json(newStore)
    else{
      res.status(422).send({message:"Error"})
    }
    
     return res.json(result)
   };

   export const deleteStore = async(req:Request, res: Response): Promise<Response> =>{
    /*const results = await getRepository(Store).delete(req.params.id);
    return res.json(results)*/
  const {id} = req.params

  if(!id) return res.status(400).send({ message: "Not id"});

  const couponsRepo =  getRepository(Store);

  const existing = await couponsRepo.findOne({ where : { id }});
  if (!existing) return res.status(404).send({ message: "Store not found"});

  const results = await getRepository(Store).delete(req.params.id);
  return res.status(200).send({ message: "Delete succesfull"});
  }