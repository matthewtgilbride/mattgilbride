import React, { FC } from "react";
import { makeFontSize } from "../../utils/design";

export const flexBetween = {
  display: 'flex',
  justifyContent: 'space-between',
  h5: {
    fontWeight: 'normal',
    fontSize: makeFontSize('xs'),
    margin: 0
  }
}

export const companyText = {
  fontWeight: 'bold',
}

export interface JobHeaderProps {
  companyCopy: string;
  locationCopy: string;
  titleCopy: string;
  dateCopy: string;
}

export const JobHeader: FC<JobHeaderProps> = ({ companyCopy, dateCopy, locationCopy, titleCopy }) =>
  <>
    <h3>{titleCopy}</h3>
    <h5 css={companyText}>{companyCopy}</h5>
    <div css={flexBetween}>
      <h5>{locationCopy}</h5>
      <h5>{dateCopy}</h5>
    </div>
  </>
