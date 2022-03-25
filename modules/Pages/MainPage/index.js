import React from "react";
import GridContainer from "../../../@jumbo/components/GridContainer";
import PageContainer from "../../../@jumbo/components/PageComponents/layouts/PageContainer";
import Box from "@material-ui/core/Box";
import IntlMessages from "../../../@jumbo/utils/IntlMessages";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";


const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "Main Page", isActive: true }
];

const SamplePage = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.samplePage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="pages.samplePage.description" />
          </Box>
          <Divider />
          <div style={{ marginTop: 24 }}>
            <h3>Main Page</h3>
            Test
          </div>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SamplePage;
