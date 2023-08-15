import { people } from '@/app/data/people';
import xlsx, { IJsonSheet } from 'json-as-xlsx';
import { formatDate } from './utils';

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: 'Persons',
      columns: [
        { label: 'Person ID', value: 'id' },
        { label: 'First Name', value: 'first_name' },
        { label: 'Last Name', value: 'last_name' },
        { label: 'Email', value: 'email' },
        { label: 'Gender', value: 'gender' },
        {
          label: 'Date of Birth',
          value: (row) => formatDate(row.date_of_birth as string),
        },
      ],
      content: people,
    },
  ];

  let settings = {
    fileName: 'People Excel',
  };

  xlsx(columns, settings);
}
