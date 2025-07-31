import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/form/input-field";
import { Form } from "@/components/ui/form/primitives";
import { CreateCourseFormData } from "@/server/schemas/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { createId } from "@paralleldrive/cuid2";
import z from "zod";

const formSchema = z.object({
  title: z.string().nonempty({ message: "Campo obrigatório" }),
  description: z.string().nonempty({ message: "Campo obrigatório" }),
});

type ModuleFormData = z.infer<typeof formSchema>;

type ManageModuleDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ManageModuleDialog = ({
  open,
  setOpen,
}: ManageModuleDialogProps) => {
  const { getValues, setValue } = useFormContext<CreateCourseFormData>();

  const form = useForm<ModuleFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: ModuleFormData) => {
    const modules = getValues("modules");

    // TODO: edit modules

    modules.push({
      ...data,
      id: createId(),
      order: 1,
      lessons: [],
    });

    setValue("modules", modules, { shouldValidate: true });
    setOpen(false);
  };

  return (
    <Dialog
      title="Adicionar módulo"
      open={open}
      setOpen={setOpen}
      width="500px"
      content={
        <Form {...form}>
          <form className="flex flex-col gap-6">
            <InputField name="title" label="Título" />
            <InputField
              name="description"
              label="Breve descrição sobre o módulo"
            />
            <Button
              onClick={() => handleSubmit(onSubmit)()}
              className="max-w-max ml-auto"
            >
              Adicionar
            </Button>
          </form>
        </Form>
      }
    />
  );
};
