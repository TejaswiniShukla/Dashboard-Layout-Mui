import React from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Card,
  AccordionDetails,
  CardContent,
  Grid,
  Grid2,
  Stack,
  Typography,
  AccordionActions,
} from "@mui/material";
import SideNav from "../components/sideNav";
import { styled } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
//for shifting content from header
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function DashBoard() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <DrawerHeader /> */}
          <Box height={70} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction={"row"}>
                <Card sx={{ minWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <CreditCardIcon />
                    <Typography gutterBottom variant="h5" component="div">
                      $500.00
                    </Typography>

                    <Typography gutterBottom variant="body1" component="div">
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <LocalMallIcon />
                    <Typography gutterBottom variant="h5" component="div">
                      $900.00
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Stack direction={"row"} spacing={2}>
                      <StorefrontIcon />
                      <div>
                        {" "}
                        <span>$203K</span>
                        <span>Total Income</span>{" "}
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Stack direction={"row"} spacing={2}>
                      <StorefrontIcon />
                      <div>
                        {" "}
                        <span>$203K</span>
                        <span>Total Income</span>{" "}
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      Accordion 2
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                      <Button>Cancel</Button>
                      <Button>Agree</Button>
                    </AccordionActions>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default DashBoard;
