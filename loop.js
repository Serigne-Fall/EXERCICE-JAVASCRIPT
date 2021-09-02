let tableau=['serigne','fall',21];
//for In
for (const tab of tableau) {
    console.log(tableau.indexOf(tab)+"---> "+tab);
}

//for Of
for (const tab in tableau) {
    console.log(tab+"---> "+tableau[tab]);
}