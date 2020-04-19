import React, { useContext } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./ContryPicker.module.css";
import { DataContext } from "../../contexts/DataContext";
function ContryPicker() {
  const { Contries, handleChangeContry } = useContext(DataContext);
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={handleChangeContry}>
        <option value="">Global</option>
        {Contries.map((e, i) => {
          return (
            <option value={e} key={i}>
              {e}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}

export default ContryPicker;
