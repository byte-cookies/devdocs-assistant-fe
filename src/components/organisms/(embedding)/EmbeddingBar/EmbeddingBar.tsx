import Gauge from "@/components/atoms/Gauge";
import Input from "@/components/atoms/Input";
import Text from "@/components/atoms/Text";
import Button from "@/components/molecules/Button";
import { cn } from "@/utils/tailwindHelper";
import React, { createContext, useContext } from "react";
import {
  actionSectionStyles,
  barStyles,
  filterSectionStyles,
  leftSectionStyles,
  progressContainerStyles,
  progressLabelStyles,
  rightSectionStyles,
  searchContainerStyles,
  statItemStyles,
  statLabelStyles,
  statsStyles,
  statValueStyles,
} from "./EmbeddingBar.styles";

// Context for EmbeddingBar state
interface EmbeddingBarContextValue {
  totalEmbeddings?: number;
  processedEmbeddings?: number;
  averageSimilarity?: number;
  searchQuery?: string;
  isProcessing?: boolean;
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  onRefresh?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  onClear?: () => void;
}

const EmbeddingBarContext = createContext<EmbeddingBarContextValue>({});

// Root Component
interface EmbeddingBarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  totalEmbeddings?: number;
  processedEmbeddings?: number;
  averageSimilarity?: number;
  searchQuery?: string;
  isProcessing?: boolean;
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  onRefresh?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  onClear?: () => void;
}

function EmbeddingBarRoot({
  totalEmbeddings = 0,
  processedEmbeddings = 0,
  averageSimilarity = 0,
  searchQuery = "",
  isProcessing = false,
  onSearch,
  onFilter,
  onRefresh,
  onExport,
  onImport,
  onClear,
  className,
  children,
  ...props
}: EmbeddingBarRootProps) {
  return (
    <EmbeddingBarContext.Provider
      value={{
        totalEmbeddings,
        processedEmbeddings,
        averageSimilarity,
        searchQuery,
        isProcessing,
        onSearch,
        onFilter,
        onRefresh,
        onExport,
        onImport,
        onClear,
      }}
    >
      <div className={cn(barStyles(), className)} {...props}>
        {children}
      </div>
    </EmbeddingBarContext.Provider>
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

// Stats Container Component
interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {}

function Stats({ className, children, ...props }: StatsProps) {
  return (
    <div className={cn(statsStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Stat Item Component
interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
}

function StatItem({ value, label, className, ...props }: StatItemProps) {
  return (
    <div className={cn(statItemStyles(), className)} {...props}>
      <Text
        as="span"
        content={String(value)}
        className={cn(statValueStyles())}
      />
      <Text as="span" content={label} className={cn(statLabelStyles())} />
    </div>
  );
}

// Total Embeddings Stat
interface TotalEmbeddingsProps extends React.HTMLAttributes<HTMLDivElement> {}

function TotalEmbeddings({ className, ...props }: TotalEmbeddingsProps) {
  const { totalEmbeddings } = useContext(EmbeddingBarContext);

  return (
    <StatItem
      value={totalEmbeddings || 0}
      label="전체 임베딩"
      className={className}
      {...props}
    />
  );
}

// Processed Embeddings Stat
interface ProcessedEmbeddingsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function ProcessedEmbeddings({
  className,
  ...props
}: ProcessedEmbeddingsProps) {
  const { processedEmbeddings } = useContext(EmbeddingBarContext);

  return (
    <StatItem
      value={processedEmbeddings || 0}
      label="처리 완료"
      className={className}
      {...props}
    />
  );
}

// Average Similarity Stat
interface AverageSimilarityProps extends React.HTMLAttributes<HTMLDivElement> {}

function AverageSimilarity({ className, ...props }: AverageSimilarityProps) {
  const { averageSimilarity } = useContext(EmbeddingBarContext);
  const displayValue = averageSimilarity
    ? `${Math.round(averageSimilarity * 100)}%`
    : "0%";

  return (
    <StatItem
      value={displayValue}
      label="평균 유사도"
      className={className}
      {...props}
    />
  );
}

// Search Container Component
interface SearchContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function SearchContainer({
  className,
  children,
  ...props
}: SearchContainerProps) {
  return (
    <div className={cn(searchContainerStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Search Input Component
interface SearchInputProps extends React.ComponentProps<typeof Input> {}

function SearchInput({
  placeholder = "임베딩 검색...",
  ...props
}: SearchInputProps) {
  const { searchQuery, onSearch } = useContext(EmbeddingBarContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <Input
      value={searchQuery}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

// Filter Section Component
interface FilterSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function FilterSection({ className, children, ...props }: FilterSectionProps) {
  return (
    <div className={cn(filterSectionStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Action Section Component
interface ActionSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function ActionSection({ className, children, ...props }: ActionSectionProps) {
  return (
    <div className={cn(actionSectionStyles(), className)} {...props}>
      {children}
    </div>
  );
}

// Progress Container Component
interface ProgressContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

function ProgressContainer({
  label = "처리 진행률",
  className,
  ...props
}: ProgressContainerProps) {
  const { totalEmbeddings, processedEmbeddings } =
    useContext(EmbeddingBarContext);

  const percentage =
    totalEmbeddings > 0
      ? Math.round(((processedEmbeddings || 0) / totalEmbeddings) * 100)
      : 0;

  return (
    <div className={cn(progressContainerStyles(), className)} {...props}>
      <Text as="span" content={label} className={cn(progressLabelStyles())} />
      <Gauge value={percentage} visual="primary" />
      <Text
        as="span"
        content={`${percentage}%`}
        className={cn(progressLabelStyles())}
      />
    </div>
  );
}

// Action Buttons
interface RefreshButtonProps extends React.ComponentProps<typeof Button> {}

function RefreshButton({ ...props }: RefreshButtonProps) {
  const { onRefresh, isProcessing } = useContext(EmbeddingBarContext);

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/refresh.svg"
      onClick={onRefresh}
      disabled={isProcessing}
      {...props}
    />
  );
}

interface ExportButtonProps extends React.ComponentProps<typeof Button> {}

function ExportButton({ ...props }: ExportButtonProps) {
  const { onExport } = useContext(EmbeddingBarContext);

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/download.svg"
      text="내보내기"
      onClick={onExport}
      {...props}
    />
  );
}

interface ImportButtonProps extends React.ComponentProps<typeof Button> {}

function ImportButton({ ...props }: ImportButtonProps) {
  const { onImport } = useContext(EmbeddingBarContext);

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/upload.svg"
      text="가져오기"
      onClick={onImport}
      {...props}
    />
  );
}

interface ClearButtonProps extends React.ComponentProps<typeof Button> {}

function ClearButton({ ...props }: ClearButtonProps) {
  const { onClear } = useContext(EmbeddingBarContext);

  return (
    <Button
      visual="ghost"
      sizing="sm"
      leftIcon="/icons/trash.svg"
      text="전체 삭제"
      onClick={onClear}
      {...props}
    />
  );
}

// Export compound component
export const EmbeddingBar = {
  Root: EmbeddingBarRoot,
  LeftSection,
  RightSection,
  Stats,
  StatItem,
  TotalEmbeddings,
  ProcessedEmbeddings,
  AverageSimilarity,
  SearchContainer,
  SearchInput,
  FilterSection,
  ActionSection,
  ProgressContainer,
  RefreshButton,
  ExportButton,
  ImportButton,
  ClearButton,
};

export type EmbeddingBarProps = EmbeddingBarRootProps;
export default EmbeddingBar;
