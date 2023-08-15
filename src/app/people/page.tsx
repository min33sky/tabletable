import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { people } from '../data/people';

export default function PeoplePage() {
  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={people} />
    </div>
  );
}
