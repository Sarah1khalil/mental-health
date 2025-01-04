function showExercises(type) {
    // Hide all sections
    let sections = document.querySelectorAll('.exercise-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show selected section
    let selectedSection = document.getElementById(type);
    selectedSection.classList.remove('hidden');
}
