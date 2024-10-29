import React from "react";
import { Box, Typography } from "@mui/material";
import SideNav from "../components/sideNav";

function Customer() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography>Customer</Typography>
      </Box>
    </Box>
  );
}

export default Customer;
