import { ReactElement } from 'react';
import img from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../components/Button';

interface ChildrenProps {
  children: ReactElement[] | ReactElement;
}

interface imgProps {
  src: string;
  linkTo: string;
}

const Row = ({ children }: ChildrenProps) => {
  return <div className="flex flex-wrap px-2 p-2">{children}</div>;
};

const Column = ({ children }: ChildrenProps) => {
  return <div className="flex flex-1/2 basis-1/2 max-w-1/2">{children}</div>;
};

const Img = (props: imgProps) => {
  return (
    <div className="relative">
      <img alt="" src={props.src} className="align-middle w-full mt-4" />
      <div className="flex relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1">
        <Link href={props.linkTo}>VIEW PROJECT</Link>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div>
    <h1 className="text-center font-bold py-10 text-3xl dark:text-white">Image Gallery With Grid</h1>

<div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
  <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
    <div className="w-full row-span-2">
      <img
        src="https://imgix.cosmicjs.com/43bcfae0-8bea-11ed-bac9-7fe1734a16aa-RealIsRare2.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
    </div>
    <div className="w-full col-span-2 row-span-2">
      <img
        src="https://imgix.cosmicjs.com/7e055ed0-8beb-11ed-bac9-7fe1734a16aa-PinkOct1.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full ">
      <img
        src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full">
      <img
        src="https://imgix.cosmicjs.com/abb42a30-8c10-11ed-bac9-7fe1734a16aa-TC1.jpeg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full col-span-2 row-span-2">
      <img
        src="https://imgix.cosmicjs.com/ca11b9e0-8c13-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
    <div className="w-full col-span-2">
      <img
        src="https://imgix.cosmicjs.com/490571d0-8d7f-11ed-bac9-7fe1734a16aa-HalfDayTeaHouse2.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full">
      <img
        src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full">
      <img
        src="https://imgix.cosmicjs.com/abb42a30-8c10-11ed-bac9-7fe1734a16aa-TC1.jpeg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
  </div>
</div>
</div>

  );
}
