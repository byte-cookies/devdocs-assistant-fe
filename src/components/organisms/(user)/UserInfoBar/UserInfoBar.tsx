import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import React, { createContext, useContext } from "react";
import {
  actionButtonsStyles,
  activityInfoStyles,
  activityItemStyles,
  activityLabelStyles,
  activityValueStyles,
  avatarStyles,
  badgeCountStyles,
  barStyles,
  leftSectionStyles,
  notificationBadgeStyles,
  rightSectionStyles,
  statusDotStyles,
  statusIndicatorStyles,
  statusTextStyles,
  userDetailsStyles,
  userNameStyles,
  userProfileStyles,
  userRoleStyles,
} from "./UserInfoBar.styles";

// Context for UserInfoBar state
interface UserInfoBarContextValue {
  userId?: string;
  userName?: string;
  userRole?: string;
  avatarSrc?: string;
  status?: "online" | "away" | "busy" | "offline";
  statusText?: string;
  activeChats?: number;
  totalMessages?: number;
  lastActiveTime?: string;
  notificationCount?: number;
  onProfileClick?: (userId: string) => void;
  onSettingsClick?: () => void;
  onNotificationClick?: () => void;
  onLogout?: () => void;
  onStatusChange?: (status: "online" | "away" | "busy" | "offline") => void;
}

const UserInfoBarContext = createContext<UserInfoBarContextValue>({});

// Root Component
interface UserInfoBarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  userId?: string;
  userName?: string;
  userRole?: string;
  avatarSrc?: string;
  status?: "online" | "away" | "busy" | "offline";
  statusText?: string;
  activeChats?: number;
  totalMessages?: number;
  lastActiveTime?: string;
  notificationCount?: number;
  onProfileClick?: (userId: string) => void;
  onSettingsClick?: () => void;
  onNotificationClick?: () => void;
  onLogout?: () => void;
  onStatusChange?: (status: "online" | "away" | "busy" | "offline") => void;
}

function UserInfoBarRoot({
  userId,
  userName,
  userRole,
  avatarSrc,
  status = "offline",
  statusText,
  activeChats = 0,
  totalMessages = 0,
  lastActiveTime,
  notificationCount = 0,
  onProfileClick,
  onSettingsClick,
  onNotificationClick,
  onLogout,
  onStatusChange,
  className,
  children,
  ...props
}: UserInfoBarRootProps) {
  return (
    <UserInfoBarContext.Provider
      value={{
        userId,
        userName,
        userRole,
        avatarSrc,
        status,
        statusText,
        activeChats,
        totalMessages,
        lastActiveTime,
        notificationCount,
        onProfileClick,
        onSettingsClick,
        onNotificationClick,
        onLogout,
        onStatusChange,
      }}
    >
      <div className={cn(barStyles(), className)} {...props}>
        {children}
      </div>
    </UserInfoBarContext.Provider>
  );
}

// Left Section Component
interface LeftSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function LeftSection({ className, children, ...props }: LeftSectionProps) {
  return (
    <div className={cn(leftSectionStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Right Section Component
interface RightSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function RightSection({ className, children, ...props }: RightSectionProps) {
  return (
    <div className={cn(rightSectionStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// User Profile Component
interface UserProfileProps extends React.HTMLAttributes<HTMLDivElement> {}

function UserProfile({ className, children, ...props }: UserProfileProps) {
  return (
    <div className={cn(userProfileStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Avatar Component
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

function Avatar({ src, alt, className, ...props }: AvatarProps) {
  const { avatarSrc, userName, userId, onProfileClick } =
    useContext(UserInfoBarContext);
  const imageSrc = src || avatarSrc;
  const imageAlt = alt || userName || "User avatar";

  const handleClick = () => {
    if (userId && onProfileClick) {
      onProfileClick(userId);
    }
  };

  return (
    <div
      className={cn(avatarStyles(), "cursor-pointer", className)}
      onClick={handleClick}
      {...props}
    >
      {imageSrc ? (
        <Icon src={imageSrc} alt={imageAlt} sizing="md" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Text content={userName?.charAt(0) || "U"} visual="white" />
        </div>
      )}
    </div>
  );
}

// User Details Component
interface UserDetailsProps extends React.HTMLAttributes<HTMLDivElement> {}

function UserDetails({ className, children, ...props }: UserDetailsProps) {
  return (
    <div className={cn(userDetailsStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// User Name Component
interface UserNameProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
}

function UserName({ name, className, ...props }: UserNameProps) {
  const { userName } = useContext(UserInfoBarContext);
  const displayName = name || userName || "Guest User";

  return (
    <Text
      as="div"
      content={displayName}
      className={cn(userNameStyles(), className)}
      {...props}
    />
  );
}

// User Role Component
interface UserRoleProps extends React.HTMLAttributes<HTMLDivElement> {
  role?: string;
}

function UserRole({ role, className, ...props }: UserRoleProps) {
  const { userRole } = useContext(UserInfoBarContext);
  const displayRole = role || userRole || "User";

  return (
    <Text
      as="div"
      content={displayRole}
      className={cn(userRoleStyles(), className)}
      {...props}
    />
  );
}

// Status Indicator Component
interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

function StatusIndicator({ className, ...props }: StatusIndicatorProps) {
  const { status, statusText } = useContext(UserInfoBarContext);

  const getStatusText = () => {
    if (statusText) return statusText;
    switch (status) {
      case "online":
        return "온라인";
      case "away":
        return "자리비움";
      case "busy":
        return "바쁨";
      case "offline":
        return "오프라인";
      default:
        return "오프라인";
    }
  };

  return (
    <div className={cn(statusIndicatorStyles(), className)} {...props}>
      <div className={cn(statusDotStyles({ status }))} />
      <Text
        as="span"
        content={getStatusText()}
        className={cn(statusTextStyles({ status }))}
      />
    </div>
  );
}

// Activity Info Component
interface ActivityInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

function ActivityInfo({ className, children, ...props }: ActivityInfoProps) {
  return (
    <div className={cn(activityInfoStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Activity Item Component
interface ActivityItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
}

function ActivityItem({
  value,
  label,
  className,
  ...props
}: ActivityItemProps) {
  return (
    <div className={cn(activityItemStyles(), className)} {...props}>
      <Text
        as="span"
        content={String(value)}
        className={cn(activityValueStyles())}
      />
      <Text as="span" content={label} className={cn(activityLabelStyles())} />
    </div>
  );
}

// Active Chats Component
interface ActiveChatsProps extends React.HTMLAttributes<HTMLDivElement> {}

function ActiveChats({ className, ...props }: ActiveChatsProps) {
  const { activeChats } = useContext(UserInfoBarContext);

  return (
    <ActivityItem
      value={activeChats || 0}
      label="활성 채팅"
      className={className}
      {...props}
    />
  );
}

// Total Messages Component
interface TotalMessagesProps extends React.HTMLAttributes<HTMLDivElement> {}

function TotalMessages({ className, ...props }: TotalMessagesProps) {
  const { totalMessages } = useContext(UserInfoBarContext);

  return (
    <ActivityItem
      value={totalMessages || 0}
      label="총 메시지"
      className={className}
      {...props}
    />
  );
}

// Action Buttons Component
interface ActionButtonsProps extends React.HTMLAttributes<HTMLDivElement> {}

function ActionButtons({ className, children, ...props }: ActionButtonsProps) {
  return (
    <div className={cn(actionButtonsStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Notification Button Component
interface NotificationButtonProps extends React.ComponentProps<typeof Button> {}

function NotificationButton({ className, ...props }: NotificationButtonProps) {
  const { notificationCount, onNotificationClick } =
    useContext(UserInfoBarContext);

  return (
    <div className={cn(notificationBadgeStyles(), className)}>
      <Button
        visual="ghost"
        sizing="sm"
        leftIcon="/icons/notification.svg"
        onClick={onNotificationClick}
        {...props}
      />
      {notificationCount && notificationCount > 0 && (
        <div className={cn(badgeCountStyles())}>
          <Text
            as="span"
            content={notificationCount > 99 ? "99+" : String(notificationCount)}
            sizing="sm"
          />
        </div>
      )}
    </div>
  );
}

// Settings Button Component
interface SettingsButtonProps extends React.ComponentProps<typeof Button> {}

function SettingsButton({ ...props }: SettingsButtonProps) {
  const { onSettingsClick } = useContext(UserInfoBarContext);

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/settings.svg"
      onClick={onSettingsClick}
      {...props}
    />
  );
}

// Logout Button Component
interface LogoutButtonProps extends React.ComponentProps<typeof Button> {}

function LogoutButton({ ...props }: LogoutButtonProps) {
  const { onLogout } = useContext(UserInfoBarContext);

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/logout.svg"
      text="로그아웃"
      onClick={onLogout}
      {...props}
    />
  );
}

// Status Change Button Component
interface StatusChangeButtonProps extends React.ComponentProps<typeof Button> {
  targetStatus: "online" | "away" | "busy" | "offline";
}

function StatusChangeButton({
  targetStatus,
  ...props
}: StatusChangeButtonProps) {
  const { onStatusChange } = useContext(UserInfoBarContext);

  const getStatusIcon = () => {
    switch (targetStatus) {
      case "online":
        return "/icons/online.svg";
      case "away":
        return "/icons/away.svg";
      case "busy":
        return "/icons/busy.svg";
      case "offline":
        return "/icons/offline.svg";
      default:
        return "/icons/offline.svg";
    }
  };

  const getStatusLabel = () => {
    switch (targetStatus) {
      case "online":
        return "온라인";
      case "away":
        return "자리비움";
      case "busy":
        return "바쁨";
      case "offline":
        return "오프라인";
      default:
        return "오프라인";
    }
  };

  const handleClick = () => {
    if (onStatusChange) {
      onStatusChange(targetStatus);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon={getStatusIcon()}
      text={getStatusLabel()}
      onClick={handleClick}
      {...props}
    />
  );
}

// Export compound component
export const UserInfoBar = {
  Root: UserInfoBarRoot,
  LeftSection,
  RightSection,
  UserProfile,
  Avatar,
  UserDetails,
  UserName,
  UserRole,
  StatusIndicator,
  ActivityInfo,
  ActivityItem,
  ActiveChats,
  TotalMessages,
  ActionButtons,
  NotificationButton,
  SettingsButton,
  LogoutButton,
  StatusChangeButton,
};

export type UserInfoBarProps = UserInfoBarRootProps;
export default UserInfoBar;
