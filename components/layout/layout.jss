module.exports = {
  "[layout][horizontal], [layout][vertical]": {
    "display": "flex"
  },
  "[layout][horizontal][inline], [layout][vertical][inline]": {
    "display": "inline-flex"
  },
  "[layout][horizontal]": {
    "-ms-flex-direction": "row",
    "-webkit-flex-direction": "row",
    "flex-direction": "row"
  },
  "[layout][horizontal][reverse]": {
    "-ms-flex-direction": "row-reverse",
    "-webkit-flex-direction": "row-reverse",
    "flex-direction": "row-reverse"
  },
  "[layout][vertical]": {
    "-ms-flex-direction": "column",
    "-webkit-flex-direction": "column",
    "flex-direction": "column"
  },
  "[layout][vertical][reverse]": {
    "-ms-flex-direction": "column-reverse",
    "-webkit-flex-direction": "column-reverse",
    "flex-direction": "column-reverse"
  },
  "[layout][wrap]": {
    "-ms-flex-wrap": "wrap",
    "-webkit-flex-wrap": "wrap",
    "flex-wrap": "wrap"
  },
  "[layout][wrap-reverse]": {
    "-ms-flex-wrap": "wrap-reverse",
    "-webkit-flex-wrap": "wrap-reverse",
    "flex-wrap": "wrap-reverse"
  },
  "[flex]": {
    "-ms-flex": "1 1 0.000000001px",
    "-webkit-flex": "1",
    "flex": "1",
    "-webkit-flex-basis": "0.000000001px",
    "flex-basis": "0.000000001px"
  },
  "[vertical][layout] > [flex][auto-vertical]": {
    "-ms-flex": "1 1 auto",
    "-webkit-flex-basis": "auto",
    "flex-basis": "auto"
  },
  "[flex][auto]": {
    "-ms-flex": "1 1 auto",
    "-webkit-flex-basis": "auto",
    "flex-basis": "auto"
  },
  "[flex][none]": {
    "-ms-flex": "none",
    "-webkit-flex": "none",
    "flex": "none"
  },
  "[flex][one]": {
    "-ms-flex": "1",
    "-webkit-flex": "1",
    "flex": "1"
  },
  "[flex][two]": {
    "-ms-flex": "2",
    "-webkit-flex": "2",
    "flex": "2"
  },
  "[flex][three]": {
    "-ms-flex": "3",
    "-webkit-flex": "3",
    "flex": "3"
  },
  "[flex][four]": {
    "-ms-flex": "4",
    "-webkit-flex": "4",
    "flex": "4"
  },
  "[flex][five]": {
    "-ms-flex": "5",
    "-webkit-flex": "5",
    "flex": "5"
  },
  "[flex][six]": {
    "-ms-flex": "6",
    "-webkit-flex": "6",
    "flex": "6"
  },
  "[flex][seven]": {
    "-ms-flex": "7",
    "-webkit-flex": "7",
    "flex": "7"
  },
  "[flex][eight]": {
    "-ms-flex": "8",
    "-webkit-flex": "8",
    "flex": "8"
  },
  "[flex][nine]": {
    "-ms-flex": "9",
    "-webkit-flex": "9",
    "flex": "9"
  },
  "[flex][ten]": {
    "-ms-flex": "10",
    "-webkit-flex": "10",
    "flex": "10"
  },
  "[flex][eleven]": {
    "-ms-flex": "11",
    "-webkit-flex": "11",
    "flex": "11"
  },
  "[flex][twelve]": {
    "-ms-flex": "12",
    "-webkit-flex": "12",
    "flex": "12"
  },
  "[layout][start]": {
    "-ms-flex-align": "start",
    "-webkit-align-items": "flex-start",
    "align-items": "flex-start"
  },
  "[layout][center], [layout][center-center]": {
    "-ms-flex-align": "center",
    "-webkit-align-items": "center",
    "align-items": "center"
  },
  "[layout][end]": {
    "-ms-flex-align": "end",
    "-webkit-align-items": "flex-end",
    "align-items": "flex-end"
  },
  "[layout][start-justified]": {
    "-ms-flex-pack": "start",
    "-webkit-justify-content": "flex-start",
    "justify-content": "flex-start"
  },
  "[layout][center-justified], [layout][center-center]": {
    "-ms-flex-pack": "center",
    "-webkit-justify-content": "center",
    "justify-content": "center"
  },
  "[layout][end-justified]": {
    "-ms-flex-pack": "end",
    "-webkit-justify-content": "flex-end",
    "justify-content": "flex-end"
  },
  "[layout][around-justified]": {
    "-ms-flex-pack": "distribute",
    "-webkit-justify-content": "space-around",
    "justify-content": "space-around"
  },
  "[layout][justified]": {
    "-ms-flex-pack": "justify",
    "-webkit-justify-content": "space-between",
    "justify-content": "space-between"
  },
  "[self-start]": {
    "-ms-align-self": "flex-start",
    "-webkit-align-self": "flex-start",
    "align-self": "flex-start"
  },
  "[self-center]": {
    "-ms-align-self": "center",
    "-webkit-align-self": "center",
    "align-self": "center"
  },
  "[self-end]": {
    "-ms-align-self": "flex-end",
    "-webkit-align-self": "flex-end",
    "align-self": "flex-end"
  },
  "[self-stretch]": {
    "-ms-align-self": "stretch",
    "-webkit-align-self": "stretch",
    "align-self": "stretch"
  },
  "[block]": {
    "display": "block"
  },
  "[hidden]": {
    "display": "none !important"
  },
  "[relative]": {
    "position": "relative"
  },
  "[fit]": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  "body[fullbleed]": {
    "margin": "0",
    "height": "100vh"
  },
  "[segment], segment": {
    "display": "block",
    "position": "relative",
    "-webkit-box-sizing": "border-box",
    "-ms-box-sizing": "border-box",
    "box-sizing": "border-box",
    "margin": "1em 0.5em",
    "padding": "1em",
    "background-color": "white",
    "-webkit-box-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.1)",
    "box-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.1)",
    "border-radius": "5px 5px 5px 5px"
  }
};
