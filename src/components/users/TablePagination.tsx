import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Links, Meta } from "../../interfaces/pagination.interfaces";

interface Props {
  links: Links;
  pagination?: Meta;
  handleLoadData: (path: string, params?: Object) => void;
}

export const TablePaginationActions = (props: Props) => {
  const [perPage, setRowsPerPage] = useState(10);

  const { links, handleLoadData, pagination } = props;
  const theme = useTheme();

  const handleFirstPageButtonClick = () => {
    handleLoadData(links.first, { perPage });
  };

  const handleBackButtonClick = () => {
    if (links.prev) {
      handleLoadData(links.prev, { perPage });
    }
  };

  const handleNextButtonClick = () => {
    if (links.next) {
      handleLoadData(links.next, { perPage });
    }
  };

  const handleLastPageButtonClick = () => {
    handleLoadData(links.last, { perPage });
  };

  const handleChangeRowsPerPage = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    setRowsPerPage(event.target.value as number);
  };

  useEffect(() => {
    const path = `/user?page=${pagination?.current_page}`;
    handleLoadData(path, { perPage });
  }, [perPage]);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <Select
        onChange={handleChangeRowsPerPage}
        variant="outlined"
        value={perPage}
      >
        {[5, 10, 15, 20].map((item) => (
          <MenuItem value={item} key={`${item}-item`}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={pagination?.total === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={!links.prev}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={!links.next}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={pagination?.to === pagination?.total}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};
