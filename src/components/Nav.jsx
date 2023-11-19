'use client';
import Image from 'next/image';
import yourResto from '../../public/your_logo.png';
import Button from '@/commons/Button';
import { useState } from 'react';
import Link from 'next/link';
import '../styles/Nav.css';
export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
            <Image width={50} src={yourResto} alt="logo" />
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
            <Link href={'/'}>
              <li className="hover:text-green-700 cursor-pointer my-3">
                STRATEGIC CONSULTING
              </li>
            </Link>
            <Link href={'/'}>
              <li className="hover:text-green-700 cursor-pointer my-3">
                ABOUT US
              </li>
            </Link>
            <Link href={'/'}>
              <li className="hover:text-green-700 cursor-pointer my-3">
                CONTACT
              </li>
            </Link>
          </ul>{' '}
        </div>
      </div>

      <div className=" h-full hidden sm:flex w-full items-center justify-center bg-white  bg-opacity-80 backdrop-blur-sm">
        <div>
          <Link href={'/'}>
            <Image width={50} src={yourResto} alt="logo" />
          </Link>
        </div>

        <div className="w-[70%] h-full">
          <ul className=" sm:flex items-center justify-end h-full w-full text-sm font-semibold">
            <Link href={'/'} className="h-full">
              <li className="hover:text-gray-700 h-full relative cursor-pointer px-6 menu__item flex items-center ">
                STRATEGIC CONSULTING
                <ul className="menu__nesting bg-white border-t border-solid border-black w-full right-0 bottom-0 absolute">
                  <li>
                    <Link href="#" className="flex p-8 hover:text-black">
                      Projects 1
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex p-8 hover:text-black">
                      Projects 2
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex p-8 hover:text-black">
                      Projects 3
                    </Link>
                  </li>
                </ul>
              </li>
            </Link>
            <Link href={'/'}>
              <li className="hover:text-gray-500 cursor-pointer px-6">
                ABOUT US
              </li>
            </Link>
            <Link href={'/'}>
              <li className="hover:text-gray-500 cursor-pointer">CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
