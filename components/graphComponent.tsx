import * as React from 'react';

interface Props {
  onRequestApiData: () => void;
}

export const graphComponent: React.FunctionComponent<Props> = props => (
    return (
        console.log("info: ", props.onRequestApiData)
    )
);
