import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container } from "@material-ui/core/Grid";

const Test = () => {
  const [data, setData] = useState();

  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Test;
