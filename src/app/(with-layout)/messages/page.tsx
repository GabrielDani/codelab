import { getMessages } from "@/actions/notifications";
import { MessageCard } from "@/components/pages/message/message-card";

export default async function MessagePage() {
  const messages = await getMessages();

  return (
    <>
      <h1 className="text-2xl font-bold">Mensagens recebidas</h1>
      {!messages.length ? (
        <p className="text-muted-foreground text-sm">Nenhuma mensagem</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {messages.map((message) => (
            <MessageCard message={message} key={message.id} />
          ))}
        </div>
      )}
    </>
  );
}
