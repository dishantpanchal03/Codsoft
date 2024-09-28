document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerText;

            if (button.classList.contains('operator')) {
                if (buttonText === 'AC') {
                    expression = "";
                } else if (buttonText === 'DEL') {
                    expression = expression.slice(0, -1);
                } else if (buttonText === '%') {
                    expression = (eval(expression) / 100).toString();
                } else {
                    expression += ` ${buttonText} `;
                }
            } else if (button.classList.contains('equal')) {
                try {
                    expression = eval(expression).toString();
                } catch (error) {
                    expression = "Error";
                }
            } else {
                expression += buttonText;
            }

            input.value = expression;
        });
    });
});
