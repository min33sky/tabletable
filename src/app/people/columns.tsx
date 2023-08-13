'use client';

import { ColumnDef } from '@tanstack/react-table';
import type { People } from '../data/people';

export const columns: ColumnDef<People>[] = [
  {
    header: 'Person ID',
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
  },
];
