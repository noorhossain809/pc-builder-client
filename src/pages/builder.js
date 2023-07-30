import React from 'react'
import RootLayout from '../../components/layout/RootLayout'
import Link from 'next/link'
import { useSelector } from 'react-redux'


const BuilderPage = () => {
  const {products, status} = useSelector((state) => state.cart)
  console.log(products);
  console.log("status", status);

  let addCpu;
  let addMonitor;
  let addMotherboard;
  let addRam;
  let addPowerSupply;
  let addStorage


  const product = products.map((pr) => {
    if(pr?.category === "cpu"){
      addCpu = <>
       <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src={pr?.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                CPU
              </p>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {pr?.productName}
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                {pr?.price}
              </p>
            </div>
          </div>
          
      </>
    }else if(pr?.category === "monitor"){
      addMonitor = <>
      <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src={pr?.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Monitor
              </p>
             <p className="text-sm font-semibold leading-6 text-gray-900">
                {pr?.productName}
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                {pr?.price}
              </p>
            </div>
          </div>
         
      </>
    }else if(pr?.category === "motherboard"){
      addMotherboard = <>
      <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src={pr?.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Motherboard
              </p>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {pr?.productName}
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                {pr?.price}
              </p>
            </div>
          </div>
          
      </>
    }else if(pr?.category === "RAM"){
      addRam = <>
      <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src={pr?.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                RAM
              </p>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {pr?.productName}
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                {pr?.price}
              </p>
            </div>
          </div>
          
      </>
    }else if(pr?.category === "power-supply"){
      addPowerSupply = <>
      <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src={pr?.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Power Supply
              </p>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {pr?.productName}
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                {pr?.price}
              </p>
            </div>
          </div>
          
      </>
    }else if(pr?.category === "storage"){
      addStorage = <>
      <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src={pr?.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Storage
              </p>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {pr?.productName}
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                {pr?.price}
              </p>
            </div>
          </div>
          
      </>
    }
  })
  


  const handleClick = () => {
    alert('Your Pc build successful')
    window.location.reload()
  }


  return (
    <div className="bg-gray">
      <div className=' mx-28'>
        <ul role="list" className="  m-10 py-10">
        <div className='pt-10 bg-white '>
          <li className="flex justify-between gap-x-6 py-5 mx-20  ">
         {addCpu}
         <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/processor">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose cpu
              </button>
            </Link>
          </div>
           
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          {addMotherboard}
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/motherboard">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose motherboard
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          {addRam}
            <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/ram">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose ram
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          {addMonitor}
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/monitor">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose monitor
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          {addPowerSupply}
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/powerSupply">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose power
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          {addStorage}
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/storage">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose storage
              </button>
            </Link>
          </div>
        </li>
        <div className='mb-10 flex justify-center py-10'>
           {addCpu && addMonitor && addMotherboard && addPowerSupply && addRam && addStorage ?  
           <button onClick={handleClick} className="cursor-pointer  border border-[#3749bb] px-5 text-white rounded-md bg-[#3749bb] text-sm h-10">
                Complete
              </button>:
          
              <button type="button" disabled className="cursor-not-allowed  border px-5 text-white rounded-md bg-indigo-300 text-sm h-10">
                Complete
              </button>
              }
        </div>
        </div>
       
      </ul>
      </div>
    </div>
  )
}

export default BuilderPage

BuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
