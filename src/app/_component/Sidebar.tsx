"use client";

import Link from "next/link";
import Image from "next/image";

const chats = [
  { id: 1, title: "Comments" },
  { id: 2, title: "Comments" },
  { id: 3, title: "Comments" },
];

const userInfo = {
  name: "홍길동",
  email: "hongGilDong@gmail.com",
};

export default function Sidebar() {
  return (
    <aside className="w-full h-full flex max-w-xs bg-primary border-r flex-col items-center overflow-y-auto">
      <div className="Logo w-full flex justify-center">
        <div className="LogoBox flex h-[5rem] w-[13rem] justify-between items-center">
          <Image src="/teamLogo.svg" alt="Team Logo" width={32} height={32} />
          <h2 className="text-[1.875rem] text-textPrimary font-bold">
            DevDocs AI
          </h2>
        </div>
      </div>
      <div className="Profile w-full flex justify-center">
        <div className="ProfileBox flex h-[5rem] w-[16rem] bg-background border-solid border-[0.09rem] border-gray-400 rounded-[1rem] justify-center items-center">
          <Image
            src="/profileIcon.svg"
            alt="Profile Icon"
            width={48}
            height={48}
          />
          <div className="ProfileInfo flex flex-col w-[9rem] ml-[1rem]">
            <p className="text-[1.125rem] font-bold text-textPrimary">
              {userInfo.name}
            </p>
            <p className="text-[0.625rem] font-semibold text-textSecondary">
              {userInfo.email}
            </p>
          </div>
          <div className="MoreInfo flex justify-center">
            <Image
              src="/moreInfoIcon.svg"
              alt="More Info Icon"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="ChatList w-full h-[70%] flex flex-col items-center">
        <div className="mt-[1.35rem] w-[15rem]">
          <p className="text-[0.875rem] font-bold text-background">Chat</p>
        </div>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id}>
              <Link
                href={`/chat/${chat.id}`}
                className="flex justify-between w-[15rem] py-[0.8rem] rounded hover:bg-gray-200"
              >
                <Image
                  src="/chatIcon.svg"
                  alt="Chat Icon"
                  width={15}
                  height={12}
                  className="ml-2"
                />
                <p className="w-[12.8rem] text-[0.875rem] text-white font-semibold">
                  {chat.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="Preference w-full flex flex-col items-center">
        <div className="SplitLine w-full flex">
          <div className="w-[90%] h-[0.1rem] bg-gray-600" />
        </div>
        <div className="mt-[1.35rem] w-[15rem]">
          <p className="text-[0.875rem] font-bold text-background">
            Preference
          </p>
        </div>
        <div className="PreferenceBox">
          <Link
            href="/settings"
            className="flex justify-between w-[17rem] py-[0.8rem] px-3 my-2 rounded-[1rem] hover:bg-gray-200"
          >
            <Image
              src="/settingsIcon.svg"
              alt="Settings Icon"
              width={20}
              height={20}
            />
            <p className="w-[13.5rem] text-[0.875rem] text-white font-semibold">
              Settings
            </p>
          </Link>
          <div className="DarkmodeBox flex justify-between outline-[0.15rem] px-3 outline-background bg-background rounded-[1rem] w-[17rem] py-[0.8rem]">
            <Image
              src="/darkmodeIcon.svg"
              alt="Dark Mode Icon"
              width={20}
              height={20}
              className="pl-0.5"
            />
            <p className="w-[10.5rem] text-[0.875rem] text-textPrimary font-semibold">
              Dark Mode
            </p>
            <Image
              src="/toggleIcon.svg"
              alt="Toggle Icon"
              width={32}
              height={30}
              className="pr-0.5"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
