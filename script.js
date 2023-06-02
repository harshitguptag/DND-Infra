// Get the tab buttons and content elements
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the target tab from the data attribute
    const targetTab = button.dataset.tab;

    // Remove 'active' class from all tab buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked tab button and content
    button.classList.add('active');
    document.getElementById(`${targetTab}-content`).classList.add('active');
  });
});
