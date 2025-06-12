import Icon from "@/components/atoms/Icon"; // Added
import Text from "@/components/atoms/Text";
import { cn } from "@/utils/tailwindHelper";
import { EmbeddingCardHeaderStyles } from "./EmbeddingCardComponents.styles";
import { useEmbeddingCardContext } from "./EmbeddingCardCore";

const EmbeddingCardHeader = () => {
  const { name, status, url } = useEmbeddingCardContext();

  let statusIcon = "/unVerified.svg";
  let statusAlt = "Pending";
  if (status === "loaded") {
    statusIcon = "/verified.svg";
    statusAlt = "Loaded";
  } else if (status === "failed") {
    statusIcon = "/source.svg";
    statusAlt = "Failed";
  }

  return (
    <div
      className={cn(
        EmbeddingCardHeaderStyles(),
        "flex justify-between items-center"
      )}
    >
      {" "}
      <Text
        content={name || url || "Document"}
        textLayout="justify-start"
        textSizing="md"
        textVisual="primary"
        className="font-semibold truncate flex-1 mr-2"
      />
      <Icon src={statusIcon} alt={statusAlt} iconSizing="md" />{" "}
    </div>
  );
};

export default EmbeddingCardHeader;
