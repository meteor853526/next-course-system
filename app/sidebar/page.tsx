"use client";
import { getServerSession } from 'next-auth';
import { getSession ,useSession} from 'next-auth/react'

import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';
import  DotImg from  '../../images/dot.png'

import React from "react";

function Image({ src, alt, className, width, height }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}

export default function Sidebar() {
  return (
    <aside className="self-stretch flex flex-col mr-1 mt-6 m-6 w-1/6 border-e-zinc-950 border-2">
      <section className="items-start flex w-[200px] max-w-full flex-col mt-5 px-2 py-0.5">
        <nav className="items-start content-center flex-wrap flex w-36 max-w-full justify-between gap-5 mt-0.5 rounded-lg">
          <div className="self-stretch text-zinc-900 text-opacity-40 text-center text-sm leading-[142.86%]">
            Favorites
          </div>
          <div className="self-stretch text-zinc-900 text-opacity-20 text-center text-sm leading-[142.86%]">
            Recently
          </div>
        </nav>
        <button className="items-start content-center flex-wrap flex w-[164px] max-w-full gap-1 mt-3 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a904558a-452f-400e-a995-3943031dcfc3?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 1"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[111px]">
            Overview
          </div>
        </button>
        <button className="items-start content-center flex-wrap flex w-[164px] max-w-full gap-1 mt-3 -mb-0.5 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/905ec73f-3d7c-4feb-b33a-18668156369d?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 2"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[110px]">
            Projects
          </div>
        </button>
      </section>
      <section className="items-start flex w-[198px] max-w-full flex-col mt-9 py-0.5">
        <div className="self-center text-zinc-900 text-opacity-40 text-sm leading-[142.86%] w-[156px] max-w-full -mt-0.5">
          Dashboards
        </div>

        <button className="items-start content-center self-stretch flex-wrap bg-zinc-900 bg-opacity-10 flex w-full justify-between gap-2 mt-2 pr-2 py-1 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c42e690-4e4d-4480-9aa8-6a278a17b92e?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 3"
            className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9576076a-dd0e-45cc-84a9-b73e56ac8118?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 4"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2d6e2f-ecd8-4a18-9018-2a24768ed615?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 5"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[98px]">
              Default
            </div>
          </div>
        </button>
        <button className="items-start content-center self-center flex-wrap flex w-[164px] max-w-full gap-1 mt-2 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9576076a-dd0e-45cc-84a9-b73e56ac8118?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 6"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/137dc906-6509-4aac-b706-3d5553412474?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 7"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[100px]">
              eCommerce
            </div>
          </div>
        </button>
        <button className="items-start content-center self-center flex-wrap flex w-[164px] max-w-full gap-1 mt-3 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/677214f9-1c60-4524-80db-421041135a19?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 8"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c77a9d28-46da-4a5b-91ca-96be8f17014b?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 9"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[91px]">
              Projects
            </div>
          </div>
        </button>
        <button className="items-start content-center self-center flex-wrap flex w-[164px] max-w-full gap-1 mt-3 mb-0.5 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be057e7-fc27-45e7-9c2b-3bd9e278eb82?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 10"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eedb8d4-ed90-413f-9adf-5f5b023babf0?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 11"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[95px]">
              Courses
            </div>
          </div>
        </button>
      </section>
      <section className="items-start flex w-[196px] max-w-full grow flex-col mt-8 px-2 py-0.5">
        <div className="self-center text-zinc-900 text-opacity-40 text-sm leading-[142.86%] w-[156px] max-w-full -mt-0.5">
          Pages
        </div>
        <button className="items-start content-center self-stretch flex-wrap flex justify-between gap-1 mt-3 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0adcda9-1973-4742-a604-32849b7dfacc?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 12"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/396d41db-793b-4553-aac1-3b7f2586a902?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 13"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[129px]">
              User Profile
            </div>
          </div>
        </button>
        <button className="items-start content-center self-stretch flex-wrap flex justify-between gap-1 mt-3 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2276a0-81b7-490e-974f-4e9d3be91a04?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 14"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/89038eba-5b3b-49af-978b-679035591653?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 15"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[129px]">
              Account
            </div>
          </div>
        </button>
        <button className="items-start content-center self-stretch flex-wrap flex justify-between gap-1 mt-3 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d15f3b1-e071-455d-a298-f3260887865f?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 16"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d6a77a5-4743-451b-b269-b3e5ce76b3d3?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 17"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[129px]">
              Corporate
            </div>
          </div>
        </button>
        <button className="items-start content-center self-stretch flex-wrap flex justify-between gap-1 mt-3 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb0d0ff-06c1-4945-9f85-b80bf88624e1?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 18"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81f19b2c-7711-45a3-96c0-ae80a3f4a8e5?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 19"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[129px]">
              Blog
            </div>
          </div>
        </button>
        <button className="items-start content-center self-stretch flex-wrap flex justify-between gap-1 mt-3 mb-0.5 rounded-lg hover:bg-slate-100">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91f50d44-390c-4008-aa04-9c54a58effc5?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
            alt="Image 20"
            className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
            width={100}
            height={100}
          />
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa7302e4-e26b-43da-a50e-0a54c5658e99?apiKey=ef7ca30b65a7464eb8e495ef9f00b0fb"
              alt="Image 21"
              className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
              width={100}
              height={100}
            />
            <div className="self-stretch text-zinc-900 text-sm leading-[142.86%] w-[129px]">
              Social
            </div>
          </div>
        </button>
      </section>
    </aside>
  );
}