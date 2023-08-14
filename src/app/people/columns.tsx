'use client';

import { ColumnDef } from '@tanstack/react-table';
import type { People } from '../data/people';
import { formatDate } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export const columns: ColumnDef<People>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant={'ghost'}
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          Person ID
          <ArrowUpDown className="h-4 w-4 ml-2" />
        </Button>
      );
    },
    accessorKey: 'id',
  },
  {
    header: 'First Name',
    accessorKey: 'first_name',
  },
  {
    header: 'Last Name',
    accessorKey: 'last_name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
  {
    header: 'Date of Birth',
    accessorKey: 'date_of_birth',
    cell: ({ row }) => {
      const date_of_birth = row.getValue('date_of_birth') as string;
      const formatted = formatDate(date_of_birth);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const person = row.original;
      const personId = person.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.first_name.toString());
              }}
            >
              클립보드에 이름 복사
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
