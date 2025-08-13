"use client";

import { sendMessageToSuperuser } from "@/actions/notifications";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/input-field";
import { Form } from "@/components/ui/form/primitives";
import { TextareaField } from "@/components/ui/form/textarea-field";
import {
  createMessageSchema,
  CreateMessageSchema,
} from "@/server/schemas/notifications";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const LandingForm = () => {
  const form = useForm<CreateMessageSchema>({
    resolver: zodResolver(createMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit, reset } = form;

  const { mutate: handleSendMessage, isPending } = useMutation({
    mutationFn: sendMessageToSuperuser,
    onSuccess: () => {
      reset({ name: "", email: "", message: "" });
      toast.success("Mensagem enviada com sucesso. Agradecemos pelo feedback.");
    },
    onError: () => {
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    },
  });

  const onSubmit = async (formData: CreateMessageSchema) => {
    handleSendMessage(formData);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 text-start">
        <h2 className="text-xl text-muted-foreground">Entre em contato</h2>
        <p className="text-muted-foreground text-sm">
          Algum feedback ou sugestão? Mande uma mensagem para nós.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 grid md:grid-cols-2 gap-5"
        >
          <InputField name="name" label="Nome" placeholder="Seu nome" />
          <InputField
            name="email"
            label="Email"
            placeholder="email@gmail.com"
          />
          <TextareaField
            name="message"
            label="Mensagem"
            placeholder="Escreva uma mensagem"
            className="col-span-full"
          />
          <div className="col-span-full flex items-end">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
