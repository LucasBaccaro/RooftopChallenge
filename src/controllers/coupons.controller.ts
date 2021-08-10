import {request, Request, response, Response , } from 'express'
import {getRepository, IsNull, Not} from 'typeorm'

import {Coupon} from "../entities/Coupon"

export const getCoupons = async (req:Request,res:Response): Promise<Response> =>{

    const repository = getRepository(Coupon)

    const coupons : Coupon[] = await repository.find();

    return res.json(coupons)
}

export const findCouponByEmailAndCode = async (req:Request,res:Response):Promise<Response> => {
    
      const userRepo = await getRepository(Coupon);
      const coupon = await userRepo.findOne({ where: { customer_email: req.query.customer_email} && {code: req.query.code} })
      console.log(coupon)
      
      if(coupon) return res.status(200).json(coupon)

      else{
        res.status(400).send({ message: "not coupon found "})
      }
  return res.json(coupon)
  };

export const createNewCoupon = async (req:Request,res:Response):Promise<Response> => {
    
 const newCoupon  = getRepository(Coupon).create(req.body)
 const result = await getRepository(Coupon).save(newCoupon)

 if(newCoupon) return res.status(201).json(newCoupon)
 else{
   res.status(422).send({message:"Error en el cupon"})
 }
 
  return res.json(result)
};

export const updateCoupon = async (req:Request,res:Response):Promise<Response> =>{
  const {id} = req.params
  const coupon = {...req.body}

  if(!id) return res.status(400).send({ message: "Not ID"});
  if(!coupon.customer_email) return res.status(400).send({ message: "Not Email"})

  const couponsRepo =  getRepository(Coupon);

  const existing = await couponsRepo.findOne({ where : { id }});
  if (!existing) return res.status(404).send({ message: "Coupon not found"});

  existing.customer_email = coupon.customer_email

  const result = await getRepository(Coupon).save(existing)

  return res.json(result)

}

export const deleteUser = async(req:Request, res: Response): Promise<Response> =>{

  const {id} = req.params

  if(!id) return res.status(400).send({ message: "Not id"});

  const couponsRepo =  getRepository(Coupon);

  const existing = await couponsRepo.findOne({ where : { id }});
  if (!existing) return res.status(404).send({ message: "Coupon not found"});

  const results = await getRepository(Coupon).delete(req.params.id);
  return res.status(200).send({ message: "Delete succesfull"});
}



















