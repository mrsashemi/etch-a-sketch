const portalGlow = document.querySelector('.portalglow')
const portal = document.querySelector('.portal');
const container = document.querySelector('.container');
const portalContainer = document.querySelector('.portalcontainer');
const glowContainer = document.querySelector('.glowcontainer');
const gridSlider = document.querySelector('#gridrange');
const gridValue = document.querySelector('.gridvalue');
const lightValue = document.querySelector('.lightvalue');
const output = document.querySelector("#value");
const rangeColor = document.querySelector('#colorrange');
const portalConcept = document.querySelector('.portalconcept')
const portalExplain = document.querySelector('.portalexplanation');
const project = document.querySelector('.project');
const lightExplain = document.querySelector('.changelightexplain');
const sizeOutput = document.querySelector('#values');
const sizeSlider = document.querySelector('#sizerange');
const sizeValue = document.querySelector('.sizevalue');


const sliderArr = [4, 8, 12, 16, 32];
let x = 0;

function createPortalGrid(n) {
    let squares = (Math.pow(n, 2))/2;
    for (let i = 0; i < squares; i++) {
        let grid = document.createElement('div');
        portal.appendChild(grid);
        grid.className = "sparkle";
        if (squares < 128) {
            grid.style.backgroundImage = `url("images/sparkles.gif")`
            portal.style.background = `url("images/portal.jpg")`
        } else {
            portal.style.background = `url("images/portal.jpg"), url("images/sparkles.gif")`
            portal.style.backgroundBlendMode = `screen`
        } 
    }
    portal.style['grid-template-columns'] = `repeat(${n/2}, 1fr)`;
    stylePortalGrid();
}

createPortalGrid(sliderArr[x]);

function stylePortalGrid() {
    let sparkle = document.querySelectorAll(".sparkle");
    sparkle.forEach(el => {
        el.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let otherRandom = Math.floor(Math.random()*16777215).toString(16);
            el.style.opacity = 0.5;
            el.style.background = `radial-gradient(#${randomColor}, #${otherRandom} 80%)`;
            const {x, y} = el.getBoundingClientRect();
            el.style.setProperty("--x", e.clientX - x);
            el.style.setProperty("--y", e.clientY - y);
        });
        el.addEventListener('mouseout', () => {
            if (x == 3 || x == 4) {
                el.style.opacity = 0.35;
            } else {
                el.style.opacity = 0.25;
            }
        });
    });
}

function createPortalGlowGrid(x) {
    let squares = (Math.pow(x, 2))/2;
    for (let i = 0; i < squares; i++) {
        let grid = document.createElement('div');
        portalGlow.appendChild(grid);
        grid.className = "brightness";
    }
    portalGlow.style['grid-template-columns'] = `repeat(${x/2}, 1fr)`;
    stylePortalGlowGrid();
}

createPortalGlowGrid(sliderArr[x]);

function stylePortalGlowGrid() {
    let brightness = document.querySelectorAll(".brightness");
    brightness.forEach(el => {
        el.addEventListener('mouseover', (e) => {
            el.style.opacity = 0;
            el.style.visibility = `visible`;
            if (x > 2) {
                el.style.transition = `opacity 0.2s linear`;
            } else {
                el.style.transition = `opacity 0.75s linear`;
            }
        });
        el.addEventListener('mouseout', () => {
            el.style.opacity = 0.6;
            el.style.transition = `visibility 1s 15s, opacity 15s linear`;
        });
    });
}

output.textContent = `${sliderArr[x]} x ${(sliderArr[x])/2}`;

portal.style.width = '400px';
portal.style.height = '800px';
portal.style.top = '-800px';
portalGlow.style.width = '400px';
portalGlow.style.height = '800px';
portalContainer.style.width = '400px';
portalContainer.style.height = '800px';
glowContainer.style.width = '400px';
glowContainer.style.height = '800px';

sizeOutput.textContent = 
`Use this slider to adjust the height and width of portal to your preferred screen size`;

function changeSize() {
    sizeSlider.addEventListener('input', () => {
        portal.style.width = `${sizeSlider.value/2}px`;
        portal.style.height = `${sizeSlider.value}px`;
        portal.style.top = `${0 - sizeSlider.value}px`;
        portalGlow.style.width = `${sizeSlider.value/2}px`;
        portalGlow.style.height = `${sizeSlider.value}px`;
        portalContainer.style.width = `${sizeSlider.value/2}px`;
        portalContainer.style.height = `${sizeSlider.value}px`;
        glowContainer.style.width = `${sizeSlider.value/2}px`;
        glowContainer.style.height = `${sizeSlider.value}px`;
        sizeOutput.textContent = `Height: ${sizeSlider.value}. Please adjust to your screen size`;
    })
}

changeSize();

function changeGrid() {
    gridSlider.addEventListener('input', () => {
        x = gridSlider.value;
        output.textContent = `${sliderArr[x]} x ${(sliderArr[x])/2}`;
    });
} 

changeGrid();

function reset() {
    while (portal.firstChild) {
        portal.removeChild(portal.lastChild);
    }
    while (portalGlow.firstChild) {
        portalGlow.removeChild(portalGlow.lastChild);
    }
    createPortalGrid(sliderArr[x]);
    createPortalGlowGrid(sliderArr[x]);
}

gridSlider.addEventListener('input', () => {
    reset();
});

portalConcept.textContent =
`Portal is an ineractive, glowing work of art created by Hasib Hashemi 
 and Adeeb Djaward of WizardsRobbingKids. The piece itself was created
 using epoxy resin and is actually two different images with a two way
 mirror in-between. Depending on the time of day, a different image is
 shown.`

project.textContent = 
`Using scans of the original art piece, I adapted this Javascript 
 etch-a-sketch project into a demonstration of the piece itself. 
 Use the above slider to adjust the grid size or to reset.`

portalExplain.textContent =
 `This slider represents the lighting and adjust the opacity of the image 
 to reveal the image below. You'll notice the sketch effect changes as 
 the opacity is adjusted. Under 50% and the etch-a-sketch will change completely.
 Depending on the light, you beginlmao to see both images simultaneously.`

lightExplain.textContent = 
 `During the day, portal is a mirror with a 3D pattern transparently
 oil painted over the top of it. The primary colors are glazed over 
 layers of clear epoxy resin. Holographic film is used in place of 
 paint over one side of the pattern. As light travels through top 
 layers, it bounces off the mirror reflecting a rainbow.
 If the lighting is just right, the viewer can see themselves in the image.`


function changeColor() {
    let colorRange = rangeColor.value;
    let color = `rgb(${colorRange}, ${colorRange}, ${colorRange})`;
    let portalOpacity = colorRange/255;
    let textColor = `rgb(${255 - colorRange}, ${255 - colorRange}, ${255 - colorRange})`;
    document.body.style.backgroundColor = color;
    portal.style.opacity = portalOpacity;
    document.body.style.color = textColor;
    if (colorRange < 128) {
        portal.style.pointerEvents = `none`;
        lightValue.textContent = `Darkness`
        lightExplain.textContent = 
        `At night, the mirror effect disappears and the pattern transforms 
        into a single glowing 3D shape. The glow can be very powerful if 
        charged with enough light. Overtime, the glow will fade and the 
        painting seems to change as the various phosphorescent pigments used
        have different charge and glow durations. The true magic of the piece
        is that light can be used to draw in the piece when it is dim enough.`
    } else {
        portal.style.pointerEvents = `visible`;
        lightValue.textContent = `Daylight`
        lightExplain.textContent = 
        `During the day, portal is a mirror with a 3D pattern transparently
        oil painted over the top of it. The primary colors are glazed over 
        layers of clear epoxy resin. Holographic film is used in place of 
        paint over one side of the pattern. As light travels through top 
        layers, it bounces off the mirror reflecting a rainbow.
        If the lighting is just right, the viewer can see themselves in the image.`
    }
}

rangeColor.addEventListener('input', changeColor);