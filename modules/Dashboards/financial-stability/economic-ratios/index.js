import React from "react";
import GridContainer from "../../../../@jumbo/components/GridContainer";
import PageContainer from "../../../../@jumbo/components/PageComponents/layouts/PageContainer";
import Box from "@material-ui/core/Box";
import IntlMessages from "../../../../@jumbo/utils/IntlMessages";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";


const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "Financial stability", link: "/" },
  { label: "Economic ratios", isActive: true }
];


const SamplePage = () => {
  return (
    <PageContainer heading={<IntlMessages id="sidebar.indexFinStab" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="sidebar.indexFinStab" />
          </Box>
          <Divider />
          <div style={{ marginTop: 24 }}>
            <h3>Financial</h3>

            Economic ratios

          </div>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SamplePage;