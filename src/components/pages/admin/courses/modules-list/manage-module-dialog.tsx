import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/form/input-field";
import { Form } from "@/components/ui/form/primitives";
import { CreateCourseFormData } from "@/server/schemas/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { createId } from "@paralleldrive/cuid2";
import z from "zod";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().nonempty({ message: "Campo obrigatório" }),
  description: z.string().nonempty({ message: "Campo obrigatório" }),
});

type ModuleFormData = z.infer<typeof formSchema>;
export type ModuleFormItem = ModuleFormData & { id: string };

type ManageModuleDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  initialData?: ModuleFormItem | null;
  setInitialData: (data: ModuleFormItem | null) => void;
};

export const ManageModuleDialog = ({
  open,
  setOpen,
  initialData,
  setInitialData,
}: ManageModuleDialogProps) => {
  const {
    getValues,
    setValue,
    reset: resetForm,
  } = useFormContext<CreateCourseFormData>();

  const form = useForm<ModuleFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { handleSubmit, reset } = form;

  const isEditing = !!initialData;

  useEffect(() => {
    if (open && isEditing) {
      reset(initialData);
    }
  }, [initialData, isEditing, open, reset]);

  useEffect(() => {
    if (!open) {
      reset({ title: "", description: "" });
      setInitialData(null);
    }
  }, [open, reset, setInitialData]);

  const onSubmit = async (data: ModuleFormData) => {
    const modules = getValues("modules");

    if (isEditing) {
      const updatedModules = modules.map((mod) => {
        if (mod.id === initialData.id) {
          return {
            ...mod,
            ...data,
          };
        }
        return mod;
      });

      setValue("modules", updatedModules, { shouldValidate: true });
      resetForm(getValues());
      setOpen(false);
      return;
    }

    modules.push({
      ...data,
      id: createId(),
      order: 1,
      lessons: [],
    });

    setValue("modules", modules, { shouldValidate: true });
    resetForm(getValues());
    setOpen(false);
  };

  return (
    <Dialog
      title={`${isEditing ? "Editar módulo" : "Adicionar módulo"}`}
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
              {isEditing ? "Salvar" : "Adicionar"}
            </Button>
          </form>
        </Form>
      }
    />
  );
};
