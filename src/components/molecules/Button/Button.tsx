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
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  onClick?: () => void; // 추가: 클릭 이벤트 핸들러
}

export default function Button({
  text,
  leftIcon,
  rightIcon,
  buttonSizing,
  buttonVisual,
  iconSizing,
  textLayout,
  textSizing,
  textVisual,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ buttonSizing, buttonVisual }), className)}
      onClick={onClick}
    >
      {leftIcon && (
        <Icon src={leftIcon} alt="left icon" iconSizing={iconSizing} />
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
        <Icon src={rightIcon} alt="right icon" iconSizing={iconSizing} />
      )}
    </button>
  );
}
