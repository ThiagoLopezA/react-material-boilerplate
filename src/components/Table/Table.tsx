import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

interface Props {
  rows: any[];
  columns: any[];
  loading: boolean;
  pageSize?: number;
}

export default function Table({ rows, columns, loading, pageSize = 5 }: Props) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      disableSelectionOnClick
      disableColumnSelector
    />
  );
}
