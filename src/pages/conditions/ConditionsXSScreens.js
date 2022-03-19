import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const conditionsXS = (conditionsObject, t) => {
  return (
    <div>
      {Object.keys(conditionsObject).map((bodyPart) => {
        return (
          <Accordion key={bodyPart}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={bodyPart}
            >
              <Typography>{t(`bodyPart.${bodyPart}`)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-disc ml-4">
                  {conditionsObject[bodyPart].map((item) => (
                    <li key={item}>{t(`${bodyPart}.${item}`)}</li>
                  ))}
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default conditionsXS;
