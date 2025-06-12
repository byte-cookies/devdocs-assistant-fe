import Icon from "@/components/atoms/Icon";
import { iconStyles } from "@/components/atoms/Icon/Icon.styles";
import Text from "@/components/atoms/Text";
import { textStyles } from "@/components/atoms/Text/Text.styles";
import { cn } from "@/utils/tailwindHelper";
import { type VariantProps } from "class-variance-authority";
import { buttonStyles } from "./Button.styles";

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    VariantProps<typeof textStyles>,
    VariantProps<typeof iconStyles> {
  text?: string;
  leftIcon?: {
    src: string;
    alt?: string; // 추가: 아이콘에 대한 대체 텍스트
    iconSizing?: VariantProps<typeof iconStyles>["iconSizing"];
  };
  rightIcon?: {
    src: string;
    alt?: string; // 추가: 아이콘에 대한 대체 텍스트
    iconSizing?: VariantProps<typeof iconStyles>["iconSizing"];
  };
  className?: string;
  disabled?: boolean;
  onClick?: () => void; // 추가: 클릭 이벤트 핸들러
}

export default function Button({
  text,
  leftIcon,
  rightIcon,
  buttonSizing,
  buttonVisual,
  textLayout,
  textSizing,
  textVisual,
  disabled,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ buttonSizing, buttonVisual }), className)}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && (
        <Icon
          src={leftIcon.src}
          alt={leftIcon.alt || "left icon"}
          iconSizing={leftIcon.iconSizing}
        />
      )}
      {text && (
        <Text
          content={text}
          textLayout={textLayout}
          textSizing={textSizing}
          textVisual={textVisual}
        />
      )}
      {rightIcon && (
        <Icon
          src={rightIcon.src}
          alt={rightIcon.alt || "right icon"}
          iconSizing={rightIcon.iconSizing}
        />
      )}
    </button>
  );
}
