import React from "react";
import dynamic from "next/dynamic";
import PageLoader from "../../@jumbo/components/PageComponents/PageLoader";

const SamplePage = dynamic(() => import("../../modules/Dashboards/survey/business-expectations/"), {
  loading: () => <PageLoader />
});

const HomePage = () => {
  return <SamplePage />;
};

export default HomePage;