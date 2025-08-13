import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type MessageCardProps = {
  message: Message;
};

export const MessageCard = ({ message }: MessageCardProps) => {
  return (
    <div className="bg-card border rounded-lg p-4 flex flex-col gap-1 text-start overflow-hidden">
      <p className="text-muted-foreground text-xs">
        {formatDistanceToNow(message.createdAt, {
          addSuffix: true,
          locale: ptBR,
        })}
      </p>
      <p className="text-primary text-bold">
        {message.name} <span className="text-xs">({message.email})</span>
      </p>
      <p className="text-foreground text-normal">{message.message}</p>
    </div>
  );
};
