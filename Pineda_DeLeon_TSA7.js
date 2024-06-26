document.addEventListener('DOMContentLoaded', function() {
    const flexContainer = document.getElementById('flexbox');
    const directionButtons = document.querySelectorAll('.direction');
    const justifyButtons = document.querySelectorAll('.justify');
    const alignButtons = document.querySelectorAll('.align');
    const gapInput = document.getElementById('gap');
    const resetButton = document.getElementById('reset');
    const box1GrowInput = document.getElementById('box1-grow');
    const box2GrowInput = document.getElementById('box2-grow');
    const box3GrowInput = document.getElementById('box3-grow');
    const boxes = document.querySelectorAll('.box');

    function updateFlexboxProperty(buttons, property) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                flexContainer.style[property] = button.dataset.value;
            });
        });
    }

    updateFlexboxProperty(directionButtons, 'flexDirection');
    updateFlexboxProperty(justifyButtons, 'justifyContent');
    updateFlexboxProperty(alignButtons, 'alignItems');

    gapInput.addEventListener('input', () => {
        flexContainer.style.gap = `${gapInput.value}px`;
    });

    function updateBoxGrow(input, box) {
        input.addEventListener('input', () => {
            box.style.flexGrow = input.value;
        });
    }

    updateBoxGrow(box1GrowInput, document.getElementById('box1'));
    updateBoxGrow(box2GrowInput, document.getElementById('box2'));
    updateBoxGrow(box3GrowInput, document.getElementById('box3'));

    resetButton.addEventListener('click', () => {
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'stretch';
        flexContainer.style.gap = '0';

        gapInput.value = 0;
        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;

        boxes.forEach(box => {
            box.style.flexGrow = '0';
        });
    });
});
