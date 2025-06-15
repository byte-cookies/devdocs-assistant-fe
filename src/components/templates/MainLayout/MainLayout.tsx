"use client";

import { cn } from "@/utils/tailwindHelper";
import { ReactNode } from "react";
import {
  containerStyles,
  leftSidebarStyles,
  mainContentStyles,
  rightSidebarStyles,
} from "./MainLayout.styles";

export interface MainLayoutProps {
  leftSidebar?: ReactNode;
  rightSidebar?: ReactNode;
  mainContent?: ReactNode;
}

export default function MainLayout({
  leftSidebar,
  rightSidebar,
  mainContent,
}: MainLayoutProps) {
  return (
    <div className={cn(containerStyles())}>
      {/* 왼쪽 사이드바 */}
      <aside className={cn(leftSidebarStyles())}>{leftSidebar}</aside>

      {/* 메인 콘텐츠 */}
      <main className={cn(mainContentStyles(), "scrollbar-hide")}>
        {mainContent}
      </main>

      {/* 오른쪽 사이드바 */}
      <aside className={cn(rightSidebarStyles())}>{rightSidebar}</aside>
    </div>
  );
}
