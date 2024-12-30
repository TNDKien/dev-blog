import React from "react";
import "./ThreeQuarterLayout.css";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ThreeQuarterLayout = ({ blok }) => {
  console.log("ThreeQuarterLayout blok:", blok); // Debugging line

  return (
    <div className="three-quarter-layout" {...storyblokEditable(blok)}>
      <h2>Test</h2>
      <div className="main">
        {blok.main ? (
          blok.main.map((mainBlok) => {
            console.log("mainBlok:", mainBlok); // Debugging line
            return (
              <div key={mainBlok._uid} {...storyblokEditable(mainBlok)}>
                <div>{mainBlok.name}</div> {/* Display the name field */}
                <StoryblokComponent blok={mainBlok} />
              </div>
            );
          })
        ) : (
          <div>No main bloks</div>
        )}
      </div>
      <div className="sidebar">
        {blok.sidebar ? (
          blok.sidebar.map((sidebarBlok) => {
            console.log("sidebarBlok:", sidebarBlok); // Debugging line
            return (
              <div key={sidebarBlok._uid} {...storyblokEditable(sidebarBlok)}>
                <div>{sidebarBlok.name}</div> {/* Display the name field */}
                <StoryblokComponent blok={sidebarBlok} />
              </div>
            );
          })
        ) : (
          <div>No sidebar bloks</div>
        )}
      </div>
    </div>
  );
};

export default ThreeQuarterLayout;
