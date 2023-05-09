import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div className="flex flex-col gap-[25px]">
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Choose a room and date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contact us via phone or email, ask for availability of you choice of
            room. We might offer you something exciting.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
          
        >
          <Typography>Check for room availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contact us via phone or email, ask for availability of you choice of
            room. We might offer you something exciting.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          
          
        >
          <Typography>Enjoy your room</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contact us via phone or email, ask for availability of you choice of
            room. We might offer you something exciting.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
