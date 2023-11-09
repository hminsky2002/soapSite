"use client"
 
import Image from "next/image";
import {createCart} from "../methods"
import { useRouter } from 'next/navigation'



export default function Button() {
  const router = useRouter()

  async function handleClick(){
    const cartRes = await createCart(1);
    console.log(cartRes)
    const url = cartRes.body.data.cartCreate.cart.checkoutUrl;
    await router.replace(url);
  }

  return (
      <div className="flex justify-center" onClick={handleClick}>
        <Image src="/buy.png" width={300} height={500} alt="buy button" />
      </div>
  );
}