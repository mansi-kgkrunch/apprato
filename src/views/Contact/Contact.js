import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { LearnMoreLink } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 500,
    margin: `0 auto`
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0
  },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase"
  }
}));

const Contact = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            label="Contact"
            title=""
            subtitle={
              <span>
                There’s nothing here, but if you feel this is an error please{" "}
                <LearnMoreLink
                  title="let us know"
                  href="#"
                  typographyProps={{ variant: "h6" }}
                />
              </span>
            }
            titleProps={{
              variant: "h3"
            }}
            labelProps={{
              color: "secondary",
              className: classes.label,
              variant: "h5"
            }}
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Go Back
              </Button>
            ]}
            disableGutter
          />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
