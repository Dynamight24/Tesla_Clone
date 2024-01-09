import React from "react";
import styled from "styled-components";
import Section from "./Section";

export const Home = () => {
  return (
    <Container>
         <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftbtnText="CUSTOM ORDER"
        rightbtnText="EXISTING INVENTORY"
        background="model-x.jpg"></Section>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftbtnText="CUSTOM ORDER"
        rightbtnText="EXISTING INVENTORY"
        background="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftbtnText="CUSTOM ORDER"
        rightbtnText="EXISTING INVENTORY"
        background="model-y.jpg"></Section>
         <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftbtnText="CUSTOM ORDER"
        rightbtnText="EXISTING INVENTORY"
        background="model-3.jpg"></Section>
         <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftbtnText="ORDER NOW"
        rightbtnText="LEARN MORE"
        background="solar-panel.jpg"></Section>
         <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftbtnText="ORDER NOW"
        rightbtnText="LEARN MORE"
        background="solar-roof.jpg"></Section>
        
    
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
