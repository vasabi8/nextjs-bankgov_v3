import React from "react";
import {
  AccountCircle,
  ArrowForward,
  Category,
  Chat,
  CheckCircle,
  CloudUpload,
  Colorize,
  ContactMail,
  Contacts,
  Domain,
  DonutSmall,
  DragIndicator,
  Edit,
  EditAttributes,
  Email,
  Error,
  Event,
  Group,
  ImportContacts,
  InsertChart,
  LibraryBooks,
  LocalGroceryStore,
  LockOutlined,
  Map,
  MonetizationOn,
  NotificationImportant,
  Notifications,
  Pages,
  People,
  ShowChart,
  Timeline,
  VpnKey,
  Widgets,
  PostAdd
} from "@material-ui/icons";

import IntlMessages from "../../../utils/IntlMessages";


const LoansBankMenus = [
  {
    name: <IntlMessages id={"sidebar.LoansBank.menu1"} />,
    type: "item",
    link: "/loans/corporate"
  },
  {
    name: <IntlMessages id={"sidebar.LoansBank.menu2"} />,
    type: "item",
    link: "/loans/individuals-entrepreneurs"
  },
  {
    name: <IntlMessages id={"sidebar.LoansBank.menu3"} />,
    type: "item",
    link: "/loans/individuals"
  },
  {
    name: <IntlMessages id={"sidebar.LoansBank.menu4"} />,
    type: "item",
    link: "/loans/affordable"
  }
];

const FinancialSectorMenus = [
  {
    name: <IntlMessages id={"sidebar.FinSector.menu1"} />,
    type: "item",
    link: "/financial-sector/banks"
  },
  {
    name: <IntlMessages id={"sidebar.FinSector.menu2"} />,
    type: "item",
    link: "/financial-sector/credit-unions"
  },
  {
    name: <IntlMessages id={"sidebar.FinSector.menu3"} />,
    type: "item",
    link: "/financial-sector/insurers"
  },
  {
    name: <IntlMessages id={"sidebar.FinSector.menu4"} />,
    type: "item",
    link: "/financial-sector/financial-companies"
  },
  {
    name: <IntlMessages id={"sidebar.FinSector.menu5"} />,
    type: "item",
    link: "/financial-sector/pawnshops"
  }
];

const RealSectorMenus = [
  {
    name: <IntlMessages id={"sidebar.RealSector.menu1"} />,
    type: "item",
    link: "/real-sector/economic-activity"
  },
  {
    name: <IntlMessages id={"sidebar.RealSector.menu2"} />,
    type: "item",
    link: "/real-sector/public-companies"
  },
  {
    name: <IntlMessages id={"sidebar.RealSector.menu3"} />,
    type: "item",
    link: "/real-sector/state-enterprises"
  },
  {
    name: <IntlMessages id={"sidebar.RealSector.menu4"} />,
    type: "item",
    link: "/real-sector/export-import"
  },
  {
    name: <IntlMessages id={"sidebar.RealSector.menu5"} />,
    type: "item",
    link: "/real-sector/external-lending"
  },
  {
    name: <IntlMessages id={"sidebar.FinSector.menu6"} />,
    type: "item",
    link: "/real-sector/regional-analysis"
  }
];

const SurveyMenus = [
  {
    name: <IntlMessages id={"sidebar.Survey.menu1"} />,
    type: "item",
    link: "/survey/bank-lending-conditions"
  },
  {
    name: <IntlMessages id={"sidebar.Survey.menu2"} />,
    type: "item",
    link: "/survey/bank-funding"
  },
  {
    name: <IntlMessages id={"sidebar.Survey.menu3"} />,
    type: "item",
    link: "/survey/finsector-systemic-risks"
  },
  {
    name: <IntlMessages id={"sidebar.Survey.menu4"} />,
    type: "item",
    link: "/survey/business-expectations"
  }
];

export const sidebarNavs = [
  {
    name: <IntlMessages id={"sidebar.indexFinStab"} />,
    type: "section",
    children: [
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu1"} />,
        type: "item",
        icon: <MonetizationOn />,
        link: "/financial-stability/stress-index"
      },
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu2"} />,
        type: "item",
        icon: <Group />,
        link: "/financial-stability/bank-risk-map"
      },
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu3"} />,
        type: "item",
        icon: <PostAdd />,
        link: "/financial-stability/systemic-importance"
      },
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu4"} />,
        type: "item",
        icon: <DonutSmall />,
        link: "/financial-stability/economic-ratios"
      },
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu5"} />,
        type: "item",
        icon: <LocalGroceryStore />,
        link: "/financial-stability/bank-funding"
      },
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu6"} />,
        type: "item",
        icon: <ImportContacts />,
        link: "/financial-stability/npl-level"
      },
      {
        name: <IntlMessages id={"sidebar.indexFinStab.menu7"} />,
        type: "item",
        icon: <PostAdd />,
        link: "/financial-stability/bank-stress-test"
      },
      {
        name: <IntlMessages id={"sidebar.LoansBank"} />,
        type: "collapse",
        children: LoansBankMenus
      },
      {
        name: <IntlMessages id={"sidebar.FinSector"} />,
        type: "collapse",
        children: FinancialSectorMenus
      },
      {
        name: <IntlMessages id={"sidebar.RealSector"} />,
        type: "collapse",
        children: RealSectorMenus
      },
      {
        name: <IntlMessages id={"sidebar.Survey"} />,
        type: "collapse",
        children: SurveyMenus
      }
    ]
  }
];


export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={"sidebar.main"} />,
    type: "collapse",
    children: [
      {
        name: <IntlMessages id={"pages.samplePage"} />,
        type: "item",
        icon: <PostAdd />,
        link: "/sample-page"
      }
    ]
  }
];



