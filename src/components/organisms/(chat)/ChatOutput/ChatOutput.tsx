import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import React, { createContext, useContext } from "react";
import {
  actionsStyles,
  avatarStyles,
  chatOutputStyles,
  headerStyles,
  messageBodyStyles,
  messageContainerStyles,
  messageContentStyles,
  nameStyles,
  timestampStyles,
} from "./ChatOutput.styles";

// Context for ChatOutput state
interface ChatOutputContextValue {
  messageId?: string;
  senderName?: string;
  timestamp?: string;
  avatarSrc?: string;
  onCopy?: (content: string) => void;
  onReply?: (messageId: string) => void;
  onReact?: (messageId: string, reaction: string) => void;
}

const ChatOutputContext = createContext<ChatOutputContextValue>({});

// Root Component
interface ChatOutputRootProps extends React.HTMLAttributes<HTMLDivElement> {
  messageId?: string;
  senderName?: string;
  timestamp?: string;
  avatarSrc?: string;
  onCopy?: (content: string) => void;
  onReply?: (messageId: string) => void;
  onReact?: (messageId: string, reaction: string) => void;
}

function ChatOutputRoot({
  messageId,
  senderName,
  timestamp,
  avatarSrc,
  onCopy,
  onReply,
  onReact,
  className,
  children,
  ...props
}: ChatOutputRootProps) {
  return (
    <ChatOutputContext.Provider
      value={{
        messageId,
        senderName,
        timestamp,
        avatarSrc,
        onCopy,
        onReply,
        onReact,
      }}
    >
      <div className={cn(chatOutputStyles(), className)} {...props}>
        {children}
      </div>
    </ChatOutputContext.Provider>
  );
}

// Message Container Component
interface MessageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function MessageContainer({
  className,
  children,
  ...props
}: MessageContainerProps) {
  return (
    <div className={cn(messageContainerStyles(), className)} {...props}>
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
  const { avatarSrc, senderName } = useContext(ChatOutputContext);
  const imageSrc = src || avatarSrc;
  const imageAlt = alt || senderName || "User avatar";

  return (
    <div className={cn(avatarStyles(), className)} {...props}>
      {imageSrc ? (
        <Icon src={imageSrc} alt={imageAlt} sizing="md" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Text content={senderName?.charAt(0) || "U"} visual="white" />
        </div>
      )}
    </div>
  );
}

// Content Container Component
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function Content({ className, children, ...props }: ContentProps) {
  return (
    <div className={cn(messageContentStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Header Component
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function Header({ className, children, ...props }: HeaderProps) {
  return (
    <div className={cn(headerStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Name Component
interface NameProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
}

function Name({ name, className, ...props }: NameProps) {
  const { senderName } = useContext(ChatOutputContext);
  const displayName = name || senderName || "Unknown User";

  return (
    <Text
      as="span"
      content={displayName}
      className={cn(nameStyles(), className)}
      {...props}
    />
  );
}

// Timestamp Component
interface TimestampProps extends React.HTMLAttributes<HTMLSpanElement> {
  time?: string;
}

function Timestamp({ time, className, ...props }: TimestampProps) {
  const { timestamp } = useContext(ChatOutputContext);
  const displayTime = time || timestamp || new Date().toLocaleTimeString();

  return (
    <Text
      as="span"
      content={displayTime}
      className={cn(timestampStyles(), className)}
      {...props}
    />
  );
}

// Message Body Component
interface MessageBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
}

function MessageBody({
  content,
  className,
  children,
  ...props
}: MessageBodyProps) {
  if (content) {
    return (
      <Text
        as="div"
        content={content}
        className={cn(messageBodyStyles(), className)}
        {...props}
      />
    );
  }

  return (
    <div className={cn(messageBodyStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Actions Component
interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

function Actions({ className, children, ...props }: ActionsProps) {
  return (
    <div className={cn(actionsStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Copy Button Component
interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  content?: string;
}

function CopyButton({ content, ...props }: CopyButtonProps) {
  const { onCopy } = useContext(ChatOutputContext);

  const handleCopy = () => {
    if (content && onCopy) {
      onCopy(content);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/copy.svg"
      onClick={handleCopy}
      {...props}
    />
  );
}

// Reply Button Component
interface ReplyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function ReplyButton({ ...props }: ReplyButtonProps) {
  const { messageId, onReply } = useContext(ChatOutputContext);

  const handleReply = () => {
    if (messageId && onReply) {
      onReply(messageId);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/reply.svg"
      onClick={handleReply}
      {...props}
    />
  );
}

// React Button Component
interface ReactButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  reaction?: string;
}

function ReactButton({ reaction = "👍", ...props }: ReactButtonProps) {
  const { messageId, onReact } = useContext(ChatOutputContext);

  const handleReact = () => {
    if (messageId && onReact) {
      onReact(messageId, reaction);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      text={reaction}
      onClick={handleReact}
      {...props}
    />
  );
}

// Export compound component
export const ChatOutput = {
  Root: ChatOutputRoot,
  Container: MessageContainer,
  Avatar,
  Content,
  Header,
  Name,
  Timestamp,
  Body: MessageBody,
  Actions,
  CopyButton,
  ReplyButton,
  ReactButton,
};

export type ChatOutputProps = ChatOutputRootProps;
export default ChatOutput;
