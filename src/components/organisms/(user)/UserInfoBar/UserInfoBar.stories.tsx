import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { UserInfoBar } from "./UserInfoBar";

const meta: Meta<typeof UserInfoBar.Root> = {
  title: "Organisms/User/UserInfoBar",
  component: UserInfoBar.Root,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "UserInfoBar is a compound component for displaying user information, status, activity stats, and user actions.",
      },
    },
  },
  argTypes: {
    userId: {
      control: { type: "text" },
      description: "Unique identifier for the user",
    },
    userName: {
      control: { type: "text" },
      description: "Display name of the user",
    },
    userRole: {
      control: { type: "text" },
      description: "Role or title of the user",
    },
    avatarSrc: {
      control: { type: "text" },
      description: "Avatar image source URL",
    },
    status: {
      control: { type: "select" },
      options: ["online", "away", "busy", "offline"],
      description: "Current user status",
    },
    statusText: {
      control: { type: "text" },
      description: "Custom status text",
    },
    activeChats: {
      control: { type: "number" },
      description: "Number of active chat sessions",
    },
    totalMessages: {
      control: { type: "number" },
      description: "Total number of messages sent",
    },
    notificationCount: {
      control: { type: "number" },
      description: "Number of unread notifications",
    },
  },
  args: {
    onProfileClick: fn(),
    onSettingsClick: fn(),
    onNotificationClick: fn(),
    onLogout: fn(),
    onStatusChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full">
      <UserInfoBar.Root
        {...args}
        userId="user-1"
        userName="김개발자"
        userRole="Senior Developer"
        status="online"
        activeChats={3}
        totalMessages={127}
        notificationCount={5}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
          <UserInfoBar.ActivityInfo>
            <UserInfoBar.ActiveChats />
            <UserInfoBar.TotalMessages />
          </UserInfoBar.ActivityInfo>
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.NotificationButton />
            <UserInfoBar.SettingsButton />
            <UserInfoBar.LogoutButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: (args) => (
    <div className="w-full">
      <UserInfoBar.Root
        {...args}
        userId="user-2"
        userName="박디자이너"
        userRole="UI/UX Designer"
        avatarSrc="/images/avatar-designer.jpg"
        status="away"
        activeChats={1}
        totalMessages={89}
        notificationCount={12}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
          <UserInfoBar.ActivityInfo>
            <UserInfoBar.ActiveChats />
            <UserInfoBar.TotalMessages />
          </UserInfoBar.ActivityInfo>
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.NotificationButton />
            <UserInfoBar.SettingsButton />
            <UserInfoBar.LogoutButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};

export const BusyStatus: Story = {
  render: (args) => (
    <div className="w-full">
      <UserInfoBar.Root
        {...args}
        userId="user-3"
        userName="이매니저"
        userRole="Project Manager"
        status="busy"
        statusText="회의 중"
        activeChats={7}
        totalMessages={453}
        notificationCount={0}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
          <UserInfoBar.ActivityInfo>
            <UserInfoBar.ActiveChats />
            <UserInfoBar.TotalMessages />
          </UserInfoBar.ActivityInfo>
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.NotificationButton />
            <UserInfoBar.SettingsButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};

export const OfflineUser: Story = {
  render: (args) => (
    <div className="w-full">
      <UserInfoBar.Root
        {...args}
        userId="user-4"
        userName="최인턴"
        userRole="Intern Developer"
        status="offline"
        activeChats={0}
        totalMessages={23}
        notificationCount={3}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
          <UserInfoBar.ActivityInfo>
            <UserInfoBar.ActiveChats />
            <UserInfoBar.TotalMessages />
          </UserInfoBar.ActivityInfo>
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.NotificationButton />
            <UserInfoBar.SettingsButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};

export const HighActivity: Story = {
  render: (args) => (
    <div className="w-full">
      <UserInfoBar.Root
        {...args}
        userId="user-5"
        userName="강팀장"
        userRole="Team Lead"
        status="online"
        activeChats={15}
        totalMessages={2847}
        notificationCount={99}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
          <UserInfoBar.ActivityInfo>
            <UserInfoBar.ActiveChats />
            <UserInfoBar.TotalMessages />
          </UserInfoBar.ActivityInfo>
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.NotificationButton />
            <UserInfoBar.SettingsButton />
            <UserInfoBar.LogoutButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};

export const MinimalActions: Story = {
  render: (args) => (
    <div className="w-full">
      <UserInfoBar.Root
        {...args}
        userId="user-6"
        userName="정사용자"
        userRole="User"
        status="online"
        activeChats={2}
        totalMessages={56}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.SettingsButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};

export const WithStatusActions: Story = {
  render: (args) => (
    <div className="w-full space-y-4">
      <UserInfoBar.Root
        {...args}
        userId="user-7"
        userName="한관리자"
        userRole="Admin"
        status="online"
        activeChats={8}
        totalMessages={1250}
        notificationCount={7}
      >
        <UserInfoBar.LeftSection>
          <UserInfoBar.UserProfile>
            <UserInfoBar.Avatar />
            <UserInfoBar.UserDetails>
              <UserInfoBar.UserName />
              <UserInfoBar.UserRole />
            </UserInfoBar.UserDetails>
          </UserInfoBar.UserProfile>
          <UserInfoBar.StatusIndicator />
          <UserInfoBar.ActivityInfo>
            <UserInfoBar.ActiveChats />
            <UserInfoBar.TotalMessages />
          </UserInfoBar.ActivityInfo>
        </UserInfoBar.LeftSection>
        <UserInfoBar.RightSection>
          <UserInfoBar.ActionButtons>
            <UserInfoBar.StatusChangeButton targetStatus="away" />
            <UserInfoBar.StatusChangeButton targetStatus="busy" />
            <UserInfoBar.NotificationButton />
            <UserInfoBar.SettingsButton />
          </UserInfoBar.ActionButtons>
        </UserInfoBar.RightSection>
      </UserInfoBar.Root>
    </div>
  ),
};
