const buttons1 = document.querySelectorAll('.bton1');
const buttons2 = document.querySelectorAll('.bton2');
const buttons3 = document.querySelectorAll('.bton3');
const menuButtons = document.querySelectorAll('.menu-boton');
const buttonContainers = document.querySelectorAll('.bton-cont');

function showMenu(menuIndex) {
    buttonContainers.forEach(container => {
        container.style.display = 'none';
    });

    buttonContainers[menuIndex].style.display = 'flex';
}

menuButtons.forEach((menuButton, index) => {
    menuButton.addEventListener('click', () => {
        showMenu(index);
    });
});

function showButtonContent(menuIndex, buttonIndex) {
    switch (menuIndex) {
        case 0: // Menú 1
            switch (buttonIndex) {
                case 0:
                    video.src = './assets/heros/hero1/1hoodwink_acorn_shot.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero1/2hoodwink_bushwhack.webm';
                    break;
                case 2:
                    video.src = './assets/heros/hero1/3hoodwink_scurry.webm';
                    break;
                case 3:
                    video.src = './assets/heros/hero1/4hoodwink_sharpshooter.webm';
                    break;
                case 4:
                    video.src = './assets/heros/hero1/5hoodwink_aghanims_shard.webm';
                    break;
                case 5:
                    video.src = './assets/heros/hero1/6hoodwink_aghanims_scepter.webm';
                    break;
            }
            break;
        case 1: // Menú 2
            switch (buttonIndex) {
                case 0:
                    video.src = './assets/heros/hero2/1pangolier_swashbuckle.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero2/2pangolier_shield_crash.webm';
                    break;
                case 0:
                    video.src = './assets/heros/hero2/3pangolier_lucky_shot.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero2/4pangolier_gyroshell.webm';
                    break;
                case 0:
                    video.src = './assets/heros/hero2/5pangolier_aghanims_shard.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero2/6pangolier_aghanims_scepter.webm';
                    break;
            }
            break;
        case 2: // Menú 3
            switch (buttonIndex) {
                case 0:
                    video.src = './assets/heros/hero3/1rubick_telekinesis.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero3/2rubick_fade_bolt.webm';
                    break;
                case 0:
                    video.src = './assets/heros/hero3/3rubick_arcane_supremacy.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero3/4rubick_spell_steal.webm';
                    break;
                case 0:
                    video.src = './assets/heros/hero3/5rubick_aghanims_shard.webm';
                    break;
                case 1:
                    video.src = './assets/heros/hero3/6rubick_aghanims_scepter.webm';
                    break;
            }
            break;
    }
}

buttons1.forEach((button, index) => {
    button.addEventListener('click', () => {
        showButtonContent(0, index);
    });
});

buttons2.forEach((button, index) => {
    button.addEventListener('click', () => {
        showButtonContent(1, index);
    });
});

buttons3.forEach((button, index) => {
    button.addEventListener('click', () => {
        showButtonContent(2, index);
    });
});