"use client";

import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Image from "next/image";

export default function UserInfoBar() {
  return (
    <div className="relative flex flex-col py-8 pr-8 w-full h-full bg-primary shadow-md justify-between">
      {/* 상단 영역 */}
      <div className="flex flex-col w-full h-full gap-4 pl-8">
        {/* 로고 */}
        <div className="flex items-center justify-between mb-2 w-full h-[2rem]">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={128}
            height={128}
            className="h-full w-auto"
          />
          <Text
            content="DevDocs AI"
            textLayout={"justify-center"}
            textVisual={"tertiary"}
            textSizing={"3xl"}
          />
        </div>
        {/* 사용자 정보 */}
        <div className="flex items-center justify-center p-2 mb-4 w-full h-[4rem] bg-background rounded-lg border-gray-300 border-1">
          <div className="flex items-center justify-center basis-1/3 h-full">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
              <Icon
                src="/people.svg"
                alt="User Avatar"
                iconSizing="md"
                className="brightness-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-1/3 h-full">
            <Text
              content="John Doe"
              textLayout={"justify-start"}
              textVisual={"tertiary"}
              textSizing={"md"}
              className="font-semibold h-auto"
            />
            <Text
              content="john.doe@example.com"
              textLayout={"justify-start"}
              textVisual={"tertiary"}
              textSizing={"xs"}
            />
          </div>
          <div className="flex items-center justify-center basis-1/3 h-full">
            <Icon
              src="/down.svg"
              alt="Dropdown Icon"
              iconSizing="md"
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
        {/* 채팅 정보 */}
        <div className="flex flex-col w-full h-[5rem] gap-3">
          <div className="flex items-center gap-2 mb-2 w-full h-[1rem]">
            <Text
              content="Chat"
              textLayout={"justify-start"}
              textVisual={"white"}
              textSizing={"md"}
              className="font-semibold"
            />
          </div>
          <div className="flex items-center gap-2 w-full h-[1rem] px-2">
            <Icon
              src="/chat.svg"
              alt="Chat Icon"
              iconSizing="lg"
              className="cursor-pointer hover:opacity-80 brightness-0 invert"
            />
            <Text
              content="5 Active Sessions"
              textLayout={"justify-start"}
              textVisual={"white"}
              textSizing={"sm"}
              className="font-semibold"
            />
          </div>
        </div>
      </div>

      {/* 가로선 */}
      <div className="w-full h-px bg-gray-600 mx-auto mb-4" />

      {/* 하단 영역 */}
      <div className="w-full h-[8rem] flex flex-col justify-center gap-4 pl-6">
        <Text
          content="Preferences"
          textLayout={"justify-start"}
          textVisual={"white"}
          textSizing={"md"}
          className="font-semibold"
        />
        <div className="flex items-center gap-4 w-full h-[2rem] px-2">
          <Icon
            src="/settings.svg"
            alt="Settings Icon"
            iconSizing="lg"
            className="cursor-pointer hover:opacity-80 brightness-0 invert"
          />
          <Text
            content="Settings"
            textLayout={"justify-start"}
            textVisual={"white"}
            textSizing={"md"}
            className="font-semibold"
          />
        </div>
        <div className="flex items-center gap-4 w-full h-[3rem] bg-background rounded-lg p-3">
          <Icon
            src="/darkMode.svg"
            alt="Dark Mode Icon"
            iconSizing="xl"
            className="cursor-pointer hover:opacity-80"
          />
          <Text
            content="Dark Mode"
            textLayout={"justify-start"}
            textVisual={"white"}
            textSizing={"md"}
            className="text-dark font-semibold"
          />
          <Image width={20} height={20} alt="switcher" src="/Switcher.svg" />
        </div>
      </div>
    </div>
  );
}
