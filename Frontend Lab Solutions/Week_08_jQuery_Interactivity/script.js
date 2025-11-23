.ready(function() {
    // Task 19: FAQ Toggle Effect
    .faq-answer.hide(); // Hide all answers initially
    .faq-question.click(function() {
        .next('.faq-answer').slideToggle('slow');
    });

    // Task 20: Dynamic Styling (.css)
    .faq-item.css({
        'border': '1px solid #3498db',
        'margin-bottom': '10px',
        'padding': '10px'
    });

    // Task 21: Login Form Fade Animation
    #login-form.hide();

    #show-login-btn.click(function() {
        #login-form.fadeIn(500); // Fade in over 500ms
        .hide();
    });

    #hide-login-btn.click(function(e) {
        e.preventDefault(); // Prevent form submission
        #login-form.fadeOut(500, function() {
            #show-login-btn.show();
        });
    });
});
