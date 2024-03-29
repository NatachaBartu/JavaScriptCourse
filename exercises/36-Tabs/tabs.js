const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // HIDE ALL TABS PANELS
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // MARK ALL TABS AS UNSELCTED
  tabButtons.forEach((tab) => {
    // tab.ariaSelected = false;
    tab.setAttribute("aria-selected", false);
  });

  // MARK THE CLICKED TABS AS SELECTED
  event.currentTarget.setAttribute("aria-selected", true);

  // FIND TEH ASSOCIATED TABPANEL AND SHOW IT.
  const { id } = event.currentTarget;
  /*
    METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
  */

  // METHOD 2 - find in the array of tabPanels
  // console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
