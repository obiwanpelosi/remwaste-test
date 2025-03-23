# Remwaste FE test

Project was setup using react + vite, typescript, tailiwind and react icons.

From top to bottom: 

App.tsx serves as the wrapper for the entire page (every other component used are in the components folder). It contains the skip options and the steps of the navbar. Since they're hardcoded, I defined them outside the component.
It has a single state variable, selectedId to track which skip option was selected.

I created a progressive navbar component that accepts "steps" props. Each step has a label, icon, id and status. The status can either be "completed", "active" or "upcoming". Upcoming steps are disabled, active and completed steps are enabled but I didn't add a handler for them since that's beyond the scope of this project. A handler can easily be added if need be. 

I created a skip-option-card component to display the details of each skip option and in App.tsx, I'm looping through the hardcoded skip options and rendering the skip-option-card component for each option. 
I made it selectable ether by clicking on a button in the card or the whole card itself. Prevent triggering the event twice when clicking on the button by using event.stopPropagation. I also made it such that clicking on a previously selected option "deselects" it. I also added a useEffect in App.tsx that basically scrolls to the selected item when it's selected.
Then I have a summary component that appears everytime an option has been selected, it shows some details of the selected option and has a continue button (which would ideally route to the permit check step). 

