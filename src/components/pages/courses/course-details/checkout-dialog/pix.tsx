"use client";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form/field";
import { InputField } from "@/components/ui/form/input-field";
import { Form } from "@/components/ui/form/primitives";
import { Input } from "@/components/ui/input";
import { pixCheckoutFormSchema } from "@/server/schemas/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

type FormData = z.infer<typeof pixCheckoutFormSchema>;

type PixFormProps = {
  onBack: () => void;
};

export const PixForm = ({ onBack }: PixFormProps) => {
  const [step, setStep] = useState(1);

  const form = useForm<FormData>({
    resolver: zodResolver(pixCheckoutFormSchema),
    defaultValues: {
      cpf: "",
      name: "",
      postalCode: "",
      addressNumber: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
    setStep(2);
  };

  const handleBack = () => {
    if (step === 1) {
      onBack();
      return;
    }

    setStep(1);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {step === 1 ? (
          <div className="w-full">
            <h2 className="mt-2 mb-3 text-center ">
              Para gerar o QR Code, por favor informe os dados abaixo
              <span className="text-sm block opacity-50">
                (Serão utilizados apenas para a emissão de nota fiscal)
              </span>
            </h2>
            <div className="w-full grid sm:grid-cols-2 gap-2">
              <InputField name="name" placeholder="Nome completo" />
              <InputField name="cpf" placeholder="CPF" mask="___.___.___-__" />
              <InputField
                name="postalCode"
                placeholder="CEP"
                mask="_____-___"
              />
              <FormField name="addressNumber">
                {({ field }) => (
                  <Input
                    {...field}
                    onChange={({ target }) => {
                      const value = target.value.replace(/\D/g, "");
                      field.onChange(value);
                    }}
                    placeholder="Número da residência"
                  />
                )}
              </FormField>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="flex justify-between items-center mt-6 w-full flex-col md:flex-row gap-4 md:gap-0">
          <Button
            variant="outline"
            type="button"
            className="w-full md:w-max"
            onClick={handleBack}
          >
            <ArrowLeft />
            Voltar
          </Button>

          {step === 1 ? (
            <Button className="w-full md:w-max" type="submit">
              Continuar
              <ArrowRight />
            </Button>
          ) : (
            <Button type="button">
              Confirmar pagamento
              <Check />
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
