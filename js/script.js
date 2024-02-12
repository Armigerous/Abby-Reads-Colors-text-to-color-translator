function translateTextToColors(text) {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML = ''; // Clear previous output
    // Simulate translation by wrapping each character in a span with style
    for (let char of text) {
        let span = document.createElement('span');
        span.style.margin = '0 2px';
        span.style.padding = '5px';
        span.style.borderRadius = '50%'; // Circle shape for letters
        span.style.backgroundColor = '#d8b4fe'; // Pastel purple background for each character
        span.textContent = char;
        outputArea.appendChild(span);
    }
}
