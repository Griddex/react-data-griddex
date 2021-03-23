import { SelectCellFormatter } from "./formatters";
import type { Column } from "./types";
import { stopPropagation } from "./utils/domUtils";

export const SELECT_COLUMN_KEY = "select-row";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectColumn: Column<any, any> = {
  key: "APEX_SELECT_KEY",
  name: "",
  width: 35,
  maxWidth: 35,
  resizable: false,
  sortable: false,
  frozen: true,
  headerRenderer(props) {
    return (
      <SelectCellFormatter
        aria-label="Select All"
        value={props.allRowsSelected}
        onChange={props.onAllRowsSelectionChange}
      />
    );
  },
  formatter(props) {
    console.log(
      "Logged output --> ~ file: Columns.tsx ~ line 33 ~ formatter ~ props.isRowSelected",
      props.isRowSelected
    );
    return (
      <SelectCellFormatter
        aria-label="Select"
        tabIndex={-1}
        isCellSelected={false}
        // isCellSelected={props.isCellSelected}
        value={props.isRowSelected}
        onClick={stopPropagation}
        onChange={props.onRowSelectionChange}
      />
    );
  },
  groupFormatter(props) {
    return (
      <SelectCellFormatter
        aria-label="Select Group"
        tabIndex={-1}
        isCellSelected={props.isCellSelected}
        value={props.isRowSelected}
        onChange={props.onRowSelectionChange}
        // Stop propagation to prevent row selection
        onClick={stopPropagation}
      />
    );
  },
};
