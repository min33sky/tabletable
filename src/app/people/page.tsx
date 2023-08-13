import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { people } from '../data/people';

export default function PeoplePage() {
  return <DataTable columns={columns} data={people} />;
}
