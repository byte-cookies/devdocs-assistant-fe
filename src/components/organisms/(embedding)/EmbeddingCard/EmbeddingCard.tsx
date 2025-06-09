import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import React, { createContext, useContext } from "react";
import {
  badgeStyles,
  cardStyles,
  contentStyles,
  descriptionStyles,
  dimensionStyles,
  embeddingInfoStyles,
  footerStyles,
  headerStyles,
  metadataItemStyles,
  metadataLabelStyles,
  metadataStyles,
  metadataValueStyles,
  titleStyles,
} from "./EmbeddingCard.styles";

// Context for EmbeddingCard state
interface EmbeddingCardContextValue {
  id?: string;
  title?: string;
  description?: string;
  dimensions?: number;
  modelName?: string;
  createdAt?: string;
  source?: string;
  similarity?: number;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDownload?: (id: string) => void;
}

const EmbeddingCardContext = createContext<EmbeddingCardContextValue>({});

// Root Component
interface EmbeddingCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  title?: string;
  description?: string;
  dimensions?: number;
  modelName?: string;
  createdAt?: string;
  source?: string;
  similarity?: number;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDownload?: (id: string) => void;
}

function EmbeddingCardRoot({
  id,
  title,
  description,
  dimensions,
  modelName,
  createdAt,
  source,
  similarity,
  onView,
  onEdit,
  onDelete,
  onDownload,
  className,
  children,
  ...props
}: EmbeddingCardRootProps) {
  return (
    <EmbeddingCardContext.Provider
      value={{
        id,
        title,
        description,
        dimensions,
        modelName,
        createdAt,
        source,
        similarity,
        onView,
        onEdit,
        onDelete,
        onDownload,
      }}
    >
      <div className={cn(cardStyles(), className)} {...props}>
        {children}
      </div>
    </EmbeddingCardContext.Provider>
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

// Title Component
interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

function Title({ text, className, ...props }: TitleProps) {
  const { title } = useContext(EmbeddingCardContext);
  const displayTitle = text || title || "Untitled Embedding";

  return (
    <Text
      as="h3"
      content={displayTitle}
      className={cn(titleStyles(), className)}
      {...props}
    />
  );
}

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  variant?: "default" | "success" | "warning" | "error";
}

function Badge({ text, variant = "default", className, ...props }: BadgeProps) {
  const { modelName } = useContext(EmbeddingCardContext);
  const displayText = text || modelName || "Unknown Model";

  return (
    <Text
      as="span"
      content={displayText}
      className={cn(badgeStyles(), className)}
      {...props}
    />
  );
}

// Content Component
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function Content({ className, children, ...props }: ContentProps) {
  return (
    <div className={cn(contentStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Description Component
interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
}

function Description({ text, className, ...props }: DescriptionProps) {
  const { description } = useContext(EmbeddingCardContext);
  const displayDescription = text || description || "No description available";

  return (
    <Text
      as="p"
      content={displayDescription}
      className={cn(descriptionStyles(), className)}
      {...props}
    />
  );
}

// Metadata Container Component
interface MetadataProps extends React.HTMLAttributes<HTMLDivElement> {}

function Metadata({ className, children, ...props }: MetadataProps) {
  return (
    <div className={cn(metadataStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Metadata Item Component
interface MetadataItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}

function MetadataItem({
  label,
  value,
  className,
  ...props
}: MetadataItemProps) {
  return (
    <div className={cn(metadataItemStyles(), className)} {...props}>
      <Text as="span" content={label} className={cn(metadataLabelStyles())} />
      <Text as="span" content={value} className={cn(metadataValueStyles())} />
    </div>
  );
}

// Embedding Info Component
interface EmbeddingInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

function EmbeddingInfo({ className, ...props }: EmbeddingInfoProps) {
  const { dimensions, similarity } = useContext(EmbeddingCardContext);

  return (
    <div className={cn(embeddingInfoStyles(), className)} {...props}>
      <Icon src="/icons/vector.svg" alt="vector" sizing="sm" />
      <Text
        as="span"
        content={`${dimensions || 0}D`}
        className={cn(dimensionStyles())}
      />
      {similarity !== undefined && (
        <>
          <Text as="span" content="•" visual="secondary" />
          <Text
            as="span"
            content={`${Math.round(similarity * 100)}% 유사도`}
            className={cn(dimensionStyles())}
          />
        </>
      )}
    </div>
  );
}

// Footer Component
interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function Footer({ className, children, ...props }: FooterProps) {
  return (
    <div className={cn(footerStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Action Buttons
interface ViewButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function ViewButton({ ...props }: ViewButtonProps) {
  const { id, onView } = useContext(EmbeddingCardContext);

  const handleView = () => {
    if (id && onView) {
      onView(id);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/eye.svg"
      text="보기"
      onClick={handleView}
      {...props}
    />
  );
}

interface EditButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function EditButton({ ...props }: EditButtonProps) {
  const { id, onEdit } = useContext(EmbeddingCardContext);

  const handleEdit = () => {
    if (id && onEdit) {
      onEdit(id);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/edit.svg"
      text="편집"
      onClick={handleEdit}
      {...props}
    />
  );
}

interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function DeleteButton({ ...props }: DeleteButtonProps) {
  const { id, onDelete } = useContext(EmbeddingCardContext);

  const handleDelete = () => {
    if (id && onDelete) {
      onDelete(id);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/trash.svg"
      text="삭제"
      onClick={handleDelete}
      {...props}
    />
  );
}

interface DownloadButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function DownloadButton({ ...props }: DownloadButtonProps) {
  const { id, onDownload } = useContext(EmbeddingCardContext);

  const handleDownload = () => {
    if (id && onDownload) {
      onDownload(id);
    }
  };

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/download.svg"
      text="다운로드"
      onClick={handleDownload}
      {...props}
    />
  );
}

// Export compound component
export const EmbeddingCard = {
  Root: EmbeddingCardRoot,
  Header,
  Title,
  Badge,
  Content,
  Description,
  Metadata,
  MetadataItem,
  EmbeddingInfo,
  Footer,
  ViewButton,
  EditButton,
  DeleteButton,
  DownloadButton,
};

export type EmbeddingCardProps = EmbeddingCardRootProps;
export default EmbeddingCard;
