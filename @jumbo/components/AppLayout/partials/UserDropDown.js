import React from "react";
import clsx from "clsx";
import CmtDropdownMenu from "../../../../@coremat/CmtDropdownMenu";
import CmtAvatar from "../../../../@coremat/CmtAvatar";
import { Box } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from "../../../../authentication";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  profileRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 20
    },
    "&:before": {
      content: "\"\"",
      position: "absolute",
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      backgroundColor: alpha(theme.palette.common.dark, 0.15)
    }
  }
}));

const actionsList = [
  {
    icon: <PersonIcon />,
    label: "Account"
  },
  {
    icon: <ExitToAppIcon />,
    label: "Logout"
  }
];

const UserDropDown = () => {
  const classes = useStyles();
  const { userSignOut } = useAuth();
  const router = useRouter();

  const onItemClick = (item) => {
    if (item.label === "Logout") {
      userSignOut(() => {
        router.push("/").then((r) => r);
      });
    }
  };

  return (
    <Box className={clsx(classes.profileRoot, "Cmt-profile-pic")}>
      <CmtDropdownMenu
        onItemClick={onItemClick}
        TriggerComponent={<CmtAvatar size="small" src={"https://via.placeholder.com/150"} />}
        items={actionsList}
      />
    </Box>
  );
};

export default UserDropDown;
