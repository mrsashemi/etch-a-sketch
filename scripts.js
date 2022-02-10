const portalGlow = document.querySelector('.portalglow')
const portal = document.querySelector('.portal');
const container = document.querySelector('.container');
const portalContainer = document.querySelector('.portalcontainer');
const glowContainer = document.querySelector('.glowcontainer');
const gridSlider = document.querySelector('#gridrange');
const gridValue = document.querySelector('.gridvalue');
const output = document.querySelector("#value");
const sparkle = document.querySelectorAll(".sparkle");
const brightness = document.querySelectorAll(".brightness");



portal.style.width = '400px';
portal.style.height = '800px';
portal.style.top = '-800px';
portalGlow.style.width = '400px';
portalGlow.style.height = '800px';
container.style.width = '400px'
container.style.height = '800px'
portalContainer.style.width = '400px';
portalContainer.style.height = '800px';
glowContainer.style.width = '400px';
glowContainer.style.height = '800px';


const sliderArr = [4, 8, 16, 32, 64];

let x = 0;
output.textContent = sliderArr[x];


function changeGrid() {
    gridSlider.addEventListener('input', () => {
        x = gridSlider.value;
        output.textContent = sliderArr[x];
        createPortalGrid(sliderArr[x]);
        createPortalGlowGrid(sliderArr[x]);
    });
} 

changeGrid();



function createPortalGrid(x) {
    let squares = (Math.pow(x, 2))/2;
    for (let i = 0; i < squares; i++) {
        let grid = document.createElement('div');
        portal.appendChild(grid);
        grid.className = "sparkle";
        if (squares <= 128) {
            grid.style.backgroundImage = `url("images/sparkles.gif")`
            portal.style.background = `url("images/portal.jpg")`
        } else if (squares >= 128 && squares < 2048) {
            portal.style.background = `url("images/portal.jpg"), url("images/sparkles.gif")`
            portal.style.backgroundBlendMode = `screen`
        } else {
            portal.style.background = `url("images/portal.jpg")`
        }
        grid.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let otherRandom = Math.floor(Math.random()*16777215).toString(16);
            if (squares >= 2048) {
                grid.style.background = `#${randomColor}`
                grid.style.opacity = 1;
            } else {
                grid.style.opacity = 0.5;
                grid.style.background = `radial-gradient(#${randomColor}, #${otherRandom} 80%)`;
            }
            const {x, y} = grid.getBoundingClientRect();
            grid.style.setProperty("--x", e.clientX - x);
            grid.style.setProperty("--y", e.clientY - y);
        });
        grid.addEventListener('mouseout', () => {
            grid.style.opacity = 0.225;
        });
        gridSlider.addEventListener('input', () => {
            portal.removeChild(grid);
        })
    }
    portal.style['grid-template-columns'] = `repeat(${x/2}, 1fr)`;
}

createPortalGrid(sliderArr[x]);


function createPortalGlowGrid(x) {
    let squares = (Math.pow(x, 2))/2;
    for (let i = 0; i < squares; i++) {
        let grid = document.createElement('div');
        portalGlow.appendChild(grid);
        grid.className = "brightness";
        grid.addEventListener('mouseover', () => {
            grid.style.opacity = 0;
            grid.style.visibility = `visible`;
            grid.style.transition = `opacity 0.75s linear`;
        });
        grid.addEventListener('mouseout', () => {
            grid.style.opacity = 0.6;
            grid.style.transition = `visibility 1s 15s, opacity 15s linear`;
        });
        gridSlider.addEventListener('input', () => {
            portalGlow.removeChild(grid);
        })
    }
    portalGlow.style['grid-template-columns'] = `repeat(${x/2}, 1fr)`;
}

createPortalGlowGrid(sliderArr[x]);