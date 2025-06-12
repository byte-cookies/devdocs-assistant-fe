/**
 * Tailwind CSS 클래스 분류 체계
 *
 * | 분류 | 설명 | 포함하는 Tailwind 클래스들 |
 * |------|------|---------------------------|
 * | responsive | 반응형 제어 | sm:*, md:*, lg:*, hidden, block |
 * | layout | 기본 레이아웃 구조 | flex, grid, block, inline, flex-col, flex-row |
 * | sizing | 크기 관련 전반 | w-*, h-*, min-*, max-* |
 * | spacing | 여백과 간격 | p-*, m-*, gap-* |
 * | visual | 시각적 스타일 | bg-*, border-*, shadow-*, rounded-*, opacity-* |
 * | typography | 텍스트 관련 | text-*, font-* |
 * | interactive | 상호작용 상태 | hover:*, focus:*, active:*, cursor-* |
 * | behavior | 동작과 효과 | overflow-*, transition-*, transform-*, animate-* |
 */
export interface TailwindClassCategories {
  responsive?: string | object;
  layout?: string | object;
  sizing?: string | object;
  spacing?: string | object;
  visual?: string | object;
  typography?: string | object;
  interactive?: string | object;
  behavior?: string | object;
}

/**
 * CVA variants 형태의 default 스타일 객체
 */
export interface VariantStylesDefault {
  default: TailwindClassCategories;
}

/**
 * Tailwind 클래스 카테고리 키들
 */
export type TailwindCategoryKey = keyof TailwindClassCategories;

/**
 * Tailwind 클래스 카테고리 순서 (표 순서대로)
 */
export const TAILWIND_CATEGORY_ORDER: TailwindCategoryKey[] = [
  "responsive",
  "layout",
  "sizing",
  "spacing",
  "visual",
  "typography",
  "interactive",
  "behavior",
] as const;
