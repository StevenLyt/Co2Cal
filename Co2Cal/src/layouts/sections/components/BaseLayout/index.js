/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import Breadcrumbs from "examples/Breadcrumbs";
import bgImage from "assets/fp2.webp";

// Routes
import routes from "routes";

function BaseLayout({ children }) {
  return (
    <MKBox display="flex" flexDirection="column" minHeight="100vh">
      <DefaultNavbar
        routes={routes}
        transparent
        action={{
          type: "external",
          route: "https://www.carbonfootprint.com/",
          label: "Learn More",
          color: "success",
        }}
        sticky
      />
      {/* <MKBox shadow="sm" py={0.25}>
        <DefaultNavbar routes={routes} transparent relative />
      </MKBox> */}
      <MKBox
        height="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        {children}
        <MKBox>
          <CenteredFooter />
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
