'use client';
import Image from 'next/image';
import yourCompany from '../../public/mth.svg';
import Button from '@/commons/Button';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/Nav.css';
export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  useEffect(() => {
    setIsNavExpanded(false); // Ajusta el estado inicial en el cliente
  }, []);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav
      className={`top-0 h-[80px] fixed w-full text-black justify-center z-10 `}
    >
      <div className="flex h-full w-full sm:hidden items-center relative justify-between px-4 py-3 bg-white backdrop-blur-sm bg-opacity-80 z-20">
        <div>
          <Link href={'/'}>
            <Image width={50} src={yourCompany} alt="logo" />
          </Link>
        </div>
        <div>
          <Button onClick={toggleNav} />
        </div>
      </div>

      <div
        className={`w-full flex justify-center  items-center  sm:hidden relative overflow-hidden ${
          isNavExpanded ? 'top-[0px]' : 'top-[-300px]'
        } z-11`}
        style={{ transition: 'all 1s ease 0s' }}
      >
        <div className={`w-2/3 shadow-md `}>
          <ul
            className={`flex flex-col  items-start justify-center pl-14 w-full text-sm font-semibold bg-white backdrop-blur-sm bg-opacity-80`}
          >
            <li className="hover:text-green-700 cursor-pointer my-3">
              <Link href={'/'}>STRATEGIC CONSULTING</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer my-3">
              <Link href={'/about-us'}>ABOUT US</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer my-3">
              <Link href={'/contact'}>CONTACT</Link>
            </li>
          </ul>{' '}
        </div>
      </div>

      <div className=" h-full hidden sm:flex w-full items-center justify-center bg-white  bg-opacity-80 backdrop-blur-sm">
        <div>
          <Link href={'/'}>
            <Image width={50} src={yourCompany} alt="logo" />
          </Link>
        </div>

        <div className="w-[70%] h-full">
          <ul className=" sm:flex items-center justify-end h-full w-full text-sm font-semibold">
            <li className="hover:text-gray-700 h-full relative cursor-pointer px-6 menu__item flex items-center ">
              <Link href="/">STRATEGIC CONSULTING</Link>
              <ul className="menu__nesting bg-white border-t border-solid border-black w-full right-0 bottom-0 absolute">
                <li>
                  <Link
                    href="/strategic-plan"
                    className="flex p-8 hover:text-black"
                  >
                    STRATEGIC PLAN
                  </Link>
                </li>
                <li>
                  <Link href="/strategic-implementation" className="flex p-8 hover:text-black">
                    STRATEGIC IMPLEMENTATION
                  </Link>
                </li>
              </ul>
            </li>

            <li className="hover:text-gray-500 cursor-pointer px-6">
              <Link href={'/about-us'}>ABOUT US</Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link href={'/contact'}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
