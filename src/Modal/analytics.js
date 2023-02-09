import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog category") => {
    console.log(category)
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
    console.log("analytics trig")
    console.log(action)
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;