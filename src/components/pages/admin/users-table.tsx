"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { formatName } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { useMemo, useState } from "react";
import { SendNotificationDialog } from "./send-notification-dialog";

type UsersTableProps = {
  users: AdminUser[];
};

export const UsersTable = ({ users }: UsersTableProps) => {
  const [search, setSearch] = useState<string>("");
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);

  const filteredUsers = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return users.filter((user) => {
      const nameMatch = formatName(user.firstName, user.lastName)
        .toLowerCase()
        .includes(lowerSearch);
      const emailMatch = user.email.toLowerCase().includes(lowerSearch);

      return nameMatch || emailMatch;
    });
  }, [search, users]);

  const columns: ColumnDef<AdminUser>[] = [
    {
      header: "Nome",
      accessorKey: "name",
      cell: ({ row }) => {
        const user = row.original;
        const fullName = formatName(user.firstName, user.lastName);

        return (
          <div className="flex items-center gap-2 p-2">
            <Avatar src={user.imageUrl} fallback={fullName} />
            <p className="font-medium">{fullName}</p>
          </div>
        );
      },
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Cursos Comprados",
      accessorKey: "purchasedCourses",
    },
    {
      header: "Aulas Concluídas",
      accessorKey: "completedLessons",
    },
    {
      header: "Data de Criação",
      accessorKey: "createdAt",
      cell: ({ row }) => {
        const user = row.original;
        return format(user.createdAt, "dd/MM/yyyy HH:mm");
      },
    },
  ];

  return (
    <>
      <div className="w-full flex items-center justify-between gap-4">
        <Input
          placeholder="Buscar usuário"
          value={search}
          className="max-w-[400px]"
          onChange={({ target }) => setSearch(target.value)}
        />
        <Button onClick={() => setShowNotificationDialog(true)}>
          Enviar Notificação
        </Button>
      </div>

      <DataTable columns={columns} data={filteredUsers} />

      <SendNotificationDialog
        open={showNotificationDialog}
        setOpen={setShowNotificationDialog}
      />
    </>
  );
};
