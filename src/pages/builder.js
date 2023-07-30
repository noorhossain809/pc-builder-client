import React from 'react'
import RootLayout from '../../components/layout/RootLayout'
import Link from 'next/link'

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
]

const BuilderPage = () => {
  return (
    <div className="mx-28">
      <ul role="list" className=" divide-y divide-gray-100">
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                CPU
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                tom.cook@example.com
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/processor">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Motherboard
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                tom.cook@example.com
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/motherboard">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                RAM
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                tom.cook@example.com
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/ram">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Monitor
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                tom.cook@example.com
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/monitor">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Power Supply
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                tom.cook@example.com
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/powerSupply">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose
              </button>
            </Link>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5 mx-20">
          <div className="flex gap-x-6">
            <div>
              <img
                className="h-auto w-16 flex-none rounded-md bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Storage
              </p>
              <p className=" text-xs leading-5 text-gray-500">
                tom.cook@example.com
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href="/storage">
              <button className="cursor-pointer border border-[#3749bb] px-5 text-[#3749bb] bg-white hover:text-white rounded-md hover:bg-[#3749bb] text-sm h-10">
                Chose
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BuilderPage

BuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
